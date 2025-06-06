'use client'

import React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { ArrowRight, FileText, Search, Users, Zap, CheckCircle, BookOpen, FileSearch, Brain, Database, Clock, Eye } from 'lucide-react'

const LiteraturePage = () => {
  const features = [
    {
      icon: FileSearch,
      title: "Automated Paper Screening",
      description: "AI-powered screening and filtering of research papers based on inclusion/exclusion criteria.",
      benefits: [
        "Intelligent relevance scoring",
        "Customizable screening criteria",
        "Automated duplicate detection"
      ],
      color: "from-purple-600 to-pink-700"
    },
    {
      icon: Brain,
      title: "Smart Data Extraction",
      description: "Extract key information from papers using advanced AI that understands research methodology and results.",
      benefits: [
        "Structured data extraction",
        "Methodology identification",
        "Results and outcome extraction"
      ],
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: CheckCircle,
      title: "Quality Assessment",
      description: "Automated quality assessment tools with bias detection and methodological evaluation.",
      benefits: [
        "Bias risk assessment",
        "Study quality scoring",
        "Evidence level classification"
      ],
      color: "from-green-600 to-teal-700"
    },
    {
      icon: Database,
      title: "Collaborative Organization",
      description: "Team-based research management with shared projects and collaborative review workflows.",
      benefits: [
        "Multi-user collaboration",
        "Project-based organization",
        "Review workflow management"
      ],
      color: "from-amber-600 to-orange-700"
    }
  ]

  const workflow = [
    {
      step: "01",
      title: "Upload & Process",
      description: "Upload research papers and let our AI extract and structure the content",
      icon: FileText
    },
    {
      step: "02", 
      title: "Screen & Filter",
      description: "AI-powered screening based on your inclusion/exclusion criteria",
      icon: Search
    },
    {
      step: "03",
      title: "Extract Data",
      description: "Automated extraction of key study characteristics and outcomes",
      icon: Brain
    },
    {
      step: "04",
      title: "Assess Quality",
      description: "Systematic quality assessment with bias detection tools",
      icon: CheckCircle
    },
    {
      step: "05",
      title: "Collaborate",
      description: "Team review and collaborative evidence synthesis",
      icon: Users
    }
  ]

  const stats = [
    { label: 'Time Reduction', value: '75%', description: 'Faster systematic reviews' },
    { label: 'Accuracy Rate', value: '95%', description: 'AI extraction accuracy' },
    { label: 'Papers Processed', value: '1M+', description: 'Research papers analyzed' },
    { label: 'Teams Supported', value: '500+', description: 'Research organizations' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/25 to-indigo-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
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
                width={120} 
                height={120} 
                className="mb-6" 
              />
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
                Literature
              </h1>
              <p className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text font-bold mb-8">
                Systematic Literature Review Platform
              </p>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                AI-powered systematic literature review and meta-analysis platform that transforms months of manual work into days of intelligent automation.
              </p>
            </div>
            
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-xl border border-white/20">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">Powered by ChartR AI</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
              Transform Your Research Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Complete systematic literature reviews in days, not months
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black mb-4 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{stat.label}</h3>
                  <p className="text-slate-300 text-sm">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
              Streamlined Research Workflow
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From paper upload to evidence synthesis - automated and intelligent every step of the way
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6">
            {workflow.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className="text-2xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
              Powerful AI-Driven Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Advanced capabilities that accelerate every aspect of systematic literature review
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color.replace('-600', '-500/20').replace('-700', '-600/20')} rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300`} />
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 h-full">
                  <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-r ${feature.color.replace('-600', '-500/30').replace('-700', '-600/30')} rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20`}>
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-black text-white">{feature.title}</h3>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3 text-sm text-slate-300">
                          <div className={`w-2 h-2 bg-gradient-to-r ${feature.color.replace('-600', '-400').replace('-700', '-500')} rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Literature Reviews
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Join leading research institutions in revolutionizing systematic literature review. 
              Complete reviews <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium">75% faster</span> with AI-powered automation.
            </p>
            
            <div className="flex justify-center mt-12">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-700 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-800 transition-all duration-300 flex items-center space-x-2"
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

export default LiteraturePage 