'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, ArrowRight, CheckCircle, Database, Clock } from 'lucide-react'

export default function PatientNotesDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 2)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const rawNote = `HISTORY OF PRESENT ILLNESS:
Mr. Johnson is a 67-year-old male with a history of hypertension, diabetes mellitus type 2, and coronary artery disease who presents for elective coronary artery bypass grafting. Patient reports chest pain on exertion for the past 6 months, relieved by rest and nitroglycerin.

PAST MEDICAL HISTORY:
- Hypertension x 15 years
- Type 2 Diabetes Mellitus x 12 years, HbA1c 7.2%
- Hyperlipidemia
- Former smoker, quit 10 years ago (30 pack-year history)
- BMI: 28.5

MEDICATIONS:
- Metformin 1000mg BID  
- Lisinopril 10mg daily
- Atorvastatin 40mg daily
- Aspirin 81mg daily

LABS:
Creatinine: 1.1 mg/dL (normal: 0.7-1.3)
HbA1c: 7.2%
LDL: 95 mg/dL`

  const structuredData = [
    { field: "Age", value: "67 years", confidence: 99 },
    { field: "Sex", value: "Male", confidence: 99 },
    { field: "BMI", value: "28.5", confidence: 95 },
    { field: "Diabetes", value: "Yes (Type 2)", confidence: 98 },
    { field: "Hypertension", value: "Yes", confidence: 97 },
    { field: "Tobacco Use", value: "Former smoker", confidence: 92 },
    { field: "HbA1c", value: "7.2%", confidence: 96 },
    { field: "Creatinine", value: "1.1 mg/dL", confidence: 99 },
    { field: "Surgery Type", value: "CABG", confidence: 94 }
  ]

  return (
    <section className="py-24 relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100/80 border border-blue-200/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-700">LIVE DEMO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            From Clinical Notes to Structured Data
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Watch ChartR automatically extract and structure clinical variables from unstructured EMR notes
          </p>
        </motion.div>

        {/* Demo Container */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Raw Clinical Notes */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/30 overflow-hidden shadow-lg">
              {/* Header */}
              <div className="flex items-center space-x-3 p-6 border-b border-slate-200/30 bg-red-50/50">
                <div className="p-2 bg-red-500/20 rounded-lg border border-red-400/30">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Raw Clinical Notes</h3>
                  <p className="text-sm text-slate-600">Unstructured EMR documentation</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200/30">
                  <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed overflow-hidden">
                    {rawNote}
                  </pre>
                </div>
                
                {/* Status */}
                <div className="flex items-center justify-between mt-4 text-sm">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>Manual review: 45-60 minutes</span>
                  </div>
                  <div className="text-red-600 font-medium">
                    Error-prone • Time-intensive
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Transformation Arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-4 shadow-xl shadow-blue-500/25"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Structured Data Output */}
          <motion.div 
            className="relative lg:mt-0 mt-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/30 overflow-hidden shadow-lg">
              {/* Header */}
              <div className="flex items-center space-x-3 p-6 border-b border-slate-200/30 bg-emerald-50/50">
                <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
                  <Database className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Structured Clinical Data</h3>
                  <p className="text-sm text-slate-600">ChartR AI extraction</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="space-y-3">
                  <AnimatePresence>
                    {structuredData.map((item, index) => (
                      <motion.div
                        key={item.field}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200/30"
                      >
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <div>
                            <span className="text-slate-900 font-medium">{item.field}:</span>
                            <span className="text-slate-700 ml-2">{item.value}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            item.confidence >= 95 ? 'bg-emerald-100 text-emerald-700 border border-emerald-200/30' :
                            item.confidence >= 90 ? 'bg-yellow-100 text-yellow-700 border border-yellow-200/30' :
                            'bg-red-100 text-red-700 border border-red-200/30'
                          }`}>
                            {item.confidence}%
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                {/* Status */}
                <div className="flex items-center justify-between mt-4 text-sm">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>ChartR processing: 30 seconds</span>
                  </div>
                  <div className="text-emerald-600 font-medium">
                    Accurate • Instant
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Benefits */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: Clock, title: "80x Faster", description: "Seconds vs hours of manual review" },
            { icon: CheckCircle, title: "96% Accuracy", description: "AI precision with human validation" },
            { icon: Database, title: "Structured Output", description: "Registry-ready clinical variables" }
          ].map((benefit, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/30 h-full hover:border-blue-200/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100/80 rounded-xl mb-4 border border-blue-200/30">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 