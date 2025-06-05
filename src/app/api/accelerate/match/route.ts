import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface ResearchProfile {
  researchAreas: string[]
  institution: string
  keywords: string[]
  fundingHistory: string[]
  collaborators: string[]
}

export async function POST(request: NextRequest) {
  try {
    const profile: ResearchProfile = await request.json()
    
    // Mock grant opportunities
    const mockGrants = [
      {
        id: 'NIH-R01-2024-001',
        title: 'AI in Clinical Decision Support Systems',
        agency: 'National Institutes of Health',
        program: 'R01',
        amount: '$2,500,000',
        deadline: '2024-03-15',
        description: 'Funding for research on artificial intelligence applications in clinical decision support systems',
        eligibility: ['Academic institutions', 'Medical centers'],
        matchScore: 0.95,
        categories: ['Artificial Intelligence', 'Clinical Research', 'Healthcare Technology']
      },
      {
        id: 'NSF-CAREER-2024-002',
        title: 'Machine Learning for Healthcare Data Analytics',
        agency: 'National Science Foundation',
        program: 'CAREER',
        amount: '$750,000',
        deadline: '2024-04-20',
        description: 'Early career faculty development in machine learning applications for healthcare data',
        eligibility: ['Junior faculty', 'Academic institutions'],
        matchScore: 0.88,
        categories: ['Machine Learning', 'Data Analytics', 'Healthcare']
      },
      {
        id: 'DOD-W81XWH-2024-003',
        title: 'Medical Device Innovation Research',
        agency: 'Department of Defense',
        program: 'CDMRP',
        amount: '$1,800,000',
        deadline: '2024-05-10',
        description: 'Research on innovative medical device technologies for military and civilian applications',
        eligibility: ['Universities', 'Industry partnerships'],
        matchScore: 0.72,
        categories: ['Medical Devices', 'Innovation', 'Technology Transfer']
      }
    ]

    // Use OpenAI to generate personalized matching insights
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a research funding advisor. Analyze the researcher's profile and provide personalized insights about grant opportunities."
        },
        {
          role: "user",
          content: `Based on this researcher profile, provide:
          1. Top 3 strategic recommendations for grant applications
          2. Potential collaboration opportunities
          3. Areas for profile strengthening
          4. Timeline recommendations
          
          Researcher Profile: ${JSON.stringify(profile, null, 2)}
          Available Grants: ${JSON.stringify(mockGrants, null, 2)}`
        }
      ],
      max_tokens: 500,
      temperature: 0.3
    })

    const insights = completion.choices[0]?.message?.content || 'No insights generated'

    // Generate application timeline
    const timeline = [
      {
        phase: 'Preparation',
        duration: '4-6 weeks',
        tasks: ['Literature review', 'Preliminary data collection', 'Budget preparation'],
        deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        phase: 'Writing',
        duration: '6-8 weeks',
        tasks: ['Draft research plan', 'IRB approval', 'Collaboration agreements'],
        deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        phase: 'Review & Submission',
        duration: '2-3 weeks',
        tasks: ['Internal review', 'External feedback', 'Final submission'],
        deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]

    return NextResponse.json({
      matches: mockGrants,
      insights,
      timeline,
      profile,
      totalOpportunities: mockGrants.length,
      recommendedActions: [
        'Focus on high-match grants (>85% match score)',
        'Develop preliminary data for R01 applications',
        'Establish industry partnerships for DOD grants',
        'Consider collaborative applications with other institutions'
      ],
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Grant matching error:', error)
    return NextResponse.json(
      { error: 'Failed to match grants' },
      { status: 500 }
    )
  }
} 