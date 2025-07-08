'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Search, Users, Zap, CheckCircle, BookOpen, FileSearch, Brain, Database, Clock, Eye, ChevronRight, DollarSign, TrendingUp, AlertTriangle, Shield, FileCheck } from 'lucide-react'

const LiteraturePage = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Time-Intensive Reviews",
      description: "Systematic literature reviews take 6-18 months to complete, delaying research publication and clinical implementation"
    },
    {
      icon: Clock,
      title: "Manual Data Extraction",
      description: "Researchers spend 60% of their time on manual data extraction and quality assessment, reducing time for analysis"
    },
    {
      icon: FileCheck,
      title: "Quality Inconsistencies",
      description: "Human reviewers introduce bias and inconsistencies, leading to unreliable systematic review outcomes"
    }
  ]

  const solutions = [
    {
      title: "AI-Powered Paper Screening",
      features: [
        "Intelligent relevance scoring and filtering",
        "Automated duplicate detection and removal",
        "Customizable inclusion/exclusion criteria",
        "Real-time screening progress tracking"
      ]
    },
    {
      title: "Automated Data Extraction",
      features: [
        "Structured data extraction from PDFs",
        "Methodology and results identification",
        "Quality assessment automation",
        "Bias detection and risk assessment"
      ]
    },
    {
      title: "Collaborative Workflow",
      description: "Team-based research management with shared projects and review workflows",
      features: [
        "Multi-user collaboration tools",
        "Project-based organization",
        "Review workflow management",
        "Version control and audit trails"
      ]
    }
  ]

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
      color: "from-teal-600 to-cyan-700"
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
      color: "from-emerald-600 to-teal-700"
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
      color: "from-cyan-600 to-blue-700"
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
            <div className="flex items-center justify-center gap-2 text-teal-600 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">ChartR Literature</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transform <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">Literature Reviews</span> with AI
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              AI-powered systematic literature review and meta-analysis platform that transforms months of manual work into days of intelligent automation.
            </p>
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
              The Hidden Cost of Manual Literature Reviews
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Researchers waste months on administrative tasks. ChartR Literature transforms this burden into a competitive advantage.
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
            <div className="flex items-center justify-center gap-2 text-teal-600 mb-6">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Research Teams</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              One Platform. Every Review. Intelligent Automation.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">
              Streamline systematic literature reviews with AI-powered automation and collaborative workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/30 dark:border-slate-700/30 hover:border-teal-300/50 dark:hover:border-teal-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{solution.title}</h3>
                {solution.description && (
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{solution.description}</p>
                )}
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Streamlined Research Workflow
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 h-full hover:border-teal-200/50">
                  <div className="text-2xl font-black text-teal-600 mb-4">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Powerful AI-Driven Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color.replace('-600', '-200/30').replace('-700', '-300/30')} rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300`} />
                <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200/30 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 h-full hover:border-teal-200/50">
                  <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-r ${feature.color.replace('-600', '-200/30').replace('-700', '-300/30')} rounded-xl flex items-center justify-center backdrop-blur-sm border border-slate-200/30`}>
                        <feature.icon className="w-7 h-7 text-slate-700" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900">{feature.title}</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3 text-sm text-slate-600">
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/30 to-cyan-100/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 via-cyan-200/20 to-blue-200/20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Literature Reviews
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join leading research institutions in revolutionizing systematic literature review. 
              Complete reviews <span className="text-teal-600 font-medium">75% faster</span> with AI-powered automation.
            </p>
            
            <div className="flex justify-center mt-8">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-4 rounded-lg font-medium hover:from-teal-700 hover:to-cyan-800 transition-all duration-300 flex items-center space-x-2"
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