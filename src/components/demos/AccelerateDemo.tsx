'use client'

import React, { useState } from 'react'
import { Search, Target, Brain, DollarSign, GraduationCap, Users, Clock, Sparkles } from 'lucide-react'

interface Grant {
  id: string
  title: string
  organization: string
  amount: number
  deadline: string
  matchScore: number
  keywords: string[]
  type: 'Student' | 'Faculty' | 'University'
}

interface Mentor {
  id: string
  name: string
  department: string
  research: string
  keywords: string[]
  matchScore: number
  projects: string[]
}

const AccelerateDemo = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTab, setSelectedTab] = useState<'grants' | 'mentors'>('grants')
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedGrant, setSelectedGrant] = useState<Grant | null>(null)
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)
  const [aiStep, setAiStep] = useState(0)

  const mockGrants: Grant[] = [
    {
      id: 'G001',
      title: 'NSF Graduate Research Fellowship Program',
      organization: 'National Science Foundation',
      amount: 159000,
      deadline: '2024-10-18',
      matchScore: 95,
      keywords: ['graduate', 'research', 'STEM', 'fellowship'],
      type: 'Student'
    },
    {
      id: 'G002',
      title: 'NIH Early Career Investigator Award',
      organization: 'National Institutes of Health',
      amount: 750000,
      deadline: '2024-11-05',
      matchScore: 88,
      keywords: ['early-career', 'biomedical', 'research'],
      type: 'Faculty'
    },
    {
      id: 'G003',
      title: 'Research Infrastructure Grant',
      organization: 'Department of Education',
      amount: 2500000,
      deadline: '2024-12-15',
      matchScore: 82,
      keywords: ['infrastructure', 'university', 'equipment'],
      type: 'University'
    }
  ]

  const mockMentors: Mentor[] = [
    {
      id: 'M001',
      name: 'Dr. Sarah Chen',
      department: 'Computer Science',
      research: 'Machine Learning and Healthcare AI',
      keywords: ['AI', 'machine learning', 'healthcare', 'neural networks'],
      matchScore: 92,
      projects: ['AI-Powered Diagnostic Tools', 'Medical Image Analysis', 'Patient Outcome Prediction']
    },
    {
      id: 'M002',
      name: 'Dr. Michael Rodriguez',
      department: 'Biomedical Engineering',
      research: 'Biomedical Device Innovation',
      keywords: ['biomedical', 'devices', 'innovation', 'FDA approval'],
      matchScore: 87,
      projects: ['Smart Prosthetics', 'Biosensor Development', 'Medical Robotics']
    }
  ]

  const handleSearch = () => {
    setIsProcessing(true)
    setSelectedGrant(null)
    setSelectedMentor(null)
    setAiStep(1)
    
    setTimeout(() => {
      setAiStep(2)
      setTimeout(() => {
        setAiStep(3)
        setTimeout(() => {
          setIsProcessing(false)
          setAiStep(0)
        }, 1500)
      }, 1500)
    }, 1500)
  }

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50 border-green-200'
    if (score >= 80) return 'text-blue-600 bg-blue-50 border-blue-200'
    return 'text-yellow-600 bg-yellow-50 border-yellow-200'
  }

  return (
    <div className="demo-container max-w-7xl mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          ChartR Accelerate - Live Demo
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          Discover research grants and mentors with AI-powered matching based on your interests
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Search Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Research Interest Search
            </h4>
            
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Enter your research interests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-chartr-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                />
              </div>
              
              <button
                onClick={handleSearch}
                disabled={!searchQuery.trim() || isProcessing}
                className="w-full bg-chartr-blue-gradient text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>AI Processing...</span>
                  </>
                ) : (
                  <>
                    <Target className="w-4 h-4" />
                    <span>Find Matches</span>
                  </>
                )}
              </button>
              
              {/* Tab Selection */}
              <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedTab('grants')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      selectedTab === 'grants'
                        ? 'bg-chartr-blue-100 text-chartr-blue-800 dark:bg-chartr-blue-900/20 dark:text-chartr-blue-200'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 mx-auto mb-1" />
                    Grants
                  </button>
                  <button
                    onClick={() => setSelectedTab('mentors')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      selectedTab === 'mentors'
                        ? 'bg-chartr-blue-100 text-chartr-blue-800 dark:bg-chartr-blue-900/20 dark:text-chartr-blue-200'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Users className="w-4 h-4 mx-auto mb-1" />
                    Mentors
                  </button>
                </div>
              </div>
            </div>

            {/* AI Processing Steps */}
            {isProcessing && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="space-y-3">
                  <div className={`flex items-center space-x-3 ${aiStep >= 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                    <div className={`w-2 h-2 rounded-full ${aiStep >= 1 ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                    <span className="text-sm">Analyzing research keywords</span>
                  </div>
                  <div className={`flex items-center space-x-3 ${aiStep >= 2 ? 'text-blue-600' : 'text-slate-400'}`}>
                    <div className={`w-2 h-2 rounded-full ${aiStep >= 2 ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                    <span className="text-sm">Matching with database</span>
                  </div>
                  <div className={`flex items-center space-x-3 ${aiStep >= 3 ? 'text-blue-600' : 'text-slate-400'}`}>
                    <div className={`w-2 h-2 rounded-full ${aiStep >= 3 ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                    <span className="text-sm">Ranking by relevance</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            {selectedTab === 'grants' ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Grant Opportunities
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
                    <Target className="w-4 h-4" />
                    <span>AI-Matched Results</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {mockGrants.map((grant) => (
                    <div
                      key={grant.id}
                      onClick={() => setSelectedGrant(grant)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                        selectedGrant?.id === grant.id
                          ? 'border-chartr-blue-500 bg-chartr-blue-50 dark:bg-chartr-blue-900/20'
                          : 'border-slate-200 dark:border-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {grant.title}
                          </h5>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {grant.organization}
                          </p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getMatchColor(grant.matchScore)}`}>
                          {grant.matchScore}% Match
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-300">
                          <span className="flex items-center space-x-1">
                            <DollarSign className="w-3 h-3" />
                            <span>${grant.amount.toLocaleString()}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>Due {grant.deadline}</span>
                          </span>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          grant.type === 'Student' ? 'bg-green-100 text-green-800' :
                          grant.type === 'Faculty' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {grant.type}
                        </div>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-1">
                        {grant.keywords.map((keyword, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Research Mentors
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
                    <Brain className="w-4 h-4" />
                    <span>AI-Matched Faculty</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {mockMentors.map((mentor) => (
                    <div
                      key={mentor.id}
                      onClick={() => setSelectedMentor(mentor)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                        selectedMentor?.id === mentor.id
                          ? 'border-chartr-blue-500 bg-chartr-blue-50 dark:bg-chartr-blue-900/20'
                          : 'border-slate-200 dark:border-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {mentor.name}
                          </h5>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                            {mentor.department}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {mentor.research}
                          </p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getMatchColor(mentor.matchScore)}`}>
                          {mentor.matchScore}% Match
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <h6 className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">Current Projects:</h6>
                        <div className="space-y-1">
                          {mentor.projects.slice(0, 2).map((project, idx) => (
                            <p key={idx} className="text-xs text-slate-600 dark:text-slate-400">• {project}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {mentor.keywords.map((keyword, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Selected Details */}
      {(selectedGrant || selectedMentor) && (
        <div className="mt-6 bg-gradient-to-r from-chartr-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-6 border border-chartr-blue-200 dark:border-slate-600">
          {selectedGrant && (
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-chartr-blue-600" />
                <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                  Grant Details: {selectedGrant.title}
                </h5>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-chartr-blue-600">${selectedGrant.amount.toLocaleString()}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Total Award</div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-green-600">{selectedGrant.matchScore}%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">AI Match Score</div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-orange-600">{selectedGrant.deadline}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Application Deadline</div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h6 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">AI Recommendation:</h6>
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  This grant is highly relevant to your research interests in {selectedGrant.keywords.join(', ')}. 
                  The funding amount and timeline align well with typical {selectedGrant.type.toLowerCase()} research projects. 
                  Consider highlighting your innovative approach and expected outcomes in your application.
                </p>
              </div>
            </div>
          )}
          
          {selectedMentor && (
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-chartr-blue-600" />
                <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                  Mentor Profile: {selectedMentor.name}
                </h5>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h6 className="font-semibold text-slate-900 dark:text-white mb-2">Research Focus</h6>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{selectedMentor.research}</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h6 className="font-semibold text-slate-900 dark:text-white mb-2">Match Score</h6>
                  <div className="text-2xl font-bold text-green-600">{selectedMentor.matchScore}%</div>
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h6 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Active Research Projects:</h6>
                <ul className="space-y-1">
                  {selectedMentor.projects.map((project, idx) => (
                    <li key={idx} className="text-sm text-purple-800 dark:text-purple-300">• {project}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AccelerateDemo 