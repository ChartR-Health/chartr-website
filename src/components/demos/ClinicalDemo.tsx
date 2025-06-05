'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ArrowLeft, CheckCircle, Users, FileText, Brain, Target, BarChart3, Building, DollarSign, TrendingUp, Clock, Shield, Eye } from 'lucide-react'
import { PatientSelector } from '@/components/clinical-demo/PatientSelector'
import { NotesViewer } from '@/components/clinical-demo/NotesViewer'
import { ExtractionResults } from '@/components/clinical-demo/ExtractionResults'
import { ClinicalApplications } from '@/components/clinical-demo/ClinicalApplications'

type DemoStep = 'selection' | 'extraction' | 'applications'

export default function ClinicalDemo() {
  const [currentStep, setCurrentStep] = useState<DemoStep>('selection')
  const [selectedPatient, setSelectedPatient] = useState<string>('')

  const handleNavigate = (step: DemoStep, patientId?: string) => {
    setCurrentStep(step)
    if (patientId) {
      setSelectedPatient(patientId)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('selectedPatient', patientId)
      }
    }
  }

  const steps = [
    {
      id: 'selection' as const,
      title: 'Patient Selection',
      description: 'Select clinical cases for processing',
      icon: Users,
      status: currentStep === 'selection' ? 'current' : 
             ['extraction', 'applications'].includes(currentStep) ? 'completed' : 'upcoming'
    },
    {
      id: 'extraction' as const,
      title: 'AI Data Curation',
      description: 'Extract and validate clinical variables',
      icon: Brain,
      status: currentStep === 'extraction' ? 'current' : 
             currentStep === 'applications' ? 'completed' : 'upcoming'
    },
    {
      id: 'applications' as const,
      title: 'Actionable Intelligence',
      description: 'Apply data to clinical use cases',
      icon: Target,
      status: currentStep === 'applications' ? 'current' : 'upcoming'
    }
  ]

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-600" />
      case 'current':
        return <div className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center">
          <div className="h-3 w-3 bg-white rounded-full animate-pulse" />
        </div>
      default:
        return <div className="h-6 w-6 bg-slate-300 rounded-full" />
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'selection':
        return <PatientSelector onNavigate={handleNavigate} />
      case 'extraction':
        return <ExtractionResults onNavigate={handleNavigate} />
      case 'applications':
        return <ClinicalApplications onNavigate={handleNavigate} />
      default:
        return null
    }
  }

  return (
    <section id="clinical-demo-section" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-black min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Glassmorphism */}
        <div className="text-center mb-20">
          {/* Floating Icon with 3D Effect */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
              <div className="relative p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                <Brain className="h-12 w-12 text-blue-400" />
              </div>
            </div>
          </div>
          
          {/* Dynamic Typography */}
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text mb-8 tracking-tighter leading-none">
            Experience ChartR
            <br />
            <span className="text-5xl md:text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Clinical Intelligence
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Witness our{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-medium">
              AI-powered platform
            </span>{' '}
            transform clinical data extraction and registry reporting with{' '}
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text font-medium">
              real-world scenarios
            </span>{' '}
            from our STS cardiac registry implementation
          </p>
          
          {/* Modular Metrics Grid with Glassmorphism */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              { icon: DollarSign, value: '$7.5M+', label: 'Annual Savings', gradient: 'from-emerald-400 to-teal-400', bg: 'from-emerald-500/20 to-teal-500/20' },
              { icon: Clock, value: '80x', label: 'Faster Processing', gradient: 'from-blue-400 to-cyan-400', bg: 'from-blue-500/20 to-cyan-500/20' },
              { icon: TrendingUp, value: '96%', label: 'Accuracy Rate', gradient: 'from-purple-400 to-pink-400', bg: 'from-purple-500/20 to-pink-500/20' },
              { icon: Shield, value: '4+', label: 'Core Applications', gradient: 'from-orange-400 to-red-400', bg: 'from-orange-500/20 to-red-500/20' }
            ].map((metric, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${metric.bg} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300`} />
                <div className="relative bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${metric.bg} rounded-xl`}>
                      <metric.icon className={`h-6 w-6 text-white`} />
                    </div>
                  </div>
                  <div className={`text-3xl font-black text-transparent bg-gradient-to-r ${metric.gradient} bg-clip-text mb-2`}>
                    {metric.value}
                  </div>
                  <p className="text-sm text-slate-400 font-medium">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Steps with Advanced 3D Design */}
        <div className="mb-16">
          <div className="flex justify-center items-center max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center space-y-4 group">
                    {/* 3D Step Button */}
                    <button
                      onClick={() => handleNavigate(step.id)}
                      className={`relative flex items-center justify-center w-20 h-20 rounded-3xl transition-all duration-500 hover:scale-110 ${
                        step.status === 'completed' ? 'transform hover:rotate-3' :
                        step.status === 'current' ? 'animate-pulse transform hover:rotate-3' :
                        'hover:scale-105'
                      }`}
                      disabled={step.status === 'upcoming'}
                    >
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-3xl blur-lg transition-all duration-300 ${
                        step.status === 'completed' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 opacity-50' :
                        step.status === 'current' ? 'bg-gradient-to-r from-blue-500 to-purple-500 opacity-60' :
                        'bg-gradient-to-r from-slate-600 to-slate-700 opacity-30'
                      }`} />
                      
                      {/* Glass Container */}
                      <div className={`relative bg-slate-800/60 backdrop-blur-xl rounded-3xl border w-full h-full flex items-center justify-center transition-all duration-300 ${
                        step.status === 'completed' ? 'border-emerald-400/50 shadow-emerald-500/25' :
                        step.status === 'current' ? 'border-blue-400/50 shadow-blue-500/25' :
                        'border-white/10 shadow-slate-500/25'
                      } shadow-2xl`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="h-10 w-10 text-emerald-400" />
                        ) : step.status === 'current' ? (
                          <Icon className="h-10 w-10 text-blue-400" />
                        ) : (
                          <Icon className="h-10 w-10 text-slate-500" />
                        )}
                      </div>
                    </button>
                    
                    {/* Step Info */}
                    <div className="text-center max-w-[160px]">
                      <button
                        onClick={() => handleNavigate(step.id)}
                        disabled={step.status === 'upcoming'}
                        className={`text-lg font-bold transition-all duration-300 hover:scale-105 leading-tight ${
                          step.status === 'current' ? 'text-blue-400 hover:text-blue-300' :
                          step.status === 'completed' ? 'text-emerald-400 hover:text-emerald-300' :
                          'text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        {step.title}
                      </button>
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Animated Connecting Lines */}
                  {index < steps.length - 1 && (
                    <div className="relative mx-8">
                      <div className={`h-1 w-32 rounded-full transition-all duration-500 ${
                        step.status === 'completed' 
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/25' 
                          : 'bg-slate-700'
                      }`} />
                      {step.status === 'completed' && (
                        <div className="absolute inset-0 h-1 w-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-sm opacity-75" />
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Demo Content with Advanced Glassmorphism */}
        <div className="relative group">
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Main Container */}
          <div className="relative bg-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Inner Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-3xl" />
            <div className="relative bg-slate-900/40 backdrop-blur-xl m-[1px] rounded-3xl">
              {renderCurrentStep()}
            </div>
          </div>
        </div>

        {/* Navigation with Futuristic Design */}
        <div className="flex justify-between items-center mt-12 max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => {
              const currentIndex = steps.findIndex(s => s.id === currentStep)
              if (currentIndex > 0) {
                handleNavigate(steps[currentIndex - 1].id)
              }
            }}
            disabled={currentStep === 'selection'}
            className="group relative bg-slate-800/50 backdrop-blur-xl border-white/20 text-white hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300" />
            <div className="relative flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Previous</span>
            </div>
          </Button>

          <div className="text-center">
            <p className="text-sm text-slate-400 mb-1">
              Step {steps.findIndex(s => s.id === currentStep) + 1} of {steps.length}
            </p>
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    index === steps.findIndex(s => s.id === currentStep)
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <Button 
            onClick={() => {
              const currentIndex = steps.findIndex(s => s.id === currentStep)
              if (currentIndex < steps.length - 1) {
                handleNavigate(steps[currentIndex + 1].id)
              }
            }}
            disabled={currentStep === 'applications'}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300" />
            <div className="relative flex items-center space-x-2">
              <span className="font-medium">Next</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  )
} 