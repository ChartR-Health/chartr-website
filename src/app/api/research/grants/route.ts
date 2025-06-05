import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { Grant, GrantCollection } from '@/models/Grant';
import { ObjectId } from 'mongodb';

// Sample grants for demo
const sampleGrants: Grant[] = [
  {
    _id: new ObjectId(),
    title: "AI in Healthcare: Clinical Decision Support Systems",
    agency: "National Institutes of Health (NIH)",
    program: "NIBIB - Biomedical Imaging and Engineering",
    fundingAmount: {
      min: 750000,
      max: 1500000,
      typical: 1000000
    },
    deadline: new Date('2024-03-15'),
    description: "This program seeks to support the development of artificial intelligence and machine learning technologies that can enhance clinical decision-making in healthcare settings. Projects should focus on developing, validating, and implementing AI systems that can improve patient outcomes, reduce medical errors, and enhance efficiency in clinical workflows.",
    keywords: ["artificial intelligence", "clinical decision support", "healthcare AI", "machine learning", "clinical workflows"],
    eligibility: {
      institutions: ["Universities", "Academic Medical Centers", "Research Hospitals"],
      careerStage: ["Junior Faculty", "Senior Faculty", "Principal Investigator"],
      citizenshipRequired: true,
      geographicRestrictions: ["United States"]
    },
    
    aiAnalysis: {
      matchScore: 94.8,
      reasoning: [
        "Perfect alignment with AI in healthcare research",
        "Excellent funding range for comprehensive project",
        "Keywords match research interests closely",
        "Institution type is compatible"
      ],
      relevantKeywords: ["artificial intelligence", "clinical decision support", "healthcare AI"],
      confidence: 96.2,
      lastAnalyzed: new Date('2024-01-15')
    },

    requirements: {
      preApplicationRequired: true,
      letterOfIntent: true,
      collaboratorRequired: false,
      institutionalSupport: true,
      costSharing: false,
      maxPages: 25,
      requiredSections: ["Specific Aims", "Research Strategy", "Personnel", "Budget", "Timeline"]
    },

    timeline: {
      announcementDate: new Date('2023-12-01'),
      deadlineDate: new Date('2024-03-15'),
      awardNotificationDate: new Date('2024-07-01'),
      projectStartDate: new Date('2024-09-01'),
      projectDuration: "3 years"
    },

    contact: {
      programOfficer: "Dr. Jennifer Martinez",
      email: "jennifer.martinez@nih.gov",
      phone: "(301) 496-8859"
    },

    source: "NIH",
    url: "https://grants.nih.gov/grants/guide/rfa/RFA-EB-24-001.html",
    cfda: "47.041",
    lastUpdated: new Date('2024-01-10'),
    isActive: true,
    bookmarked: true,
    
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2024-01-10')
  },
  {
    _id: new ObjectId(),
    title: "Machine Learning for Precision Medicine",
    agency: "National Science Foundation (NSF)",
    program: "Computer and Information Science and Engineering",
    fundingAmount: {
      min: 500000,
      max: 800000,
      typical: 650000
    },
    deadline: new Date('2024-02-28'),
    description: "This solicitation seeks proposals that advance the state-of-the-art in machine learning techniques specifically applied to precision medicine. Areas of interest include predictive modeling for treatment outcomes, personalized therapy recommendations, and biomarker discovery using AI/ML approaches.",
    keywords: ["machine learning", "precision medicine", "predictive modeling", "biomarkers", "personalized therapy"],
    eligibility: {
      institutions: ["Universities", "Non-profit Research Organizations"],
      careerStage: ["Assistant Professor", "Associate Professor", "Professor"],
      citizenshipRequired: false,
      geographicRestrictions: []
    },
    
    aiAnalysis: {
      matchScore: 87.3,
      reasoning: [
        "Strong match for ML in medical applications",
        "Good funding amount for early-career researchers",
        "No citizenship restrictions - accessible to all",
        "Timeline aligns well with academic calendar"
      ],
      relevantKeywords: ["machine learning", "precision medicine", "predictive modeling"],
      confidence: 89.1,
      lastAnalyzed: new Date('2024-01-15')
    },

    requirements: {
      preApplicationRequired: false,
      letterOfIntent: false,
      collaboratorRequired: true,
      institutionalSupport: false,
      costSharing: true,
      maxPages: 15,
      requiredSections: ["Project Summary", "Technical Approach", "Evaluation Plan", "Team Qualifications"]
    },

    timeline: {
      announcementDate: new Date('2023-11-15'),
      deadlineDate: new Date('2024-02-28'),
      awardNotificationDate: new Date('2024-05-15'),
      projectStartDate: new Date('2024-08-01'),
      projectDuration: "2 years"
    },

    contact: {
      programOfficer: "Dr. Michael Chen",
      email: "mchen@nsf.gov",
      phone: "(703) 292-8930"
    },

    source: "NSF",
    url: "https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=505633",
    lastUpdated: new Date('2024-01-08'),
    isActive: true,
    
    createdAt: new Date('2023-11-15'),
    updatedAt: new Date('2024-01-08')
  },
  {
    _id: new ObjectId(),
    title: "Digital Health Innovation Challenge",
    agency: "Department of Health and Human Services",
    program: "Office of the Assistant Secretary for Health",
    fundingAmount: {
      min: 250000,
      max: 500000,
      typical: 375000
    },
    deadline: new Date('2024-04-30'),
    description: "This challenge seeks innovative digital health solutions that can address healthcare disparities and improve access to care. Proposals should demonstrate how technology can be leveraged to reach underserved populations and provide equitable healthcare solutions.",
    keywords: ["digital health", "healthcare disparities", "health equity", "technology access", "underserved populations"],
    eligibility: {
      institutions: ["Universities", "Hospitals", "Healthcare Organizations", "Tech Companies"],
      careerStage: ["Any"],
      citizenshipRequired: true,
      geographicRestrictions: ["United States"]
    },
    
    aiAnalysis: {
      matchScore: 72.6,
      reasoning: [
        "Moderate alignment with digital health interests",
        "Focus on equity may not match core AI research",
        "Smaller funding amount limits project scope",
        "Good opportunity for pilot studies"
      ],
      relevantKeywords: ["digital health", "technology access"],
      confidence: 78.4,
      lastAnalyzed: new Date('2024-01-15')
    },

    requirements: {
      preApplicationRequired: false,
      letterOfIntent: false,
      collaboratorRequired: true,
      institutionalSupport: true,
      costSharing: false,
      maxPages: 20,
      requiredSections: ["Innovation Description", "Impact Assessment", "Implementation Plan", "Sustainability"]
    },

    timeline: {
      announcementDate: new Date('2024-01-01'),
      deadlineDate: new Date('2024-04-30'),
      awardNotificationDate: new Date('2024-06-30'),
      projectStartDate: new Date('2024-08-01'),
      projectDuration: "18 months"
    },

    contact: {
      programOfficer: "Dr. Lisa Thompson",
      email: "lisa.thompson@hhs.gov",
      phone: "(202) 205-8928"
    },

    source: "HHS",
    url: "https://www.hhs.gov/about/agencies/ash/index.html",
    lastUpdated: new Date('2024-01-05'),
    isActive: true,
    
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-05')
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const agency = searchParams.get('agency');
    const minAmount = searchParams.get('minAmount');
    const maxAmount = searchParams.get('maxAmount');
    const keywords = searchParams.get('keywords');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // For demo purposes, return sample data
    let filteredGrants = sampleGrants;
    
    if (agency) {
      filteredGrants = filteredGrants.filter(grant => 
        grant.agency.toLowerCase().includes(agency.toLowerCase())
      );
    }
    
    if (minAmount) {
      const min = parseInt(minAmount);
      filteredGrants = filteredGrants.filter(grant => 
        (grant.fundingAmount.max || grant.fundingAmount.typical || 0) >= min
      );
    }
    
    if (maxAmount) {
      const max = parseInt(maxAmount);
      filteredGrants = filteredGrants.filter(grant => 
        (grant.fundingAmount.min || grant.fundingAmount.typical || 0) <= max
      );
    }
    
    if (keywords) {
      const searchKeywords = keywords.toLowerCase().split(',').map(k => k.trim());
      filteredGrants = filteredGrants.filter(grant => 
        searchKeywords.some(keyword => 
          grant.keywords.some(grantKeyword => 
            grantKeyword.toLowerCase().includes(keyword)
          ) ||
          grant.title.toLowerCase().includes(keyword) ||
          grant.description.toLowerCase().includes(keyword)
        )
      );
    }
    
    // Sort by match score (highest first)
    filteredGrants = filteredGrants.sort((a, b) => b.aiAnalysis.matchScore - a.aiAnalysis.matchScore);
    
    const paginatedGrants = filteredGrants.slice(0, limit);
    
    // Calculate summary statistics
    const summary = {
      totalGrants: filteredGrants.length,
      averageMatchScore: filteredGrants.reduce((sum, grant) => sum + grant.aiAnalysis.matchScore, 0) / filteredGrants.length,
      totalFunding: filteredGrants.reduce((sum, grant) => sum + (grant.fundingAmount.typical || 0), 0),
      agencies: Array.from(new Set(filteredGrants.map(grant => grant.agency))),
      upcomingDeadlines: filteredGrants.filter(grant => 
        new Date(grant.deadline) > new Date() && 
        new Date(grant.deadline) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Next 30 days
      ).length,
      bookmarkedCount: filteredGrants.filter(grant => grant.bookmarked).length
    };
    
    return NextResponse.json({
      grants: paginatedGrants,
      total: filteredGrants.length,
      summary
    });
  } catch (error) {
    console.error('Error fetching grants:', error);
    return NextResponse.json(
      { error: 'Failed to fetch grants' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { grantId, action, data } = body;
    
    if (action === 'bookmark') {
      // Simulate bookmarking a grant
      return NextResponse.json({
        success: true,
        message: 'Grant bookmarked successfully',
        grant: {
          ...sampleGrants[0],
          bookmarked: true
        }
      });
    }
    
    if (action === 'apply') {
      // Simulate applying to a grant
      return NextResponse.json({
        success: true,
        message: 'Application initiated',
        application: {
          grantId,
          status: 'draft',
          startedAt: new Date(),
          deadline: sampleGrants.find(g => g._id?.toString() === grantId)?.deadline,
          requiredSections: sampleGrants.find(g => g._id?.toString() === grantId)?.requirements.requiredSections || []
        }
      });
    }
    
    if (action === 'analyze') {
      // Simulate AI re-analysis of grant match
      return NextResponse.json({
        success: true,
        message: 'Grant analysis updated',
        analysis: {
          matchScore: 85 + Math.random() * 15,
          confidence: 80 + Math.random() * 20,
          reasoning: [
            "Updated analysis based on latest research profile",
            "Improved keyword matching algorithm applied",
            "Recent publications considered in matching"
          ],
          lastAnalyzed: new Date()
        }
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error processing grant action:', error);
    return NextResponse.json(
      { error: 'Failed to process grant action' },
      { status: 500 }
    );
  }
} 