'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Users, CheckCircle, AlertTriangle, Cpu, Target, Shield, Zap, Eye } from 'lucide-react'

export default function DataExtractionDemo() {
  const [processingStep, setProcessingStep] = useState(0)
  const [isProcessing, setIsProcessing] = useState(true)
  const [progress, setProgress] = useState(0)

  const processingSteps = [
    { label: "Connecting to EMR...", icon: Cpu, color: "text-blue-400" },
    { label: "Analyzing Clinical Notes...", icon: Brain, color: "text-purple-400" },
    { label: "Extracting Variables...", icon: Target, color: "text-cyan-400" },
    { label: "Calculating Confidence...", icon: Shield, color: "text-emerald-400" },
    { label: "Human Validation...", icon: Users, color: "text-amber-400" },
    { label: "Quality Assurance...", icon: CheckCircle, color: "text-green-400" }
  ]

  const extractedVariables = [
    { 
      name: "Patient Age", 
      value: "67 years", 
      confidence: 99, 
      status: "validated",
      aiExtracted: "67 years",
      humanVerified: true
    },
    { 
      name: "Diabetes Status", 
      value: "Type 2 DM", 
      confidence: 98, 
      status: "validated",
      aiExtracted: "Type 2 Diabetes",
      humanVerified: true
    },
    { 
      name: "HbA1c Level", 
      value: "7.2%", 
      confidence: 96, 
      status: "validated",
      aiExtracted: "7.2%",
      humanVerified: true
    },
    { 
      name: "Smoking History", 
      value: "Former smoker", 
      confidence: 92, 
      status: "flagged",
      aiExtracted: "Quit smoking",
      humanVerified: false
    },
    { 
      name: "Surgery Type", 
      value: "CABG", 
      confidence: 94, 
      status: "validated",
      aiExtracted: "Coronary Artery Bypass",
      humanVerified: true
    }
  ]

  // Auto-cycle through processing steps
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2
        if (newProgress >= 100) {
          setIsProcessing(false)
          return 100
        }
        return newProgress
      })
      
      setProcessingStep((prev) => {
        if (prev < processingSteps.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 800)

    // Reset cycle after completion
    const resetTimeout = setTimeout(() => {
      setProgress(0)
      setProcessingStep(0)
      setIsProcessing(true)
    }, 10000)
    
    return () => {
      clearInterval(interval)
      clearTimeout(resetTimeout)
    }
  }, [])

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Subtle gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
      
      {/* Background Elements - More subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-400/20 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-purple-300">AI + HUMAN WORKFLOW</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text">
              AI-Powered Extraction
            </span>{' '}
            with <span className="text-amber-400">Human Validation</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our hybrid approach combines AI speed with human expertise for maximum accuracy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Processing Panel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center space-x-3 p-6 border-b border-slate-700/50">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">AI Processing Engine</h3>
                  <p className="text-sm text-slate-400">Real-time clinical data extraction</p>
                </div>
              </div>
              
              {/* Processing Steps */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  {processingSteps.map((step, index) => {
                    const Icon = step.icon
                    const isActive = index <= processingStep
                    const isCurrent = index === processingStep && isProcessing
                    
                    return (
                      <motion.div
                        key={index}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                          isActive 
                            ? 'bg-slate-700/50 border border-slate-600/50' 
                            : 'bg-slate-800/30 border border-slate-700/30'
                        }`}
                        initial={{ opacity: 0.3 }}
                        animate={{ 
                          opacity: isActive ? 1 : 0.3,
                          scale: isCurrent ? 1.02 : 1
                        }}
                      >
                        <div className={`p-2 rounded-lg ${
                          isActive ? 'bg-slate-600/50' : 'bg-slate-700/30'
                        }`}>
                          <Icon className={`w-4 h-4 ${isActive ? step.color : 'text-slate-500'}`} />
                        </div>
                        <span className={`text-sm font-medium ${
                          isActive ? 'text-white' : 'text-slate-500'
                        }`}>
                          {step.label}
                        </span>
                        {isCurrent && (
                          <motion.div
                            className="ml-auto"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Zap className="w-4 h-4 text-purple-400" />
                          </motion.div>
                        )}
                        {isActive && !isCurrent && (
                          <CheckCircle className="w-4 h-4 text-emerald-400 ml-auto" />
                        )}
                      </motion.div>
                    )
                  })}
                </div>
                
                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Overall Progress</span>
                    <span className="text-sm font-medium text-white">{progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Human Validation Panel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center space-x-3 p-6 border-b border-slate-700/50">
                <div className="p-2 bg-amber-500/20 rounded-lg">
                  <Users className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Human Validation</h3>
                  <p className="text-sm text-slate-400">Expert clinical review</p>
                </div>
              </div>
              
              {/* Validation Results */}
              <div className="p-6 space-y-3">
                <AnimatePresence>
                  {extractedVariables.map((variable, index) => (
                    <motion.div
                      key={variable.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (!isProcessing ? index * 0.1 : 0) }}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        variable.status === 'validated' 
                          ? 'bg-emerald-500/10 border-emerald-500/30' 
                          : 'bg-amber-500/10 border-amber-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium text-sm">{variable.name}</span>
                          {variable.status === 'validated' ? (
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-amber-400" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            variable.confidence >= 95 ? 'bg-emerald-500/20 text-emerald-300' :
                            variable.confidence >= 90 ? 'bg-amber-500/20 text-amber-300' :
                            'bg-red-500/20 text-red-300'
                          }`}>
                            {variable.confidence}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-400">AI Extracted:</span>
                          <span className="text-xs text-slate-300">{variable.aiExtracted}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-400">Final Value:</span>
                          <span className="text-xs text-white font-medium">{variable.value}</span>
                        </div>
                      </div>
                      
                      {variable.status === 'flagged' && (
                        <div className="mt-2 text-xs text-amber-300 bg-amber-500/10 p-2 rounded">
                          Requires clinical review for accuracy
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
} 