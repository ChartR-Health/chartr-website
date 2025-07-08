'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, LightbulbIcon, DollarSign, Zap, ExternalLink, GraduationCap, Building, Brain, Target, Users, Search, Sparkle, BookOpen, ChevronRight, Clock, TrendingUp, CheckCircle, AlertTriangle, FileCheck } from 'lucide-react'
import AIDemoServerWrapper from '@/components/demos/ai-demo-server-wrapper'

const AcceleratePage = () => {
  const marketStats = [
    { stat: "85%", description: "Of researchers struggle to find relevant grants" },
    { stat: "60%", description: "Faster grant discovery with AI matching" },
    { stat: "500+", description: "Grant databases integrated" },
    { stat: "95%", description: "Accuracy in grant-relevance matching" }
  ]

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Grant Discovery Challenges",
      description: "Researchers spend countless hours manually searching through databases, often missing relevant opportunities due to poor search algorithms"
    },
    {
      icon: Clock,
      title: "Time-Intensive Process",
      description: "Manual grant searching and matching consumes 20+ hours per month per researcher, diverting time from actual research"
    },
    {
      icon: FileCheck,
      title: "Missed Opportunities",
      description: "Limited search capabilities result in missed funding opportunities that could advance research projects and careers"
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Increased Funding Success",
      description: "Researchers discover 3x more relevant grants with AI-powered matching",
      metric: "3x more grants found"
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce grant discovery time by 60% with automated searching and matching",
      metric: "60% time reduction"
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Connect with mentors and research opportunities that accelerate career growth",
      metric: "85% mentor match rate"
    },
    {
      icon: CheckCircle,
      title: "Research Impact",
      description: "Focus more time on research and less on administrative tasks",
      metric: "40% more research time"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">ChartR Accelerate</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Accelerate <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent animate-gradient">Grant Discovery</span> with AI
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Empowering universities to help students and faculty discover relevant grants for their research projects with intelligent AI matching.
            </p>
          </motion.div>

          {/* Market Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {marketStats.map((item, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center p-6 rounded-xl border border-slate-200/30 dark:border-slate-700/30 hover:border-blue-300/50 dark:hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">{item.stat}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              The Hidden Cost of Manual Grant Discovery
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Researchers waste valuable time on administrative tasks. ChartR Accelerate transforms this burden into a competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/30 dark:border-slate-700/30 hover:border-red-300/50 dark:hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <point.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{point.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-6">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Universities</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              One Platform. Every Grant. Intelligent Matching.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">
              Streamline grant discovery and research networking with AI-powered matching technology.
            </p>
          </motion.div>

          {/* For Students, Faculty, Universities Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* For students */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-blue-200/30 hover:border-blue-300/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-blue-400/30">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">For Students</h3>
              </div>
              <p className="text-slate-600 mb-4">Discover grants specifically tailored for trainees, PhD students, and postdocs based on your research interests.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                  <span>Find student-focused funding opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                  <span>AI-powered matching to your research abstract</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                  <span>Discover research mentors and ongoing projects</span>
                </li>
              </ul>
            </div>
            
            {/* For faculty */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-purple-200/30 hover:border-purple-300/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-purple-400/30">
                  <LightbulbIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">For Faculty</h3>
              </div>
              <p className="text-slate-600 mb-4">Connect with funding opportunities that match your research profile, from early-career to senior faculty grants.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">✓</span>
                  <span>Personalized grant recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">✓</span>
                  <span>Career-stage appropriate funding options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">✓</span>
                  <span>Web search integration for comprehensive coverage</span>
                </li>
              </ul>
            </div>
            
            {/* For universities */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-green-200/30 hover:border-green-300/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-green-400/30">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">For Universities</h3>
              </div>
              <p className="text-slate-600 mb-4">Leverage research visibility to strengthen alumni and philanthropist networks by showcasing institutional research aligned with donor interests.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span>Connect research with alumni interests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span>Identify philanthropists with matching goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span>Showcase institutional research impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Measurable Impact on Research Success
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ChartR Accelerate delivers concrete benefits that transform research funding discovery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/30 dark:border-slate-700/30 hover:border-blue-300/50 dark:hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{benefit.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Discovery Banner */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">AI-Powered Grant Discovery</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Let Accelerate's AI find grants tailored to your research interests. 
              Get personalized recommendations from internal databases and comprehensive web searches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-full mt-1 border border-blue-400/30">
                  <Brain className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Smart Grant Matching</h3>
                  <p className="text-sm text-slate-600">AI analyzes your research abstract to find the most relevant funding opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-full mt-1 border border-blue-400/30">
                  <Search className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Comprehensive Coverage</h3>
                  <p className="text-sm text-slate-600">Search both internal university databases and external grant repositories</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-full mt-1 border border-blue-400/30">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Role-Based Results</h3>
                  <p className="text-sm text-slate-600">Tailored recommendations for students, faculty, and research level</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-blue-200/30">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">AI-Powered Grant Discovery</h3>
              <p className="text-slate-600 text-center mb-6">
                Our AI analyzes research abstracts to find the most relevant funding opportunities from internal databases and comprehensive web searches.
              </p>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-700 rounded-lg text-sm font-medium border border-blue-400/30">
                  Advanced Grant Matching Technology
                </span>
              </div>
              <p className="text-xs text-center text-slate-500 mt-3">
                Works for all research areas and career stages
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Mentor Discovery Section */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Find Research Mentors</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Students can discover faculty mentors and ongoing research projects to join. 
              Search by research interests to find potential mentors whose work aligns with yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1 border border-purple-400/30">
                  <Search className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">AI-Powered Mentor Matching</h3>
                  <p className="text-sm text-slate-600">Search by research keywords to find faculty whose work matches your interests</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1 border border-purple-400/30">
                  <Building className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Ongoing Research Projects</h3>
                  <p className="text-sm text-slate-600">Explore current research projects and find opportunities to contribute</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1 border border-purple-400/30">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Faculty Connections</h3>
                  <p className="text-sm text-slate-600">Connect with faculty members based on research compatibility</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-purple-200/30">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">AI-Powered Mentor Discovery</h3>
              <p className="text-slate-600 text-center mb-6">
                Our platform uses advanced AI to analyze research interests and connect students with faculty mentors whose work aligns with their goals.
              </p>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-700 rounded-lg text-sm font-medium border border-purple-400/30">
                  Intelligent Mentor Matching
                </span>
              </div>
              <p className="text-xs text-center text-slate-500 mt-3">
                Perfect for MD students, PhD students, and postdocs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <AIDemoServerWrapper />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-indigo-200/20 to-purple-200/20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              Accelerate Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Research Funding
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join leading universities in revolutionizing grant discovery and research networking. 
              Find <span className="text-blue-600 font-medium">relevant funding faster</span> with AI-powered matching technology.
            </p>
            
            <div className="flex justify-center mt-8">
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