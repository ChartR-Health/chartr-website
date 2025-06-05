import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface SearchQuery {
  query: string
  databases: string[]
  dateRange: { start: number; end: number }
  studyTypes: string[]
}

export async function POST(request: NextRequest) {
  try {
    const searchQuery: SearchQuery = await request.json()
    
    // Simulate literature search results
    const mockResults = [
      {
        id: '1',
        title: 'AI-Assisted Clinical Decision Making: A Systematic Review',
        authors: ['Smith, J.', 'Johnson, A.', 'Brown, K.'],
        journal: 'Journal of Medical AI',
        year: 2024,
        abstract: 'This systematic review examines the current state of AI-assisted clinical decision making tools and their impact on patient outcomes. We analyzed 150 studies across multiple clinical domains.',
        relevanceScore: 0.95,
        status: 'included' as const,
        tags: ['AI', 'Clinical Decision Making', 'Systematic Review']
      },
      {
        id: '2',
        title: 'Machine Learning Applications in Electronic Health Records',
        authors: ['Davis, R.', 'Wilson, M.'],
        journal: 'Healthcare Technology Review',
        year: 2023,
        abstract: 'An analysis of machine learning applications in electronic health record systems, focusing on data quality and clinical workflow integration.',
        relevanceScore: 0.88,
        status: 'needs-review' as const,
        tags: ['Machine Learning', 'EHR', 'Healthcare Technology']
      },
      {
        id: '3',
        title: 'Regulatory Compliance in Medical Device Software',
        authors: ['Taylor, S.', 'Anderson, L.', 'Garcia, M.'],
        journal: 'Regulatory Affairs Journal',
        year: 2024,
        abstract: 'A comprehensive review of regulatory requirements for medical device software, including FDA guidelines and international standards.',
        relevanceScore: 0.82,
        status: 'included' as const,
        tags: ['Regulatory', 'Medical Devices', 'Compliance']
      }
    ]

    // Use OpenAI to generate insights and summaries
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a research assistant specializing in medical literature analysis. Provide concise, accurate summaries and insights."
        },
        {
          role: "user",
          content: `Analyze these literature search results for the query "${searchQuery.query}" and provide:
          1. A brief summary of key themes
          2. Research gaps identified
          3. Quality assessment of the evidence base
          
          Results: ${JSON.stringify(mockResults, null, 2)}`
        }
      ],
      max_tokens: 500,
      temperature: 0.3
    })

    const aiInsights = completion.choices[0]?.message?.content || 'No insights generated'

    return NextResponse.json({
      results: mockResults,
      totalResults: mockResults.length,
      insights: aiInsights,
      searchQuery,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Literature search error:', error)
    return NextResponse.json(
      { error: 'Failed to perform literature search' },
      { status: 500 }
    )
  }
} 