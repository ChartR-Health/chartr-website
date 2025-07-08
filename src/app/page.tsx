'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import DataExtractionDemo from '@/components/demos/DataExtractionDemo'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { 
  ArrowRight, BarChart3, Layers, Database, FileText, Building, 
  GraduationCap, Building2, DollarSign, Clock, Shield, Zap, 
  TrendingUp, Users, Target, Network, Cpu, Activity, Heart, 
  Brain, Pill, TestTube, Stethoscope, Clipboard, User, FileCheck, 
  Dna, HeartPulse, CheckCircle, BookOpen, AlertTriangle, Plus, 
  X, Calculator, Droplet, Beaker, Settings, ClipboardCheck, 
  ExternalLink, Eye, Flag 
} from 'lucide-react'

const Homepage = () => {

  const stats = [
    { label: 'Annual Hospital Regulatory Spend', value: '$15M+', description: 'Per hospital on compliance reporting' },
    { label: 'Time Savings', value: '80x', description: 'Faster than manual review' },
    { label: 'Accuracy Improvement', value: '50x', description: 'More precise data extraction' },
    { label: 'Market Size', value: '$100B+', description: 'Total healthcare data market' },
  ]



  const testimonials = [
    {
      quote: "ChartR's comprehensive approach to data integration is exactly what I'm looking for. Its ability to work across systems sets it apart in the field.",
      author: "Chief Medical Officer",
      role: "Leading Academic Medical Center"
    },
    {
      quote: "Our biggest challenge has been time consumption. The time needed per chart to extract all variable elements in our data dictionaries has been an obstacle. I'm really excited to learn more.",
      author: "Quality Director",
      role: "500+ Bed Hospital System"
    },
    {
      quote: "Creating a clinical database is crucial for improving care and research in laryngology. Over four years, I've worked with various CUIMC stakeholders but faced persistent barriers—chiefly, a lack of clarity around which team is responsible for driving this forward.",
      author: "Department Chair",
      role: "Columbia University"
    }
  ]

  const [validationNote, setValidationNote] = useState("Lab value confirmed - approved for registry submission");
  const [circleColor, setCircleColor] = useState("emerald");
  const [selectedFeature, setSelectedFeature] = useState(0);

  const CombinedDataVisualization = () => {
    return (
      <div className="relative w-full h-80 overflow-visible">
        {/* Main Visual Container */}
        <div className="absolute inset-0 -mx-6 bg-gradient-to-br from-slate-900/20 to-purple-900/15 rounded-xl backdrop-blur-sm border border-white/5">
          {/* Left Side: EMR Systems */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-20 h-20 bg-blue-500/15 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm border border-blue-400/20">
            <Database className="w-8 h-8 text-blue-400 mb-1" />
            <div className="text-xs text-blue-300 font-medium text-center leading-tight">EMR<br/>Systems</div>
          </div>

          {/* Center: ChartR Layer */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              className="relative w-24 h-24 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl"
              animate={{ 
                scale: [1, 1.01, 1],
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.05)",
                  "0 0 0 4px rgba(255, 255, 255, 0)",
                  "0 0 0 0 rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/logo.svg" 
                alt="ChartR Logo" 
                className="w-16 h-16"
              />
            </motion.div>
          </div>

          {/* AI + Human Layer Label */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 text-xs text-white/90 font-medium bg-white/10 px-3 py-1 rounded-md backdrop-blur-sm border border-white/20">
            AI + Human Layer
          </div>

          {/* Right Side: Clinical Intelligence Output */}
          <div className="absolute top-1/2 right-2 transform -translate-x-1/2 w-20 h-20 bg-cyan-500/15 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm border border-cyan-400/20">
            <BarChart3 className="w-8 h-8 text-cyan-400 mb-1" />
            <div className="text-xs text-cyan-300 font-medium text-center leading-tight">Clinical<br/>Intelligence</div>
          </div>

          {/* Enhanced Data Flow Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 384">
            <defs>
              <linearGradient id="combinedFlowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.8)" />
              </linearGradient>
              <linearGradient id="combinedFlowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.8)" />
                <stop offset="100%" stopColor="rgba(34, 197, 94, 0.8)" />
              </linearGradient>
              <filter id="combinedGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Multi-path Data Flows: EMR → ChartR */}
            <motion.path
              d="M 48 192 Q 120 180 152 192"
              stroke="url(#combinedFlowGradient1)"
              strokeWidth="4"
              fill="none"
              filter="url(#combinedGlow)"
              animate={{ 
                strokeDasharray: ["0 200", "100 100", "200 0"],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.path
              d="M 48 186 Q 120 170 152 186"
              stroke="url(#combinedFlowGradient1)"
              strokeWidth="3"
              fill="none"
              filter="url(#combinedGlow)"
              animate={{ 
                strokeDasharray: ["0 200", "100 100", "200 0"],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            <motion.path
              d="M 48 198 Q 120 204 152 198"
              stroke="url(#combinedFlowGradient1)"
              strokeWidth="3"
              fill="none"
              filter="url(#combinedGlow)"
              animate={{ 
                strokeDasharray: ["0 200", "100 100", "200 0"],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Multi-path Data Flows: ChartR → Clinical Intelligence */}
            <motion.path
              d="M 248 192 Q 320 180 352 192"
              stroke="url(#combinedFlowGradient2)"
              strokeWidth="4"
              fill="none"
              filter="url(#combinedGlow)"
              animate={{ 
                strokeDasharray: ["0 200", "100 100", "200 0"],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            
            <motion.path
              d="M 248 186 Q 320 170 352 186"
              stroke="url(#combinedFlowGradient2)"
              strokeWidth="3"
              fill="none"
              filter="url(#combinedGlow)"
              animate={{ 
                strokeDasharray: ["0 200", "100 100", "200 0"],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            <motion.path
              d="M 248 198 Q 320 204 352 198"
              stroke="url(#combinedFlowGradient2)"
              strokeWidth="3"
              fill="none"
              filter="url(#combinedGlow)"
              animate={{ 
                strokeDasharray: ["0 200", "100 100", "200 0"],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
            />
          </svg>
        </div>
      </div>
    );
  };

  const AIDataFlowVisualization = () => {
    return (
      <div className="relative w-full h-96 overflow-hidden">
        {/* Background Network Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.6)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Flowing Data Streams */}
            <motion.path
              d="M50,150 Q200,50 350,150"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <motion.path
              d="M50,200 Q200,100 350,200"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
            <motion.path
              d="M50,100 Q200,200 350,100"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />
            
            {/* Data Nodes */}
            <motion.circle
              cx="50"
              cy="150"
              r="8"
              fill="rgba(59, 130, 246, 0.9)"
              filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
            <motion.circle
              cx="200"
              cy="150"
              r="12"
              fill="rgba(147, 51, 234, 0.9)"
              filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            />
            <motion.circle
              cx="350"
              cy="150"
              r="8"
              fill="rgba(6, 182, 212, 0.9)"
              filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            />
          </svg>
        </div>
        
        {/* Enhanced flowing particles with more realistic data stream effect */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-80"
            initial={{ 
              x: -10,
              y: 120 + (i * 10),
              scale: 0
            }}
            animate={{ 
              x: [0, 120, 280, 400],
              y: [120 + (i * 10), 140 + (Math.sin(i * 0.5) * 30), 160 + (Math.sin(i * 0.8) * 25), 150 + (i * 5)],
              scale: [0, 1, 1.2, 0],
              opacity: [0, 0.8, 0.6, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Additional layer of smaller particles for density */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full opacity-60"
            initial={{ 
              x: 30,
              y: 180 + (i * 8),
              scale: 0
            }}
            animate={{ 
              x: [30, 150, 320, 370],
              y: [180 + (i * 8), 170 + (Math.sin(i * 0.3) * 20), 155 + (Math.sin(i * 0.6) * 15), 140 + (i * 3)],
              scale: [0, 0.8, 1, 0],
              opacity: [0, 0.6, 0.4, 0]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: i * 0.4 + 1,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* AI Processing Indicators */}
        <div className="absolute top-4 right-4 space-y-2">
          <motion.div 
            className="flex items-center space-x-2 bg-white/15 rounded-full px-4 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-sm text-white/90 font-medium">AI Processing</span>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-2 bg-white/15 rounded-full px-4 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
          >
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/90 font-medium">Human Validated</span>
          </motion.div>
        </div>
        
        {/* Data Layer Labels */}
        <motion.div 
          className="absolute bottom-6 left-6 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="text-sm text-white/70">Raw EMR Data</div>
          <div className="text-sm text-white/90 font-medium">→ AI + Human Curation →</div>
          <div className="text-sm text-white/70">Validated Intelligence</div>
        </motion.div>
      </div>
    );
  };

  const ASCVDHeroDemo = () => {
    const riskScore = 22.4;
    const isCalculating = false;
    const showExtraction = true;
    const showRiskAssessment = true;

    return (
      <div className="relative w-full">
        {/* Main Container - Professional Healthcare Design */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200/10 overflow-hidden shadow-lg mx-4 lg:ml-0 lg:mr-0">
          {/* Clean Header */}
          <div className="bg-slate-700/30 px-6 py-3 border-b border-slate-200/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <h3 className="text-sm font-medium text-slate-200">ChartR OS - Modular Workflow</h3>
              </div>
              <span className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded-md border border-blue-400/30">
                AI + ML Components
              </span>
            </div>
          </div>

          {/* Content - Clean 4-Column Layout */}
          <div className="p-6 lg:p-8">
            <div className="grid md:grid-cols-4 gap-4 relative">
              {/* Clinical Retrieval Module */}
              <div className="hidden md:flex flex-col relative">
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-slate-300 flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-blue-400" />
                      Clinical Retrieval
                </h4>
                    <span className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded border border-blue-400/30">
                      AI Module
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">
                    AI-powered clinical note analysis & information extraction
                  </p>
                </div>
                
                {/* Arrow to next step */}
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div className="w-5 h-5 bg-emerald-500/30 rounded-full flex items-center justify-center border border-emerald-400/50">
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
                <div className="bg-slate-700/20 rounded-lg p-3 text-sm text-slate-300 leading-relaxed border border-slate-600/20">
                  <div className="mb-3 pb-3 border-b border-slate-600/30">
                    <p className="text-xs text-slate-400 mb-2">Cardiology Consultation</p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">PMH:</span> <span className="bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-xs font-medium">DM Type 2</span> x 8 years, <span className="bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-xs font-medium">HTN</span> on <span className="inline-block h-2 bg-slate-600/40 rounded w-12"></span>.
                    </p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">Recent Labs:</span> <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">TC 245</span>, <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">LDL 165</span>, <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">HDL 38</span> mg/dL.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-slate-400 mb-2">Primary Care Follow-up</p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">Social History:</span> Former <span className="bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-xs font-medium">tobacco user</span> (20 pk-yr, quit 2019).
                    </p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">Vitals:</span> BP <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">142/88</span> mmHg, HR 76 bpm.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Extraction Module */}
              <div className="flex flex-col relative">
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-slate-300 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-emerald-400" />
                      Data Extraction
                </h4>
                    <span className="text-xs text-emerald-300 bg-emerald-500/20 px-2 py-1 rounded border border-emerald-400/30">
                      AI Module
                    </span>
                          </div>
                  <p className="text-xs text-slate-400 mb-2">
                    Structured data extraction & validation pipeline
                  </p>
                            </div>
                
                {/* Arrow to next step */}
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div className="w-5 h-5 bg-purple-500/30 rounded-full flex items-center justify-center border border-purple-400/50">
                    <ArrowRight className="w-3 h-3 text-purple-400" />
                  </div>
                </div>
                <div className="bg-slate-700/20 rounded-lg p-3 border border-slate-600/20">
                  <div className="space-y-3">
                    {/* Risk Factors */}
                    <div>
                      <h5 className="text-xs font-medium text-amber-300 mb-2">Risk Factors</h5>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center bg-amber-500/20 rounded px-2 py-1 border border-amber-400/30">
                          <span className="text-amber-200 text-xs font-medium">Type 2 Diabetes</span>
                          <CheckCircle className="w-3 h-3 text-amber-300" />
                        </div>
                        <div className="flex justify-between items-center bg-amber-500/20 rounded px-2 py-1 border border-amber-400/30">
                          <span className="text-amber-200 text-xs font-medium">Hypertension</span>
                          <CheckCircle className="w-3 h-3 text-amber-300" />
                        </div>
                        <div className="flex justify-between items-center bg-amber-500/20 rounded px-2 py-1 border border-amber-400/30">
                          <span className="text-amber-200 text-xs font-medium">Former Smoker</span>
                          <CheckCircle className="w-3 h-3 text-amber-300" />
                        </div>
                      </div>
                    </div>

                    {/* Lab Values */}
                    <div>
                      <h5 className="text-xs font-medium text-blue-300 mb-2">Lab Values</h5>
                      <div className="space-y-1">
                        <div className="bg-blue-500/20 rounded px-2 py-1 border border-blue-400/30">
                          <div className="text-blue-200 text-xs font-medium">TC: 245 mg/dL</div>
                        </div>
                        <div className="bg-blue-500/20 rounded px-2 py-1 border border-blue-400/30">
                          <div className="text-blue-200 text-xs font-medium">LDL: 165 mg/dL</div>
                        </div>
                        <div className="bg-blue-500/20 rounded px-2 py-1 border border-blue-400/30">
                          <div className="text-blue-200 text-xs font-medium">HDL: 38 mg/dL</div>
                        </div>
                        <div className="bg-blue-500/20 rounded px-2 py-1 border border-blue-400/30">
                          <div className="text-blue-200 text-xs font-medium">BP: 142/88 mmHg</div>
                        </div>
                                            </div>
                    </div>
                  </div>
                  
                  {/* Color Legend - Subtle */}
                  <div className="mt-3 pt-3 border-t border-slate-200/50 dark:border-slate-600/30">
                    <div className="flex items-center justify-center space-x-4 text-[9px]">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-emerald-300/70 dark:bg-emerald-700/50 rounded"></div>
                        <span className="text-slate-600 dark:text-slate-400">Procedures</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-amber-300/70 dark:bg-amber-700/50 rounded"></div>
                        <span className="text-slate-600 dark:text-slate-400">Conditions</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-300/70 dark:bg-blue-700/50 rounded"></div>
                        <span className="text-slate-600 dark:text-slate-400">Measurements</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ASCVD Risk Calculator Module */}
              <div className="flex flex-col relative">
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-slate-300 flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2 text-purple-400" />
                      Risk Calculator
                    </h4>
                    <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded border border-purple-400/30">
                      ML Component
                    </span>
          </div>
                  <p className="text-xs text-slate-400 mb-2">
                    ASCVD risk computation using validated models
                  </p>
                </div>
                
                {/* Arrow to next step */}
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div className="w-5 h-5 bg-rose-500/30 rounded-full flex items-center justify-center border border-rose-400/50">
                    <ArrowRight className="w-3 h-3 text-rose-400" />
                  </div>
                </div>
                <div className="bg-slate-700/20 rounded-lg p-3 border border-slate-600/20">
                  <div className="space-y-3">
                    {/* Risk Score Display */}
                    <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-400/30">
                      <h5 className="text-xs font-medium text-purple-300 mb-2">10-Year ASCVD Risk</h5>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-200 mb-1">{riskScore}%</div>
                        <div className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded">High Risk</div>
                      </div>
                    </div>

                    {/* Model Info */}
                    <div className="bg-slate-600/20 rounded p-2 border border-slate-500/30">
                      <div className="text-xs text-slate-400">
                        <div className="mb-1">• AHA/ACC Guidelines</div>
                        <div className="mb-1">• Pooled Cohort Equations</div>
                        <div>• Risk Enhancement Factors</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinical Recommendations Module */}
              <div className="flex flex-col">
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-slate-300 flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-rose-400" />
                      Recommendations
                    </h4>
                    <span className="text-xs text-rose-300 bg-rose-500/20 px-2 py-1 rounded border border-rose-400/30">
                      AI Process
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">
                    Guideline retrieval + AI processing for personalized care
                  </p>
                </div>
                
                <div className="bg-slate-700/20 rounded-lg p-3 border border-slate-600/20">
                  <div className="space-y-3">
                    {/* Clinical Recommendations */}
                    <div className="bg-emerald-500/20 rounded-lg p-3 border border-emerald-400/30">
                      <h5 className="text-xs font-medium text-emerald-300 mb-2">Clinical Actions</h5>
                      <div className="space-y-1.5">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div className="text-emerald-200 text-xs">
                            <span className="font-medium">High-intensity statin</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div className="text-emerald-200 text-xs">
                            <span className="font-medium">BP target &lt;130/80</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div className="text-emerald-200 text-xs">
                            <span className="font-medium">Lifestyle modifications</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Process Steps */}
                    <div className="bg-slate-600/20 rounded p-2 border border-slate-500/30">
                      <div className="text-xs text-slate-400">
                        <div className="mb-1">• Guideline database query</div>
                        <div className="mb-1">• Patient-specific analysis</div>
                        <div>• Personalized recommendations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modular Workflow Explanation */}
            <div className="mt-6 p-4 bg-slate-600/10 rounded-lg border border-slate-500/20">
              <div className="text-center">
                <h5 className="text-sm font-medium text-slate-800 dark:text-slate-300 mb-2">Modular AI/ML Architecture</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Each component operates independently as a specialized AI module, enabling flexible workflows and custom integrations across different clinical specialties and use cases.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };

  const PowerfulHeroVisual = () => {
    const [isStructured, setIsStructured] = useState(false);
    
    useEffect(() => {
      // Play animation once after a short delay, then stay in structured state
      const timeout = setTimeout(() => {
        setIsStructured(true);
      }, 3500); // 3.5 second delay before transitioning to structured state
      
      return () => clearTimeout(timeout);
    }, []);

    // Detect if the hero section is inline with header (≈lg breakpoint ≥ 1024px)
    const [isInline, setIsInline] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 1024px)');
      const handler = (e?: MediaQueryListEvent) => {
        setIsInline(e ? e.matches : mediaQuery.matches);
      };
      handler(); // set initial value
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    // Unstructured clinical interactions (left side) - Red/Purple/Orange shades (cluttered)
    const unstructuredData = [
      { icon: Building2, color: 'text-red-400', bg: 'bg-red-500/20' }, // Hospital
      { icon: Clipboard, color: 'text-orange-400', bg: 'bg-orange-500/20' }, // Clipboard
      { icon: Stethoscope, color: 'text-purple-400', bg: 'bg-purple-500/20' }, // Stethoscope
      { icon: Users, color: 'text-red-500', bg: 'bg-red-600/20' }, // People (multiple)
      { icon: Activity, color: 'text-orange-500', bg: 'bg-orange-600/20' }, // Activity
      { icon: Database, color: 'text-purple-500', bg: 'bg-purple-600/20' }, // Database
    ];

    // Structured extracted data (right side) - Green/Blue shades (clean)
    const structuredData = [
      { icon: User, color: 'text-emerald-400', bg: 'bg-emerald-500/20' }, // People (single)
      { icon: FileCheck, color: 'text-cyan-400', bg: 'bg-cyan-500/20' }, // Verified notes with check mark
      { icon: TestTube, color: 'text-teal-400', bg: 'bg-teal-500/20' }, // Beakers/labs
      { icon: Pill, color: 'text-blue-400', bg: 'bg-blue-500/20' }, // Pills (medication)
      { icon: HeartPulse, color: 'text-cyan-400', bg: 'bg-cyan-500/20' }, // Heart-pulse
      { icon: Dna, color: 'text-sky-400', bg: 'bg-sky-500/20' }, // DNA
    ];

    return (
      <div className={`relative w-full ${isInline ? 'h-96 sm:h-[28rem] lg:h-96' : 'h-80 sm:h-96'}`}>
        {/* Clinical Notes to Structured Data */}
        <div className={`absolute inset-0 ${isInline ? 'p-8 sm:p-12' : 'p-6 sm:p-8'}`}>
            {/* Medical Data Icons */}
            {[...Array(25)].map((_, i) => {
              const chaoticX = isInline ? Math.random() * 25 + 8 : Math.random() * 25 + 8; // Narrower when inline
              const chaoticY = isInline ? Math.random() * 50 + 15 : Math.random() * 55 + 10; // Wider vertical spread when stacked
              
              // Structured positioning: 5-column grid on right side with better spacing
              // Each row: Person -> FileCheck -> Other icons (TestTube, Pill, HeartPulse)
              const col = i % 5;
              const row = Math.floor(i / 5);
              const structuredX = isInline ? col * 10 + 88 : col * 9 + 62; // +10% column gap inline, +9% stacked, moved right 1 inch when inline
              const structuredY = isInline ? row * 11 + 22 : row * 9 + 26; // +11% row gap inline, +9% stacked, increased Y offset when not inline
              // Use different icon sets for chaotic vs structured states
              const chaoticNoteType = unstructuredData[i % unstructuredData.length];
              
              // For structured state, organize by column position
              let structuredNoteType;
              if (col === 0) {
                structuredNoteType = structuredData[0]; // User (person)
              } else if (col === 1) {
                structuredNoteType = structuredData[1]; // FileCheck (verified)
              } else {
                // Cycle through the remaining icons (TestTube, Pill, HeartPulse) - removed Dna
                structuredNoteType = structuredData[2 + ((col - 2) % 3)];
              }
              
              const noteType = isStructured ? structuredNoteType : chaoticNoteType;
              
              return (
                <motion.div
                  key={i}
                  className={`absolute w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${noteType.bg} border border-white/10`}
                  animate={{
                    left: isStructured ? `${structuredX}%` : `${chaoticX}%`,
                    top: isStructured ? `${Math.min(structuredY, 85)}%` : `${chaoticY}%`,
                    scale: isStructured ? 1 : [0.8, 1.2, 0.8],
                    rotate: isStructured ? 0 : [0, 360, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: i * 0.03
                  }}
                >
                  <noteType.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${noteType.color}`} />
                </motion.div>
              );
            })}

            {/* Enhanced Connecting Lines for Structured State */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                  <stop offset="50%" stopColor="rgba(147, 51, 234, 0.8)" />
                  <stop offset="100%" stopColor="rgba(20, 184, 166, 0.8)" />
                </linearGradient>
              </defs>
              
              {isStructured && [...Array(6)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M 10% ${15 + i * 8}% L 90% ${15 + i * 8}%`}
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0"
                  animate={{ opacity: [0, 1, 1] }}
                  transition={{ duration: 1.5, delay: 2 + i * 0.15 }}
                />
              ))}
            </svg>

            {/* Enhanced Central Logo with Professional Animations */}
            <div className={`absolute top-1/2 z-10 ${isInline ? 'left-[70%] transform -translate-x-1/2 -translate-y-1/2' : 'left-1/2 transform -translate-x-1/2 -translate-y-1/2'}`}>
              <motion.div
                className="relative flex flex-col items-center"
                animate={{ 
                  scale: isStructured ? [1, 1.08, 1.03] : 1
                }}
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                {/* Animated background glow */}
                <motion.div 
                  className="absolute -inset-8 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-teal-500/40 rounded-full blur-2xl"
                  animate={{ 
                    opacity: isStructured ? [0.6, 0.9, 0.7] : 0.3,
                    scale: isStructured ? [1, 1.1, 1.05] : 1
                  }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                
                <motion.img 
                  src="/logo.svg" 
                  alt="ChartR Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  animate={{
                    scale: isStructured ? [1, 1.05, 1.02] : 1,
                    filter: isStructured ? 
                      ['brightness(1)', 'brightness(1.2)', 'brightness(1.1)', 'brightness(1)'] : 
                      'brightness(1)',
                    opacity: isStructured ? [1, 0.9, 1, 0.95, 1] : 1
                  }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                
                {/* Removed ChartR AI Layer Text */}
              </motion.div>
            </div>

            {/* Enhanced State Labels - Always Visible with Glow States */}
            <motion.div
              className={`absolute bottom-6 text-sm sm:text-base text-white bg-gradient-to-r from-slate-600/80 to-slate-700/80 px-3 sm:px-4 py-2 sm:py-3 rounded-xl backdrop-blur-sm border border-slate-400/30 shadow-lg max-w-[38%] sm:max-w-[40%] lg:max-w-none ${isInline ? 'left-4' : 'left-2 sm:left-6 lg:left-8'}`}
              animate={{ 
                opacity: !isStructured ? 1 : (isInline ? 0 : 0.4),
                scale: !isStructured ? 1 : (isInline ? 0.9 : 0.95),
                boxShadow: !isStructured ? 
                  "0 0 20px rgba(248, 113, 113, 0.3), 0 0 40px rgba(248, 113, 113, 0.1)" : 
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}
              style={{ display: isInline && isStructured ? 'none' : 'block' }}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${!isStructured ? 'bg-red-400 animate-pulse' : 'bg-red-400/50'}`}></div>
                <span className="font-medium text-xs sm:text-sm lg:text-base">Unstructured EMR Data</span>
              </div>
            </motion.div>

            <motion.div
              className={`absolute bottom-6 text-sm sm:text-base text-white bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-teal-600/80 px-3 sm:px-4 py-2 sm:py-3 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg ${isInline ? 'max-w-none left-[83%] whitespace-nowrap' : 'max-w-[38%] sm:max-w-[40%] lg:max-w-none right-2 sm:right-6 lg:right-8'}`}
              animate={{ 
                opacity: isStructured ? 1 : (isInline ? 0 : 0.4),
                scale: isStructured ? 1 : (isInline ? 0.9 : 0.95),
                boxShadow: isStructured ? 
                  "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)" : 
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}
              style={{ display: isInline && !isStructured ? 'none' : 'block' }}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isStructured ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-400/50'}`}></div>
                <span className="font-medium text-xs sm:text-sm lg:text-base">Curated Clinical Data</span>
              </div>
            </motion.div>
          </div>
      </div>
    );
  };

  const PreOperativeRiskDemo = () => {
    const [selectedModules, setSelectedModules] = useState(['cardiac', 'pulmonary', 'preop-planning']);
    const [showModuleSelector, setShowModuleSelector] = useState(false);
    const [showWorkflowSettings, setShowWorkflowSettings] = useState(false);
    const [showBuildModuleModal, setShowBuildModuleModal] = useState(false);
    const moduleSelectorRef = useRef<HTMLDivElement>(null);
    const workflowSettingsRef = useRef<HTMLDivElement>(null);
    
    const iconColorMap = {
      rose: 'bg-rose-100 dark:bg-rose-900/30',
      blue: 'bg-blue-100 dark:bg-blue-900/30',
      purple: 'bg-purple-100 dark:bg-purple-900/30',
      amber: 'bg-amber-100 dark:bg-amber-900/30',
      red: 'bg-red-100 dark:bg-red-900/30',
      cyan: 'bg-cyan-100 dark:bg-cyan-900/30',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30',
      orange: 'bg-orange-100 dark:bg-orange-900/30'
    };
    
    const textColorMap = {
      rose: 'text-rose-700 dark:text-rose-400',
      blue: 'text-blue-700 dark:text-blue-400',
      purple: 'text-purple-700 dark:text-purple-400',
      amber: 'text-amber-700 dark:text-amber-400',
      red: 'text-red-700 dark:text-red-400',
      cyan: 'text-cyan-700 dark:text-cyan-400',
      emerald: 'text-emerald-700 dark:text-emerald-400',
      orange: 'text-orange-700 dark:text-orange-400'
    };
    
    const availableModules = [
      { id: 'cardiac', name: 'Cardiac Risk', icon: Heart, color: 'rose' },
      { id: 'pulmonary', name: 'Pulmonary Risk', icon: Activity, color: 'blue' },
      { id: 'nsqip', name: 'ACS NSQIP Calculator', icon: Calculator, color: 'purple' },
      { id: 'frailty', name: 'Frailty Assessment', icon: Users, color: 'amber' },
      { id: 'bleeding', name: 'Bleeding Risk', icon: Droplet, color: 'red' },
      { id: 'renal', name: 'Renal Risk', icon: Beaker, color: 'cyan' },
      { id: 'preop-planning', name: 'Pre-Operative Planning', icon: ClipboardCheck, color: 'emerald' },
      { id: 'dvt', name: 'DVT Risk Assessment', icon: Flag, color: 'orange' }
    ];

    const toggleModule = (moduleId: string) => {
      setSelectedModules(prev => 
        prev.includes(moduleId) 
          ? prev.filter(id => id !== moduleId)
          : [...prev, moduleId]
    );
  };

  // Calculate dynamic risk scores based on selected modules
  const calculateRiskScores = () => {
    const riskData = {
      cardiac: { score: '15.3%', level: 'Elevated', recommendation: 'Cardiology consult, Beta-blockers' },
      pulmonary: { score: '8.2%', level: 'Moderate', recommendation: 'Pulmonary function tests' },
      nsqip: { score: '12.4%', level: 'High', recommendation: 'Optimize medical conditions' },
      frailty: { score: '4/7', level: 'Pre-frail', recommendation: 'PT evaluation, nutrition' },
      bleeding: { score: '22%', level: 'High', recommendation: 'Hold anticoagulation' },
      renal: { score: '18%', level: 'Moderate', recommendation: 'Nephrology consult' },
      'preop-planning': { 
        score: '2/3', 
        level: 'In Progress', 
        recommendation: 'DVT prophylaxis pending', 
        items: [
          { name: 'Patient is NPO', status: 'completed', icon: CheckCircle },
          { name: 'Anesthesia Clearance', status: 'completed', icon: CheckCircle },
          { name: 'DVT Prophylaxis', status: 'pending', icon: selectedModules.includes('dvt') ? Flag : AlertTriangle, note: selectedModules.includes('dvt') ? 'Order DVT prophylaxis' : 'Add DVT Risk Module' }
        ]
      },
      dvt: { score: '18%', level: 'Moderate', recommendation: 'Add Lovenox 40 mg SQ daily' }
    };

    const activeRisks = selectedModules.map(moduleId => ({
      moduleId,
      ...riskData[moduleId as keyof typeof riskData]
    }));

    // Determine overall risk based on selected modules
    const hasHighRisk = activeRisks.some(risk => risk.level === 'High' || risk.level === 'Elevated');
    const hasModerateRisk = activeRisks.some(risk => risk.level === 'Moderate' || risk.level === 'Pre-frail');
    
    let overallLevel = 'Low';
    if (hasHighRisk) overallLevel = 'High';
    else if (hasModerateRisk) overallLevel = 'Moderate';

    return { activeRisks, overallLevel };
  };

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close dropdowns if modal is open
      if (showBuildModuleModal) return;
      
      if (moduleSelectorRef.current && !moduleSelectorRef.current.contains(event.target as Node)) {
        setShowModuleSelector(false);
      }
      if (workflowSettingsRef.current && !workflowSettingsRef.current.contains(event.target as Node)) {
        setShowWorkflowSettings(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showBuildModuleModal]);

  return (
      <div className="relative w-full">
        {/* Main Container - Professional Healthcare Design */}
        <div className="relative bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-200/10 overflow-hidden shadow-lg">
          {/* Enhanced Header with Module Controls */}
          <div className="bg-slate-100/50 dark:bg-slate-700/30 px-6 py-3 border-b border-slate-200/30 dark:border-slate-200/10 hidden md:flex">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.svg" 
                  alt="ChartR Logo" 
                  className="w-5 h-5"
                />
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-200">Surgical Pre-Operative Risk Assessment</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowWorkflowSettings(!showWorkflowSettings)}
                  className="flex items-center space-x-1 px-2 py-1 bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 dark:bg-slate-700/50 dark:hover:bg-slate-600/50 dark:text-slate-300 text-xs rounded-md border border-slate-300/50 dark:border-slate-600/50 transition-all"
                >
                  <Settings className="w-3 h-3" />
                  <span>Workflow Settings</span>
                </button>
              </div>
            </div>
          </div>

          {/* Workflow Settings Dropdown */}
          {showWorkflowSettings && (
            <motion.div 
              ref={workflowSettingsRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-14 right-6 z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-600/50 shadow-2xl p-4 min-w-[250px]"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-medium text-slate-700 dark:text-slate-300">Workflow Settings</h4>
                <button
                  onClick={() => setShowWorkflowSettings(false)}
                  className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-2">
                <button
                  className="w-full flex items-center p-2 rounded-lg border border-slate-200/50 dark:border-slate-600/30 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">Edit Variables</span>
                </button>

                                  <button
                    onClick={() => {
                      setShowBuildModuleModal(true);
                      setShowWorkflowSettings(false);
                    }}
                    className="w-full flex items-center p-2 rounded-lg border border-slate-200/50 dark:border-slate-600/30 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span className="text-xs font-medium">Build New Module</span>
                  </button>
                <button
                  className="w-full flex items-center p-2 rounded-lg border border-slate-200/50 dark:border-slate-600/30 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">Set Up Continuous Learning</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Module Selector Dropdown */}
          {showModuleSelector && (
            <div 
              ref={moduleSelectorRef}
              className="absolute right-6 top-16 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-50"
            >
              <div className="p-3 border-b border-slate-200 dark:border-slate-700">
                <h4 className="text-sm font-medium text-slate-900 dark:text-white">Available Modules</h4>
              </div>
              <div className="p-2 max-h-64 overflow-y-auto">
                {availableModules.filter(m => !selectedModules.includes(m.id)).map(module => (
                  <button
                    key={module.id}
                    onClick={() => {
                      toggleModule(module.id);
                      setShowModuleSelector(false);
                    }}
                    className="w-full flex items-center space-x-3 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconColorMap[module.color as keyof typeof iconColorMap]}`}>
                      <module.icon className={`w-4 h-4 ${textColorMap[module.color as keyof typeof textColorMap]}`} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-slate-900 dark:text-white">{module.name}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {module.id === 'dvt' && 'Recommended for pre-op planning'}
                        {module.id === 'nsqip' && 'Comprehensive surgical risk'}
                        {module.id === 'frailty' && 'Assess functional status'}
                        {module.id === 'bleeding' && 'Bleeding risk assessment'}
                        {module.id === 'renal' && 'Kidney function assessment'}
                        {module.id === 'preop-planning' && 'Comprehensive pre-op checklist'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content - Adaptive Layout */}
          <div className="p-6 lg:p-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Clinical Notes - Enhanced for Surgery */}
              <div className="hidden md:flex flex-col relative flex-1 md:max-w-2xl">
                <h4 className="text-xs font-medium text-slate-800 dark:text-slate-300 mb-2 flex items-center">
                  <FileText className="w-3 h-3 mr-1 text-blue-400" />
                  Clinical Retrieval
                </h4>
                
                {/* Arrow to next step */}
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="bg-slate-100/50 dark:bg-slate-700/20 rounded-lg p-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-200/50 dark:border-slate-600/20 h-full">
                  <div className="mb-2 pb-2 border-b border-slate-200/50 dark:border-slate-600/30">
                    <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-1 font-medium">Surgical Consultation</p>
                    <p className="mb-1">
                      <span className="text-slate-700 dark:text-slate-300 text-[10px]">Procedure:</span> <span className="bg-emerald-100/70 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 px-1 py-0.5 rounded text-[10px] font-medium">Laparoscopic Gastrectomy</span>
                    </p>
                    <p className="mb-1">
                      <span className="text-slate-700 dark:text-slate-300 text-[10px]">PMH:</span> <span className="bg-amber-100/70 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 px-1 py-0.5 rounded text-[10px] font-medium">CAD</span>, <span className="bg-amber-100/70 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 px-1 py-0.5 rounded text-[10px] font-medium">COPD</span>, <span className="bg-amber-100/70 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 px-1 py-0.5 rounded text-[10px] font-medium">DM Type 2</span>
                    </p>
                    <div className="space-y-0.5 mt-1">
                      <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="mb-2 pb-2 border-b border-slate-200/50 dark:border-slate-600/30">
                    <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-1 font-medium">Pre-Op Assessment</p>
                    <div className="space-y-0.5 mb-1">
                      <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                      <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded w-5/6"></div>
                    </div>
                    <p className="mb-1">
                      <span className="text-slate-700 dark:text-slate-300 text-[10px]">Functional Status:</span> <span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">METs &lt;4</span>
                    </p>
                    <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                  </div>
                  
                  {/* EMR Lab Values */}
                  <div>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-1 font-medium">EMR Labs (03/14/24)</p>
                    <div className="space-y-0.5 text-[9px]">
                      <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                      <p><span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">Creatinine 1.8 mg/dL</span></p>
                      <p><span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">Hemoglobin 10.2 g/dL</span></p>
                      <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                      <p><span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">HbA1c 8.4%</span></p>
                      <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                      <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                      <p><span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">BNP 342 pg/mL</span></p>
                      <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Extraction - Enhanced */}
              <div className="flex flex-col relative flex-1 md:max-w-2xl">
                <h4 className="text-xs font-medium text-slate-800 dark:text-slate-300 mb-2 flex items-center">
                  <Database className="w-3 h-3 mr-1 text-purple-400" />
                  Data Mapping
                </h4>
                
                {/* Arrow to next step */}
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </div>
                
                <div className="bg-slate-100/50 dark:bg-slate-700/20 rounded-lg p-3 border border-slate-200/50 dark:border-slate-600/20 h-full">
                  <div className="space-y-2">
                    {/* Surgical Factors */}
                    <div>
                      <h5 className="text-[10px] font-medium text-slate-700 dark:text-slate-300 mb-1">Surgical Factors</h5>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center bg-emerald-50/70 dark:bg-emerald-900/10 rounded px-2 py-1 border border-emerald-300/50 dark:border-emerald-700/30">
                          <span className="text-emerald-800 dark:text-emerald-300 text-[10px] font-medium">Non-cardiac Surgery</span>
                          <CheckCircle className="w-2.5 h-2.5 text-emerald-700 dark:text-emerald-400" />
                        </div>
                        <div className="flex justify-between items-center bg-emerald-50/70 dark:bg-emerald-900/10 rounded px-2 py-1 border border-emerald-300/50 dark:border-emerald-700/30">
                          <span className="text-emerald-800 dark:text-emerald-300 text-[10px] font-medium">ASA Class III</span>
                          <CheckCircle className="w-2.5 h-2.5 text-emerald-700 dark:text-emerald-400" />
                        </div>
                      </div>
                    </div>

                    {/* Medical History Mappings */}
                    <div>
                      <h5 className="text-[10px] font-medium text-slate-700 dark:text-slate-300 mb-1">Risk Factors</h5>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center bg-amber-50/70 dark:bg-amber-900/10 rounded px-2 py-1 border border-amber-300/50 dark:border-amber-700/30">
                          <span className="text-amber-800 dark:text-amber-300 text-[10px] font-medium">Ischemic Heart Disease</span>
                          <CheckCircle className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                        </div>
                        <div className="flex justify-between items-center bg-amber-50/70 dark:bg-amber-900/10 rounded px-2 py-1 border border-amber-300/50 dark:border-amber-700/30">
                          <span className="text-amber-800 dark:text-amber-300 text-[10px] font-medium">Insulin-dependent DM</span>
                          <CheckCircle className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                        </div>
                        <div className="flex justify-between items-center bg-amber-50/70 dark:bg-amber-900/10 rounded px-2 py-1 border border-amber-300/50 dark:border-amber-700/30">
                          <span className="text-amber-800 dark:text-amber-300 text-[10px] font-medium">COPD (Active)</span>
                          <CheckCircle className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                        </div>
                        <div className="flex justify-between items-center bg-amber-50/70 dark:bg-amber-900/10 rounded px-2 py-1 border border-amber-300/50 dark:border-amber-700/30">
                          <span className="text-amber-800 dark:text-amber-300 text-[10px] font-medium">Chronic Kidney Disease</span>
                          <CheckCircle className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Functional Status */}
                    <div>
                      <h5 className="text-[10px] font-medium text-slate-700 dark:text-slate-300 mb-1">Functional Status</h5>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center bg-blue-50/70 dark:bg-blue-900/10 rounded px-2 py-0.5 border border-blue-300/50 dark:border-blue-700/30">
                          <span className="text-blue-800 dark:text-blue-300 text-[10px]">Mobility</span>
                          <span className="text-blue-800 dark:text-blue-300 text-[10px] font-medium">Limited</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Lab Abnormalities */}
                    <div>
                      <h5 className="text-[10px] font-medium text-slate-700 dark:text-slate-300 mb-1">Lab Abnormalities</h5>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center bg-rose-50/70 dark:bg-rose-900/10 rounded px-2 py-0.5 border border-rose-300/50 dark:border-rose-700/30">
                          <span className="text-rose-800 dark:text-rose-300 text-[10px]">Renal Function</span>
                          <span className="text-rose-800 dark:text-rose-300 text-[10px] font-medium">Impaired</span>
                        </div>
                        <div className="flex justify-between items-center bg-blue-50/70 dark:bg-blue-900/10 rounded px-2 py-0.5 border border-blue-300/50 dark:border-blue-700/30">
                          <span className="text-blue-800 dark:text-blue-300 text-[10px]">Anemia</span>
                          <span className="text-blue-800 dark:text-blue-300 text-[10px] font-medium">Moderate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrated AI Modules - Dynamic Display */}
              <div className="flex flex-col w-full md:w-[300px]">
                <h4 className="text-xs font-medium text-slate-800 dark:text-slate-300 mb-2 flex items-center">
                  <BarChart3 className="w-3 h-3 mr-1 text-violet-400" />
                  Integrated Modules
                </h4>
                <div className="bg-slate-100/50 dark:bg-slate-700/20 rounded-lg p-3 border border-slate-200/50 dark:border-slate-600/20">
                  <div className="grid grid-cols-2 gap-2">
                    {selectedModules.map(moduleId => {
                      const module = availableModules.find(m => m.id === moduleId);
                      if (!module) return null;

                      // Module-specific risk displays
                      const riskData = {
                        cardiac: { score: '15.3%', level: 'Elevated', recommendation: 'Cardiology consult, Beta-blockers' },
                        pulmonary: { score: '8.2%', level: 'Moderate', recommendation: 'Pulmonary function tests' },
                        nsqip: { score: '12.4%', level: 'High', recommendation: 'Optimize medical conditions' },
                        frailty: { score: '4/7', level: 'Pre-frail', recommendation: 'PT evaluation, nutrition' },
                        bleeding: { score: '22%', level: 'High', recommendation: 'Hold anticoagulation' },
                        renal: { score: '18%', level: 'Moderate', recommendation: 'Nephrology consult' },
                        'preop-planning': { 
                          score: '2/3', 
                          level: 'In Progress', 
                          recommendation: 'DVT prophylaxis pending', 
                          items: [
                            { name: 'Patient is NPO', status: 'completed', icon: CheckCircle },
                            { name: 'Anesthesia Clearance', status: 'completed', icon: CheckCircle },
                            { name: 'DVT Prophylaxis', status: 'pending', icon: selectedModules.includes('dvt') ? Flag : AlertTriangle, note: selectedModules.includes('dvt') ? 'Order DVT prophylaxis' : 'Add DVT Risk Module' }
                          ]
                        },
                        dvt: { score: '18%', level: 'Moderate', recommendation: 'Add Lovenox 40 mg SQ daily' }
                      };

                      const data = riskData[moduleId as keyof typeof riskData];
                      const Icon = module.icon;
                      const colorClasses = 'from-slate-100/50 to-slate-200/50 dark:from-slate-700/30 dark:to-slate-600/30 border-slate-300/50 dark:border-slate-600/50';

                      if (moduleId === 'preop-planning' && 'items' in data) {
                        return (
                          <motion.div
                            key={moduleId}
                            className={`bg-gradient-to-br ${colorClasses} border rounded-lg p-3 relative col-span-2`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <button
                              onClick={() => toggleModule(moduleId)}
                              className="absolute top-1 right-1 p-0.5 hover:bg-slate-200/50 rounded transition-colors"
                            >
                              <X className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                            </button>
                            
                            <div className="flex items-center space-x-2 mb-2">
                                                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${iconColorMap[module.color as keyof typeof iconColorMap]}`}>
                              <Icon className={`w-3 h-3 ${textColorMap[module.color as keyof typeof textColorMap]}`} />
                            </div>
                              <h5 className="text-[10px] font-medium text-slate-900 dark:text-white">{module.name}</h5>
                            </div>
                            
                            <div className="space-y-1">
                              {('items' in data && data.items) && data.items.map((item: any, idx: number) => {
                                const ItemIcon = item.icon;
                                return (
                                  <div key={idx} className="flex items-center justify-between text-[10px]">
                                    <div className="flex items-center space-x-1">
                                      <ItemIcon className={`w-3 h-3 ${item.status === 'completed' ? 'text-emerald-600' : item.name === 'DVT Prophylaxis' ? (selectedModules.includes('dvt') ? 'text-orange-600' : 'text-red-600') : 'text-orange-600'}`} />
                                      <span className="text-slate-700 dark:text-slate-300">{item.name}</span>
                                    </div>
                                    {item.note && (
                                      <span className={`text-[9px] font-medium ${item.name === 'DVT Prophylaxis' ? (selectedModules.includes('dvt') ? 'text-orange-600 dark:text-orange-400' : 'text-red-600 dark:text-red-400') : 'text-orange-600 dark:text-orange-400'}`}>{item.note}</span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        );
                      }

                      return (
                        <motion.div
                          key={moduleId}
                          className={`bg-gradient-to-br ${colorClasses} border rounded-lg p-3 relative`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <button
                            onClick={() => toggleModule(moduleId)}
                            className="absolute top-1 right-1 p-0.5 hover:bg-slate-200/50 rounded transition-colors"
                          >
                            <X className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                          </button>
                          
                          <div className="flex items-center space-x-1 mb-1">
                            <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${iconColorMap[module.color as keyof typeof iconColorMap]}`}>
                              <Icon className={`w-3 h-3 ${textColorMap[module.color as keyof typeof textColorMap]}`} />
                            </div>
                            <h5 className="text-[10px] font-medium text-slate-900 dark:text-white">{module.name}</h5>
                          </div>
                          
                          <div className="text-center mb-1">
                            <div className="text-sm font-bold text-slate-900 dark:text-white">{data.score}</div>
                            <div className={`text-[10px] font-medium ${
                              data.level === 'High' || data.level === 'Elevated' 
                                ? 'text-rose-700 dark:text-rose-400' 
                                : data.level === 'Moderate' || data.level === 'Pre-frail'
                                  ? 'text-amber-700 dark:text-amber-400'
                                  : 'text-slate-700 dark:text-slate-300'
                            }`}>{data.level} Risk</div>
                          </div>
                          <div className="text-[10px] text-slate-600 dark:text-slate-400">
                            <span className="font-medium text-slate-700 dark:text-slate-300">Action:</span> {data.recommendation}
                          </div>
                        </motion.div>
                      );
                    })}
                    
                    {/* Add Module Card */}
                    {selectedModules.length < availableModules.length && (
                      <motion.button
                        onClick={() => setShowModuleSelector(true)}
                        className="bg-slate-100/50 dark:bg-slate-700/30 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 border-2 border-dashed border-slate-200/50 dark:border-slate-600/50 hover:border-violet-500/50 rounded-lg p-4 flex flex-col items-center justify-center transition-all min-h-[100px]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Plus className="w-5 h-5 text-violet-400 mb-1" />
                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Add Modules</span>
                      </motion.button>
                    )}
                  </div>


                </div>
              </div>
            </div>
            
            {/* ChartrOS Integrated Summary - Horizontal Section */}
            <div className="mt-6 pt-6 border-t border-slate-300/30 dark:border-slate-600/30">
              <div className="bg-slate-50 dark:bg-slate-800/30 rounded-lg p-4 border border-slate-200 dark:border-slate-700/50">
                <h5 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                  <Layers className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                  ChartrOS Guideline-Directed Recommendations
                </h5>
                <div className="space-y-3">
                  {(() => {
                    const { overallLevel } = calculateRiskScores();
                    const isHighRisk = overallLevel === 'High';
                    const isModerateRisk = overallLevel === 'Moderate';
                    
                    return (
                      <>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-2 flex-1">
                            {isHighRisk ? (
                              <AlertTriangle className="w-4 h-4 text-rose-500 dark:text-rose-400 mt-0.5 flex-shrink-0" />
                            ) : (
                              <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <div className={`text-sm ${isHighRisk ? 'text-rose-700 dark:text-rose-300' : 'text-amber-700 dark:text-amber-300'}`}>
                                <span className="font-medium">
                                  {isHighRisk 
                                    ? "High risk - consider postponing surgery" 
                                    : isModerateRisk 
                                      ? "Proceed with caution - optimize risk factors" 
                                      : "Acceptable risk - proceed with standard care"
                                  }
                                </span>
                                <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                                  {isHighRisk 
                                    ? "Multiple high-risk factors requiring optimization before surgery"
                                    : isModerateRisk 
                                      ? "Several risk factors identified requiring pre-operative optimization"
                                      : "Patient appears to be at acceptable risk for surgery"
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <button 
                            className="ml-3 px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-md text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors flex items-center space-x-1 group cursor-pointer"
                          >
                            <Eye className="w-3 h-3" />
                            <span>View</span>
                          </button>
                        </div>
                        {isModerateRisk && selectedModules.includes('cardiac') && (
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-2 flex-1">
                              <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <div className="text-amber-700 dark:text-amber-300 text-sm">
                                  <span className="font-medium">Cardiology clearance recommended</span>
                                  <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                                    Beta-blocker therapy and cardiac optimization
                                  </p>
                                </div>
                              </div>
                            </div>
                            <button 
                              className="ml-3 px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-md text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors flex items-center space-x-1 group cursor-pointer"
                            >
                              <Eye className="w-3 h-3" />
                              <span>View</span>
                            </button>
                          </div>
                        )}
                                                {selectedModules.includes('preop-planning') && (
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-2 flex-1">
                              {selectedModules.includes('dvt') ? (
                                <Flag className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500 dark:text-orange-400" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500 dark:text-red-400" />
                              )}
                              <div className="flex-1">
                                <div className={`text-sm ${selectedModules.includes('dvt') ? 'text-orange-700 dark:text-orange-300' : 'text-red-700 dark:text-red-300'}`}>
                                  <span className="font-medium">
                                    {selectedModules.includes('dvt') ? 'Order DVT prophylaxis' : 'Needs DVT Prophylaxis Assessment'}
                                  </span>
                                  <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                                    {selectedModules.includes('dvt') 
                                      ? 'Risk assessment complete - recommend Lovenox 40 mg SQ daily'
                                      : 'Consider adding DVT Risk Assessment module for complete evaluation'
                                    }
                                  </p>
                                </div>
                              </div>
                            </div>
                            <button 
                              className="ml-3 px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-md text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors flex items-center space-x-1 group cursor-pointer"
                            >
                              <Eye className="w-3 h-3" />
                              <span>View</span>
                            </button>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Build Module Modal - Rendered outside main container */}
        {showBuildModuleModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/30"
              onClick={() => setShowBuildModuleModal(false)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg mx-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 px-6 py-4 border-b border-slate-200/30 dark:border-slate-700/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Build Custom AI Models</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">with ChartrOS</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowBuildModuleModal(false)}
                    className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Use ChartrOS to create AI models unique to your patient population and practice - with built-in ML tools for no-code development. Choose from our templates or design your own:
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { icon: Target, title: 'Risk Assessment Models', desc: 'Custom scoring algorithms for your specialty' },
                    { icon: Users, title: 'Clinical Triage Algorithms', desc: 'Intelligent patient prioritization systems' },
                    { icon: ClipboardCheck, title: 'Treatment Planning Tools', desc: 'Evidence-based care pathway automation' },
                    { icon: BarChart3, title: 'Quality Metrics Tracking', desc: 'Outcome monitoring and benchmarking' }
                  ].map((template, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50/50 dark:bg-slate-700/30 border border-slate-200/30 dark:border-slate-600/30">
                      <div className="w-8 h-8 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <template.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm">{template.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{template.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Ready to build? Contact our team to get started.
                  </p>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all transform hover:scale-105 inline-block"
                  >
                    Contact Team
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    );
  };

  const ChartrOSControlCenter = () => {
    return (
      <div className="relative w-full max-w-xl mx-auto">
        {/* Workflow Builder Interface */}
        <div className="bg-white/90 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700/50 overflow-hidden shadow-xl">
          {/* Header */}
          <div className="bg-slate-100 dark:bg-slate-800/80 px-6 py-3 border-b border-slate-200 dark:border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {/* ChartR Logo */}
                <img 
                  src="/logo.svg" 
                  alt="ChartR Logo" 
                  className="w-6 h-6"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Live</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">

            <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 flex items-center">
              <Layers className="w-3 h-3 mr-1 text-teal-600 dark:text-teal-400" />
              Deployed Workflows
            </h4>
            
            {/* Workflow Cards */}
            <div className="space-y-2">
              {/* Cardiovascular Risk Assessment */}
              <motion.div 
                className="bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-700/30 dark:to-slate-600/30 border border-slate-300/50 dark:border-slate-600/50 rounded-lg p-3 hover:from-slate-200/50 hover:to-slate-300/50 dark:hover:from-slate-600/30 dark:hover:to-slate-500/30 transition-all cursor-pointer"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-teal-500/30 dark:bg-teal-500/25 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                        <span>Pre-Operative Risk Assessment</span>
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">AI-powered surgical risk stratification with real-time monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-teal-700 dark:text-teal-300 font-medium">Active</span>
                  </div>
                </div>
                
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs font-bold text-teal-600 dark:text-teal-400">12</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Integrated Models</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-teal-600 dark:text-teal-400">8.4K</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Uses</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-teal-600 dark:text-teal-400">347</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">High Risk Events</div>
                  </div>
                </div>

              </motion.div>

              {/* Medicare Advantage Coding */}
              <motion.div 
                className="bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-700/30 dark:to-slate-600/30 border border-slate-300/50 dark:border-slate-600/50 rounded-lg p-3 hover:from-slate-200/50 hover:to-slate-300/50 dark:hover:from-slate-600/30 dark:hover:to-slate-500/30 transition-all cursor-pointer"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-cyan-500/30 dark:bg-cyan-500/25 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                        <span>CMS HOQR and HIQR Reporting</span>
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Hospital Quality Reporting • Real-time Processing</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 bg-cyan-500 rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs text-cyan-700 dark:text-cyan-300 font-medium">Processing</span>
                  </div>
                </div>
                
                <div className="bg-slate-200/70 dark:bg-slate-700/30 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-600 dark:text-slate-400">Q1 2025 Batch Processing</span>
                    <span className="text-xs text-cyan-700 dark:text-cyan-400 font-medium">67%</span>
                  </div>
                  <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-2">
                    <motion.div 
                      className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "67%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-slate-500 dark:text-slate-500">
                    <span>42,381 records complete</span>
                    <span>ETA: 14 min</span>
                  </div>
                </div>
              </motion.div>

              {/* Sepsis Screening */}
              <motion.div 
                className="bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-700/30 dark:to-slate-600/30 border border-slate-300/50 dark:border-slate-600/50 rounded-lg p-3 hover:from-slate-200/50 hover:to-slate-300/50 dark:hover:from-slate-600/30 dark:hover:to-slate-500/30 transition-all cursor-pointer group"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-blue-400/30 dark:bg-blue-400/25 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                        <span>Early Sepsis Detection</span>
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Real-time ED Monitoring • 15-min intervals</p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">Ready</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    <span className="text-slate-900 dark:text-white font-medium">98.7%</span> sensitivity • 
                    <span className="text-slate-900 dark:text-white font-medium"> 94.2%</span> specificity
                  </div>
                  <button className="px-3 py-1.5 bg-blue-400/30 dark:bg-blue-400/20 hover:bg-blue-400/40 dark:hover:bg-blue-400/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium transition-colors group-hover:bg-blue-400/40 dark:group-hover:bg-blue-400/30">
                    Deploy →
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Add New Workflow - Improved Design */}
            <motion.div 
              className="mt-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 dark:from-emerald-500/5 dark:to-blue-500/5 border-2 border-dashed border-emerald-500/30 dark:border-emerald-500/20 rounded-lg p-3 hover:border-emerald-500/50 hover:from-emerald-500/15 hover:to-blue-500/15 dark:hover:from-emerald-500/8 dark:hover:to-blue-500/8 transition-all cursor-pointer group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-slate-300/50 dark:bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                    <span className="text-lg text-slate-600 dark:text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">+</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      Deploy New AI Workflow
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                      Choose from 50+ pre-built templates or create custom solutions
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-500 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative">
      {/* Sophisticated background gradient that flows throughout */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pointer-events-none" />
      
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/8 dark:bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/8 dark:bg-purple-500/3 rounded-full blur-3xl" />
        
        {/* Very subtle grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Sophisticated Hero Background */}
        <div className="absolute inset-0 bg-white" />
        
        {/* Animated Neural Network Background */}
        <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Animated connection lines */}
            <g stroke="url(#networkGradient)" strokeWidth="1" fill="none">
              {[...Array(6)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M${100 + i * 180},150 Q${200 + i * 180},${250 + i * 30} ${300 + i * 180},200 T${500 + i * 180},180`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </g>
            
            {/* Network nodes */}
            {[...Array(12)].map((_, i) => (
              <motion.circle
                key={i}
                cx={100 + (i % 4) * 300}
                cy={150 + Math.floor(i / 4) * 200}
                r="4"
                fill="url(#networkGradient)"
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10">
          <div className="lg:flex lg:items-center">
            {/* Left Column - Text Content - Constrained */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-12 lg:pr-8 lg:w-1/2 pt-24">
              {/* ChartR Badge */}
              <motion.div 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-400/30 dark:border-indigo-400/20 rounded-full px-6 py-3 backdrop-blur-sm mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotateY: [0, 180, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Layers className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-indigo-700 dark:text-indigo-300 inter text-sm font-medium">AI-Enhanced Clinical Intelligence</span>
              </motion.div>

              {/* Hero Tagline */}
              <motion.h1 
                className="text-5xl md:text-[3.5rem] lg:text-[3.5rem] font-bold text-slate-900 mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Your Clinical Workflows,<br />
                 <span className="text-transparent bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text font-extrabold drop-shadow-sm">
                  Transformed with AI
                </span>
              </motion.h1>
              
              {/* Enhanced Subtitle */}
              <motion.p 
                className="text-lg text-slate-800 font-medium leading-relaxed max-w-2xl mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
               Turn unstructured EMR data into AI-powered workflows. Streamline compliance, support clinical decision-making, and improve patient outcomes — all without writing a single line of code.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/contact?tab=demo">
                  <button className="group px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
                    <span>Schedule a Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Visual with background bar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-12 lg:mt-0 lg:flex-1 lg:pl-16 px-4 sm:px-6 lg:px-0 pt-24 lg:pt-24 relative"
            >
              {/* Background color bar on the right */}
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-100/50 to-transparent dark:from-slate-900/50 pointer-events-none"></div>
              
              {/* Constrained graphic container */}
              <div className="relative z-10 max-w-2xl">
                <ChartrOSControlCenter />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introducing ChartrOS - Full-Width Accent Section */}
      <section className="pt-20 pb-20 relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced Introducing Badge - More Prominent */}
            <motion.div 
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/25 to-cyan-500/25 dark:from-emerald-500/20 dark:to-cyan-500/20 border-2 border-emerald-400/50 dark:border-emerald-400/40 rounded-full px-8 py-4 shadow-2xl shadow-emerald-500/30 dark:shadow-emerald-500/20">
                <div className="relative">
                  <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <div className="absolute inset-0 animate-ping">
                    <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400 opacity-75" />
                  </div>
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Introducing ChartrOS
                </span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              The Industry's First
              <br />
              <span className="text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text">
                AI-Native Healthcare OS
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto chartr-body">
              A flexible operating system that works seamlessly with your existing EMR and technology stack to power any healthcare AI use case - from building new models to integration at the point of care.
            </p>
          </motion.div>

          {/* Platform Architecture - Floating Design */}
          <motion.div 
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Architecture Flow */}
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Input Sources */}
                <div className="space-y-4">
                  <h3 className="text-sm text-center font-semibold text-slate-900 dark:text-slate-400 uppercase tracking-wider mb-4">Data Sources</h3>
                  <div className="space-y-3">
                    <motion.div 
                      className="bg-slate-100 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-600/50 rounded-lg p-4 hover:border-blue-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-slate-200">EMR Systems</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Epic, Cerner, Legacy Data</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-100 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-600/50 rounded-lg p-4 hover:border-purple-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        <div>
                          <div className="font-medium text-slate-800 dark:text-slate-200">Existing AI Abstraction Tools</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Seamless vendor integration</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-100 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-600/50 rounded-lg p-4 hover:border-amber-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        <div>
                          <div className="font-medium text-slate-800 dark:text-slate-200">Scientific Literature</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Evidence-based Practice</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-100 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-600/50 rounded-lg p-4 hover:border-teal-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        <div>
                          <div className="font-medium text-slate-800 dark:text-slate-200">Clinical Guidelines</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Real-Time Updates</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* ChartrOS Core - Center */}
                <div className="relative">
                  {/* Enhanced Connection Lines with Bezier Curves */}
                  <div className="absolute inset-0 -left-8 -right-8">
                    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
                        </linearGradient>
                        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
                          <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
                          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
                        </linearGradient>
                        <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(20, 184, 166, 0)" />
                          <stop offset="50%" stopColor="rgba(20, 184, 166, 0.5)" />
                          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
                        </linearGradient>
                        <linearGradient id="lineGradientOut1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                          <stop offset="50%" stopColor="rgba(16, 185, 129, 0.5)" />
                          <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                        </linearGradient>
                        <linearGradient id="lineGradientOut2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                        </linearGradient>
                        <linearGradient id="lineGradientOut3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                          <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
                          <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                        </linearGradient>
                      </defs>
                      
                      {/* Continuous animated paths from Data Sources through ChartrOS to Modular AI Workflows */}
                      <motion.path 
                        d="M 50 50 Q 150 60 200 150 Q 280 240 350 250" 
                        stroke="url(#lineGradient1)" 
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M 50 150 Q 120 150 200 150 Q 280 150 350 150" 
                        stroke="url(#lineGradient2)" 
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.7, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M 50 250 Q 150 240 200 150 Q 280 60 350 50" 
                        stroke="url(#lineGradient3)" 
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
                      />
                      
                      {/* Animated dots traveling along complete paths */}
                      <circle r="4" fill="rgba(59, 130, 246, 0.6)">
                        <animateMotion
                          dur="6s"
                          repeatCount="indefinite"
                          begin="1.5s"
                        >
                          <mpath href="#completePath1" />
                        </animateMotion>
                      </circle>
                      <circle r="4" fill="rgba(168, 85, 247, 0.6)">
                        <animateMotion
                          dur="6s"
                          repeatCount="indefinite"
                          begin="2s"
                        >
                          <mpath href="#completePath2" />
                        </animateMotion>
                      </circle>
                      <circle r="4" fill="rgba(20, 184, 166, 0.6)">
                        <animateMotion
                          dur="6s"
                          repeatCount="indefinite"
                          begin="2.5s"
                        >
                          <mpath href="#completePath3" />
                        </animateMotion>
                      </circle>
                      
                      {/* Define complete paths for dots to follow */}
                      <path id="completePath1" d="M 50 50 Q 150 60 200 150 Q 280 240 350 250" fill="none" />
                      <path id="completePath2" d="M 50 150 Q 120 150 200 150 Q 280 150 350 150" fill="none" />
                      <path id="completePath3" d="M 50 250 Q 150 240 200 150 Q 280 60 350 50" fill="none" />
                    </svg>
                  </div>
                  
                  <motion.div 
                    className="relative bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-400/30 p-8 backdrop-blur-sm h-64 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {/* Top Left Badge */}
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/20 text-slate-800 dark:text-white rounded-full text-xs border border-cyan-400/30"
                      initial={{ opacity: 0, x: -20, y: -20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      AI Agents
                    </motion.div>

                    {/* Top Right Badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/20 text-slate-800 dark:text-white rounded-full text-xs border border-cyan-400/30"
                      initial={{ opacity: 0, x: 20, y: -20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      Retrieval Layer
                    </motion.div>

                    {/* Bottom Left Badge */}
                    <motion.div
                      className="absolute bottom-4 left-4 px-3 py-1 bg-cyan-500/20 text-slate-800 dark:text-white rounded-full text-xs border border-cyan-400/30"
                      initial={{ opacity: 0, x: -20, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Auto RLHF
                    </motion.div>

                    {/* Bottom Right Badge */}
                    <motion.div
                      className="absolute bottom-4 right-4 px-3 py-1 bg-cyan-500/20 text-slate-800 dark:text-white rounded-full text-xs border border-cyan-400/30"
                      initial={{ opacity: 0, x: 20, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                    Smart Review
                    </motion.div>

                    {/* Centered Logo and Title */}
                    <div className="text-center">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                      >
                        <img src="/logo.svg" alt="ChartR" className="w-10 h-10 brightness-0 invert" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-semibold text-slate-900 dark:text-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        ChartrOS
                      </motion.h3>
                    </div>
                  </motion.div>
                </div>

                {/* Output Modules */}
                <div className="space-y-4">
                  <h3 className="text-sm text-center font-semibold text-slate-900 dark:text-slate-400 uppercase tracking-wider mb-4">Robust Applications</h3>
                  <div className="space-y-3">
                    <motion.div 
                      className="bg-gradient-to-r from-[#0FE3C2]/10 to-[#0FE3C2]/20 border border-[#0FE3C2]/30 rounded-lg p-4 hover:border-[#0FE3C2]/50 transition-all"
                      whileHover={{ x: -4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Heart className="w-5 h-5 text-[#0FE3C2]" />
                        <div>
                                                  <div className="font-medium text-slate-900 dark:text-slate-200">Risk Assessment</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Pre-Op, Sepsis, Readmission</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-[#4EA9FF]/10 to-[#4EA9FF]/20 border border-[#4EA9FF]/30 rounded-lg p-4 hover:border-[#4EA9FF]/50 transition-all"
                      whileHover={{ x: -4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <FileCheck className="w-5 h-5 text-[#4EA9FF]" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-slate-200">Regulatory Reporting</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">CMS Quality Measures, Registries</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-[#7E88F6]/10 to-[#7E88F6]/20 border border-[#7E88F6]/30 rounded-lg p-4 hover:border-[#7E88F6]/50 transition-all"
                      whileHover={{ x: -4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-[#7E88F6]" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-slate-200">Patient Screening</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Clinical Trials, Care Gaps</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-[#3A6C82]/10 to-[#3A6C82]/20 border border-[#3A6C82]/30 rounded-lg p-4 hover:border-[#3A6C82]/50 transition-all"
                      whileHover={{ x: -4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-[#3A6C82]" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-slate-200">Referral Triage</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Priority Classification</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>


        </div>
      </section>

      {/* Modular AI Infrastructure - Asymmetric Layout */}
      <section className="pt-20 pb-20 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="w-full px-4 sm:px-4 lg:px-12">
          <div className="grid lg:grid-cols-7 gap-8 items-center">
            {/* Left: Content - More Compact */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Experience
                <span className="text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text"> ChartrOS</span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 chartr-body">
                Turn your <i>system of record</i> into a <b className="text-black dark:text-white">system of action</b>.
              </p>

              {/* Feature List - Compact */}
              <div className="space-y-5">
                <motion.div 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-500/25 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/35 dark:group-hover:bg-cyan-500/30 transition-colors">
                      <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 mt-0.5 flex-shrink-0 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Works With What You Have</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 chartr-body">
                        Connects to your EMR and existing technology stack without disruption.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-500/25 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/35 dark:group-hover:bg-cyan-500/30 transition-colors">
                      <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 mt-0.5 flex-shrink-0 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Enterprise-Grade Security</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 chartr-body">
                        HIPAA-compliant platform with role-based access control and audit trails.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-500/25 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/35 dark:group-hover:bg-cyan-500/30 transition-colors">
                      <Target className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 mt-0.5 flex-shrink-0 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Intelligent Source Retrieval</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 chartr-body">
                        Proprietary, clinically-grounded retrieval layer.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-500/25 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/35 dark:group-hover:bg-cyan-500/30 transition-colors">
                      <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 mt-0.5 flex-shrink-0 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Human-Validated</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 chartr-body">
                        Clinician review in every critical step.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-500/25 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/35 dark:group-hover:bg-cyan-500/30 transition-colors">
                      <Settings className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 mt-0.5 flex-shrink-0 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Modular Workflow Builder</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 chartr-body">
                        Configure and deploy custom workflows for any department or use case.
                      </p>
                    </div>
                  </div>
                </motion.div>


              </div>

              {/* CTA Button - Compact */}
              <div className="mt-8">
                <Link href="/contact">
                  <motion.button 
                    className="group px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Interactive Demo - Much Wider */}
            <motion.div
              className="lg:col-span-4 relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-none">
                <PreOperativeRiskDemo />
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* How We Are Different Section */}
      <section className="pt-20 pb-20 relative overflow-hidden bg-white dark:bg-slate-950">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Decorative Circle - Top Right */}
          <motion.div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-2 border-emerald-500/20 dark:border-emerald-400/20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Inner geometric pattern */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-emerald-500/5 to-cyan-500/10 dark:from-emerald-400/5 dark:to-cyan-400/10">
              {/* Hexagon pattern inside */}
              <div className="absolute inset-0 rounded-full">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="hexPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <polygon 
                        points="10,2 18,7 18,13 10,18 2,13 2,7" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="0.5"
                        className="text-emerald-500/30 dark:text-emerald-400/30"
                      />
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="url(#hexPattern)" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Medium Decorative Circle - Bottom Left */}
          <motion.div
            className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full border border-cyan-500/15 dark:border-cyan-400/15"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/8 dark:from-cyan-400/5 dark:to-blue-400/8">
              {/* Triangle pattern inside */}
              <div className="absolute inset-0 rounded-full">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="trianglePattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                      <polygon 
                        points="7.5,2 13,11 2,11" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="0.5"
                        className="text-cyan-500/25 dark:text-cyan-400/25"
                      />
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="url(#trianglePattern)" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 right-1/4 w-8 h-8 border border-emerald-500/30 dark:border-emerald-400/30 rotate-45"
            animate={{
              y: [0, -10, 0],
              rotate: [45, 90, 45],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-32 right-1/3 w-6 h-6 rounded-full border border-cyan-500/40 dark:border-cyan-400/40"
            animate={{
              y: [0, 8, 0],
              x: [0, -5, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute top-1/3 left-1/4 w-10 h-10 border border-blue-500/25 dark:border-blue-400/25"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            animate={{
              y: [0, -8, 0],
              rotate: [0, 15, 0],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header - More refined */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small accent badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700"></div>
              <span className="tracking-widest text-xs">Why ChartrOS</span>
              <div className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700"></div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              How We Are
              <span className="text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text"> Different</span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto chartr-body leading-relaxed">
              Purpose-built for healthcare's unique challenges, ChartrOS reimagines clinical AI integration.
            </p>
          </motion.div>

          {/* Key Differentiators - Layer Health Style Interactive Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
                         {/* Left Side: Numbered List */}
             <div className="space-y-3">
               {[
                 {
                   number: "1",
                   title: "Best-in-Class Clinical Retrieval",
                   icon: Target
                 },
                 {
                   number: "2", 
                   title: "No-Code AI Integration",
                   icon: Layers
                 },
                 {
                   number: "3",
                   title: "No Vendor Lock-In", 
                   icon: Network
                 },
                 {
                   number: "4",
                   title: "Your AI, Your Way",
                   icon: Cpu
                 },
                 {
                   number: "5",
                   title: "Built-in RLHF and Machine Learning Tools",
                   icon: TrendingUp
                 },
                 {
                   number: "6",
                   title: "Human-AI Integration",
                   icon: Users
                 }
               ].map((item, index) => (
                 <motion.div
                   key={index}
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
                       ? 'border-green-200 dark:border-green-700 bg-green-50/50 dark:bg-green-900/20' 
                       : 'border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50/50 dark:hover:bg-slate-800/50'
                   }`}>
                     {/* Number */}
                     <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                       selectedFeature === index 
                         ? 'bg-green-100 dark:bg-green-800' 
                         : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                     }`}>
                       <span className={`text-sm font-semibold ${
                         selectedFeature === index 
                           ? 'text-green-700 dark:text-green-300' 
                           : 'text-slate-700 dark:text-slate-300'
                       }`}>
                         {item.number}
                       </span>
                     </div>
                     
                     {/* Content */}
                     <div className="flex-1">
                       <h3 className={`text-sm font-medium transition-colors ${
                         selectedFeature === index 
                           ? 'text-green-900 dark:text-green-100' 
                           : 'text-slate-900 dark:text-white group-hover:text-slate-800 dark:group-hover:text-slate-200'
                       }`}>
                         {item.title}
                       </h3>
                     </div>
                     
                     {/* Icon */}
                     <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                       selectedFeature === index 
                         ? 'bg-green-100 dark:bg-green-800' 
                         : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                     }`}>
                       <item.icon className={`w-3 h-3 ${
                         selectedFeature === index 
                           ? 'text-green-600 dark:text-green-400' 
                           : 'text-slate-600 dark:text-slate-400'
                       }`} />
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>

                         {/* Right Side: Clean Detail Panel */}
             <div className="sticky top-8">
               <motion.div
                 key={selectedFeature}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4 }}
                 className="space-y-6"
               >
                 {selectedFeature === 0 && (
                   <div>
                     <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                       Best-in-Class Clinical Retrieval
                     </h3>
                     
                     <ul className="space-y-4">
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Identify the most relevant clinical notes to power any clinical use case
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Enable smarter validation and auditing, with in-built source highlighting
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Longitudinal patient chart analysis with physician-level reasoning
                         </span>
                       </li>
                     </ul>
                   </div>
                 )}

                 {selectedFeature === 1 && (
                   <div>
                     <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                       No-Code AI Integration
                     </h3>
                     
                     <ul className="space-y-4">
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Deploy in days, not months, with pre-built templates and intuitive interfaces
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Drag-and-drop configuration, no coding required
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Seamless integration with existing clinical workflows
                         </span>
                       </li>
                     </ul>
                   </div>
                 )}

                 {selectedFeature === 2 && (
                   <div>
                     <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                       No Vendor Lock-In
                     </h3>
                     
                     <ul className="space-y-4">
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Works alongside your existing AI tools - enhance rather than replace
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Flexible architecture adapts to your technology choices
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           API-first architecture with multi-cloud deployment options
                         </span>
                       </li>
                     </ul>
                   </div>
                 )}

                 {selectedFeature === 3 && (
                   <div>
                     <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                       Your AI, Your Way
                     </h3>
                     
                     <ul className="space-y-4">
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Integrate ML models and fine-tuned LLMs to power complex clinical workflows
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Run your models in our secure environment with advanced tools
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Custom model deployment with fine-tuning capabilities
                         </span>
                       </li>
                     </ul>
                   </div>
                 )}

                 {selectedFeature === 4 && (
                   <div>
                     <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                       Built-in RLHF and Machine Learning Tools
                     </h3>
                     
                     <ul className="space-y-4">
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Continuously improve models to reflect your patients and your practice
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Built-in ML and data visualization to design and test your own models
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Reinforcement learning from human feedback with automated retraining
                         </span>
                       </li>
                     </ul>
                   </div>
                 )}

                 {selectedFeature === 5 && (
                   <div>
                     <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                       Human-AI Integration
                     </h3>
                     
                     <ul className="space-y-4">
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Route critical outputs to human reviewers for validation and auditing
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           ChartR Smart Review and confidence flagging enhances data accuracy
                         </span>
                       </li>
                       <li className="flex items-start space-x-3">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                         <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           Automated confidence scoring with human-in-the-loop validation
                         </span>
                       </li>
                     </ul>
                   </div>
                 )}
               </motion.div>
             </div>
          </div>


        </div>
      </section>

      {/* Solutions for Every Stakeholder - Professional Market Cards */}
      <section className="pt-20 pb-20 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Solutions for Every Stakeholder
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Hospitals */}
              <motion.div
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-emerald-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 dark:group-hover:bg-emerald-500/30 transition-colors">
                  <Building2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Hospitals</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Automate compliance reporting and reduce audit preparation by 80%.
                </p>
                <Link
                  href="/solutions/hospitals"
                  className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  View Solutions →
                </Link>
              </motion.div>

              {/* Registries */}
              <motion.div
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 dark:group-hover:bg-cyan-500/30 transition-colors">
                  <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Registries</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Extract validated data 50x faster with 99%+ accuracy for submissions.
                </p>
                <Link
                  href="/solutions/medical-societies"
                  className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                >
                  View Solutions →
                </Link>
              </motion.div>

              {/* Clinicians */}
              <motion.div
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors">
                  <Stethoscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Clinicians</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Support patient care with workflows for planning, triage, and guideline-based therapy.
                </p>
                <Link
                  href="/solutions/hospitals"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View Solutions →
                </Link>
              </motion.div>

              {/* Researchers */}
              <motion.div
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 dark:group-hover:bg-purple-500/30 transition-colors">
                  <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Researchers</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Database building, outcomes research, and clinical trial enrollment.
                </p>
                <Link
                  href="/solutions/hospitals"
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  View Solutions →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Demo Sections */}
      <DataExtractionDemo />

      {/* CTA Section */}
      <section className="pt-12 pb-16 relative overflow-hidden bg-white dark:bg-slate-950">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-slate-100/40 dark:from-transparent dark:via-slate-900/30 dark:to-slate-800/40" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading with Enhanced Typography */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-tight">
                Ready to{' '}
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-transparent bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text">
                    transform
                  </span>
                  {/* Highlight effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-lg blur-sm -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
                {' '}your clinical workflows?
              </h2>
              
              {/* CTA Button with Professional Design */}
              <div className="flex justify-center">
                <Link href="/contact">
                  <motion.button 
                    className="group px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 relative overflow-hidden text-sm border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        
        {/* Floating icons */}
        <motion.div 
          className="absolute top-20 left-20 w-8 h-8 text-emerald-400/30"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className="w-full h-full" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-20 w-6 h-6 text-cyan-400/30"
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Shield className="w-full h-full" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 border-t-2 border-slate-300 dark:border-slate-700 relative z-10">
        <div className="w-full px-4 sm:px-4 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Left: Logo and Copyright */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                © 2025 Health Inc.
              </p>
            </div>

            {/* Right: Address and LinkedIn */}
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-sm text-slate-600 dark:text-slate-400 text-left md:text-right">
                251 Little Falls Drive<br />
                Wilmington, DE 19808
              </div>
              
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/company/chartr-health"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage 