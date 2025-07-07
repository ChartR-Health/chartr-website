'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import DataExtractionDemo from '@/components/demos/DataExtractionDemo'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, BarChart3, Layers, Database, FileText, Building, GraduationCap, Building2, DollarSign, Clock, Shield, Zap, TrendingUp, Users, Target, Network, Cpu, Activity, Heart, Brain, Pill, TestTube, Stethoscope, Clipboard, User, FileCheck, Dna, HeartPulse, CheckCircle, BookOpen, AlertTriangle, Plus, X, Calculator, Droplet, Beaker } from 'lucide-react'

const Homepage = () => {

  const stats = [
    { label: 'Annual Hospital Regulatory Spend', value: '$7.5M+', description: 'Per hospital on compliance reporting' },
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
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.1)",
                  "0 0 0 8px rgba(255, 255, 255, 0)",
                  "0 0 0 0 rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
                <h3 className="text-sm font-medium text-slate-200">ASCVD Risk Assessment</h3>
              </div>
              <span className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded-md border border-blue-400/30">
                Enhanced by ChartrOS
              </span>
            </div>
          </div>

          {/* Content - Clean 3-Column Layout */}
          <div className="p-6 lg:p-8">
            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Clinical Notes - Minimal Design */}
              <div className="flex flex-col relative">
                <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-blue-400" />
                  Clinical Retrieval
                </h4>
                
                {/* Arrow to next step */}
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center border border-emerald-400/30">
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
                <div className="bg-slate-700/20 rounded-lg p-4 text-sm text-slate-300 leading-relaxed border border-slate-600/20">
                  <div className="mb-3 pb-3 border-b border-slate-600/30">
                    <p className="text-xs text-slate-400 mb-2">Cardiology Consultation</p>
                    {/* Heavily redacted with only key medical data visible */}
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">PMH:</span> <span className="bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-xs font-medium">DM Type 2</span> x 8 years, <span className="bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-xs font-medium">HTN</span> on <span className="inline-block h-2 bg-slate-600/40 rounded w-16"></span>.
                    </p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">Recent Labs:</span> <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">TC 245</span>, <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">LDL-C 165</span>, <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">HDL-C 38</span> mg/dL, <span className="inline-block h-2 bg-slate-600/40 rounded w-12"></span>.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-slate-400 mb-2">Primary Care Follow-up</p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">Social History:</span> Former <span className="bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-xs font-medium">tobacco user</span> (20 pk-yr, quit 2019). <span className="inline-block h-2 bg-slate-600/40 rounded w-16"></span>.
                    </p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">Vitals:</span> BP <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">142/88</span> mmHg, HR 76 bpm, <span className="inline-block h-2 bg-slate-600/40 rounded w-20"></span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Extraction - Subtle Animation */}
              <div className="flex flex-col relative">
                <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-emerald-400" />
                  Data Extraction
                </h4>
                
                {/* Arrow to next step */}
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center border border-violet-400/30">
                    <ArrowRight className="w-3 h-3 text-violet-400" />
                  </div>
                </div>
                <div className="bg-slate-700/20 rounded-lg p-4 border border-slate-600/20">
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
                          <div className="text-blue-200 text-xs font-medium">Total Cholesterol: 245 mg/dL</div>
                        </div>
                        <div className="bg-blue-500/20 rounded px-2 py-1 border border-blue-400/30">
                          <div className="text-blue-200 text-xs font-medium">LDL-C: 165 mg/dL</div>
                        </div>
                        <div className="bg-blue-500/20 rounded px-2 py-1 border border-blue-400/30">
                          <div className="text-blue-200 text-xs font-medium">HDL-C: 38 mg/dL</div>
                        </div>
                        <div className="bg-blue-500/20 rounded px-2 py-1 border border-blue-400/30">
                          <div className="text-blue-200 text-xs font-medium">Blood Pressure: 142/88 mmHg</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Assessment - Clean Clinical Design */}
              <div className="flex flex-col">
                <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2 text-violet-400" />
                  Evidence-Based Practice
                </h4>
                <div className="bg-slate-700/20 rounded-lg p-4 border border-slate-600/20">
                  <div className="space-y-3">
                    {/* Risk Score - Professional Display */}
                    <div className="bg-violet-500/20 rounded-lg p-3 border border-violet-400/30">
                      <h5 className="text-xs font-medium text-violet-300 mb-2">10-Year ASCVD Risk</h5>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-violet-200 mb-1">{riskScore}%</div>
                        <div className="text-xs text-violet-300 bg-violet-500/20 px-2 py-1 rounded">High Risk</div>
                      </div>
                    </div>

                    {/* Clinical Recommendations - Professional Format */}
                    <div className="bg-emerald-500/20 rounded-lg p-3 border border-emerald-400/30">
                      <h5 className="text-xs font-medium text-emerald-300 mb-2">Clinical Recommendations</h5>
                      <div className="space-y-1.5">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div className="text-emerald-200 text-xs">
                            <span className="font-medium">High-intensity statin therapy</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div className="text-emerald-200 text-xs">
                            <span className="font-medium">Blood pressure target &lt;130/80</span>
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
                  </div>
                </div>
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
                  scale: isStructured ? [1, 1.15, 1.05] : 1
                }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                {/* Animated background glow */}
                <motion.div 
                  className="absolute -inset-8 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-teal-500/40 rounded-full blur-2xl"
                  animate={{ 
                    opacity: isStructured ? [0.6, 1, 0.8] : 0.3,
                    scale: isStructured ? [1, 1.2, 1.1] : 1
                  }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                
                <motion.img 
                  src="/logo.svg" 
                  alt="ChartR Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  animate={{
                    scale: isStructured ? [1, 1.1, 1.05] : 1,
                    filter: isStructured ? 
                      ['brightness(1)', 'brightness(1.4)', 'brightness(1.2)', 'brightness(1)'] : 
                      'brightness(1)',
                    opacity: isStructured ? [1, 0.8, 1, 0.9, 1] : 1
                  }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
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
    const [selectedModules, setSelectedModules] = useState(['cardiac', 'pulmonary']);
    const [showModuleSelector, setShowModuleSelector] = useState(false);
    
    const availableModules = [
      { id: 'cardiac', name: 'Cardiac Risk (RCRI)', icon: Heart, color: 'rose' },
      { id: 'pulmonary', name: 'Pulmonary Risk', icon: Activity, color: 'blue' },
      { id: 'nsqip', name: 'ACS NSQIP Calculator', icon: Calculator, color: 'purple' },
      { id: 'frailty', name: 'Frailty Assessment', icon: Users, color: 'amber' },
      { id: 'bleeding', name: 'Bleeding Risk', icon: Droplet, color: 'red' },
      { id: 'renal', name: 'Renal Risk', icon: Beaker, color: 'cyan' }
    ];

    const toggleModule = (moduleId: string) => {
      setSelectedModules(prev => 
        prev.includes(moduleId) 
          ? prev.filter(id => id !== moduleId)
          : [...prev, moduleId]
      );
    };

    return (
      <div className="relative w-full">
        {/* Main Container - Professional Healthcare Design */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200/10 overflow-hidden shadow-lg mx-4 lg:ml-0 lg:mr-0">
          {/* Enhanced Header with Module Controls */}
          <div className="bg-slate-700/30 px-6 py-3 border-b border-slate-200/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <h3 className="text-sm font-medium text-slate-200">Surgical Pre-Operative Risk Assessment</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-emerald-300 bg-emerald-500/20 px-2 py-1 rounded-md border border-emerald-400/30">
                  Multi-Module AI Workflow
                </span>
                <button
                  onClick={() => setShowModuleSelector(!showModuleSelector)}
                  className="flex items-center space-x-1 px-2 py-1 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 text-xs rounded-md border border-violet-400/30 transition-all"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add Module</span>
                </button>
              </div>
            </div>
          </div>

          {/* Module Selector Dropdown */}
          {showModuleSelector && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-14 right-6 z-20 bg-slate-800/95 backdrop-blur-sm rounded-lg border border-slate-600/50 shadow-2xl p-4 min-w-[250px]"
            >
              <h4 className="text-xs font-medium text-slate-300 mb-3">Available AI Modules</h4>
              <div className="space-y-2">
                {availableModules.map(module => (
                  <button
                    key={module.id}
                    onClick={() => toggleModule(module.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg border transition-all ${
                      selectedModules.includes(module.id)
                        ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                        : 'bg-slate-700/30 border-slate-600/30 text-slate-400 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <module.icon className="w-4 h-4" />
                      <span className="text-xs font-medium">{module.name}</span>
                    </div>
                    {selectedModules.includes(module.id) && (
                      <CheckCircle className="w-3 h-3" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Content - Adaptive Layout */}
          <div className="p-6 lg:p-8">
            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Clinical Notes - Enhanced for Surgery */}
              <div className="flex flex-col relative">
                <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-blue-400" />
                  Clinical Retrieval
                </h4>
                
                {/* Arrow to next step */}
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center border border-emerald-400/30">
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
                <div className="bg-slate-700/20 rounded-lg p-4 text-sm text-slate-300 leading-relaxed border border-slate-600/20">
                  <div className="mb-3 pb-3 border-b border-slate-600/30">
                    <p className="text-xs text-slate-400 mb-2">Surgical Consultation</p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">Procedure:</span> <span className="bg-violet-500/30 text-violet-200 px-1.5 py-0.5 rounded text-xs font-medium">Laparoscopic Cholecystectomy</span>
                    </p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">PMH:</span> <span className="bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-xs font-medium">CAD</span>, <span className="bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-xs font-medium">COPD</span>, <span className="bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-xs font-medium">DM Type 2</span>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-slate-400 mb-2">Pre-Op Assessment</p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">Functional Status:</span> <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">METs &lt;4</span>
                    </p>
                    <p className="mb-2 text-xs">
                      <span className="text-slate-300">Labs:</span> Cr <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">1.8</span>, Hgb <span className="bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded text-xs font-medium">10.2</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Extraction - Enhanced */}
              <div className="flex flex-col relative">
                <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-emerald-400" />
                  Multi-Source Extraction
                </h4>
                
                {/* Arrow to next step */}
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center border border-violet-400/30">
                    <ArrowRight className="w-3 h-3 text-violet-400" />
                  </div>
                </div>
                <div className="bg-slate-700/20 rounded-lg p-4 border border-slate-600/20">
                  <div className="space-y-3">
                    {/* Surgical Factors */}
                    <div>
                      <h5 className="text-xs font-medium text-violet-300 mb-2">Surgical Factors</h5>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center bg-violet-500/20 rounded px-2 py-1 border border-violet-400/30">
                          <span className="text-violet-200 text-xs font-medium">Intraperitoneal Surgery</span>
                          <CheckCircle className="w-3 h-3 text-violet-300" />
                        </div>
                        <div className="flex justify-between items-center bg-violet-500/20 rounded px-2 py-1 border border-violet-400/30">
                          <span className="text-violet-200 text-xs font-medium">ASA Class III</span>
                          <CheckCircle className="w-3 h-3 text-violet-300" />
                        </div>
                      </div>
                    </div>

                    {/* Medical Factors */}
                    <div>
                      <h5 className="text-xs font-medium text-amber-300 mb-2">Medical History</h5>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center bg-amber-500/20 rounded px-2 py-1 border border-amber-400/30">
                          <span className="text-amber-200 text-xs font-medium">Ischemic Heart Disease</span>
                          <CheckCircle className="w-3 h-3 text-amber-300" />
                        </div>
                        <div className="flex justify-between items-center bg-amber-500/20 rounded px-2 py-1 border border-amber-400/30">
                          <span className="text-amber-200 text-xs font-medium">Insulin Therapy</span>
                          <CheckCircle className="w-3 h-3 text-amber-300" />
                        </div>
                        <div className="flex justify-between items-center bg-amber-500/20 rounded px-2 py-1 border border-amber-400/30">
                          <span className="text-amber-200 text-xs font-medium">Cr &gt;1.5 mg/dL</span>
                          <CheckCircle className="w-3 h-3 text-amber-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrated AI Modules - Dynamic Display */}
              <div className="flex flex-col md:col-span-2">
                <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2 text-violet-400" />
                  Integrated Risk Assessments
                </h4>
                <div className="bg-slate-700/20 rounded-lg p-4 border border-slate-600/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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
                        renal: { score: '18%', level: 'Moderate', recommendation: 'Nephrology consult' }
                      };

                      const data = riskData[moduleId as keyof typeof riskData];
                      const colorMap = {
                        rose: 'bg-rose-500/20 border-rose-400/30 text-rose-300',
                        blue: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
                        purple: 'bg-purple-500/20 border-purple-400/30 text-purple-300',
                        amber: 'bg-amber-500/20 border-amber-400/30 text-amber-300',
                        red: 'bg-red-500/20 border-red-400/30 text-red-300',
                        cyan: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300'
                      };

                      return (
                        <motion.div
                          key={moduleId}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className={`${colorMap[module.color as keyof typeof colorMap]} rounded-lg p-3 border`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-xs font-medium flex items-center">
                              <module.icon className="w-3 h-3 mr-1" />
                              {module.name}
                            </h5>
                            <button
                              onClick={() => toggleModule(moduleId)}
                              className="w-4 h-4 hover:opacity-70 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="text-center mb-2">
                            <div className="text-xl font-bold">{data.score}</div>
                            <div className="text-xs opacity-80">{data.level} Risk</div>
                          </div>
                          <div className="text-xs opacity-90">
                            <span className="font-medium">Action:</span> {data.recommendation}
                          </div>
                        </motion.div>
                      );
                    })}
                    
                    {/* Add Module Card */}
                    {selectedModules.length < availableModules.length && (
                      <motion.button
                        onClick={() => setShowModuleSelector(true)}
                        className="bg-slate-700/30 hover:bg-slate-700/50 border-2 border-dashed border-slate-600/50 hover:border-violet-500/50 rounded-lg p-6 flex flex-col items-center justify-center transition-all min-h-[120px]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Plus className="w-6 h-6 text-violet-400 mb-2" />
                        <span className="text-xs text-slate-400">Add Risk Module</span>
                      </motion.button>
                    )}
                  </div>

                  {/* Overall Risk Summary */}
                  <div className="mt-4 pt-4 border-t border-slate-600/30">
                    <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg p-3 border border-emerald-400/30">
                      <h5 className="text-xs font-medium text-emerald-300 mb-2 flex items-center">
                        <Layers className="w-3 h-3 mr-1" />
                        ChartrOS Integrated Summary
                      </h5>
                      <div className="space-y-1.5">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div className="text-emerald-200 text-xs">
                            <span className="font-medium">Proceed with caution - optimize cardiac status</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" />
                          <div className="text-amber-200 text-xs">
                            <span className="font-medium">Consider delaying for medical optimization</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
          <div className="min-h-screen bg-slate-800 text-white relative overflow-hidden">
      {/* Very subtle background gradient that flows throughout */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 pointer-events-none" />
      
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl" />
        
        {/* Very subtle grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pb-16 overflow-hidden chartr-bg-primary">
        {/* Subtle Hero Background */}
        <div className="absolute inset-0 chartr-bg-hero" />
        
        {/* Animated Neural Network Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
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
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/20 rounded-full px-6 py-3 backdrop-blur-sm mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotateY: [0, 180, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Layers className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-indigo-300 inter text-sm">AI-Enhanced Clinical Intelligence</span>
              </motion.div>

              {/* Hero Tagline */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Next-Generation<br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                  AI Infrastructure<br />For Healthcare
                </span>
              </motion.h1>
              
              {/* Enhanced Subtitle */}
              <motion.p 
                className="text-xl text-slate-300 chartr-body leading-relaxed max-w-2xl mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Leverage unstructured clinical data, build AI-powered solutions, and deploy AI-integrated clinical workflows — all on one no-code platform.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/contact?tab=demo">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white chartr-body-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Book a Demo
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Visual with background bar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-12 lg:mt-0 lg:flex-1 lg:pl-6 px-4 sm:px-6 lg:px-0 pt-24 lg:pt-24 relative"
            >
              {/* Background color bar on the right */}
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none"></div>
              
              {/* Constrained graphic container */}
              <div className="relative z-10 max-w-4xl">
                <PreOperativeRiskDemo />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introducing ChartrOS - Full-Width Accent Section */}
      <section className="pt-12 pb-24 relative chartr-bg-accent border-t border-indigo-400/10">
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
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400/40 rounded-full px-8 py-4 shadow-2xl shadow-emerald-500/20">
                <div className="relative">
                  <Cpu className="w-6 h-6 text-emerald-400" />
                  <div className="absolute inset-0 animate-ping">
                    <Cpu className="w-6 h-6 text-emerald-400 opacity-75" />
                  </div>
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Introducing ChartrOS
                </span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Industry's First
              <br />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                AI-Native Healthcare OS
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto chartr-body">
              A modular operating system that powers AI-enhanced clinical workflows.
            </p>
          </motion.div>

          {/* Platform Architecture - Floating Design */}
          <motion.div 
            className="relative max-w-5xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="chartr-bg-floating shadow-2xl p-8 md:p-12">
              {/* Architecture Flow */}
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Input Sources */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Data Sources</h3>
                  <div className="space-y-3">
                    <motion.div 
                      className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 hover:border-blue-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Database className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="font-medium text-slate-200">EMR Systems</div>
                          <div className="text-xs text-slate-400">Epic, Cerner, Legacy Data</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 hover:border-purple-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Layers className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="font-medium text-slate-200">Existing AI Abstraction Tools</div>
                          <div className="text-xs text-slate-400">Seamless vendor integration</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 hover:border-amber-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="font-medium text-slate-200">Scientific Literature</div>
                          <div className="text-xs text-slate-400">Evidence-based Practice</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 hover:border-teal-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="font-medium text-slate-200">Clinical Guidelines</div>
                          <div className="text-xs text-slate-400">Real-Time Updates</div>
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
                      className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/20 text-white rounded-full text-xs border border-cyan-400/30"
                      initial={{ opacity: 0, x: -20, y: -20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      AI Agents
                    </motion.div>

                    {/* Top Right Badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/20 text-white rounded-full text-xs border border-cyan-400/30"
                      initial={{ opacity: 0, x: 20, y: -20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      Retrieval Layer
                    </motion.div>

                    {/* Bottom Left Badge */}
                    <motion.div
                      className="absolute bottom-4 left-4 px-3 py-1 bg-cyan-500/20 text-white rounded-full text-xs border border-cyan-400/30"
                      initial={{ opacity: 0, x: -20, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Auto RLHF
                    </motion.div>

                    {/* Bottom Right Badge */}
                    <motion.div
                      className="absolute bottom-4 right-4 px-3 py-1 bg-cyan-500/20 text-white rounded-full text-xs border border-cyan-400/30"
                      initial={{ opacity: 0, x: 20, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                    Smart Review
                    </motion.div>

                    {/* Centered Logo and Title */}
                    <div className="text-center">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                      >
                        <img src="/logo.svg" alt="ChartR" className="w-10 h-10 brightness-0 invert" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-semibold text-white"
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
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Modular AI Workflows</h3>
                  <div className="space-y-3">
                    <motion.div 
                      className="bg-gradient-to-r from-[#0FE3C2]/10 to-[#0FE3C2]/20 border border-[#0FE3C2]/30 rounded-lg p-4 hover:border-[#0FE3C2]/50 transition-all"
                      whileHover={{ x: -4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Heart className="w-5 h-5 text-[#0FE3C2]" />
                        <div>
                                                  <div className="font-medium text-slate-200">Risk Assessment</div>
                        <div className="text-xs text-slate-400">Pre-Op, Sepsis, Readmission</div>
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
                          <div className="font-medium text-slate-200">Regulatory Reporting</div>
                          <div className="text-xs text-slate-400">Risk Management, QI, Registries</div>
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
                          <div className="font-medium text-slate-200">Patient Screening</div>
                          <div className="text-xs text-slate-400">Clinical Trials, Organ Donation</div>
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
                          <div className="font-medium text-slate-200">Referral Triage</div>
                          <div className="text-xs text-slate-400">Priority Classification</div>
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
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Inside</span> ChartrOS
              </h2>
              
              <p className="text-xl text-slate-300 mb-12 chartr-body">
                Deploy AI intelligence without disrupting operations.
              </p>

              {/* Feature List */}
              <div className="space-y-8">
                <motion.div 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Built for Healthcare Standards</h3>
                      <p className="text-slate-400 chartr-body">
                        Secure, HIPAA-ready, and continuously improving.
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
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Seamlessly Compatible</h3>
                      <p className="text-slate-400 chartr-body">
                        Integrates with your EMR and existing AI stack.
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
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Intelligent Retrieval Layer</h3>
                      <p className="text-slate-400 chartr-body">
                        Structured clinical insights from notes, registries, and literature.
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
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Human-Validated Workflows</h3>
                      <p className="text-slate-400 chartr-body">
                        Clinician review built into every critical step.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button 
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Demo
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Workflow Builder Interface */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="bg-slate-800/80 px-6 py-4 border-b border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
                      </div>
                      <span className="text-sm text-slate-300 font-medium">ChartrOS Control Center</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-emerald-400 font-medium">Live</span>
                      </div>
                      <span className="text-xs text-slate-500">v2.4.1</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Quick Stats Bar */}
                  <div className="flex justify-center gap-8 mb-6 pb-6 border-b border-slate-700/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-xs text-slate-400">Active Workflows</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">2.4M</div>
                      <div className="text-xs text-slate-400">Records Processed</div>
                    </div>
                  </div>

                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center">
                    <Layers className="w-4 h-4 mr-2 text-teal-400" />
                    Deployed Workflows
                  </h4>
                  
                  {/* Workflow Cards */}
                  <div className="space-y-3">
                    {/* Cardiovascular Risk Assessment */}
                    <motion.div 
                      className="bg-gradient-to-r from-teal-500/15 to-teal-600/15 border border-teal-500/40 rounded-lg p-4 hover:from-teal-500/20 hover:to-teal-600/20 transition-all cursor-pointer"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-teal-500/25 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Heart className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white flex items-center space-x-2">
                              <span>Pre-Operative Risk Suite</span>
                            </h5>
                            <p className="text-xs text-slate-400 mt-1">Multi-module AI Assessment + Clinical Guidelines</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-teal-300 font-medium">Active</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <div className="text-lg font-bold text-teal-400">99.1%</div>
                        <div className="text-xs text-slate-400">Accuracy</div>
                      </div>

                    </motion.div>

                    {/* Medicare Advantage Coding */}
                    <motion.div 
                      className="bg-gradient-to-r from-cyan-500/15 to-cyan-600/15 border border-cyan-500/40 rounded-lg p-4 hover:from-cyan-500/20 hover:to-cyan-600/20 transition-all cursor-pointer"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-cyan-500/25 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileCheck className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white flex items-center space-x-2">
                              <span>HCC Risk Adjustment</span>
                            </h5>
                            <p className="text-xs text-slate-400 mt-1">CMS-HCC v28 Model • Real-time Processing</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <motion.div
                            className="w-2 h-2 bg-cyan-400 rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-xs text-cyan-300 font-medium">Processing</span>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-slate-400">Q1 2024 Batch Processing</span>
                          <span className="text-xs text-cyan-400 font-medium">67%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div 
                            className="h-2 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "67%" }}
                            transition={{ duration: 1, delay: 0.8 }}
                          />
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] text-slate-500">
                          <span>42,381 records complete</span>
                          <span>ETA: 14 min</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Sepsis Screening */}
                    <motion.div 
                      className="bg-gradient-to-r from-blue-400/15 to-blue-500/15 border border-blue-400/40 rounded-lg p-4 hover:from-blue-400/20 hover:to-blue-500/20 transition-all cursor-pointer group"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-blue-400/25 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Activity className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white flex items-center space-x-2">
                              <span>Early Sepsis Detection</span>
                            </h5>
                            <p className="text-xs text-slate-400 mt-1">Real-time ED Monitoring • 15-min intervals</p>
                          </div>
                        </div>
                        <span className="text-xs text-blue-300 font-medium">Ready</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-400">
                          <span className="text-white font-medium">98.7%</span> sensitivity • 
                          <span className="text-white font-medium"> 94.2%</span> specificity
                        </div>
                        <button className="px-3 py-1.5 bg-blue-400/20 hover:bg-blue-400/30 text-blue-300 rounded-lg text-xs font-medium transition-colors group-hover:bg-blue-400/30">
                          Deploy →
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Add New Workflow - Improved Design */}
                  <motion.div 
                    className="mt-4 bg-gradient-to-r from-slate-700/20 to-slate-600/20 border-2 border-dashed border-slate-600/50 rounded-lg p-4 hover:border-emerald-500/50 hover:from-emerald-500/5 hover:to-blue-500/5 transition-all cursor-pointer group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                          <span className="text-2xl text-slate-400 group-hover:text-emerald-400 transition-colors">+</span>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                            Deploy New AI Workflow
                          </h5>
                          <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                            Choose from 50+ pre-built templates or create custom ones
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise-Grade AI Section - Diagonal Layout */}
      <section className="py-24 relative overflow-hidden chartr-bg-diagonal">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Enterprise-Grade Infrastructure</span> for Healthcare AI
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto chartr-body">
                Built to power diverse tools, users, and environments—on a single, unified platform.
              </p>
            </motion.div>
          </div>

          {/* Compliance & Security Badges - Vertical Stack */}
          <motion.div
            className="flex flex-col items-center space-y-8 mb-16 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-start space-x-4 w-full">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-lg chartr-body-medium text-white font-bold">Federated Learning</div>
                <div className="text-sm text-slate-400 chartr-body">Train models without moving sensitive data</div>
              </div>
            </div>
            <div className="flex items-start space-x-4 w-full">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-lg chartr-body-medium text-white font-bold">Modular + Multi-Tenant</div>
                <div className="text-sm text-slate-400 chartr-body">Power multiple teams and deployments from a single platform</div>
              </div>
            </div>
            <div className="flex items-start space-x-4 w-full">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-lg chartr-body-medium text-white font-bold">SOC 2 Type II Audited</div>
                <div className="text-sm text-slate-400 chartr-body">Verified operational and data security controls</div>
              </div>
            </div>
          </motion.div>

          {/* Key Enterprise Features - Asymmetric Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Removed Zero-Trust Architecture, Federated Learning, and Infinite Scalability cards as requested */}
          </div>
        </div>
      </section>

      {/* Live Demo Sections */}
      <DataExtractionDemo />

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Subtle gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-850/80" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
                          className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text mb-4">
              Ready to Transform
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                Your Healthcare Data?
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto chartr-body">
              Join leading healthcare organizations saving millions with ChartR's AI platform. 
              See how our <span className="text-indigo-200 chartr-body-medium">human-AI integration</span> can revolutionize your clinical data management.
            </p>
            
            {/* Enhanced Feature Highlight */}
            <motion.div 
              className="relative group max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-purple-600/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/20">
                <div className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">Leading the Future of Healthcare Intelligence</div>
                <div className="text-sm text-slate-300 chartr-body">AI-assisted, human-validated clinical data curation at scale</div>
              </div>
            </motion.div>
            
            
          </motion.div>
        </div>
        
        {/* Subtle Floating Elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-slate-400/20 rounded-full" />
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-slate-500/20 rounded-full" />
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-slate-400/20 rounded-full" />
      </section>
    </div>
  )
}

export default Homepage 