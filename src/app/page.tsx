'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import PatientNotesDemo from '@/components/demos/PatientNotesDemo'
import DataExtractionDemo from '@/components/demos/DataExtractionDemo'
import ActionableInsightsDemo from '@/components/demos/ActionableInsightsDemo'
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
          <div className="text-center">
            {/* ChartR Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-full px-6 py-3 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center"
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
              <span className="text-blue-300 font-medium text-sm">EMR & Model Agnostic Platform</span>
            </motion.div>

            {/* Hero Tagline */}
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text tracking-tight leading-[1.1] mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              The AI Platform<br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Curating Clinical Data
              </span><br />
              Into Actionable Intelligence
            </motion.h1>
            
            {/* Enhanced Subtitle */}
            <motion.p 
              className="text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform unstructured clinical data into intelligent, actionable insights with our modular AI ecosystem—integrating seamlessly with any EMR system or AI model.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                See ChartR in Action
              </button>
              <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      
      {/* Introducing ChartrOS - Redesigned as Content Section */}
      <section className="py-24 relative bg-gradient-to-b from-slate-900 to-slate-800">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Introducing ChartrOS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Enterprise-Grade AI-Native Platform
              <br />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text">
                for Modular Clinical AI Integration
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              ChartrOS enables healthcare organizations to deploy AI workflows with unprecedented flexibility. 
              Our platform intelligently identifies relevant clinical information and seamlessly integrates with 
              any EMR system or existing AI abstraction solution.
            </p>
          </motion.div>

          {/* Platform Architecture - Clean Modern Design */}
          <motion.div 
            className="relative max-w-5xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
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
                        <Database className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="font-medium text-slate-200">EMR Systems</div>
                          <div className="text-xs text-slate-400">Epic, Cerner, Custom</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 hover:border-purple-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Layers className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="font-medium text-slate-200">AI Abstraction Tools</div>
                          <div className="text-xs text-slate-400">Existing Solutions</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 hover:border-teal-500/50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-teal-400" />
                        <div>
                          <div className="font-medium text-slate-200">Clinical Documents</div>
                          <div className="text-xs text-slate-400">Unstructured Text</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* ChartrOS Core - Center */}
                <div className="relative">
                  {/* Connection Lines */}
                  <div className="hidden md:block absolute inset-0 -left-8 -right-8">
                    <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                          <stop offset="50%" stopColor="rgba(16, 185, 129, 0.5)" />
                          <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
                        </linearGradient>
                      </defs>
                      <motion.line 
                        x1="0" y1="50" x2="100" y2="50" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                      <motion.line 
                        x1="0" y1="100" x2="100" y2="100" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                      />
                      <motion.line 
                        x1="0" y1="150" x2="100" y2="150" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                      <motion.line 
                        x1="100" y1="50" x2="200" y2="50" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                      <motion.line 
                        x1="100" y1="100" x2="200" y2="100" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                      />
                      <motion.line 
                        x1="100" y1="150" x2="200" y2="150" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </svg>
                  </div>
                  
                  <motion.div 
                    className="relative bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-400/30 p-8 backdrop-blur-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <img src="/logo.svg" alt="ChartR" className="w-10 h-10 brightness-0 invert" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">ChartrOS Platform</h3>
                      <p className="text-sm text-slate-300">Clinical Retrieval Layer</p>
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-400/30">
                          HIPAA Compliant
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30">
                          AI-Native
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Output Modules */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Modular AI Workflows</h3>
                  <div className="space-y-3">
                    <motion.div 
                      className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-400/50 transition-all"
                      whileHover={{ x: -4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Heart className="w-5 h-5 text-emerald-400" />
                        <div>
                          <div className="font-medium text-slate-200">Risk Assessment</div>
                          <div className="text-xs text-slate-400">Clinical Frameworks</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-lg p-4 hover:border-blue-400/50 transition-all"
                      whileHover={{ x: -4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <FileCheck className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="font-medium text-slate-200">Compliance Reports</div>
                          <div className="text-xs text-slate-400">Regulatory Guidelines</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-lg p-4 hover:border-purple-400/50 transition-all"
                      whileHover={{ x: -4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Brain className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="font-medium text-slate-200">Clinical Intelligence</div>
                          <div className="text-xs text-slate-400">Actionable Insights</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-teal-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">No-Code Integration</h4>
                  <p className="text-sm text-slate-400">Deploy workflows instantly without technical expertise</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Use-Case Specific</h4>
                  <p className="text-sm text-slate-400">Models fine-tuned for each individual workflow</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-pink-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Continuous Learning</h4>
                  <p className="text-sm text-slate-400">HIPAA-compliant AI that improves with your data</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built for Enterprise Healthcare - Redesigned */}
      <section className="py-24 relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Built for
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text"> Enterprise Healthcare</span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                ChartrOS delivers the flexibility, security, and scale that healthcare 
                organizations demand—with the simplicity your teams deserve.
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
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">HIPAA-Compliant AI Learning</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Continuous model fine-tuning on your data with enterprise-grade security 
                        and compliance built into every layer of the platform.
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
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Universal Compatibility</h3>
                      <p className="text-slate-400 leading-relaxed">
                        EMR and model agnostic design integrates seamlessly with Epic, Cerner, 
                        and any existing AI data abstraction solutions.
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
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Clinical Retrieval Excellence</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Best-in-class AI intelligently identifies relevant clinical information 
                        and literature for truly actionable insights.
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
                    <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Human-in-the-Loop Validation</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Streamlined validation workflows reduce false negatives while maintaining 
                        clinical accuracy and regulatory compliance.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/demo">
                  <motion.button 
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Demo
                  </motion.button>
                </Link>
                <Link href="/docs">
                  <motion.button 
                    className="px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800/50 hover:border-slate-500 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Documentation
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
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-700/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-xs text-slate-400">Active Workflows</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400">98.3%</div>
                      <div className="text-xs text-slate-400">Avg Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">2.4M</div>
                      <div className="text-xs text-slate-400">Records Processed</div>
                    </div>
                  </div>

                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center">
                    <Layers className="w-4 h-4 mr-2 text-emerald-400" />
                    Deployed Workflows
                  </h4>
                  
                  {/* Workflow Cards */}
                  <div className="space-y-3">
                    {/* Cardiovascular Risk Assessment */}
                    <motion.div 
                      className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-lg p-4 hover:from-emerald-500/15 hover:to-emerald-600/15 transition-all cursor-pointer"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Heart className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white flex items-center space-x-2">
                              <span>ASCVD Risk Calculator</span>
                              <span className="text-xs text-emerald-400 bg-emerald-400/20 px-2 py-0.5 rounded-full">AI Enhanced</span>
                            </h5>
                            <p className="text-xs text-slate-400 mt-1">ACC/AHA 2023 Guidelines + Literature Review</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-emerald-300 font-medium">Active</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-3 text-xs">
                        <div className="bg-slate-700/30 rounded-lg p-2 text-center">
                          <div className="text-white font-semibold">18,742</div>
                          <div className="text-slate-500 text-[10px]">Patients</div>
                        </div>
                        <div className="bg-slate-700/30 rounded-lg p-2 text-center">
                          <div className="text-emerald-400 font-semibold">99.1%</div>
                          <div className="text-slate-500 text-[10px]">Accuracy</div>
                        </div>
                        <div className="bg-slate-700/30 rounded-lg p-2 text-center">
                          <div className="text-blue-400 font-semibold">3.2s</div>
                          <div className="text-slate-500 text-[10px]">Avg Time</div>
                        </div>
                        <div className="bg-slate-700/30 rounded-lg p-2 text-center">
                          <div className="text-purple-400 font-semibold">$847K</div>
                          <div className="text-slate-500 text-[10px]">Saved YTD</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Medicare Advantage Coding */}
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-lg p-4 hover:from-blue-500/15 hover:to-blue-600/15 transition-all cursor-pointer"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileCheck className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white flex items-center space-x-2">
                              <span>HCC Risk Adjustment</span>
                              <span className="text-xs text-blue-400 bg-blue-400/20 px-2 py-0.5 rounded-full">Auto-Validated</span>
                            </h5>
                            <p className="text-xs text-slate-400 mt-1">CMS-HCC v28 Model • Real-time Processing</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <motion.div
                            className="w-2 h-2 bg-blue-400 rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-xs text-blue-300 font-medium">Processing</span>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-slate-400">Q1 2024 Batch Processing</span>
                          <span className="text-xs text-blue-400 font-medium">67%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div 
                            className="h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
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
                      className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-lg p-4 hover:from-purple-500/15 hover:to-purple-600/15 transition-all cursor-pointer group"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Activity className="w-5 h-5 text-purple-400" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white flex items-center space-x-2">
                              <span>Early Sepsis Detection</span>
                              <span className="text-xs text-purple-400 bg-purple-400/20 px-2 py-0.5 rounded-full">ML Model v3</span>
                            </h5>
                            <p className="text-xs text-slate-400 mt-1">Real-time ED Monitoring • 15-min intervals</p>
                          </div>
                        </div>
                        <span className="text-xs text-purple-300 font-medium">Ready</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-400">
                          <span className="text-white font-medium">98.7%</span> sensitivity • 
                          <span className="text-white font-medium"> 94.2%</span> specificity
                        </div>
                        <button className="px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg text-xs font-medium transition-colors group-hover:bg-purple-500/30">
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
                            Choose from 50+ pre-built templates or create custom
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating badges - Updated */}
              <motion.div 
                className="absolute -top-4 -right-4 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-400/30 backdrop-blur-sm"
                initial={{ scale: 0, rotate: -12 }}
                animate={{ scale: 1, rotate: -12 }}
                transition={{ delay: 1, type: "spring" }}
              >
                No-Code Platform
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-400/30 backdrop-blur-sm"
                initial={{ scale: 0, rotate: 12 }}
                animate={{ scale: 1, rotate: 12 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                HIPAA Compliant
              </motion.div>

              {/* Performance indicator */}
              <motion.div 
                className="absolute top-4 -right-4 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-400/30 backdrop-blur-sm"
                initial={{ scale: 0, x: 20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 1.4, type: "spring" }}
              >
                ROI in 30 days
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      
      {/* ChartR Modular Ecosystem */}
      <section className="py-20 relative bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text mb-6 tracking-tight">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">ChartR Layer</span>
              <br />
              + Modular Ecosystem
            </h2>
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl text-slate-300 text-center leading-relaxed mb-8">
                ChartR Layer identifies the most relevant clinical information from unstructured or structured text, while our modular ecosystem provides ready-to-use clinical workflows. 
                <span className="block mt-2 text-lg text-slate-400">
                  <span className="font-semibold text-blue-300">EMR & Model Agnostic</span> — integrates on top of any AI abstraction tools
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Platform Interface Mockup */}
          <motion.div 
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Mock Browser Header */}
              <div className="bg-slate-700/50 px-6 py-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-slate-600/50 rounded-lg px-4 py-2 text-sm text-slate-300 flex-1 max-w-md">
                    ChartR Clinical Intelligence Platform
                  </div>
                </div>
              </div>

              {/* Main Interface */}
              <div className="grid lg:grid-cols-[300px,1fr] h-[600px]">
                {/* Left Sidebar - Modular Components */}
                <div className="bg-slate-700/30 border-r border-white/10 p-6">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <Network className="w-5 h-5 mr-2 text-blue-400" />
                    Modular Workflows
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Clinical Guidelines */}
                    <div className="bg-slate-600/50 rounded-lg p-4 border border-blue-500/30 ring-2 ring-blue-400/20">
                      <div className="flex items-center space-x-3 mb-2">
                        <Heart className="w-5 h-5 text-blue-400" />
                        <span className="font-medium text-blue-200">Risk Assessment</span>
                      </div>
                      <p className="text-xs text-slate-400">ASCVD Risk Calculator</p>
                    </div>

                    {/* Patient Screening */}
                    <div className="bg-slate-600/30 rounded-lg p-4 border border-slate-500/30 hover:border-purple-500/30 hover:bg-slate-600/40 transition-all cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <Users className="w-5 h-5 text-slate-400 hover:text-purple-400 transition-colors" />
                        <span className="font-medium text-slate-300">Patient Screening</span>
                      </div>
                      <p className="text-xs text-slate-400">Eligibility Workflows</p>
                    </div>

                    {/* Triage Workflows */}
                    <div className="bg-slate-600/30 rounded-lg p-4 border border-slate-500/30 hover:border-green-500/30 hover:bg-slate-600/40 transition-all cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <Target className="w-5 h-5 text-slate-400 hover:text-green-400 transition-colors" />
                        <span className="font-medium text-slate-300">Triage Workflows</span>
                      </div>
                      <p className="text-xs text-slate-400">Priority Classification</p>
                    </div>

                    {/* Clinical Guidelines */}
                    <div className="bg-slate-600/30 rounded-lg p-4 border border-slate-500/30 hover:border-amber-500/30 hover:bg-slate-600/40 transition-all cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <BookOpen className="w-5 h-5 text-slate-400 hover:text-amber-400 transition-colors" />
                        <span className="font-medium text-slate-300">Clinical Guidelines</span>
                      </div>
                      <p className="text-xs text-slate-400">Evidence-Based Protocols</p>
                    </div>

                    {/* Decision Support */}
                    <div className="bg-slate-600/30 rounded-lg p-4 border border-slate-500/30 hover:border-teal-500/30 hover:bg-slate-600/40 transition-all cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <Brain className="w-5 h-5 text-slate-400 hover:text-teal-400 transition-colors" />
                        <span className="font-medium text-slate-300">Decision Support</span>
                      </div>
                      <p className="text-xs text-slate-400">Clinical Decision Making</p>
                    </div>
                  </div>
                </div>

                {/* Right Main Content - Selected Workflow */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white flex items-center">
                        <Heart className="w-6 h-6 mr-2 text-blue-400" />
                        ASCVD Risk Assessment
                      </h4>
                      <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        Active Workflow
                      </div>
                    </div>
                    <p className="text-slate-400 mb-6">
                      Automated cardiovascular risk calculation using ChartR-extracted clinical data
                    </p>
                  </div>

                  {/* Clinical Note with Highlights */}
                  <div className="grid grid-cols-2 gap-6 h-96">
                    {/* Original Clinical Note */}
                    <div>
                      <h5 className="text-sm font-semibold text-slate-300 mb-3 flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Clinical Note
                      </h5>
                      <div className="bg-slate-700/50 rounded-lg p-4 text-sm text-slate-300 leading-relaxed h-full overflow-y-auto">
                        <p className="mb-3">
                          <span className="text-slate-400">Patient:</span> 58-year-old male presents for routine follow-up.
                        </p>
                        <p className="mb-3">
                          <span className="text-slate-400">History:</span> <span className="bg-red-500/20 text-red-300 px-1 rounded">Diabetes mellitus type 2</span> for 8 years, well-controlled on metformin. <span className="bg-orange-500/20 text-orange-300 px-1 rounded">Hypertension</span> managed with lisinopril 10mg daily. Former <span className="bg-yellow-500/20 text-yellow-300 px-1 rounded">smoker</span> (quit 5 years ago, 20 pack-year history).
                        </p>
                        <p className="mb-3">
                          <span className="text-slate-400">Vitals:</span> BP <span className="bg-blue-500/20 text-blue-300 px-1 rounded">142/88</span>, HR 76, BMI 29.2
                        </p>
                        <p className="mb-3">
                          <span className="text-slate-400">Labs:</span> <span className="bg-green-500/20 text-green-300 px-1 rounded">Total cholesterol 245</span>, <span className="bg-green-500/20 text-green-300 px-1 rounded">LDL 165</span>, <span className="bg-green-500/20 text-green-300 px-1 rounded">HDL 38</span>, HbA1c 7.2%
                        </p>
                        <p>
                          <span className="text-slate-400">Assessment:</span> Continuing current management plan. Consider statin therapy given risk factors.
                        </p>
                      </div>
                    </div>

                    {/* Extracted Risk Data */}
                    <div>
                      <h5 className="text-sm font-semibold text-slate-300 mb-3 flex items-center">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        ChartR Extracted Data
                      </h5>
                      <div className="bg-slate-700/50 rounded-lg p-4 h-full">
                        <div className="space-y-4">
                          {/* Risk Factors */}
                          <div>
                            <h6 className="text-xs font-semibold text-slate-400 mb-2">RISK FACTORS</h6>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center bg-red-500/10 rounded px-2 py-1">
                                <span className="text-red-300 text-sm">Diabetes</span>
                                <CheckCircle className="w-4 h-4 text-red-400" />
                              </div>
                              <div className="flex justify-between items-center bg-orange-500/10 rounded px-2 py-1">
                                <span className="text-orange-300 text-sm">Hypertension</span>
                                <CheckCircle className="w-4 h-4 text-orange-400" />
                              </div>
                              <div className="flex justify-between items-center bg-yellow-500/10 rounded px-2 py-1">
                                <span className="text-yellow-300 text-sm">Former Smoker</span>
                                <CheckCircle className="w-4 h-4 text-yellow-400" />
                              </div>
                            </div>
                          </div>

                          {/* Lab Values */}
                          <div>
                            <h6 className="text-xs font-semibold text-slate-400 mb-2">LAB VALUES</h6>
                            <div className="space-y-2">
                              <div className="flex justify-between bg-slate-600/50 rounded px-2 py-1">
                                <span className="text-slate-300 text-sm">Total Cholesterol</span>
                                <span className="text-green-300 text-sm">245 mg/dL</span>
                              </div>
                              <div className="flex justify-between bg-slate-600/50 rounded px-2 py-1">
                                <span className="text-slate-300 text-sm">LDL</span>
                                <span className="text-green-300 text-sm">165 mg/dL</span>
                              </div>
                              <div className="flex justify-between bg-slate-600/50 rounded px-2 py-1">
                                <span className="text-slate-300 text-sm">HDL</span>
                                <span className="text-green-300 text-sm">38 mg/dL</span>
                              </div>
                            </div>
                          </div>

                          {/* Risk Score */}
                          <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                            <h6 className="text-xs font-semibold text-blue-300 mb-2">ASCVD RISK SCORE</h6>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-300">22.4%</div>
                              <div className="text-sm text-blue-400">10-Year Risk</div>
                              <div className="mt-2 bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs">
                                High Risk - Statin Recommended
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
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ChartR Layer</h3>
              <p className="text-slate-400 text-sm">
                Identifies and extracts the most relevant clinical information from any text format
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modular Ecosystem</h3>
              <p className="text-slate-400 text-sm">
                Pre-built clinical workflows for risk assessment, screening, triage, and decision support
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">EMR & Model Agnostic</h3>
              <p className="text-slate-400 text-sm">
                Integrates seamlessly with any EMR system or AI abstraction tools
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      {/* Live Demo Sections */}
      <PatientNotesDemo />
      
      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      
      <DataExtractionDemo />
      
      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      
      <ActionableInsightsDemo />

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