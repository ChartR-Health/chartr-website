import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { Document, DocumentCollection } from '@/models/Document';
import { ObjectId } from 'mongodb';

// Sample documents for demo
const sampleDocuments: Document[] = [
  {
    _id: new ObjectId(),
    title: "Efficacy of AI-Assisted Clinical Decision Making in Cardiac Surgery",
    authors: ["Smith, J.", "Johnson, M.", "Williams, R."],
    abstract: "Background: Artificial intelligence (AI) has emerged as a promising tool for enhancing clinical decision-making in cardiac surgery. This systematic review evaluates the efficacy of AI-assisted clinical decision making compared to traditional methods. Methods: We searched PubMed, Embase, and Cochrane databases for studies published between 2018-2023. Results: AI-assisted decision making showed 23% improvement in surgical outcome prediction accuracy and 18% reduction in post-operative complications. Conclusion: AI assistance significantly improves clinical decision-making in cardiac surgery with high confidence intervals.",
    journal: "Journal of Cardiac Surgery AI",
    publicationDate: "2023-08-15",
    doi: "10.1234/jcsa.2023.0815",
    keywords: ["artificial intelligence", "cardiac surgery", "clinical decision making", "machine learning"],
    aiAnalysis: {
      relevanceScore: 94.7,
      analysisDate: new Date('2024-01-15'),
      inclusion: 'include',
      reasoning: "High relevance to AI in clinical settings. Directly addresses cardiac surgery applications with quantitative outcomes.",
      confidence: 96.2
    },
    humanReview: {
      decision: 'pending',
      reviewer: "Dr. Sarah Chen",
      reviewDate: new Date('2024-01-16'),
      criteria: {
        populationRelevant: true,
        interventionApplicable: true,
        outcomesMeasured: true,
        studyDesignAppropriate: true
      }
    },
    uploadedAt: new Date('2024-01-10'),
    status: 'human-review'
  },
  {
    _id: new ObjectId(),
    title: "Machine Learning Approaches to Predicting Surgical Complications",
    authors: ["Davis, L.", "Brown, K.", "Miller, P."],
    abstract: "Objective: To develop and validate machine learning models for predicting surgical complications in cardiovascular procedures. Methods: Retrospective analysis of 15,847 cardiac procedures using random forest and neural network algorithms. Primary endpoint was 30-day post-operative complications. Results: The ML model achieved 89.3% accuracy in predicting complications with AUC of 0.91. False positive rate was 8.2%. The model identified 12 key risk factors including pre-operative ejection fraction and comorbidity scores.",
    journal: "Nature Digital Medicine",
    publicationDate: "2023-11-22",
    doi: "10.1038/ndm.2023.1122",
    keywords: ["machine learning", "surgical complications", "cardiovascular", "predictive modeling"],
    aiAnalysis: {
      relevanceScore: 91.2,
      analysisDate: new Date('2024-01-15'),
      inclusion: 'include',
      reasoning: "Strong methodological approach with large dataset. Directly relevant to surgical outcome prediction.",
      confidence: 93.8
    },
    uploadedAt: new Date('2024-01-12'),
    status: 'ai-complete'
  },
  {
    _id: new ObjectId(),
    title: "Blockchain Applications in Healthcare Data Management",
    authors: ["Wilson, T.", "Anderson, C."],
    abstract: "This paper explores the potential applications of blockchain technology in managing healthcare data. We discuss the benefits of decentralized data storage, patient privacy, and interoperability between healthcare systems. The study presents a framework for implementing blockchain in clinical settings and addresses the challenges of scalability and energy consumption.",
    journal: "Healthcare Technology Review",
    publicationDate: "2023-09-10",
    doi: "10.1111/htr.2023.0910",
    keywords: ["blockchain", "healthcare data", "privacy", "interoperability"],
    aiAnalysis: {
      relevanceScore: 34.1,
      analysisDate: new Date('2024-01-15'),
      inclusion: 'exclude',
      reasoning: "While healthcare-related, this study focuses on blockchain technology rather than AI-assisted clinical decision making. Does not meet inclusion criteria for AI in clinical practice.",
      confidence: 88.7
    },
    uploadedAt: new Date('2024-01-13'),
    status: 'ai-complete'
  },
  {
    _id: new ObjectId(),
    title: "Deep Learning for Automated ECG Analysis in Emergency Medicine",
    authors: ["Garcia, M.", "Thompson, R.", "Lee, S.", "Martinez, A."],
    abstract: "Background: Emergency departments require rapid and accurate ECG interpretation for timely patient care. This study develops a deep learning system for automated ECG analysis. Methods: We trained a convolutional neural network on 284,000 ECGs from emergency department patients. The model was validated against cardiologist interpretations. Results: The system achieved 97.1% accuracy for detecting acute myocardial infarction and 94.8% for arrhythmia detection. Average interpretation time was reduced from 3.2 minutes to 0.8 seconds.",
    journal: "Emergency Medicine AI",
    publicationDate: "2023-12-05",
    doi: "10.1016/emai.2023.1205",
    keywords: ["deep learning", "ECG analysis", "emergency medicine", "automation"],
    aiAnalysis: {
      relevanceScore: 87.9,
      analysisDate: new Date('2024-01-15'),
      inclusion: 'include',
      reasoning: "Excellent example of AI in emergency clinical decision making. Shows significant time savings and accuracy improvements.",
      confidence: 91.4
    },
    humanReview: {
      decision: 'include',
      reviewer: "Dr. Michael Rodriguez",
      reviewDate: new Date('2024-01-17'),
      notes: "Strong study design with impressive results. Highly relevant to our systematic review scope.",
      criteria: {
        populationRelevant: true,
        interventionApplicable: true,
        outcomesMeasured: true,
        studyDesignAppropriate: true
      }
    },
    uploadedAt: new Date('2024-01-14'),
    status: 'complete'
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // For demo purposes, return sample data
    // In production, this would query the actual database
    let filteredDocuments = sampleDocuments;
    
    if (status) {
      filteredDocuments = sampleDocuments.filter(doc => doc.status === status);
    }
    
    const paginatedDocuments = filteredDocuments.slice(0, limit);
    
    return NextResponse.json({
      documents: paginatedDocuments,
      total: filteredDocuments.length,
      summary: {
        aiComplete: sampleDocuments.filter(d => d.status === 'ai-complete').length,
        humanReview: sampleDocuments.filter(d => d.status === 'human-review').length,
        complete: sampleDocuments.filter(d => d.status === 'complete').length,
        excluded: sampleDocuments.filter(d => d.status === 'ai-complete' && d.aiAnalysis?.inclusion === 'exclude').length,
        averageProcessingTime: "2.3 seconds",
        totalProcessed: sampleDocuments.length
      }
    });
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { documentId, action, reviewData } = body;
    
    // For demo purposes, simulate processing
    if (action === 'human-review') {
      // Simulate human review update
      return NextResponse.json({
        success: true,
        message: 'Human review updated successfully',
        document: {
          ...sampleDocuments[0],
          humanReview: reviewData,
          status: 'complete'
        }
      });
    }
    
    if (action === 'ai-analyze') {
      // Simulate AI analysis
      return NextResponse.json({
        success: true,
        message: 'AI analysis completed',
        analysis: {
          relevanceScore: Math.random() * 100,
          inclusion: Math.random() > 0.3 ? 'include' : 'exclude',
          confidence: 85 + Math.random() * 15,
          reasoning: "AI analysis completed based on study criteria and methodology assessment."
        }
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error processing document action:', error);
    return NextResponse.json(
      { error: 'Failed to process document action' },
      { status: 500 }
    );
  }
} 