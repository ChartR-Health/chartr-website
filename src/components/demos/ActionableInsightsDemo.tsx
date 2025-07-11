'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, TrendingUp, UserCheck, Stethoscope, DollarSign, Clock, Shield, BarChart3, Building2, Target, CheckCircle, ArrowRight } from 'lucide-react'

export default function ActionableInsightsDemo() {
  const [activeApplication, setActiveApplication] = useState(0)

  const applications = [
    {
      id: 'registry-reporting',
      title: 'Regulatory & Quality Reporting',
      icon: FileText,
      description: 'Automated regulatory compliance and quality reporting',
      color: 'from-orange-500 to-red-600',
      metrics: {
        primary: '$7.5M+',
        primaryLabel: 'Annual Savings Per Hospital',
        secondary: '99%',
        secondaryLabel: 'Compliance Rate',
        impact: '80x Faster Processing'
      },
      outcomes: [
        'State medical databases',
        'Federal reporting compliance', 
        'National registry automation',
        'Custom reporting formats'
      ],
      useCase: 'Automate regulatory reporting to diverse regulatory bodies with validated AI+human data extraction.'
    },
    {
      id: 'quality-analytics', 
      title: 'Quality Analytics & Predictive Models',
      icon: TrendingUp,
      description: 'Quality monitoring with predictive analytics',
      color: 'from-emerald-500 to-teal-600',
      metrics: {
        primary: '23%',
        primaryLabel: 'Readmission Reduction',
        secondary: '89%', 
        secondaryLabel: 'Model Accuracy',
        impact: '$3.9M Total Impact'
      },
      outcomes: [
        'Quality metric dashboards',
        'Predictive risk scoring',
        'Outcome prediction models', 
        'Clinical decision support'
      ],
      useCase: 'Combine quality monitoring with predictive analytics to track patient outcomes and predict readmissions.'
    },
    {
      id: 'patient-screening',
      title: 'Patient Screening & Recruitment', 
      icon: UserCheck,
      description: 'Identify patients for studies and programs',
      color: 'from-purple-500 to-pink-600',
      metrics: {
        primary: '40%',
        primaryLabel: 'Faster Recruitment',
        secondary: '78%',
        secondaryLabel: 'Screening Accuracy', 
        impact: '$900K Research Efficiency'
      },
      outcomes: [
        'Automated patient identification',
        'Eligibility screening',
        'Cohort matching',
        'Recruitment analytics'
      ],
      useCase: 'Rapidly identify eligible patients for clinical trials, quality improvement programs, and specialized care pathways.'
    },
    {
      id: 'clinical-workflows',
      title: 'Custom Point-of-Care Workflows',
      icon: Stethoscope, 
      description: 'Specialty-specific clinical decision support tools',
      color: 'from-blue-500 to-indigo-600',
      metrics: {
        primary: '65%',
        primaryLabel: 'Workflow Efficiency',
        secondary: '92%',
        secondaryLabel: 'Clinical Accuracy',
        impact: '$1.2M Time Savings'  
      },
      outcomes: [
        'Specialty workflow modules',
        'Referral triage systems', 
        'Treatment recommendation engines',
        'Custom clinical interfaces'
      ],
      useCase: 'Build custom clinical workflows tailored to specific specialties with AI-curated clinical data.'
    }
  ]

  // Auto-cycle through applications
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveApplication((prev) => (prev + 1) % applications.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const currentApp = applications[activeApplication]
  const Icon = currentApp.icon

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Subtle gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40"></div>
      
      {/* Background Elements - More subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-emerald-300">REAL IMPACT</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text">
              Actionable Intelligence
            </span>{' '}
            Across Healthcare
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Transform structured clinical data into measurable outcomes across four key healthcare applications
          </p>
        </motion.div>

        {/* Application Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Application Selector */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Clinical Applications</h3>
            {applications.map((app, index) => {
              const AppIcon = app.icon
              const isActive = index === activeApplication
              
              return (
                <motion.button
                  key={app.id}
                  onClick={() => setActiveApplication(index)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
                    isActive 
                      ? 'border-emerald-400/50 bg-[#D1E0FF]/80 shadow-xl backdrop-blur-sm scale-105' 
                      : 'border-slate-300/50 bg-[#D1E0FF]/80 hover:border-slate-400/50 backdrop-blur-xl hover:scale-102 shadow-md hover:shadow-lg'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-emerald-500/20' : 'bg-slate-600/30'}`}>
                      <AppIcon className={`w-5 h-5 ${isActive ? 'text-emerald-600' : 'text-slate-600'}`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold text-sm ${isActive ? 'text-slate-800' : 'text-slate-700'}`}>
                        {app.title}
                      </h4>
                    </div>
                  </div>
                  <p className={`text-xs ${isActive ? 'text-slate-700' : 'text-slate-600'} leading-tight`}>
                    {app.description}
                  </p>
                  
                  {/* Progress indicator */}
                  {isActive && (
                    <motion.div 
                      className="mt-3 h-1 bg-emerald-400/30 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                    >
                      <motion.div 
                        className="h-full bg-emerald-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                      />
                    </motion.div>
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Active Application Details */}
          <div className="lg:col-span-2 lg:pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeApplication}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Main Application Card */}
                <div className="bg-[#D1E0FF]/80 backdrop-blur-xl rounded-2xl border border-slate-300/50 overflow-hidden shadow-xl">
                  {/* Header */}
                  <div className="p-6 border-b border-slate-700/50">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${currentApp.color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">{currentApp.title}</h3>
                        <p className="text-slate-600 mt-1">{currentApp.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Use Case */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Use Case</h4>
                      <p className="text-slate-700 leading-relaxed">
                        {currentApp.useCase}
                      </p>
                    </div>

                    {/* Key Outcomes */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Key Outcomes</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {currentApp.outcomes.map((outcome, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-slate-700">{outcome}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <motion.div 
                    className="bg-[#D1E0FF]/80 backdrop-blur-xl rounded-xl border border-slate-300/50 p-6 text-center shadow-xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className={`text-3xl font-black text-transparent bg-gradient-to-r ${currentApp.color} bg-clip-text mb-2`}>
                      {currentApp.metrics.primary}
                    </div>
                    <p className="text-sm text-slate-600 font-medium">{currentApp.metrics.primaryLabel}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#D1E0FF]/80 backdrop-blur-xl rounded-xl border border-slate-300/50 p-6 text-center shadow-xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className={`text-3xl font-black text-transparent bg-gradient-to-r ${currentApp.color} bg-clip-text mb-2`}>
                      {currentApp.metrics.secondary}
                    </div>
                    <p className="text-sm text-slate-600 font-medium">{currentApp.metrics.secondaryLabel}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#D1E0FF]/80 backdrop-blur-xl rounded-xl border border-slate-300/50 p-6 text-center shadow-xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="text-lg font-bold text-slate-800 mb-2">
                      {currentApp.metrics.impact}
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Total Impact</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
} 