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
    <section className="w-full bg-slate-800/30 backdrop-blur-sm border-t border-b border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors border border-blue-400/30 px-3 py-1 text-sm">
            <Sparkles className="w-4 h-4 mr-1" /> AI-Powered
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See Our AI in Action</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Experience how our AI transforms complex research grants into concise summaries and identifies perfect matches for collaborators, philanthropists, and students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {demoGrant && (
            <Card className="shadow-lg bg-slate-800/40 backdrop-blur-xl border border-slate-700">
              <CardHeader className="border-b border-slate-700 bg-slate-800/60 rounded-t-lg">
                <CardTitle className="flex items-center justify-between text-white">
                  <span>Grant Information</span>
                  {showAiAnimation ? (
                    <Badge className="animate-pulse bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      <Loader2 className="w-3.5 h-3.5 mr-1 animate-spin" /> 
                      Processing
                    </Badge>
                  ) : aiEnhancementRun ? (
                    <div className="flex space-x-2">
                      <Tabs defaultValue={selectedContent} value={selectedContent} onValueChange={(value) => setSelectedContent(value as 'raw' | 'ai')}>
                        <TabsList className="h-8 bg-slate-700 border-slate-600">
                          <TabsTrigger value="raw" className="text-xs px-2 py-1 h-7 data-[state=active]:bg-slate-600 data-[state=active]:text-white">Original</TabsTrigger>
                          <TabsTrigger value="ai" className="text-xs px-2 py-1 h-7 data-[state=active]:bg-slate-600 data-[state=active]:text-white">AI Enhanced</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  ) : null}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-6 pb-4">
                {selectedContent === 'raw' ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-300 mb-2">{demoGrant.projectTitle}</h3>
                      <p className="text-sm text-slate-400 mb-4">
                        {demoGrant.contactPI} • {demoGrant.organizationName}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-1">Abstract</h4>
                      <p className="text-sm text-slate-300 mb-1 leading-relaxed">
                        {demoGrant.projectAbstract ? (
                          demoGrant.projectAbstract.length > 300 && !abstractExpanded
                            ? `${demoGrant.projectAbstract.substring(0, 300)}...` 
                            : demoGrant.projectAbstract
                        ) : 'No abstract available'}
                      </p>
                      {demoGrant.projectAbstract && demoGrant.projectAbstract.length > 300 && (
                        <button 
                          onClick={() => setAbstractExpanded(!abstractExpanded)}
                          className="text-xs text-blue-400 hover:text-blue-300 font-medium mb-4 flex items-center"
                        >
                          {abstractExpanded ? 'Show less' : 'Show more'}
                          <ArrowRight className={`h-3 w-3 ml-1 transition-transform ${abstractExpanded ? 'rotate-90' : ''}`} />
                        </button>
                      )}
                    </div>
                    
                    {demoGrant.publicHealthRelevance && (
                      <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-1">Relevance</h4>
                        <p className="text-sm text-slate-300 mb-1 leading-relaxed">
                          {demoGrant.publicHealthRelevance.length > 200 && !relevanceExpanded
                            ? `${demoGrant.publicHealthRelevance.substring(0, 200)}...` 
                            : demoGrant.publicHealthRelevance}
                        </p>
                        {demoGrant.publicHealthRelevance.length > 200 && (
                          <button 
                            onClick={() => setRelevanceExpanded(!relevanceExpanded)}
                            className="text-xs text-blue-400 hover:text-blue-300 font-medium mb-4 flex items-center"
                          >
                            {relevanceExpanded ? 'Show less' : 'Show more'}
                            <ArrowRight className={`h-3 w-3 ml-1 transition-transform ${relevanceExpanded ? 'rotate-90' : ''}`} />
                          </button>
                        )}
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-1">Keywords</h4>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {(demoGrant.keywords || []).slice(0, 5).map((keyword, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-slate-700/50 text-slate-300 border-slate-600">
                            {keyword}
                          </Badge>
                        ))}
                        {!demoGrant.keywords?.length && <span className="text-sm text-slate-400 italic">No keywords available</span>}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-300 mb-2">{demoGrant.projectTitle}</h3>
                      <p className="text-sm text-slate-400 mb-4">
                        {demoGrant.contactPI} • {demoGrant.organizationName}
                      </p>
                    </div>
                    
                    <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400/30">
                      <div className="flex items-center mb-2">
                        <Sparkles className="h-4 w-4 text-blue-300 mr-2" />
                        <h4 className="text-sm font-medium text-blue-200">AI Summary</h4>
                      </div>
                      <p className="text-sm text-blue-100 leading-relaxed">
                        {demoGrant.aiGeneratedSummary || 'No AI summary available for this grant'}
                      </p>
                    </div>
                    
                    <div className="bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                      <div className="flex items-center mb-2">
                        <Users className="h-4 w-4 text-green-300 mr-2" />
                        <h4 className="text-sm font-medium text-green-200">Match Potential</h4>
                      </div>
                      <div className="flex items-center mb-2">
                        <div className="w-full bg-slate-700 rounded-full h-2.5">
                          <div 
                            className="bg-green-500 h-2.5 rounded-full" 
                            style={{ width: `${demoGrant.matchScore || 75}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm font-medium text-green-300">{demoGrant.matchScore || 75}%</span>
                      </div>
                      <p className="text-sm text-green-100 leading-relaxed">
                        {demoGrant.matchReason || 'This grant shows strong alignment with philanthropists interested in medical research, particularly those focused on innovative therapeutic approaches.'}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-1">Enhanced Keywords</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {(demoGrant.keywords || ['AI-Enhanced', 'Research', 'Healthcare', 'Innovation']).map((keyword, index) => (
                          <Badge key={index} className="text-xs bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-400/30">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="border-t border-slate-700 bg-slate-800/40 py-4 flex justify-between">
                <div className="text-sm text-slate-400">
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
            <Card className="shadow-md bg-slate-800/40 backdrop-blur-xl border border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-white">
                  <Brain className="w-5 h-5 mr-2 text-purple-400" />
                  How Our AI Works
                </CardTitle>
                <CardDescription className="text-slate-400">
                  See the AI transformation process in real-time
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <div className={`flex items-center ${aiStep >= 1 ? 'text-blue-400' : 'text-slate-500'}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 border-2 ${aiStep >= 1 ? 'border-blue-400 bg-blue-500/20' : 'border-slate-600'}`}>
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Grant Data Processing</h3>
                      <p className="text-sm text-slate-400">Our AI reads and analyzes the full grant text</p>
                    </div>
                    {aiStep === 1 && <Loader2 className="ml-auto h-5 w-5 animate-spin" />}
                    {aiStep > 1 && <Badge className="ml-auto bg-blue-500/20 text-blue-300 border border-blue-400/30">Complete</Badge>}
                  </div>
                  
                  <div className={`flex items-center ${aiStep >= 2 ? 'text-blue-400' : 'text-slate-500'}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 border-2 ${aiStep >= 2 ? 'border-blue-400 bg-blue-500/20' : 'border-slate-600'}`}>
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">AI Summary Generation</h3>
                      <p className="text-sm text-slate-400">Creates concise, relevant summaries</p>
                    </div>
                    {aiStep === 2 && <Loader2 className="ml-auto h-5 w-5 animate-spin" />}
                    {aiStep > 2 && <Badge className="ml-auto bg-blue-500/20 text-blue-300 border border-blue-400/30">Complete</Badge>}
                  </div>
                  
                  <div className={`flex items-center ${aiStep >= 3 ? 'text-blue-400' : 'text-slate-500'}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 border-2 ${aiStep >= 3 ? 'border-blue-400 bg-blue-500/20' : 'border-slate-600'}`}>
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Match Analysis</h3>
                      <p className="text-sm text-slate-400">Identifies potential philanthropic matches</p>
                    </div>
                    {aiStep === 3 && <Loader2 className="ml-auto h-5 w-5 animate-spin" />}
                    {aiStep > 3 && <Badge className="ml-auto bg-blue-500/20 text-blue-300 border border-blue-400/30">Complete</Badge>}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md bg-slate-800/40 backdrop-blur-xl border border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-white">
                  <Users className="w-5 h-5 mr-2 text-green-400" />
                  Match Analysis
                </CardTitle>
                <CardDescription className="text-slate-400">
                  See philanthropist matches for this grant
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {showMatchAnimation ? (
                  <div className="space-y-4 py-2">
                    <div className="flex items-center mb-4">
                      <Loader2 className="mr-3 h-5 w-5 animate-spin text-green-400" />
                      <span className="text-green-300 font-medium">
                        {matchStep === 1 && "Processing grant data..."}
                        {matchStep === 2 && "Finding relevant philanthropists..."}
                        {matchStep === 3 && "Calculating match scores..."}
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1.5">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full transition-all duration-300" 
                        style={{ width: `${matchStep * 33}%` }}
                      ></div>
                    </div>
                  </div>
                ) : showMatches ? (
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {matches.length > 0 ? (
                      matches.map((match, index) => (
                        <div key={index} className="border border-slate-600 rounded-lg p-3 bg-slate-700/30">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-sm text-white">{match.philanthropist.name}</h3>
                            <Badge 
                              className={
                                match.matchScore >= 80 
                                  ? "bg-green-500/20 text-green-300 border-green-400/30" 
                                  : match.matchScore >= 60
                                    ? "bg-amber-500/20 text-amber-300 border-amber-400/30"
                                    : "bg-blue-500/20 text-blue-300 border-blue-400/30"
                              }
                            >
                              {match.matchScore}%
                            </Badge>
                          </div>
                          <p className="text-xs text-slate-400 mb-1">
                            {match.philanthropist.description}
                          </p>
                          <p className="text-xs text-slate-300 mb-1">
                            <span className="font-medium">Interests:</span> {match.philanthropist.interests.join(', ')}
                          </p>
                          <p className="text-xs text-slate-400 italic mt-1">
                            {match.matchReason}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-slate-400">No matches found</p>
                      </div>
                    )}
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
            
            <Card className="shadow-md bg-slate-800/40 backdrop-blur-xl border border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-white">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                  Benefits of AI Enhancement
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full text-blue-400 mr-3 mt-0.5">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Simplified Complexity</span>
                      <p className="text-sm text-slate-400">Technical research grants transformed into accessible summaries</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/20 p-1 rounded-full text-green-400 mr-3 mt-0.5">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Intelligent Matching</span>
                      <p className="text-sm text-slate-400">Connects researchers with aligned funding partners</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500/20 p-1 rounded-full text-purple-400 mr-3 mt-0.5">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Enhanced Discovery</span>
                      <p className="text-sm text-slate-400">Surfaces overlooked research potential that traditional methods miss</p>
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