'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, Sparkles, Brain, ArrowRight, FileText, BarChart3, Users, Search, CheckCircle, Clock, AlertTriangle, BookOpen, Target, Filter, Download, Eye, X, Check } from 'lucide-react'

// Demo Article Interface
interface DemoArticle {
  _id: string
  title: string
  authors: string[]
  journal: string
  year: number
  abstract: string
  fullText?: string
  relevanceScore: number
  status: 'included' | 'excluded' | 'pending' | 'needs-review'
  tags: string[]
  aiDecision?: 'Include' | 'Exclude' | 'Uncertain'
  aiReasoning?: string
  humanDecision?: 'Include' | 'Exclude' | 'Maybe'
  humanReasoning?: string
  includeCriteria?: string[]
  excludeCriteria?: string[]
}

interface SearchQuery {
  query: string
  databases: string[]
  dateRange: { start: number; end: number }
  studyTypes: string[]
}

interface LiteratureDemoProps {
  initialArticles?: DemoArticle[]
}

export default function LiteratureDemo({ initialArticles }: LiteratureDemoProps) {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    query: 'AI applications in clinical decision support systems',
    databases: ['PubMed', 'Cochrane', 'EMBASE'],
    dateRange: { start: 2020, end: 2024 },
    studyTypes: ['RCT', 'Systematic Review', 'Meta-Analysis']
  })
  
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<DemoArticle[]>([])
  const [selectedArticle, setSelectedArticle] = useState<DemoArticle | null>(null)
  const [aiProcessingStep, setAiProcessingStep] = useState(0)
  const [showAiAnimation, setShowAiAnimation] = useState(false)
  const [screeningStep, setScreeningStep] = useState(0)
  const [showScreeningAnimation, setShowScreeningAnimation] = useState(false)
  const [isDemoVisible, setIsDemoVisible] = useState(false)
  const [isFullTextView, setIsFullTextView] = useState(false)
  const [humanDecision, setHumanDecision] = useState<'Include' | 'Exclude' | 'Maybe' | null>(null)
  const [humanReasoning, setHumanReasoning] = useState('')

  const mockArticles: DemoArticle[] = [
    {
      _id: '1',
      title: 'Machine Learning Applications in Clinical Decision Support: A Systematic Review and Meta-Analysis',
      authors: ['Johnson, M.D.', 'Smith, R.N.', 'Chen, L.', 'Rodriguez, A.'],
      journal: 'Journal of Medical Internet Research',
      year: 2023,
      abstract: 'Background: Machine learning (ML) has shown promising results in healthcare applications, particularly in clinical decision support systems (CDSS). However, the effectiveness and implementation challenges remain unclear across different healthcare settings. Objective: To systematically review and meta-analyze the effectiveness of ML-based CDSS in improving clinical outcomes and decision-making accuracy. Methods: We searched PubMed, Cochrane Library, and EMBASE from 2018 to 2023 for randomized controlled trials and observational studies evaluating ML-based CDSS. Studies were included if they reported clinical outcomes, decision accuracy, or physician acceptance rates. Results: Our analysis included 45 studies with 12,847 patients. ML-based CDSS showed significant improvement in diagnostic accuracy (OR 1.67, 95% CI 1.34-2.08, p<0.001) and reduced diagnostic errors by 23% compared to traditional approaches. Physician acceptance was high (82%) when systems provided explainable recommendations. Conclusions: ML-based CDSS demonstrate significant potential for improving clinical decision-making, with highest effectiveness in diagnostic support and risk prediction tasks.',
      fullText: `# Machine Learning Applications in Clinical Decision Support: A Systematic Review and Meta-Analysis

## Abstract
Background: Machine learning (ML) has shown promising results in healthcare applications, particularly in clinical decision support systems (CDSS). However, the effectiveness and implementation challenges remain unclear across different healthcare settings.

Objective: To systematically review and meta-analyze the effectiveness of ML-based CDSS in improving clinical outcomes and decision-making accuracy.

Methods: We searched PubMed, Cochrane Library, and EMBASE from 2018 to 2023 for randomized controlled trials and observational studies evaluating ML-based CDSS.

## Introduction
Clinical decision support systems have evolved significantly with the integration of machine learning technologies. These systems promise to enhance diagnostic accuracy, reduce medical errors, and improve patient outcomes through intelligent data analysis and pattern recognition.

## Methods
### Search Strategy
We conducted a comprehensive search of electronic databases including PubMed, Cochrane Library, EMBASE, and IEEE Xplore from January 2018 to December 2023.

### Inclusion Criteria
- Randomized controlled trials or observational studies
- Studies evaluating ML-based clinical decision support systems
- Reported clinical outcomes or decision accuracy metrics
- Published in peer-reviewed journals

### Exclusion Criteria
- Conference abstracts or non-peer reviewed publications
- Studies without control groups
- Purely technical papers without clinical validation

## Results
Our systematic search identified 2,847 potentially relevant articles. After screening and full-text review, 45 studies met our inclusion criteria, encompassing 12,847 patients across diverse clinical settings.

### Primary Outcomes
ML-based CDSS demonstrated significant improvements in:
- Diagnostic accuracy: OR 1.67 (95% CI 1.34-2.08, p<0.001)
- Error reduction: 23% decrease in diagnostic errors
- Time to diagnosis: 18% reduction in median time

### Secondary Outcomes
- Physician satisfaction: 82% acceptance rate
- System usability scores: Mean 4.2/5.0
- Cost-effectiveness: $2,400 average savings per case

## Discussion
The evidence supports the effectiveness of ML-based CDSS in clinical practice, with particular strengths in diagnostic support and risk stratification. However, implementation challenges including system integration, workflow disruption, and physician training remain significant barriers.

## Limitations
This study has several limitations including heterogeneity in study designs, variation in ML algorithms evaluated, and limited long-term follow-up data.

## Conclusions
ML-based clinical decision support systems show significant promise for improving healthcare delivery. Successful implementation requires careful attention to workflow integration, physician training, and system explainability.`,
      relevanceScore: 95,
      status: 'needs-review',
      tags: ['machine learning', 'clinical decision support', 'systematic review', 'meta-analysis'],
      aiDecision: 'Include',
      aiReasoning: 'High-quality systematic review and meta-analysis directly addressing ML applications in clinical decision support. Large sample size (n=12,847), comprehensive methodology, and significant findings make this highly relevant to our research question.',
      includeCriteria: [
        'Systematic review or meta-analysis design',
        'Focus on machine learning in healthcare',
        'Clinical outcomes reported',
        'Published in peer-reviewed journal',
        'Sample size > 1000 patients'
      ],
      excludeCriteria: [
        'Conference abstracts only',
        'Non-clinical validation',
        'Purely technical focus',
        'No control group comparison'
      ]
    },
    {
      _id: '2',
      title: 'Artificial Intelligence in Healthcare: Implementation Challenges and Opportunities',
      authors: ['Park, K.', 'Williams, D.M.', 'Thompson, S.'],
      journal: 'Nature Medicine',
      year: 2023,
      abstract: 'The integration of artificial intelligence (AI) in healthcare systems presents unprecedented opportunities for improving patient care and operational efficiency. This comprehensive review examines current AI implementations across various healthcare domains, identifies key challenges, and proposes strategies for successful adoption. We analyzed 127 AI healthcare projects across 15 countries, finding that successful implementations share common factors including physician engagement, robust data infrastructure, and regulatory compliance.',
      relevanceScore: 88,
      status: 'pending',
      tags: ['artificial intelligence', 'healthcare implementation', 'challenges', 'opportunities'],
      aiDecision: 'Include',
      aiReasoning: 'Comprehensive review of AI implementation in healthcare with large-scale analysis. Relevant to understanding practical applications and challenges in clinical AI systems.'
    },
    {
      _id: '3',
      title: 'Deep Learning Models for Retinal Image Classification: A Validation Study',
      authors: ['Lee, H.', 'Davis, J.', 'Kumar, S.'],
      journal: 'Ophthalmology Research',
      year: 2022,
      abstract: 'Purpose: To evaluate deep learning models for automated retinal image classification in diabetic retinopathy screening. This study focused specifically on CNN architectures for detecting diabetic retinopathy severity levels in fundus photographs from a single ophthalmology clinic.',
      relevanceScore: 45,
      status: 'excluded',
      tags: ['deep learning', 'retinal imaging', 'diabetic retinopathy'],
      aiDecision: 'Exclude',
      aiReasoning: 'While this study involves machine learning in healthcare, it focuses specifically on retinal image classification rather than broader clinical decision support systems. The scope is too narrow for our systematic review.'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsDemoVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const container = document.getElementById('literature-demo-section')
    if (container) {
      observer.observe(container)
    }

    return () => {
      if (container) {
        observer.unobserve(container)
      }
    }
  }, [])

  useEffect(() => {
    if (isDemoVisible && searchResults.length === 0) {
      // Fetch from API
      const fetchDocuments = async () => {
        try {
          const response = await fetch('/api/literature/documents?limit=10');
          const data = await response.json();
          if (data.documents && data.documents.length > 0) {
            // Transform API data to match our interface
            const transformedDocs = data.documents.map((doc: any) => ({
              _id: doc._id,
              title: doc.title,
              authors: doc.authors,
              journal: doc.journal || 'Unknown Journal',
              year: new Date(doc.publicationDate || '2023').getFullYear(),
              abstract: doc.abstract,
              fullText: doc.fullText || doc.abstract,
              relevanceScore: doc.aiAnalysis?.relevanceScore || 0,
              status: doc.status === 'complete' ? 'included' : 
                     doc.status === 'ai-complete' && doc.aiAnalysis?.inclusion === 'exclude' ? 'excluded' :
                     doc.status === 'human-review' ? 'needs-review' : 'pending',
              tags: doc.keywords || [],
              aiDecision: doc.aiAnalysis?.inclusion === 'include' ? 'Include' : 
                         doc.aiAnalysis?.inclusion === 'exclude' ? 'Exclude' : 'Uncertain',
              aiReasoning: doc.aiAnalysis?.reasoning || '',
              humanDecision: doc.humanReview?.decision === 'include' ? 'Include' :
                           doc.humanReview?.decision === 'exclude' ? 'Exclude' : 'Maybe',
              humanReasoning: doc.humanReview?.notes || '',
              includeCriteria: [
                'Systematic review or meta-analysis design',
                'Focus on AI/ML in healthcare',
                'Clinical outcomes reported',
                'Published in peer-reviewed journal'
              ],
              excludeCriteria: [
                'Conference abstracts only',
                'Non-clinical validation',
                'Purely technical focus'
              ]
            }));
            setSearchResults(transformedDocs);
          } else {
            setSearchResults(mockArticles);
          }
        } catch (error) {
          console.error('Error fetching documents:', error);
          setSearchResults(mockArticles);
        }
      };
      
      fetchDocuments();
    }
  }, [isDemoVisible])

  const runAiScreening = async () => {
    setShowAiAnimation(true)
    setAiProcessingStep(1)

    setTimeout(() => {
      setAiProcessingStep(2)
      setTimeout(() => {
        setAiProcessingStep(3)
        setTimeout(() => {
          setAiProcessingStep(4)
          setTimeout(() => {
            setShowAiAnimation(false)
            setAiProcessingStep(0)
          }, 1000)
        }, 1500)
      }, 1500)
    }, 1500)
  }

  const runFullTextScreening = async () => {
    setShowScreeningAnimation(true)
    setScreeningStep(1)

    setTimeout(() => {
      setScreeningStep(2)
      setTimeout(() => {
        setScreeningStep(3)
        setTimeout(() => {
          setShowScreeningAnimation(false)
          setScreeningStep(0)
        }, 1000)
      }, 1500)
    }, 1500)
  }

  const handleSearch = async () => {
    setIsSearching(true)
    setSearchResults([])
    
    setTimeout(() => {
      setSearchResults(mockArticles)
      setIsSearching(false)
    }, 2000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'included':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'excluded':
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      case 'pending':
        return <Clock className="w-4 h-4 text-blue-500" />
      case 'needs-review':
        return <FileText className="w-4 h-4 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'included':
        return 'text-green-700 bg-green-50 border-green-200'
      case 'excluded':
        return 'text-red-700 bg-red-50 border-red-200'
      case 'pending':
        return 'text-blue-700 bg-blue-50 border-blue-200'
      case 'needs-review':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200'
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200'
    }
  }

  const submitHumanDecision = () => {
    if (selectedArticle && humanDecision && humanReasoning.trim()) {
      setSelectedArticle({
        ...selectedArticle,
        humanDecision,
        humanReasoning,
        status: humanDecision === 'Include' ? 'included' : humanDecision === 'Exclude' ? 'excluded' : 'needs-review'
      })
      setIsFullTextView(false)
      setHumanDecision(null)
      setHumanReasoning('')
    }
  }

  return (
    <section id="literature-demo-section" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 rounded-full px-4 py-2">
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Literature Review AI</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            ChartR Literature - Interactive Demo
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Experience our AI-powered systematic literature review platform. Watch as AI screens thousands of papers in seconds, 
            then see the human-AI collaboration in action with full-text screening.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search & Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2 text-blue-600" />
                  Literature Search
                </CardTitle>
                <CardDescription>
                  AI-powered search across multiple medical databases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Research Question</label>
                  <Textarea
                    value={searchQuery.query}
                    onChange={(e) => setSearchQuery(prev => ({ ...prev, query: e.target.value }))}
                    placeholder="Enter your systematic review question..."
                    className="resize-none"
                    rows={2}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Databases</label>
                    <div className="space-y-1">
                      {searchQuery.databases.map(db => (
                        <Badge key={db} variant="outline" className="mr-1">{db}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date Range</label>
                    <div className="text-sm text-slate-600">
                      {searchQuery.dateRange.start} - {searchQuery.dateRange.end}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSearch} disabled={isSearching} className="w-full">
                  {isSearching ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Run Literature Search
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-green-600" />
                      Search Results ({searchResults.length} articles)
                    </span>
                    <Button onClick={runAiScreening} variant="outline" size="sm">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Run AI Screening
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {searchResults.map((article) => (
                      <div key={article._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-sm line-clamp-2">{article.title}</h3>
                          <div className="flex items-center space-x-2 ml-4">
                            <Badge className={getStatusColor(article.status)}>
                              {getStatusIcon(article.status)}
                              <span className="ml-1 capitalize">{article.status.replace('-', ' ')}</span>
                            </Badge>
                            <Badge variant="outline">
                              {article.relevanceScore}%
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="text-xs text-slate-600 mb-2">
                          {article.authors.slice(0, 3).join(', ')} {article.authors.length > 3 && '...'} • {article.journal} • {article.year}
                        </div>
                        
                        <p className="text-sm text-slate-700 line-clamp-2 mb-3">
                          {article.abstract}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex flex-wrap gap-1">
                            {article.tags.slice(0, 3).map(tag => (
                              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                            ))}
                          </div>
                          <Button 
                            onClick={() => {
                              setSelectedArticle(article)
                              setIsFullTextView(true)
                            }}
                            variant="outline" 
                            size="sm"
                          >
                            <Eye className="mr-1 h-3 w-3" />
                            Full Text Review
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* AI Process Panel */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-600" />
                  AI Screening Process
                </CardTitle>
                <CardDescription>
                  Real-time AI analysis and decision-making
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className={`flex items-center ${aiProcessingStep >= 1 ? 'text-purple-600' : 'text-gray-500'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 border-2 ${aiProcessingStep >= 1 ? 'border-purple-600 bg-purple-50' : 'border-gray-300'}`}>
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Abstract Analysis</h4>
                      <p className="text-xs text-gray-600">AI reads and understands content</p>
                    </div>
                    {aiProcessingStep === 1 && <Loader2 className="ml-auto h-4 w-4 animate-spin" />}
                    {aiProcessingStep > 1 && <Badge variant="outline" className="ml-auto">✓</Badge>}
                  </div>
                  
                  <div className={`flex items-center ${aiProcessingStep >= 2 ? 'text-purple-600' : 'text-gray-500'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 border-2 ${aiProcessingStep >= 2 ? 'border-purple-600 bg-purple-50' : 'border-gray-300'}`}>
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Relevance Scoring</h4>
                      <p className="text-xs text-gray-600">Calculates relevance to research question</p>
                    </div>
                    {aiProcessingStep === 2 && <Loader2 className="ml-auto h-4 w-4 animate-spin" />}
                    {aiProcessingStep > 2 && <Badge variant="outline" className="ml-auto">✓</Badge>}
                  </div>
                  
                  <div className={`flex items-center ${aiProcessingStep >= 3 ? 'text-purple-600' : 'text-gray-500'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 border-2 ${aiProcessingStep >= 3 ? 'border-purple-600 bg-purple-50' : 'border-gray-300'}`}>
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Inclusion Decision</h4>
                      <p className="text-xs text-gray-600">AI recommendation with reasoning</p>
                    </div>
                    {aiProcessingStep === 3 && <Loader2 className="ml-auto h-4 w-4 animate-spin" />}
                    {aiProcessingStep > 3 && <Badge variant="outline" className="ml-auto">✓</Badge>}
                  </div>
                  
                  <div className={`flex items-center ${aiProcessingStep >= 4 ? 'text-purple-600' : 'text-gray-500'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 border-2 ${aiProcessingStep >= 4 ? 'border-purple-600 bg-purple-50' : 'border-gray-300'}`}>
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Human Review Queue</h4>
                      <p className="text-xs text-gray-600">Ready for expert validation</p>
                    </div>
                    {aiProcessingStep === 4 && <Loader2 className="ml-auto h-4 w-4 animate-spin" />}
                    {aiProcessingStep > 4 && <Badge variant="outline" className="ml-auto">✓</Badge>}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Screening Speed</span>
                    <span className="font-bold text-blue-600">1,000 papers/min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">AI Accuracy</span>
                    <span className="font-bold text-green-600">94.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Time Savings</span>
                    <span className="font-bold text-purple-600">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Inter-rater Agreement</span>
                    <span className="font-bold text-indigo-600">κ = 0.89</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Text Screening Modal */}
        {isFullTextView && selectedArticle && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-bold">Full Text Screening</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsFullTextView(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-h-[calc(90vh-140px)] overflow-y-auto">
                {/* Article Content */}
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{selectedArticle.title}</CardTitle>
                      <CardDescription>
                        {selectedArticle.authors.join(', ')} • {selectedArticle.journal} • {selectedArticle.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="abstract" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="abstract">Abstract</TabsTrigger>
                          <TabsTrigger value="fulltext">Full Text</TabsTrigger>
                        </TabsList>
                        <TabsContent value="abstract" className="mt-4">
                          <div className="prose prose-sm max-w-none">
                            <p>{selectedArticle.abstract}</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="fulltext" className="mt-4">
                          <div className="prose prose-sm max-w-none text-sm max-h-96 overflow-y-auto">
                            {selectedArticle.fullText?.split('\n').map((line, index) => (
                              <p key={index} className="mb-2">{line}</p>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>

                {/* Screening Interface */}
                <div className="space-y-4">
                  {/* AI Decision */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Brain className="w-5 h-5 mr-2 text-purple-600" />
                        AI Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">AI Decision:</span>
                          <Badge className={selectedArticle.aiDecision === 'Include' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                            {selectedArticle.aiDecision}
                          </Badge>
                        </div>
                        <div>
                          <span className="text-sm font-medium">AI Reasoning:</span>
                          <p className="text-sm text-slate-600 mt-1">{selectedArticle.aiReasoning}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Include/Exclude Criteria */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Study Criteria</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="include" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="include">Include</TabsTrigger>
                          <TabsTrigger value="exclude">Exclude</TabsTrigger>
                        </TabsList>
                        <TabsContent value="include" className="mt-4">
                          <ul className="space-y-1">
                            {selectedArticle.includeCriteria?.map((criteria, index) => (
                              <li key={index} className="text-sm flex items-start">
                                <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {criteria}
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="exclude" className="mt-4">
                          <ul className="space-y-1">
                            {selectedArticle.excludeCriteria?.map((criteria, index) => (
                              <li key={index} className="text-sm flex items-start">
                                <X className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                {criteria}
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  {/* Human Decision */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Users className="w-5 h-5 mr-2 text-blue-600" />
                        Your Decision
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Decision</label>
                        <Select value={humanDecision || ''} onValueChange={(value: 'Include' | 'Exclude' | 'Maybe') => setHumanDecision(value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Make your decision" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Include">Include</SelectItem>
                            <SelectItem value="Exclude">Exclude</SelectItem>
                            <SelectItem value="Maybe">Uncertain - Flag for Discussion</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Reasoning</label>
                        <Textarea
                          value={humanReasoning}
                          onChange={(e) => setHumanReasoning(e.target.value)}
                          placeholder="Explain your decision..."
                          className="min-h-[100px] resize-none"
                        />
                      </div>
                      
                      <Button 
                        onClick={submitHumanDecision}
                        disabled={!humanDecision || !humanReasoning.trim()}
                        className="w-full"
                      >
                        Submit Decision
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}