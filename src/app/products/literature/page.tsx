'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Search, Users, Zap, CheckCircle, BookOpen, FileSearch, Brain, Database, Clock, Eye, ChevronRight, DollarSign, TrendingUp, AlertTriangle, Shield, FileCheck, Target, Layers, Network, Cpu } from 'lucide-react'

const LiteraturePage = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

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

  const combinedFeatures = [
    {
      number: "1",
      title: "AI-Enhanced Literature Search",
      icon: Search,
      description: "Intelligent search optimization with AI-powered keyword generation and search strategy validation",
      features: [
        "AI-generated MeSH terms and synonyms for comprehensive coverage",
        "Search string optimization with precision vs. sensitivity balancing",
        "Coverage analysis to identify gaps in search strategies",
        "Multi-source search across PubMed, CrossRef, and other databases"
      ]
    },
    {
      number: "2",
      title: "Intelligent Screening & Assessment",
      icon: Brain,
      description: "AI-assisted screening following PRISMA and STARR protocols with human validation at critical steps",
      features: [
        "PRISMA protocol screening with evidence-based AI recommendations",
        "STARR protocol support with 'Maybe' category for complex decisions",
        "Dual-stage screening: abstract and full-text with confidence scoring",
        "Conflict resolution tools for multi-reviewer assessments"
      ]
    },
    {
      number: "3",
      title: "Advanced Data Extraction",
      icon: FileSearch,
      description: "AI-powered extraction with precise location tracking and human verification for accuracy",
      features: [
        "Custom extraction keywords with exact page and section identification",
        "Batch processing of hundreds of documents simultaneously",
        "Confidence scoring and source text preservation for verification",
        "Citation network analysis and reference extraction"
      ]
    },
    {
      number: "4",
      title: "Quality Assessment & Synthesis",
      icon: CheckCircle,
      description: "RoB 2.0 and ROBIS tools with AI assistance and multi-reviewer consensus building",
      features: [
        "RoB 2.0 assessment for randomized trials with AI guidance",
        "ROBIS tool for systematic review quality assessment",
        "Multi-assessor support with conflict detection and resolution",
        "Automated calculations with evidence documentation"
      ]
    }
  ]

  const workflow = [
    {
      step: "01",
      title: "AI-Enhanced Planning",
      description: "Research question analysis and search strategy development with AI optimization",
      icon: Target
    },
    {
      step: "02", 
      title: "Intelligent Search",
      description: "AI-powered keyword generation and search string optimization across multiple databases",
      icon: Search
    },
    {
      step: "03",
      title: "AI-Assisted Screening",
      description: "Protocol-compliant screening with AI recommendations and human validation",
      icon: Brain
    },
    {
      step: "04",
      title: "Smart Data Extraction",
      description: "AI extraction with precise location tracking and human verification",
      icon: FileSearch
    },
    {
      step: "05",
      title: "Quality Assessment",
      description: "RoB 2.0 and ROBIS tools with AI assistance and consensus building",
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-2 text-teal-600 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">ChartR Literature</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Systematic Reviews <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">Enhanced by AI</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Maintain rigorous systematic review and meta-analysis standards while accelerating your research with AI-powered assistance at every step. 
              Human validation ensures quality, while AI enhances efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-6 bg-white/80">
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
              Traditional systematic reviews are rigorous but time-intensive. ChartR Literature maintains that rigor while dramatically accelerating the process.
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

      {/* Combined Features Section */}
      <section className="py-16 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-teal-600 mb-6">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">AI + Human Collaboration</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Rigorous Research, Intelligent Automation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI enhances every step of the systematic review process while maintaining the rigorous standards that make systematic reviews the gold standard of evidence synthesis.
            </p>
          </motion.div>

          {/* Interactive Features Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Feature List */}
            <div className="space-y-3">
              {combinedFeatures.map((feature, index) => (
                <div key={index}>
                  <motion.div
                    className={`group cursor-pointer transition-all duration-300 ${
                      selectedFeature === index ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: selectedFeature === index ? 1 : 0.6, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    onClick={() => setSelectedFeature(index)}
                  >
                    <div className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 ${
                      selectedFeature === index 
                        ? 'border-teal-200 bg-teal-50/50' 
                        : 'border-slate-200/50 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}>
                      {/* Number */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                        selectedFeature === index 
                          ? 'bg-teal-100' 
                          : 'bg-slate-100 group-hover:bg-slate-200'
                      }`}>
                        <span className={`text-sm font-semibold ${
                          selectedFeature === index 
                            ? 'text-teal-700' 
                            : 'text-slate-700'
                        }`}>
                          {feature.number}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`font-semibold text-sm ${
                          selectedFeature === index 
                            ? 'text-teal-700' 
                            : 'text-slate-900'
                        }`}>
                          {feature.title}
                        </h3>
                      </div>
                      
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                        selectedFeature === index 
                          ? 'bg-teal-100' 
                          : 'bg-slate-100 group-hover:bg-slate-200'
                      }`}>
                        <feature.icon className={`w-3 h-3 ${
                          selectedFeature === index 
                            ? 'text-teal-600' 
                            : 'text-slate-600'
                        }`} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile: Detailed Content appears directly under each feature */}
                  <div className="lg:hidden">
                    {selectedFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-slate-50/50 rounded-lg border border-slate-200/30"
                      >
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 mb-4 text-sm">
                          {feature.description}
                        </p>
                        
                        <ul className="space-y-3">
                          {feature.features.map((feat, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600 leading-relaxed">
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Right Side: Detailed Content */}
            <div className="hidden lg:block sticky top-8">
              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {combinedFeatures[selectedFeature].title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {combinedFeatures[selectedFeature].description}
                  </p>
                  
                  <ul className="space-y-4">
                    {combinedFeatures[selectedFeature].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              AI-Enhanced Systematic Review Workflow
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every step enhanced by AI, every decision validated by humans. Complete systematic reviews in weeks, not months.
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

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
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
              Accelerate Your
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Systematic Reviews
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join leading research institutions in revolutionizing systematic review methodology. 
              Complete reviews <span className="text-teal-600 font-medium">75% faster</span> while maintaining rigorous standards.
            </p>
            
            <div className="flex justify-center mt-8">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-4 rounded-lg font-medium hover:from-teal-700 hover:to-cyan-800 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Schedule a Demo</span>
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