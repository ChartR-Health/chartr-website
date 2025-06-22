'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ClinicalDemo from '@/components/demos/ClinicalDemo'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, BarChart3, Layers, Database, FileText, Building, GraduationCap, Building2, DollarSign, Clock, Shield, Zap, TrendingUp, Users, Target, Network, Cpu, Activity, Heart, Brain, Pill, TestTube, Stethoscope, Clipboard, User, FileCheck, Dna, HeartPulse, CheckCircle, BookOpen } from 'lucide-react'

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
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-20 h-20 bg-green-500/15 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm border border-green-400/20">
            <BarChart3 className="w-8 h-8 text-green-400 mb-1" />
            <div className="text-xs text-green-300 font-medium text-center leading-tight">Clinical<br/>Intelligence</div>
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

  const PowerfulHeroVisual = () => {
    const [isStructured, setIsStructured] = useState(false);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setIsStructured(prev => !prev);
      }, 4000);
      return () => clearInterval(interval);
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
      { icon: FileCheck, color: 'text-green-400', bg: 'bg-green-500/20' }, // Verified notes with check mark
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
              const chaoticX = isInline ? Math.random() * 20 + 8 : Math.random() * 25 + 8; // Narrower when inline
              const chaoticY = isInline ? Math.random() * 45 + 15 : Math.random() * 55 + 10; // Wider vertical spread when stacked
              
              // Structured positioning: 5-column grid on right side with better spacing
              // Each row: Person -> FileCheck -> Other icons (TestTube, Pill, HeartPulse)
              const col = i % 5;
              const row = Math.floor(i / 5);
              const structuredX = isInline ? col * 10 + 88 : col * 9 + 62; // +10% column gap inline, +9% stacked, moved right 1 inch when inline
              const structuredY = isInline ? row * 11 + 22 : row * 9 + 18; // +11% row gap inline, +9% stacked
              
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

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-700/10 rounded-full blur-3xl" />
        
        {/* Minimal Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.01]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Subtle Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-slate-900" />
        
        {/* Animated Neural Network Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* AI + Human Healthcare Intelligence Badge */}
              <motion.div 
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-6 py-3 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center"
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
                <span className="text-blue-300 font-medium text-sm">AI + Human Healthcare Intelligence</span>
              </motion.div>

              {/* Hero Headline - Left Aligned */}
              <motion.h1 
                className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text tracking-tight leading-[1.4] pb-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <span className="whitespace-nowrap block mb-4">The AI Platform</span>
                <span className="whitespace-nowrap block mb-4">
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                    Curating Clinical Data
                  </span>
                </span>
                <span className="whitespace-nowrap block">
                  <span className="text-white">Into </span>
                  <span className="text-transparent bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text">
                    Actionable Intelligence
                  </span>
                </span>
              </motion.h1>
              
              {/* Enhanced Subtitle */}
              <motion.p 
                className="text-lg text-slate-300 font-light leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                ChartR creates the <span className="text-white font-medium">structured data layer on top of your EMR</span> - transforming your system of record into a system of action with{' '}
                <span className="text-blue-200 font-medium">
                  AI-assisted, human-validated
                </span>{' '}
                clinical databases.
              </motion.p>
            </div>

            {/* Right Column - Data Flow Animation */}
            <div className="flex justify-center lg:justify-end">
              <motion.div 
                className="w-full max-w-2xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="relative h-80">
                  <PowerfulHeroVisual />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      
      {/* Data Transformation Flow */}
      <section className="py-20 relative bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text mb-6 tracking-tight">
              From <span className="text-slate-400">System of Record</span>
              <br />
              To <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">System of Action</span>
            </h2>
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl text-slate-300 text-center leading-relaxed">
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">ChartR</span> converts fragmented EMR data into structured, clinician-ready intelligence—eliminating costly inefficiencies that drain <span className="font-bold text-red-300">$7.5M+</span> per hospital annually, consume <span className="font-bold text-orange-300">80%</span> of review time, and drive error rates as high as <span className="font-bold text-red-300">25%</span>.
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Data Flow Graphic */}
          <div className="relative max-w-6xl mx-auto">
            {/* Flow Container */}
            <div className="relative">
              {/* Animated Flow Lines */}
              <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 800 400">
                <defs>
                  <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                  <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                
                {/* First flow line */}
                <motion.path
                  d="M150,200 Q300,150 450,200"
                  stroke="url(#flowGradient1)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Second flow line */}
                <motion.path
                  d="M450,200 Q600,150 750,200"
                  stroke="url(#flowGradient2)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.5,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Data particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx="0"
                    cy="200"
                    r="4"
                    fill={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
                    opacity="0.7"
                    animate={{
                      cx: [150, 450, 750],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </svg>

              {/* Flow Stages */}
              <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
                {/* Stage 1: EMR Systems */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-slate-600/30 to-slate-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-slate-800/70 backdrop-blur-xl border border-slate-400/30 rounded-3xl p-8 text-center group-hover:scale-105 transition-all duration-500">
                    {/* Animated Icon Container */}
                    <motion.div 
                      className="w-20 h-20 bg-slate-600/50 rounded-3xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(148, 163, 184, 0.3)",
                          "0 0 40px rgba(148, 163, 184, 0.5)",
                          "0 0 20px rgba(148, 163, 184, 0.3)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                                             <Layers className="w-10 h-10 text-slate-200" />
                      {/* Data flow animation inside icon */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">EMR Systems</h3>
                    <p className="mb-4 text-slate-300 leading-relaxed">
                      Raw, unstructured clinical data - your <strong className="text-white bg-slate-700/50 px-2 py-1 rounded">system of record</strong>
                    </p>
                    <div className="text-sm text-slate-400 font-medium">Epic • Cerner • AllScripts</div>
                    
                    {/* Status indicator */}
                    <div className="flex items-center justify-center space-x-2 mt-4">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400">Unstructured Data</span>
                    </div>
                  </div>
                </motion.div>

                {/* Stage 2: ChartR Integration */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-gradient-to-br from-blue-600/40 to-purple-600/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 text-center group-hover:scale-105 transition-all duration-500 shadow-2xl">
                                         {/* Enhanced Logo Container */}
                     <motion.div 
                       className="w-24 h-24 bg-white/90 rounded-3xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-2xl"
                       animate={{ 
                         scale: [1, 1.05, 1],
                         boxShadow: [
                           "0 0 30px rgba(59, 130, 246, 0.4)",
                           "0 0 50px rgba(139, 92, 246, 0.6)",
                           "0 0 30px rgba(59, 130, 246, 0.4)"
                         ]
                       }}
                       transition={{ 
                         scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                         boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                       }}
                     >
                       <img 
                         src="/logo.svg" 
                         alt="ChartR Logo" 
                         className="w-16 h-16 relative z-10 filter drop-shadow-sm"
                       />
                       {/* Subtle processing ring */}
                       <motion.div
                         className="absolute inset-1 border border-blue-400/30 rounded-3xl"
                         animate={{ 
                           rotate: [0, 360],
                           opacity: [0.3, 0.6, 0.3]
                         }}
                         transition={{ 
                           rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                           opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                         }}
                       />
                     </motion.div>
                    
                                         <h3 className="text-2xl font-bold mb-4 text-white">ChartR Intelligence</h3>
                     <p className="mb-4 text-slate-100 leading-relaxed">
                       AI-curated, human-validated clinical databases - your <strong className="text-white bg-white/20 px-2 py-1 rounded">system of action</strong>
                     </p>
                     <div className="text-sm text-slate-200 font-medium">Structured • Actionable • Intelligent</div>
                     
                     {/* Processing indicator */}
                     <div className="flex items-center justify-center space-x-2 mt-4">
                       <motion.div 
                         className="w-2 h-2 bg-blue-400 rounded-full"
                         animate={{ scale: [1, 1.3, 1] }}
                         transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                       />
                       <span className="text-xs text-slate-200">AI Processing</span>
                     </div>
                  </div>
                </motion.div>

                {/* Stage 3: Better Outcomes */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-slate-800/70 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8 text-center group-hover:scale-105 transition-all duration-500">
                    {/* Success Icon with Animation */}
                    <motion.div 
                      className="w-20 h-20 bg-emerald-500/50 rounded-3xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(16, 185, 129, 0.3)",
                          "0 0 40px rgba(16, 185, 129, 0.5)",
                          "0 0 20px rgba(16, 185, 129, 0.3)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                                             <Target className="w-10 h-10 text-emerald-200" />
                      {/* Success ripple effect */}
                      <motion.div
                        className="absolute inset-0 border-2 border-emerald-400/40 rounded-3xl"
                        animate={{ 
                          scale: [1, 1.3, 1.6],
                          opacity: [0.6, 0.3, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                      />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">Better Outcomes</h3>
                    <p className="mb-4 text-slate-300 leading-relaxed">
                      Improved patient care, reduced costs, regulatory compliance
                    </p>
                    <div className="text-sm text-slate-400 font-medium">Evidence-Based • Efficient • Compliant</div>
                    
                    {/* Success indicator */}
                    <div className="flex items-center justify-center space-x-2 mt-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400">Actionable Results</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Connected Workflow Section */}
            <motion.div 
              className="relative mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Connection Line from ChartR */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-px h-6 bg-gradient-to-b from-blue-400/30 to-transparent"></div>
              
              {/* Workflow Container */}
              <div className="relative">
                <div className="bg-slate-800/30 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                  
                  {/* Simple Flow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-5 h-5 text-blue-300" />
                      <span className="text-sm text-slate-300">AI Extraction</span>
                    </div>
                    <div className="w-8 h-px bg-slate-600"></div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-300" />
                      <span className="text-sm text-slate-300">Human Review</span>
                    </div>
                    <div className="w-8 h-px bg-slate-600"></div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-teal-300" />
                      <span className="text-sm text-slate-300">Validation</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <button className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-emerald-500/30 transition-colors">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Approve</span>
                    </button>
                    <button className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-yellow-500/30 transition-colors">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Review</span>
                    </button>
                    <button className="px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-300 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-red-500/30 transition-colors">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Reject</span>
                    </button>
                  </div>

                  {/* Simple Result */}
                  <div className="flex items-center justify-center space-x-2 bg-slate-700/30 rounded-lg p-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Lab value confirmed - approved</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      {/* Three AI Platforms Section */}
      <section className="py-24 relative bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text mb-6 tracking-tight">
              Three AI Platforms
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                One Solution
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Comprehensive solutions for clinical data, literature review, and research acceleration—built to transform your workflow.
            </p>
            
            {/* Enhanced Product Suite Cards */}
            <motion.div 
              className="relative max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Three Product Cards in One Line */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* ChartR Clinical */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href="/products/clinical" className="block">
                    <div className="relative h-96">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-3xl border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-500 backdrop-blur-xl overflow-hidden h-full">
                        {/* AI Neural Network Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <svg className="w-full h-full" viewBox="0 0 200 200">
                            <defs>
                              <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3"/>
                                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0"/>
                              </radialGradient>
                            </defs>
                            {/* Neural nodes */}
                            <circle cx="50" cy="50" r="1" fill="rgb(59, 130, 246)" opacity="0.4"/>
                            <circle cx="150" cy="80" r="1" fill="rgb(59, 130, 246)" opacity="0.3"/>
                            <circle cx="120" cy="150" r="1" fill="rgb(59, 130, 246)" opacity="0.4"/>
                            <circle cx="180" cy="30" r="1" fill="rgb(59, 130, 246)" opacity="0.3"/>
                            {/* Neural connections */}
                            <line x1="50" y1="50" x2="150" y2="80" stroke="rgb(59, 130, 246)" strokeWidth="0.3" opacity="0.2"/>
                            <line x1="150" y1="80" x2="120" y2="150" stroke="rgb(59, 130, 246)" strokeWidth="0.3" opacity="0.2"/>
                          </svg>
                        </div>

                        {/* Product Icon Header */}
                        <div className="relative p-8 text-center flex flex-col justify-center h-full">
                          <motion.div 
                            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-2xl border border-blue-400/40 mb-6 mx-auto group-hover:from-blue-400/40 group-hover:to-cyan-400/30 transition-all duration-500"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Building className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                            ChartR Clinical
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300 mb-8">
                            Clinical data extraction & analysis
                          </p>

                          {/* Interactive Elements */}
                          <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                            <span className="font-medium mr-2">Explore</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        </div>

                        {/* Subtle Floating Elements */}
                        <motion.div 
                          className="absolute top-6 right-6 w-2 h-2 bg-blue-400/20 rounded-full"
                          animate={{ 
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* ChartR Literature */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href="/products/literature" className="block">
                    <div className="relative h-96">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-3xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-500 backdrop-blur-xl overflow-hidden h-full">
                        {/* AI Data Flow Pattern */}
                        <div className="absolute inset-0 opacity-4">
                          <svg className="w-full h-full" viewBox="0 0 200 200">
                            <defs>
                              <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.1"/>
                                <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0"/>
                              </linearGradient>
                            </defs>
                            {/* Data flow streams */}
                            <path d="M20,180 Q60,140 100,120 T180,80" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="0.5" opacity="0.3"/>
                            <path d="M30,160 Q80,100 140,90 T190,60" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="0.3" opacity="0.2"/>
                            <path d="M10,200 Q50,160 90,140 T170,100" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="0.4" opacity="0.25"/>
                            {/* Data points */}
                            <circle cx="60" cy="140" r="0.8" fill="rgb(168, 85, 247)" opacity="0.3"/>
                            <circle cx="140" cy="90" r="0.8" fill="rgb(168, 85, 247)" opacity="0.3"/>
                          </svg>
                        </div>

                        {/* Product Icon Header */}
                        <div className="relative p-8 text-center flex flex-col justify-center h-full">
                          <motion.div 
                            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-2xl border border-purple-400/40 mb-6 mx-auto group-hover:from-purple-400/40 group-hover:to-pink-400/30 transition-all duration-500"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FileText className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                            ChartR Literature
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300 mb-8">
                            Literature review & research synthesis
                          </p>

                          {/* Interactive Elements */}
                          <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                            <span className="font-medium mr-2">Explore</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        </div>

                        {/* Subtle Floating Elements */}
                        <motion.div 
                          className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400/20 rounded-full"
                          animate={{ 
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{ duration: 5, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* ChartR Accelerate */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href="/products/accelerate" className="block">
                    <div className="relative h-96">
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-3xl border border-amber-500/20 group-hover:border-amber-400/40 transition-all duration-500 backdrop-blur-xl overflow-hidden h-full">
                        {/* AI Circuit Pattern */}
                        <div className="absolute inset-0 opacity-4">
                          <svg className="w-full h-full" viewBox="0 0 200 200">
                            <defs>
                              <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgb(245, 158, 11)" stopOpacity="0.2"/>
                                <stop offset="50%" stopColor="rgb(245, 158, 11)" stopOpacity="0.4"/>
                                <stop offset="100%" stopColor="rgb(245, 158, 11)" stopOpacity="0.1"/>
                              </linearGradient>
                            </defs>
                            {/* Circuit paths */}
                            <path d="M30,50 L80,50 L80,100 L130,100" fill="none" stroke="rgb(245, 158, 11)" strokeWidth="0.4" opacity="0.3"/>
                            <path d="M50,150 L100,150 L100,80 L150,80" fill="none" stroke="rgb(245, 158, 11)" strokeWidth="0.3" opacity="0.25"/>
                            {/* Circuit nodes */}
                            <rect x="78" y="48" width="4" height="4" fill="rgb(245, 158, 11)" opacity="0.4" rx="0.5"/>
                            <rect x="128" y="98" width="4" height="4" fill="rgb(245, 158, 11)" opacity="0.4" rx="0.5"/>
                            <rect x="98" y="78" width="4" height="4" fill="rgb(245, 158, 11)" opacity="0.4" rx="0.5"/>
                          </svg>
                        </div>

                        {/* Product Icon Header */}
                        <div className="relative p-8 text-center flex flex-col justify-center h-full">
                          <motion.div 
                            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500/30 to-orange-500/20 rounded-2xl border border-amber-400/40 mb-6 mx-auto group-hover:from-amber-400/40 group-hover:to-orange-400/30 transition-all duration-500"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Zap className="w-10 h-10 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-100 transition-colors duration-300">
                            ChartR Accelerate
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300 mb-8">
                            Research acceleration & grant funding
                          </p>

                          {/* Interactive Elements */}
                          <div className="flex items-center justify-center text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                            <span className="font-medium mr-2">Explore</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        </div>

                        {/* Subtle Floating Elements */}
                        <motion.div 
                          className="absolute top-8 right-8 w-1 h-1 bg-amber-400/20 rounded-full"
                          animate={{ 
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{ duration: 6, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      {/* Model Improvement Section */}
      <section className="py-20 relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text mb-6 tracking-tight">
              Continuously <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                Self-Improving
              </span>
            </h2>

          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Adaptive Intelligence Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-lg opacity-85 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-10 border border-white/20 overflow-hidden">
                  {/* Well-Sized Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/20 mb-6">
                      <Brain className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-4xl font-black mb-4 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                      Adaptive Intelligence
                    </h3>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                      AI that continuously learns from clinical patterns to improve accuracy and reduce errors
                    </p>
                  </div>

                  {/* Streamlined Feature Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { 
                        icon: TrendingUp, 
                        label: "Pattern Learning",
                        description: "Automatically identifies clinical trends and patterns from historical data"
                      },
                      { 
                        icon: CheckCircle, 
                        label: "Error Reduction",
                        description: "Continuously improves accuracy through validation feedback"
                      },
                      { 
                        icon: Cpu, 
                        label: "Context Aware",
                        description: "Understands clinical context and specialty requirements"
                      },
                      { 
                        icon: BookOpen, 
                        label: "Knowledge Base",
                        description: "Leverages comprehensive medical knowledge and best practices"
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="relative group/item cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="relative">
                          {/* Blue glow effect on hover/click */}
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl opacity-0 group-hover/item:opacity-100 transition-all duration-300 blur-sm" />
                          
                          <div className="relative bg-slate-800/40 rounded-xl p-6 border border-slate-700/50 group-hover/item:border-blue-400/30 transition-all duration-300 backdrop-blur-sm">
                            <div className="flex items-start space-x-4">
                              {/* Icon with blue illumination */}
                              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-700/50 border border-slate-600/50 flex items-center justify-center group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/40 transition-all duration-300">
                                <item.icon className="w-6 h-6 text-slate-400 group-hover/item:text-blue-300 transition-colors duration-300" />
                              </div>
                              
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-white mb-2 group-hover/item:text-blue-100 transition-colors duration-300">
                                  {item.label}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-300 transition-colors duration-300">
                                  {item.description}
                                </p>
                              </div>
                              
                              {/* Subtle arrow indicator */}
                              <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-4 h-4 text-blue-400" />
                              </div>
                            </div>
                            
                            {/* Subtle bottom border accent */}
                            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/0 to-transparent group-hover/item:via-blue-400/40 transition-all duration-300" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Well-Proportioned Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-10 pt-8 border-t border-white/10"
                  >
                    <div className="grid grid-cols-3 gap-8 text-center">
                      {[
                        { value: "99.2%", label: "Accuracy Rate", color: "text-blue-400" },
                        { value: "85%", label: "Error Reduction", color: "text-cyan-400" },
                        { value: "24/7", label: "Continuous Learning", color: "text-purple-400" }
                      ].map((stat, index) => (
                        <motion.div 
                          key={index} 
                          className="group"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        >
                          <div className={`text-3xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      {/* Live Demo Section */}
      <div className="bg-slate-800/50">
        <ClinicalDemo />
      </div>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      {/* AI-Focused Testimonials */}
      <section className="py-24 relative bg-slate-900/50 overflow-hidden">
        {/* Background AI Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-300">VALIDATED BY HEALTHCARE LEADERS</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text mb-4 tracking-tight">
              Transforming Healthcare
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                Intelligence Today
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Leading healthcare organizations trust ChartR to revolutionize their clinical data workflows
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="relative group h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 * index }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 group-hover:border-blue-400/30 transition-all duration-500 h-full flex flex-col">
                  {/* AI Quote Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    
                    {/* AI Badge */}
                    <div className="px-2 py-1 rounded-md bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                      <span className="text-xs font-medium text-blue-300">AI-ENHANCED</span>
                    </div>
                  </div>

                  {/* Quote Content */}
                  <div className="flex-1 mb-6">
                    <p className="text-slate-300 leading-relaxed text-base group-hover:text-slate-200 transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author Info with AI Styling */}
                  <div className="border-t border-slate-700/50 pt-4">
                    <div className="flex items-center space-x-3">
                      {/* Avatar Placeholder */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-medium">
                          {testimonial.role}
                        </div>
                      </div>
                      
                      {/* Verification Badge */}
                      <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.59 10.75C10.21 11.13 10.21 11.75 10.59 12.13L11.88 13.42C12.25 13.79 12.87 13.79 13.25 13.42L18.83 7.83L21 10V12H19V20C19 21.1 18.1 22 17 22H15C13.9 22 13 21.1 13 20V12H11V20C11 21.1 10.1 22 9 22H7C5.9 22 5 21.1 5 20V12H3V10L5.17 7.83L10.75 2.25C11.13 1.87 11.75 1.87 12.13 2.25L17.75 7.83L19 9H21Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/0 to-transparent group-hover:via-blue-400/50 transition-all duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-slate-800/60">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-600/30 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
                          className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text mb-4 tracking-tight leading-tight">
              Ready to Transform
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                Your Healthcare Data?
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join leading healthcare organizations saving millions with ChartR's AI platform. 
              See how our <span className="text-blue-200 font-medium">human-AI integration</span> can revolutionize your clinical data management.
            </p>
            
            {/* Enhanced Feature Highlight */}
            <motion.div 
              className="relative group max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/20">
                <div className="text-lg font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">Leading the Future of Healthcare Intelligence</div>
                <div className="text-sm text-slate-300">AI-assisted, human-validated clinical data curation at scale</div>
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