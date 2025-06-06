'use client'

import React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { ArrowRight, FileText, Database, BarChart3, CheckCircle, Users, Clock, Shield, Activity, TrendingUp, Building, Brain, FileUp, Settings } from 'lucide-react'

const ClinicalPage = () => {
  const features = [
    {
      icon: FileUp,
      title: "Automated Registry Reporting",
      description: "AI-powered extraction and structuring of clinical data from EMR systems for compliance reporting.",
      benefits: [
        "Automated chart review and data extraction",
        "Real-time compliance monitoring",
        "Structured data output for registries"
      ],
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: Brain,
      title: "Smart Review Process",
      description: "Intelligent review workflows that combine AI automation with human validation for accuracy.",
      benefits: [
        "AI-assisted data validation",
        "Human-in-the-loop verification",
        "Quality assurance protocols"
      ],
      color: "from-purple-600 to-pink-700"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of clinical data quality and compliance status across your organization.",
      benefits: [
        "Live dashboard analytics",
        "Compliance status tracking",
        "Automated alerting systems"
      ],
      color: "from-green-600 to-teal-700"
    },
    {
      icon: Shield,
      title: "Evidence-Based Practice",
      description: "Integration with clinical evidence databases to support evidence-based decision making.",
      benefits: [
        "Clinical decision support",
        "Evidence integration",
        "Best practice recommendations"
      ],
      color: "from-amber-600 to-orange-700"
    }
  ]

  const workflow = [
    {
      step: "01",
      title: "Data Upload",
      description: "Upload patient data and clinical notes from your EMR system",
      icon: FileUp
    },
    {
      step: "02", 
      title: "AI Processing",
      description: "Advanced AI extracts structured data and identifies key clinical elements",
      icon: Brain
    },
    {
      step: "03",
      title: "Quality Review",
      description: "Human experts review and validate AI-extracted data for accuracy",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Registry Output",
      description: "Generate compliant registry reports and structured datasets",
      icon: BarChart3
    },
    {
      step: "05",
      title: "Monitoring",
      description: "Continuous monitoring and real-time compliance dashboards",
      icon: Activity
    }
  ]

  const stats = [
    { label: 'Time Savings', value: '80x', description: 'Faster than manual chart review' },
    { label: 'Cost Reduction', value: '$7.5M+', description: 'Annual savings per hospital' },
    { label: 'Accuracy Rate', value: '99.5%', description: 'AI extraction accuracy' },
    { label: 'Compliance Rate', value: '100%', description: 'Registry compliance achieved' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/25 to-purple-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
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
                Clinical
              </h1>
              <p className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text font-bold mb-8">
                AI-Powered Clinical Data Platform
              </p>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                The structured layer on top of your EMR system of record. Transform clinical data into actionable insights with AI-powered curation and automated registry reporting.
              </p>
            </div>
            
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-xl border border-white/20">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text font-semibold">Powered by ChartR AI</span>
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
              Transform Clinical Data Management
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Save millions annually while improving compliance and clinical outcomes
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
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black mb-4 text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
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
              Streamlined Clinical Workflow
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From EMR data to registry compliance - automated and validated every step of the way
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
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text mb-4">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
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
              Comprehensive Clinical Intelligence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Advanced AI capabilities that transform your clinical data management
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

      {/* Demo Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
              Experience Clinical in Action
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              See how our platform transforms clinical data management and registry reporting
            </p>
          </motion.div>

          <motion.div 
            className="relative group max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text mb-4">
                  Clinical Data Platform Demo
                </div>
                <p className="text-lg text-slate-300 mb-8">
                  Experience AI-powered clinical data curation and registry reporting
                </p>
                <div className="aspect-video bg-slate-900/50 rounded-xl border border-white/20 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-lg text-slate-300 mb-4">Interactive Clinical Dashboard</p>
                    <p className="text-sm text-slate-400">AI extraction • Quality review • Registry compliance • Real-time monitoring</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/demo/clinical" 
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
                  >
                    <span>Try Demo</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center space-x-2 bg-white/10 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-xl border border-white/20"
                  >
                    <span>Request Access</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Clinical Data Management
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Join leading healthcare organizations in revolutionizing clinical data curation. 
              Save <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text font-medium">$7.5M+ annually</span> while improving compliance and outcomes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Link 
                href="/demo/clinical" 
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Try Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="bg-white/10 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-xl border border-white/20">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClinicalPage 