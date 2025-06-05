import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface ClinicalData {
  patientId: string
  demographics: {
    age: number
    gender: string
    ethnicity: string
  }
  vitals: {
    heartRate: number
    bloodPressure: { systolic: number; diastolic: number }
    temperature: number
    respiratoryRate: number
  }
  labs: {
    hemoglobin: number
    whiteBloodCells: number
    platelets: number
    creatinine: number
  }
  medications: string[]
  diagnosis: string[]
}

export async function POST(request: NextRequest) {
  try {
    const data: ClinicalData = await request.json()
    
    // Use OpenAI to analyze the clinical data
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a clinical data analyst. Analyze the provided patient data and provide insights about potential risk factors, care recommendations, and quality indicators. Always include appropriate medical disclaimers."
        },
        {
          role: "user",
          content: `Analyze this clinical data and provide:
          1. Risk assessment summary
          2. Key quality indicators
          3. Potential care optimization opportunities
          4. Compliance considerations
          
          Patient Data: ${JSON.stringify(data, null, 2)}
          
          Note: This is for demonstration purposes only and should not be used for actual clinical decision-making.`
        }
      ],
      max_tokens: 600,
      temperature: 0.2
    })

    const analysis = completion.choices[0]?.message?.content || 'No analysis generated'

    // Generate mock quality scores
    const qualityMetrics = {
      dataCompleteness: Math.floor(Math.random() * 20) + 80, // 80-100%
      clinicalAccuracy: Math.floor(Math.random() * 15) + 85, // 85-100%
      complianceScore: Math.floor(Math.random() * 10) + 90, // 90-100%
      riskStratification: data.vitals.heartRate > 100 || data.vitals.bloodPressure.systolic > 140 ? 'High' : 'Low'
    }

    // Generate sample recommendations
    const recommendations = [
      {
        priority: 'High',
        category: 'Vital Signs',
        description: data.vitals.heartRate > 100 ? 'Elevated heart rate detected - consider cardiac evaluation' : 'Vital signs within normal limits',
        action: 'Monitor closely'
      },
      {
        priority: 'Medium',
        category: 'Laboratory',
        description: data.labs.creatinine > 1.2 ? 'Elevated creatinine - assess renal function' : 'Laboratory values stable',
        action: 'Routine monitoring'
      },
      {
        priority: 'Low',
        category: 'Documentation',
        description: 'Ensure all required fields are documented for compliance',
        action: 'Administrative review'
      }
    ]

    return NextResponse.json({
      analysis,
      qualityMetrics,
      recommendations,
      patientId: data.patientId,
      timestamp: new Date().toISOString(),
      disclaimer: 'This analysis is for demonstration purposes only and should not be used for clinical decision-making.'
    })

  } catch (error) {
    console.error('Clinical analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze clinical data' },
      { status: 500 }
    )
  }
} 