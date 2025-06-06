'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, LightbulbIcon, DollarSign, Zap, ExternalLink, GraduationCap, Building, Brain, Target, Users, Search, Sparkle, BookOpen } from 'lucide-react'
import AIDemoServerWrapper from '@/components/demos/ai-demo-server-wrapper'

const AcceleratePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-green-600/20" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/25 to-green-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center mb-8">
              <img 
                src="/logo.svg" 
                alt="ChartR Logo" 
                width={110} 
                height={110} 
                className="mb-5" 
              />
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Accelerate
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mt-4 max-w-3xl">
                Empowering universities to help students and faculty discover relevant grants for their research projects
              </p>
            </div>
            <div className="inline-block px-3 py-1.5 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
              <a href="https://www.chartrhealth.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                Powered by ChartR AI
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full bg-slate-800/30 backdrop-blur-sm border-t border-b border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">How Accelerate Works</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Accelerate uses ChartR AI to help university students and faculty discover relevant grants from internal databases and web searches, streamlining the funding discovery process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* For students */}
            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-lg border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-blue-400/30">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">For Students</h3>
              </div>
              <p className="text-slate-300 mb-4">Discover grants specifically tailored for trainees, PhD students, and postdocs based on your research interests.</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-0.5">✓</span>
                  <span>Find student-focused funding opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-0.5">✓</span>
                  <span>AI-powered matching to your research abstract</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-0.5">✓</span>
                  <span>Discover research mentors and ongoing projects</span>
                </li>
              </ul>
            </div>
            
            {/* For faculty */}
            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-purple-400/30">
                  <LightbulbIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">For Faculty</h3>
              </div>
              <p className="text-slate-300 mb-4">Connect with funding opportunities that match your research profile, from early-career to senior faculty grants.</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-0.5">✓</span>
                  <span>Personalized grant recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-0.5">✓</span>
                  <span>Career-stage appropriate funding options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-0.5">✓</span>
                  <span>Web search integration for comprehensive coverage</span>
                </li>
              </ul>
            </div>
            
            {/* For universities */}
            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-lg border border-green-500/20 hover:border-green-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-green-400/30">
                  <Building className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">For Universities</h3>
              </div>
              <p className="text-slate-300 mb-4">Leverage research visibility to strengthen alumni and philanthropist networks by showcasing institutional research aligned with donor interests.</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Connect research with alumni interests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Identify philanthropists with matching goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Showcase institutional research impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Discovery Banner */}
      <section className="w-full bg-slate-800/30 backdrop-blur-sm border-t border-b border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">AI-Powered Grant Discovery</h2>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Let Accelerate's AI find grants tailored to your research interests. 
              Get personalized recommendations from internal databases and comprehensive web searches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-full mt-1 border border-blue-400/30">
                  <Brain className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Smart Grant Matching</h3>
                  <p className="text-sm text-slate-300">AI analyzes your research abstract to find the most relevant funding opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-full mt-1 border border-blue-400/30">
                  <Search className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Comprehensive Coverage</h3>
                  <p className="text-sm text-slate-300">Search both internal university databases and external grant repositories</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-full mt-1 border border-blue-400/30">
                  <GraduationCap className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Role-Based Results</h3>
                  <p className="text-sm text-slate-300">Tailored recommendations for students, faculty, and research level</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI-Powered Grant Discovery</h3>
              <p className="text-slate-300 text-center mb-6">
                Our AI analyzes research abstracts to find the most relevant funding opportunities from internal databases and comprehensive web searches.
              </p>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-400/30">
                  Advanced Grant Matching Technology
                </span>
              </div>
              <p className="text-xs text-center text-slate-400 mt-3">
                Works for all research areas and career stages
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Mentor Discovery Section */}
      <section className="w-full bg-slate-800/30 backdrop-blur-sm border-t border-b border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Find Research Mentors</h2>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Students can discover faculty mentors and ongoing research projects to join. 
              Search by research interests to find potential mentors whose work aligns with yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1 border border-purple-400/30">
                  <Search className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI-Powered Mentor Matching</h3>
                  <p className="text-sm text-slate-300">Search by research keywords to find faculty whose work matches your interests</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1 border border-purple-400/30">
                  <Building className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Ongoing Research Projects</h3>
                  <p className="text-sm text-slate-300">Explore current research projects and find opportunities to contribute</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1 border border-purple-400/30">
                  <Users className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Faculty Connections</h3>
                  <p className="text-sm text-slate-300">Connect with faculty members based on research compatibility</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI-Powered Mentor Discovery</h3>
              <p className="text-slate-300 text-center mb-6">
                Our platform uses advanced AI to analyze research interests and connect students with faculty mentors whose work aligns with their goals.
              </p>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-400/30">
                  Intelligent Mentor Matching
                </span>
              </div>
              <p className="text-xs text-center text-slate-400 mt-3">
                Perfect for MD students, PhD students, and postdocs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <AIDemoServerWrapper />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight leading-tight">
              Accelerate Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Research Funding
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Join leading universities in revolutionizing grant discovery and research networking. 
              Find <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text font-medium">relevant funding faster</span> with AI-powered matching technology.
            </p>
            
            <div className="flex justify-center mt-12">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AcceleratePage 