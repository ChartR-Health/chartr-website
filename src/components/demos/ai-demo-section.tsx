'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, Brain, ArrowRight, FileText, BarChart3, Users } from 'lucide-react';

// Demo Grant Interface
export interface DemoGrant {
  _id: string;
  projectTitle?: string;
  projectAbstract?: string;
  contactPI?: string;
  organizationName?: string;
  totalCost?: number;
  publicHealthRelevance?: string;
  projectTerms?: string;
  keywords?: string[];
  aiGeneratedSummary?: string;
  matchScore?: number;
  matchReason?: string;
  aiEnhancementRun?: boolean;
}

// Demo Match Interface
interface DemoMatch {
  philanthropist: {
    _id: string;
    name: string;
    description: string;
    interests: string[];
  };
  matchScore: number;
  matchReason: string;
}

interface AIDemoSectionProps {
  initialDemoGrant?: DemoGrant | null;
}

export default function AIDemoSection({ initialDemoGrant }: AIDemoSectionProps) {
  const [demoGrant, setDemoGrant] = useState<DemoGrant | null>(initialDemoGrant || null);
  const [selectedContent, setSelectedContent] = useState<'raw' | 'ai'>('raw');
  const [aiStep, setAiStep] = useState(0);
  const [showAiAnimation, setShowAiAnimation] = useState(false);
  const [aiEnhancementRun, setAiEnhancementRun] = useState(false);
  
  // New state for expanded sections
  const [abstractExpanded, setAbstractExpanded] = useState(false);
  const [relevanceExpanded, setRelevanceExpanded] = useState(false);
  
  // Match analysis states
  const [showMatchAnimation, setShowMatchAnimation] = useState(false);
  const [matchStep, setMatchStep] = useState(0);
  const [matchAnalysisRun, setMatchAnalysisRun] = useState(false);
  const [matches, setMatches] = useState<DemoMatch[]>([]);
  const [matchesLoading, setMatchesLoading] = useState(false);
  const [showMatches, setShowMatches] = useState(false);

  // Mock philanthropist matches for demo
  const mockMatches: DemoMatch[] = [
    {
      philanthropist: {
        _id: "phil-1",
        name: "Gates Foundation",
        description: "Focus on global health and medical research initiatives",
        interests: ["genomics", "cancer research", "computational biology", "global health"]
      },
      matchScore: 92,
      matchReason: "Strong alignment with cancer research goals and computational approaches to genomics"
    },
    {
      philanthropist: {
        _id: "phil-2", 
        name: "Chan Zuckerberg Initiative",
        description: "Supporting science and technology for social good",
        interests: ["biomedical research", "computational tools", "protein analysis", "data science"]
      },
      matchScore: 88,
      matchReason: "Excellent match for computational biology projects with clear translational impact"
    },
    {
      philanthropist: {
        _id: "phil-3",
        name: "Wellcome Trust",
        description: "Global charitable foundation focused on health research",
        interests: ["cancer research", "molecular biology", "drug discovery", "protein interactions"]
      },
      matchScore: 85,
      matchReason: "Direct alignment with protein interaction research and cancer therapeutic development"
    }
  ];

  const runAiDemo = async () => {
    setShowAiAnimation(true);
    setAiStep(1);
    
    setTimeout(() => {
      setAiStep(2);
      setTimeout(() => {
        setAiStep(3);
        setTimeout(() => {
          setShowAiAnimation(false);
          setSelectedContent('ai');
          setAiEnhancementRun(true);
        }, 1000);
      }, 1500);
    }, 1500);
  };
  
  const runMatchAnalysis = async () => {
    if (!demoGrant?._id) return;
    
    setShowMatchAnimation(true);
    setMatchStep(1);
    setShowMatches(false);
    setMatchesLoading(true);
    
    setTimeout(() => {
      setMatchStep(2);
      setTimeout(() => {
        setMatchStep(3);
        setTimeout(() => {
          setMatches(mockMatches);
          setMatchAnalysisRun(true);
          setShowMatches(true);
          setAiStep(4);
          setShowMatchAnimation(false);
          setMatchesLoading(false);
        }, 1000);
      }, 1500);
    }, 1500);
  };

  return (
    <section className="w-full bg-white/80 backdrop-blur-sm border-t border-b border-slate-200/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100/80 text-blue-700 hover:bg-blue-200/80 transition-colors border border-blue-200/30 px-3 py-1 text-sm">
            <Sparkles className="w-4 h-4 mr-1" /> AI-Powered
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">See Our AI in Action</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Experience how our AI transforms complex research grants into concise summaries and identifies perfect matches for collaborators, philanthropists, and students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {demoGrant && (
            <Card className="shadow-lg bg-white/80 backdrop-blur-sm border border-slate-200/30">
              <CardHeader className="border-b border-slate-200/30 bg-slate-50/60 rounded-t-lg">
                <CardTitle className="flex items-center justify-between text-slate-900">
                  <span>Grant Information</span>
                  {showAiAnimation ? (
                    <Badge className="animate-pulse bg-blue-100/80 text-blue-700 border border-blue-200/30">
                      <Loader2 className="w-3.5 h-3.5 mr-1 animate-spin" /> 
                      Processing
                    </Badge>
                  ) : aiEnhancementRun ? (
                    <div className="flex space-x-2">
                      <Tabs defaultValue={selectedContent} value={selectedContent} onValueChange={(value) => setSelectedContent(value as 'raw' | 'ai')}>
                        <TabsList className="h-8 bg-slate-100 border-slate-200">
                          <TabsTrigger value="raw" className="text-xs px-2 py-1 h-7 data-[state=active]:bg-white data-[state=active]:text-slate-900">Original</TabsTrigger>
                          <TabsTrigger value="ai" className="text-xs px-2 py-1 h-7 data-[state=active]:bg-white data-[state=active]:text-slate-900">AI Enhanced</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  ) : null}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                {selectedContent === 'raw' ? (
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">Project Title</h3>
                      <p className="text-slate-600">{demoGrant.projectTitle}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-1">PI & Organization</h4>
                      <p className="text-slate-600">{demoGrant.contactPI} • {demoGrant.organizationName}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-1">Funding</h4>
                      <p className="text-slate-600 font-semibold">${demoGrant.totalCost?.toLocaleString() || 'N/A'}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-1">Project Abstract</h4>
                      <div className="bg-slate-50 p-3 rounded border border-slate-200/30 max-h-40 overflow-y-auto">
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {demoGrant.projectAbstract}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-1">Public Health Relevance</h4>
                      <div className="bg-slate-50 p-3 rounded border border-slate-200/30 max-h-32 overflow-y-auto">
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {demoGrant.publicHealthRelevance}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-1">Keywords</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {(demoGrant.keywords || []).map((keyword, index) => (
                          <Badge key={index} className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/30">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-slate-900 mb-2">AI-Enhanced Grant Summary</h3>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200/30">
                        <div className="flex items-center mb-2">
                          <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
                          <h4 className="text-sm font-medium text-blue-800">Intelligent Summary</h4>
                        </div>
                        <p className="text-blue-700 text-sm leading-relaxed">
                          {demoGrant.aiGeneratedSummary || 'This research combines cutting-edge technology with practical medical applications, offering significant potential for translational impact and commercial development.'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200/30">
                      <div className="flex items-center mb-2">
                        <Users className="h-4 w-4 text-green-600 mr-2" />
                        <h4 className="text-sm font-medium text-green-700">Match Potential</h4>
                      </div>
                      <div className="flex items-center mb-2">
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                          <div 
                            className="bg-green-500 h-2.5 rounded-full" 
                            style={{ width: `${demoGrant.matchScore || 75}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm font-medium text-green-600">{demoGrant.matchScore || 75}%</span>
                      </div>
                      <p className="text-sm text-green-700 leading-relaxed">
                        {demoGrant.matchReason || 'This grant shows strong alignment with philanthropists interested in medical research, particularly those focused on innovative therapeutic approaches.'}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-1">Enhanced Keywords</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {(demoGrant.keywords || ['AI-Enhanced', 'Research', 'Healthcare', 'Innovation']).map((keyword, index) => (
                          <Badge key={index} className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-200/30">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="border-t border-slate-200/30 bg-slate-50/40 py-4 flex justify-between">
                <div className="text-sm text-slate-600">
                  {selectedContent === 'raw' ? 'Original grant data' : 'AI-enhanced grant data'}
                </div>
                {selectedContent === 'raw' && !showAiAnimation && (
                  <Button onClick={runAiDemo} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Run AI Enhancement
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}

          <div className="flex flex-col space-y-6">
            <Card className="shadow-md bg-white/80 backdrop-blur-sm border border-slate-200/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-slate-900">
                  <Brain className="w-5 h-5 mr-2 text-purple-600" />
                  How Our AI Works
                </CardTitle>
                <CardDescription className="text-slate-600">
                  See the AI transformation process in real-time
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <div className={`flex items-center ${aiStep >= 1 ? 'text-blue-600' : 'text-slate-500'}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 border-2 ${aiStep >= 1 ? 'border-blue-400 bg-blue-100' : 'border-slate-300'}`}>
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Grant Data Processing</h3>
                      <p className="text-sm text-slate-600">Our AI reads and analyzes the full grant text</p>
                    </div>
                    {aiStep === 1 && <Loader2 className="ml-auto h-5 w-5 animate-spin" />}
                    {aiStep > 1 && <Badge className="ml-auto bg-blue-100 text-blue-700 border border-blue-200/30">Complete</Badge>}
                  </div>
                  
                  <div className={`flex items-center ${aiStep >= 2 ? 'text-blue-600' : 'text-slate-500'}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 border-2 ${aiStep >= 2 ? 'border-blue-400 bg-blue-100' : 'border-slate-300'}`}>
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">AI Summary Generation</h3>
                      <p className="text-sm text-slate-600">Creates concise, relevant summaries</p>
                    </div>
                    {aiStep === 2 && <Loader2 className="ml-auto h-5 w-5 animate-spin" />}
                    {aiStep > 2 && <Badge className="ml-auto bg-blue-100 text-blue-700 border border-blue-200/30">Complete</Badge>}
                  </div>
                  
                  <div className={`flex items-center ${aiStep >= 3 ? 'text-blue-600' : 'text-slate-500'}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 border-2 ${aiStep >= 3 ? 'border-blue-400 bg-blue-100' : 'border-slate-300'}`}>
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Match Analysis</h3>
                      <p className="text-sm text-slate-600">Identifies potential philanthropic matches</p>
                    </div>
                    {aiStep === 3 && <Loader2 className="ml-auto h-5 w-5 animate-spin" />}
                    {aiStep > 3 && <Badge className="ml-auto bg-blue-100 text-blue-700 border border-blue-200/30">Complete</Badge>}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md bg-white/80 backdrop-blur-sm border border-slate-200/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-slate-900">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  Match Analysis
                </CardTitle>
                <CardDescription className="text-slate-600">
                  See philanthropist matches for this grant
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {showMatchAnimation ? (
                  <div className="space-y-4 py-2">
                    <div className="flex items-center mb-4">
                      <Loader2 className="mr-3 h-5 w-5 animate-spin text-green-600" />
                      <span className="text-green-700 font-medium">
                        {matchStep === 1 && "Processing grant data..."}
                        {matchStep === 2 && "Finding relevant philanthropists..."}
                        {matchStep === 3 && "Calculating match scores..."}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full transition-all duration-300" 
                        style={{ width: `${matchStep * 33}%` }}
                      ></div>
                    </div>
                  </div>
                ) : matches.length > 0 ? (
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {matches.map((match, index) => (
                      <div key={index} className="border border-slate-200/30 rounded-lg p-3 bg-slate-50/50">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-sm text-slate-900">{match.philanthropist.name}</h3>
                          <Badge 
                            className={
                              match.matchScore >= 80 
                                ? "bg-green-100 text-green-700 border-green-200/30" 
                                : match.matchScore >= 60
                                  ? "bg-amber-100 text-amber-700 border-amber-200/30"
                                  : "bg-blue-100 text-blue-700 border-blue-200/30"
                            }
                          >
                            {match.matchScore}%
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-600 mb-1">
                          {match.philanthropist.description}
                        </p>
                        <p className="text-xs text-slate-700 mb-1">
                          <span className="font-medium">Interests:</span> {match.philanthropist.interests.join(', ')}
                        </p>
                        <p className="text-xs text-slate-600 italic mt-1">
                          {match.matchReason}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center py-8">
                    <Button 
                      onClick={runMatchAnalysis} 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      disabled={matchesLoading || !demoGrant?._id}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Run Match Analysis
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="shadow-md bg-white/80 backdrop-blur-sm border border-slate-200/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-slate-900">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Benefits of AI Enhancement
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100/80 p-1 rounded-full text-blue-600 mr-3 mt-0.5 border border-blue-200/30">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Simplified Complexity</span>
                      <p className="text-sm text-slate-600">Technical research grants transformed into accessible summaries</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100/80 p-1 rounded-full text-green-600 mr-3 mt-0.5 border border-green-200/30">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Intelligent Matching</span>
                      <p className="text-sm text-slate-600">Connects researchers with aligned funding partners</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100/80 p-1 rounded-full text-purple-600 mr-3 mt-0.5 border border-purple-200/30">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Enhanced Discovery</span>
                      <p className="text-sm text-slate-600">Surfaces overlooked research potential that traditional methods miss</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 