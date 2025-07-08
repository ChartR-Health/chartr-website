'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Users, CheckCircle, AlertTriangle, Cpu, Target, Shield, Zap, Eye, Edit, X, FileText, Loader2, Database, Search, Calculator, UserCheck } from 'lucide-react'

const extractedVariables = [
  { 
    name: "NYHA Functional Class", 
    value: "Class III", 
    confidence: 87, 
    status: "flagged",
    requiresReview: true
  },
  { 
    name: "Ejection Fraction", 
    value: "Moderately Reduced", 
    confidence: 92, 
    status: "validated",
    requiresReview: false
  },
  { 
    name: "Medication Adherence", 
    value: "Suboptimal", 
    confidence: 78, 
    status: "flagged",
    requiresReview: true
  },
  { 
    name: "Functional Status", 
    value: "Limited", 
    confidence: 89, 
    status: "flagged",
    requiresReview: true
  }
]

export default function DataExtractionDemo() {
  const [processingStep, setProcessingStep] = useState(0)
  const [isProcessing, setIsProcessing] = useState(true)
  const [progress, setProgress] = useState(97)
  const [showSourceNote, setShowSourceNote] = useState(false)
  const [selectedVariable, setSelectedVariable] = useState<string | null>(null)
  const [variableStates, setVariableStates] = useState<{[key: string]: {confirmed: boolean, confidence: number}}>({})
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingVariable, setEditingVariable] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')

  const processingSteps = [
    { label: "Connecting to EMR...", icon: Database, color: "text-blue-500" },
    { label: "Retrieving notes with ChartrOS...", icon: Search, color: "text-indigo-500" },
    { label: "Analyzing Clinical Notes...", icon: Brain, color: "text-purple-500" },
    { label: "Extracting Variables...", icon: Target, color: "text-cyan-500" },
    { label: "Calculating Confidence...", icon: Calculator, color: "text-emerald-500" },
    { label: "Human Validation...", icon: UserCheck, color: "text-amber-500" }
  ]



  const mockClinicalNote = `
CLINICAL NOTE - CARDIOLOGY CONSULTATION

Patient: John Doe, 67 years old
Date: 2024-01-15

CHIEF COMPLAINT:
Increasing shortness of breath over the past 3 months

HISTORY OF PRESENT ILLNESS:
Patient reports progressive dyspnea on exertion, now occurring with minimal activity such as walking one block or climbing one flight of stairs. He experiences mild fatigue throughout the day. Denies chest pain, palpitations, or syncope. Unable to perform usual household chores without becoming short of breath.

REVIEW OF SYSTEMS:
The patient admits to occasionally missing his medication doses, particularly on weekends. He states "I sometimes forget to take my evening pills." No significant weight changes reported.

PAST MEDICAL HISTORY:
Hypertension, hyperlipidemia, type 2 diabetes mellitus, previous myocardial infarction (2019), chronic kidney disease stage 3.

PHYSICAL EXAMINATION:
Vital signs stable. Mild pedal edema noted. Heart sounds regular, no murmurs appreciated. Decreased exercise tolerance noted.

ASSESSMENT:
The patient's symptoms are consistent with NYHA Class III heart failure. Recent echocardiogram shows ejection fraction of 35-40%. Patient has multiple comorbidities including diabetes, hypertension, and CKD. Functional capacity appears limited based on reported activity restrictions.

PLAN:
Continue current heart failure regimen. Discussed importance of medication adherence. Follow-up in 3 months.
  `

  const mockEchoReports = `
ECHOCARDIOGRAM REPORT #1
Date: 2024-01-10
Patient: John Doe, MRN: 12345

STUDY INDICATION: Heart failure evaluation

MEASUREMENTS:
- Left Ventricular Ejection Fraction: 35-40%
- Left Ventricular End-Diastolic Dimension: 5.8 cm
- Left Ventricular End-Systolic Dimension: 4.2 cm
- Interventricular Septal Thickness: 1.1 cm
- Posterior Wall Thickness: 1.0 cm
- Left Atrial Dimension: 4.5 cm
- Aortic Root Dimension: 3.2 cm

FINDINGS:
- Moderately reduced left ventricular systolic function
- Mild left ventricular dilation
- Normal left ventricular wall thickness
- Mild mitral regurgitation
- Tricuspid regurgitation velocity: 2.8 m/s (estimated RVSP 35 mmHg)
- No pericardial effusion

---

ECHOCARDIOGRAM REPORT #2
Date: 2023-10-15
Patient: John Doe, MRN: 12345

STUDY INDICATION: Follow-up cardiomyopathy

MEASUREMENTS:
- Left Ventricular Ejection Fraction: 38-42%
- Left Ventricular End-Diastolic Dimension: 5.6 cm
- Left Ventricular End-Systolic Dimension: 4.0 cm
- Interventricular Septal Thickness: 1.1 cm
- Posterior Wall Thickness: 1.0 cm
- Left Atrial Dimension: 4.3 cm
- Aortic Root Dimension: 3.1 cm

FINDINGS:
- Moderately reduced left ventricular systolic function
- Mild left ventricular dilation
- Normal left ventricular wall thickness
- Mild mitral regurgitation
- Tricuspid regurgitation velocity: 2.7 m/s (estimated RVSP 33 mmHg)
- No pericardial effusion

---

ECHOCARDIOGRAM REPORT #3
Date: 2023-07-20
Patient: John Doe, MRN: 12345

STUDY INDICATION: Baseline cardiac function assessment

MEASUREMENTS:
- Left Ventricular Ejection Fraction: 40-45%
- Left Ventricular End-Diastolic Dimension: 5.4 cm
- Left Ventricular End-Systolic Dimension: 3.8 cm
- Interventricular Septal Thickness: 1.0 cm
- Posterior Wall Thickness: 1.0 cm
- Left Atrial Dimension: 4.1 cm
- Aortic Root Dimension: 3.0 cm

FINDINGS:
- Moderately reduced left ventricular systolic function
- Mild left ventricular dilation
- Normal left ventricular wall thickness
- Trace mitral regurgitation
- Tricuspid regurgitation velocity: 2.5 m/s (estimated RVSP 30 mmHg)
- No pericardial effusion
  `

  // Auto-cycle through processing steps
  useEffect(() => {
    // Jump directly to human validation step
    const timeout = setTimeout(() => {
      setProcessingStep(processingSteps.length - 1) // Human validation step
      setIsProcessing(false)
      setProgress(97) // Start at 97% since Ejection Fraction is already confirmed
    }, 1000)

    // Reset cycle after completion
    const resetTimeout = setTimeout(() => {
      setProgress(97)
      setProcessingStep(0)
      setIsProcessing(true)
      setVariableStates({}) // Reset confirmations
    }, 20000) // Extended time for better UX
    
    return () => {
      clearTimeout(timeout)
      clearTimeout(resetTimeout)
    }
  }, [])

  // Update progress based on confirmed variables
  useEffect(() => {
    if (!isProcessing) {
      // Count variables that need review
      const needsReviewVariables = extractedVariables.filter(v => v.requiresReview)
      const confirmedCount = needsReviewVariables.filter(v => variableStates[v.name]?.confirmed).length
      const newProgress = 97 + confirmedCount // Start at 97% and increment by 1% for each confirmed
      setProgress(Math.min(newProgress, 100)) // Cap at 100%
    }
  }, [variableStates, isProcessing])

  const handleViewSource = (variableName: string) => {
    setSelectedVariable(variableName)
    setShowSourceNote(true)
  }

  const handleConfirm = (variableName: string) => {
    setVariableStates(prev => ({
      ...prev,
      [variableName]: { confirmed: true, confidence: 100 }
    }))
  }

  const handleEdit = (variableName: string) => {
    const variable = extractedVariables.find(v => v.name === variableName)
    if (variable) {
      setEditingVariable(variableName)
      setEditValue(variable.value)
      setShowEditModal(true)
    }
  }

  const handleSaveEdit = () => {
    if (editingVariable && editValue.trim()) {
      setVariableStates(prev => ({
        ...prev,
        [editingVariable]: { confirmed: true, confidence: 100 }
      }))
      
      // Update the variable value in the array
      const variableIndex = extractedVariables.findIndex(v => v.name === editingVariable)
      if (variableIndex !== -1) {
        extractedVariables[variableIndex].value = editValue.trim()
      }
      
      setShowEditModal(false)
      setEditingVariable(null)
      setEditValue('')
    }
  }

  const handleCancelEdit = () => {
    setShowEditModal(false)
    setEditingVariable(null)
    setEditValue('')
  }

  const getVariableState = (variableName: string) => {
    return variableStates[variableName] || { confirmed: false, confidence: extractedVariables.find(v => v.name === variableName)?.confidence || 0 }
  }

  const getHighlightedNote = (variableName: string) => {
    // For Ejection Fraction, show echo reports instead of clinical note
    if (variableName === "Ejection Fraction") {
      const echoHighlights = ["Left Ventricular Ejection Fraction: 35-40%", "Left Ventricular Ejection Fraction: 38-42%", "Left Ventricular Ejection Fraction: 40-45%"]
      let highlightedNote = mockEchoReports
      
      echoHighlights.forEach(text => {
        highlightedNote = highlightedNote.replace(
          new RegExp(text, 'g'),
          `<span class="bg-blue-200 text-blue-950 px-1 rounded">${text}</span>`
        )
      })
      
      return highlightedNote
    }

    const highlights = {
      "NYHA Functional Class": ["dyspnea on exertion, now occurring with minimal activity such as walking one block or climbing one flight of stairs", "NYHA Class III heart failure"],
      "Medication Adherence": ["occasionally missing his medication doses", "I sometimes forget to take my evening pills"],
      "Functional Status": ["Unable to perform usual household chores without becoming short of breath", "Decreased exercise tolerance noted", "Functional capacity appears limited based on reported activity restrictions"]
    }

    let highlightedNote = mockClinicalNote
    const variableHighlights = highlights[variableName as keyof typeof highlights] || []
    
    variableHighlights.forEach(text => {
      highlightedNote = highlightedNote.replace(
        new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
        `<span class=\"bg-blue-200 text-blue-950 px-1 rounded\">${text}</span>`
      )
    })

    return highlightedNote
  }

  const areAllVariablesConfirmed = () => {
    return extractedVariables.every(variable => {
      const state = getVariableState(variable.name)
      return state.confirmed || variable.status === 'validated'
    })
  }

  return (
    <section className="py-16 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Subtle gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/10 to-transparent dark:via-slate-900/10"></div>
      
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
          <div className="flex flex-col items-center space-y-4 mb-4">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                ChartR Smart Review
              </span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="text-slate-900 dark:text-white">Intelligence You Can </span>
              <span className="text-black dark:text-white">
                Trust
              </span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            See how ChartR's Smart Review combines AI precision with clinical expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI Processing Panel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Clinical Retrieval Workflow</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Processing Steps */}
            <div className="space-y-3">
                {processingSteps.map((step, index) => {
                  const Icon = step.icon
                  const isHumanValidation = index === processingSteps.length - 1
                  const isCompleted = !isHumanValidation
                  const allConfirmed = areAllVariablesConfirmed()
                  
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                        isCompleted || isHumanValidation
                          ? 'bg-slate-100/50 dark:bg-slate-700/30' 
                          : 'bg-slate-50/50 dark:bg-slate-800/30'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isCompleted || isHumanValidation ? 'bg-emerald-500/20' : 'bg-slate-200/50 dark:bg-slate-600/50'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        ) : isHumanValidation ? (
                          allConfirmed ? (
                            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Loader2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                            </motion.div>
                          )
                        ) : (
                          <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                        )}
                      </div>
                      <span className={`text-sm font-medium ${
                        isCompleted || isHumanValidation ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  )
                })}
                
                {/* Progress Bar */}
                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Overall Progress</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        progress === 100 
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                          : 'bg-gradient-to-r from-teal-400 to-cyan-400'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          {/* Smart Review Panel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <img 
                  src="/logo.png" 
                  alt="ChartR Logo" 
                  className="w-5 h-5 object-contain"
                />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Smart Review</h3>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Review Results */}
            <div className="space-y-3">
                <AnimatePresence>
                  {extractedVariables.map((variable, index) => {
                    const state = getVariableState(variable.name)
                    const isConfirmed = state.confirmed
                    const currentConfidence = state.confidence
                    
                    return (
                      <motion.div
                        key={variable.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: (!isProcessing ? index * 0.1 : 0) }}
                        className={`p-3 rounded-lg border transition-all duration-300 bg-white/80 dark:bg-slate-700/50 border-slate-300/30 dark:border-slate-600/30`}
                      >
                                                {index === 1 ? (
                          <>
                            {/* Special layout for Ejection Fraction card */}
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-slate-900 dark:text-white font-medium text-sm">{variable.name}</span>
                                {isConfirmed || variable.status === 'validated' ? (
                                  <CheckCircle className="w-4 h-4 text-[#28D0C7]" />
                                ) : (
                                  <AlertTriangle className="w-4 h-4 text-[#F0B84B]" />
                                )}
                              </div>
                              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{variable.value}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleViewSource(variable.name)}
                                  className="flex items-center space-x-1 px-2 py-1 bg-slate-200/50 dark:bg-slate-700/50 hover:bg-slate-300/50 dark:hover:bg-slate-600/50 rounded text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                  <Eye className="w-3 h-3" />
                                  <span>View</span>
                                </button>
                                
                                {(variable.requiresReview || isConfirmed || variable.status === 'validated') && (
                                  <>
                                    {!isConfirmed && variable.status !== 'validated' && (
                                      <button 
                                        onClick={() => handleConfirm(variable.name)}
                                        className="flex items-center space-x-1 px-2 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 rounded text-xs text-emerald-300 hover:text-emerald-200 transition-colors"
                                      >
                                        <CheckCircle className="w-3 h-3" />
                                        <span>Confirm</span>
                                      </button>
                                    )}
                                    <button 
                                      onClick={() => handleEdit(variable.name)}
                                      className="flex items-center space-x-1 px-2 py-1 bg-[#F0B84B]/20 hover:bg-[#F0B84B]/30 rounded text-xs text-[#F0B84B] hover:text-yellow-900 transition-colors"
                                    >
                                      <Edit className="w-3 h-3" />
                                      <span>Edit</span>
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="mt-3 text-xs text-black bg-[#3ED598]/10 p-2 rounded">
                              Confirmed by Reviewer
                            </div>
                          </>
                        ) : (
                          // Original layout for other cards
                          <>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span className="text-slate-900 dark:text-white font-medium text-sm">{variable.name}</span>
                                {isConfirmed || variable.status === 'validated' ? (
                                  <CheckCircle className={`w-4 h-4 ${variable.name === "Ejection Fraction" ? 'text-[#28D0C7]' : 'text-[#28D0C7]'}`} />
                                ) : (
                                  <AlertTriangle className="w-4 h-4 text-[#F0B84B]" />
                                )}
                              </div>
                            </div>
                            
                            {/* Value and Action Buttons in same line */}
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{variable.value}</span>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleViewSource(variable.name)}
                                  className="flex items-center space-x-1 px-2 py-1 bg-slate-200/50 dark:bg-slate-700/50 hover:bg-slate-300/50 dark:hover:bg-slate-600/50 rounded text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                  <Eye className="w-3 h-3" />
                                  <span>View</span>
                                </button>
                                
                                {(variable.requiresReview || isConfirmed || variable.status === 'validated') && (
                                  <>
                                    {!isConfirmed && variable.status !== 'validated' && (
                                      <button 
                                        onClick={() => handleConfirm(variable.name)}
                                        className="flex items-center space-x-1 px-2 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 rounded text-xs text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
                                      >
                                        <CheckCircle className="w-3 h-3" />
                                        <span>Confirm</span>
                                      </button>
                                    )}
                                    <button 
                                      onClick={() => handleEdit(variable.name)}
                                      className="flex items-center space-x-1 px-2 py-1 bg-[#F0B84B]/20 hover:bg-[#F0B84B]/30 rounded text-xs text-[#B8860B] dark:text-[#F0B84B] hover:text-yellow-900 dark:hover:text-yellow-900 transition-colors"
                                    >
                                      <Edit className="w-3 h-3" />
                                      <span>Edit</span>
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                            {(isConfirmed || variable.status === 'validated') && (
                              <div className="mt-3 text-xs text-black bg-[#3ED598]/10 p-2 rounded">
                                Confirmed by Reviewer
                              </div>
                            )}
                          </>
                        )}
                        
                        {(variable.requiresReview && !isConfirmed) && (
                          <div className="mt-3 text-xs text-black bg-[#F0B84B]/10 p-2 rounded">
                            Requires clinical review for accuracy
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Source Note Modal */}
      <AnimatePresence>
        {showSourceNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSourceNote(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 max-w-4xl max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <FileText className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {selectedVariable === "Ejection Fraction" ? "Echo Reports" : "Source Clinical Note"}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {selectedVariable === "Ejection Fraction" ? "Last 3 Echo Reports" : `Highlights for: ${selectedVariable}`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSourceNote(false)}
                  className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div 
                  className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap font-mono"
                  dangerouslySetInnerHTML={{ 
                    __html: getHighlightedNote(selectedVariable || '') 
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Modal */}
      <AnimatePresence>
        {showEditModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCancelEdit}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <Edit className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Edit Variable</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {editingVariable}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCancelEdit}
                  className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Value
                    </label>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter value..."
                    />
                  </div>
                  
                  <div className="flex items-center space-x-3 pt-4">
                    <button
                      onClick={handleSaveEdit}
                      className="flex-1 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors font-medium"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex-1 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 