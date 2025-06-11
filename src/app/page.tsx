'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ClinicalDemo from '@/components/demos/ClinicalDemo'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, BarChart3, Layers, Database, FileText, Building, GraduationCap, Building2, DollarSign, Clock, Shield, Zap, TrendingUp, Users, Target, Network, Cpu, Activity } from 'lucide-react'

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
    return (
      <div className="relative w-full h-96 overflow-hidden">
        {/* Main Visual Container */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-purple-900/20 rounded-2xl backdrop-blur-sm border border-white/10">
          
          {/* Left Side: EMR Systems */}
          <div className="absolute top-1/2 left-16 transform -translate-y-1/2 w-24 h-24 bg-blue-500/15 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm border border-blue-400/20">
            <Database className="w-10 h-10 text-blue-400 mb-1" />
            <div className="text-xs text-blue-300 font-medium text-center leading-tight">EMR<br/>Systems</div>
          </div>

          {/* Center: ChartR Layer - Clean, No Overlapping Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              className="relative w-32 h-32 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl"
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
                className="w-20 h-20"
              />
            </motion.div>
          </div>

          {/* AI + Human Layer Label - Positioned below to avoid overlap */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 text-xs text-white/90 font-medium bg-white/10 px-3 py-1 rounded-md backdrop-blur-sm border border-white/20">
            AI + Human Layer
          </div>

          {/* Right Side: Clinical Intelligence Output */}
          <div className="absolute top-1/2 right-16 transform -translate-y-1/2 w-24 h-24 bg-green-500/15 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm border border-green-400/20">
            <BarChart3 className="w-10 h-10 text-green-400 mb-1" />
            <div className="text-xs text-green-300 font-medium text-center leading-tight">Clinical<br/>Intelligence</div>
          </div>

          {/* Properly Connected Data Flow Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 384">
            <defs>
              <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.8)" />
              </linearGradient>
              <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.8)" />
                <stop offset="100%" stopColor="rgba(34, 197, 94, 0.8)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main Flow: EMR → ChartR (connecting right edge of left box to left edge of center box) */}
            <motion.path
              d="M 88 192 Q 140 180 176 192"
              stroke="url(#flowGradient1)"
              strokeWidth="4"
              fill="none"
              filter="url(#glow)"
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
            
            {/* Secondary Flow: EMR → ChartR (upper path) */}
            <motion.path
              d="M 88 186 Q 140 170 176 186"
              stroke="url(#flowGradient1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
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

            {/* Tertiary Flow: EMR → ChartR (lower path) */}
            <motion.path
              d="M 88 198 Q 140 204 176 198"
              stroke="url(#flowGradient1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
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

            {/* Main Flow: ChartR → Clinical Intelligence (connecting right edge of center box to left edge of right box) */}
            <motion.path
              d="M 304 192 Q 340 180 376 192"
              stroke="url(#flowGradient2)"
              strokeWidth="4"
              fill="none"
              filter="url(#glow)"
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
            
            {/* Secondary Flow: ChartR → Clinical Intelligence (upper path) */}
            <motion.path
              d="M 304 186 Q 340 170 376 186"
              stroke="url(#flowGradient2)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
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

            {/* Tertiary Flow: ChartR → Clinical Intelligence (lower path) */}
            <motion.path
              d="M 304 198 Q 340 204 376 198"
              stroke="url(#flowGradient2)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
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

            {/* Data Processing Indicators */}
            <motion.circle
              cx="130"
              cy="192"
              r="3"
              fill="rgba(59, 130, 246, 0.9)"
              filter="url(#glow)"
              animate={{ 
                r: [2, 5, 2],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.3
              }}
            />
            
            <motion.circle
              cx="350"
              cy="192"
              r="3"
              fill="rgba(34, 197, 94, 0.9)"
              filter="url(#glow)"
              animate={{ 
                r: [2, 5, 2],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 1.8
              }}
            />
          </svg>

          {/* Process Flow Label */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm text-white/80 font-medium bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
            Raw EMR Data → AI Curation → Validated Intelligence
          </div>

          {/* Key Metrics */}
          <div className="absolute bottom-8 left-8 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm border border-white/20">
            <div className="text-xs text-white/90 font-semibold">98.7% Accuracy</div>
          </div>

          <div className="absolute bottom-8 right-8 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm border border-white/20">
            <div className="text-xs text-white/90 font-semibold">$7.5M+ Saved</div>
          </div>

          {/* Moving Data Particles Following the Flow Path */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-80"
              style={{
                left: "64px",
                top: `${186 + (i * 4)}px`,
              }}
              animate={{
                x: [0, 112, 240, 336],
                y: [0, -8, 8, 0],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>
      
      {/* Hero Section with Strategic Layout */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8">
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
                className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text tracking-tight leading-[1.4] pb-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                <span className="whitespace-nowrap block mb-4">The AI Platform</span>
                <span className="whitespace-nowrap block mb-4">
                  <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Curating Clinical Data
                  </span>
                </span>
                <span className="whitespace-nowrap block">
                  <span className="text-white">Into </span>
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-medium">
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
                  <CombinedDataVisualization />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Transformation Flow */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
              From <span className="bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent">System of Record</span>
              <br />
              To <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">System of Action</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              ChartR creates an intelligent bridge between your EMR data and actionable clinical intelligence
            </p>
          </motion.div>

          {/* Visual Layer Architecture Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/20 to-slate-700/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-600/30 to-slate-700/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">EMR Systems</h3>
                <p className="mb-4 text-slate-300">
                  Raw, unstructured clinical data - your <strong className="text-white">system of record</strong>
                </p>
                <div className="text-sm text-slate-400">Epic, Cerner, AllScripts, etc.</div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center transform scale-105 hover:scale-110 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="/logo.svg" 
                    alt="ChartR Logo" 
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">ChartR Integration</h3>
                <p className="mb-4 text-slate-200">
                  AI-curated, human-validated clinical databases - your <strong className="text-white">system of action</strong>
                </p>
                <div className="text-sm text-slate-300">Structured, actionable clinical intelligence</div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Better Outcomes</h3>
                <p className="mb-4 text-slate-300">
                  Improved patient care, reduced costs, regulatory compliance
                </p>
                <div className="text-sm text-slate-400">Evidence-based decision making</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Live Demo Section */}
      <ClinicalDemo />

      {/* ChartR Smart Review Process */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Smart Review Process Steps */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-300" />
            <div className="relative bg-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-3xl" />
              <div className="relative bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-black mb-6 text-transparent bg-gradient-to-r from-white to-slate-300 bg-clip-text">
                    ChartR Smart Review
                  </h3>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Our <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-medium">AI-assisted, human-validated</span> workflow transforms unstructured EMR data into precise, actionable clinical intelligence through a sophisticated curation pipeline.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold mb-2">AI Extraction: <span className="text-blue-400">Automated data identification and extraction</span></div>
                        <div className="text-sm text-slate-400">Advanced AI models collect clinical data with 50x faster processing than manual review</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold mb-2">Human Validation: <span className="text-purple-400">Clinical expert review and verification</span></div>
                        <div className="text-sm text-slate-400 mb-4">Human experts validate AI findings with intelligent prioritization and evidence-based recommendations</div>
                        
                        {/* Enhanced Validation Buttons */}
                        <div className="flex items-center space-x-3 mb-4">
                          <motion.button 
                            className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl text-sm font-medium flex items-center space-x-2 hover:bg-emerald-500/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span>Approve</span>
                          </motion.button>
                          <motion.button 
                            className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded-xl text-sm font-medium flex items-center space-x-2 hover:bg-yellow-500/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span>Review</span>
                          </motion.button>
                          <motion.button 
                            className="px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl text-sm font-medium flex items-center space-x-2 hover:bg-red-500/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span>Reject</span>
                          </motion.button>
                        </div>
                        
                        {/* Sample Note with Better Styling */}
                        <div className="flex items-start space-x-3 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <div className="w-6 h-6 bg-amber-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-3 h-3 bg-amber-400 rounded-sm flex items-center justify-center">
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="text-sm text-slate-300 italic">
                            "Lab value confirmed with attending physician - approved for registry submission"
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Database className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold mb-2">Review Tools: <span className="text-teal-400">AI-assisted review tools streamline the verification process</span></div>
                        <div className="text-sm text-slate-400">Source highlighting and confidence intervals create a more efficient review process</div>
                      </div>
                    </div>


                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Improvement Section with Enhanced Animations */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
              Continuously <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Self-Improving
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our AI models learn from every interaction, becoming more accurate and efficient with each review
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-black mb-8 text-transparent bg-gradient-to-r from-white to-slate-300 bg-clip-text">
                Smart Learning Pipeline
              </h3>
              <div className="space-y-8">
                {[
                  "Pattern recognition improvements",
                  "Error reduction algorithms", 
                  "Context-aware processing",
                  "Institutional knowledge capture"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <span className="text-slate-300 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Enhanced Metrics with Glassmorphism */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Accuracy Rate Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-white">Accuracy Rate</span>
                    <motion.span 
                      className="text-emerald-400 font-bold flex items-center space-x-1"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span>+5.2%</span>
                    </motion.span>
                  </div>
                  
                  {/* Enhanced Progress Bar */}
                  <div className="w-full bg-slate-700/50 rounded-full h-4 relative overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-emerald-400 to-teal-400 h-4 rounded-full relative"
                      initial={{ width: "0%" }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 3 }}
                      />
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="text-sm text-slate-400">94% (from 89% last quarter)</div>
                    <motion.div 
                      className="text-sm bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 3 }}
                    >
                      Excellent
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Processing Speed Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-white">Processing Speed</span>
                    <motion.span 
                      className="text-blue-400 font-bold flex items-center space-x-1"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <Zap className="w-4 h-4" />
                      <span>+18%</span>
                    </motion.span>
                  </div>
                  
                  <div className="w-full bg-slate-700/50 rounded-full h-4 relative overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-4 rounded-full relative"
                      initial={{ width: "0%" }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute right-0 top-0 w-4 h-4 bg-cyan-300 rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.3, 1]
                        }}
                        transition={{ duration: 1, repeat: Infinity, delay: 3.5 }}
                      />
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="text-sm text-slate-400">2.3 seconds per chart</div>
                    <motion.div 
                      className="flex items-center space-x-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4 }}
                    >
                      {[0, 0.1, 0.2].map((delay, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-4 bg-blue-400 rounded-full"
                          animate={{ scaleY: [1, 0.3, 1] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* AI Learning Status */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.5 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-purple-500/30 rounded-xl flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Cpu className="w-6 h-6 text-purple-400" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white">AI Learning in Progress</div>
                      <div className="text-sm text-slate-400">Next model update in 2 days</div>
                    </div>
                    <motion.div
                      className="text-purple-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Activity className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement with Dark Theme */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
              The $7.5 Million Problem
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Every Hospital Faces
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Healthcare organizations spend millions annually on regulatory compliance and quality reporting, 
              while struggling with manual processes that are <span className="text-red-400 font-medium">error-prone</span> and <span className="text-orange-400 font-medium">resource-intensive</span>.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Massive Costs",
                value: "$7.5M+",
                description: "Annual regulatory spend per hospital",
                color: "from-red-400 to-red-600",
                bg: "from-red-500/20 to-red-600/20"
              },
              {
                icon: Clock,
                title: "Time Intensive",
                value: "80%",
                description: "Of time spent on manual review",
                color: "from-orange-400 to-orange-600", 
                bg: "from-orange-500/20 to-orange-600/20"
              },
              {
                icon: Target,
                title: "Error Prone",
                value: "15-25%",
                description: "Error rate in manual processes",
                color: "from-yellow-400 to-yellow-600",
                bg: "from-yellow-500/20 to-yellow-600/20"
              }
            ].map((problem, index) => (
              <motion.div 
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${problem.bg} rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300`} />
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${problem.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{problem.title}</h3>
                  <div className={`text-4xl font-black mb-4 text-transparent bg-gradient-to-r ${problem.color} bg-clip-text`}>
                    {problem.value}
                  </div>
                  <p className="text-slate-300">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
              Three AI Platforms
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                One Solution
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Comprehensive AI-powered tools for clinical data, literature review, and research acceleration
            </p>
            
            {/* Call-to-Action to Explore Products */}
            <motion.div 
              className="relative group max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-white/10 rounded-2xl p-8 backdrop-blur-xl border border-white/20">
                <div className="text-2xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text mb-3">
                  Explore Our Product Suite
                </div>
                <div className="text-lg text-slate-300 mb-6">
                  Discover how each platform can transform your workflow
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/products/clinical" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center space-x-2">
                    <Building className="w-5 h-5" />
                    <span>ChartR Clinical</span>
                  </Link>
                  <Link href="/products/literature" className="bg-gradient-to-r from-purple-600 to-pink-700 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-800 transition-all duration-300 flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>ChartR Literature</span>
                  </Link>
                  <Link href="/products/accelerate" className="bg-gradient-to-r from-green-600 to-teal-700 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-teal-800 transition-all duration-300 flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5" />
                    <span>ChartR Accelerate</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight">
              Trusted by
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Healthcare Leaders
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              See what leading healthcare organizations are saying about ChartR
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/20 to-slate-700/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  <div className="flex-1 mb-6">
                    <div className="text-3xl text-emerald-400/30 mb-4">"</div>
                    <p className="text-slate-300 italic leading-relaxed text-lg">{testimonial.quote}</p>
                    <div className="text-3xl text-emerald-400/30 text-right mt-2">"</div>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <div className="font-bold text-white text-lg">{testimonial.author}</div>
                    <div className="text-sm text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text font-medium mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-teal-500/25 to-cyan-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text mb-6 tracking-tight leading-tight">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Your Healthcare Data?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Join leading healthcare organizations saving millions with ChartR's AI platform. 
              See how our <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-medium">human-AI integration</span> can revolutionize your clinical data management.
            </p>
            
            {/* Enhanced Feature Highlight */}
            <motion.div 
              className="relative group max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-white/10 rounded-2xl p-8 backdrop-blur-xl border border-white/20">
                <div className="text-2xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text mb-3">Leading the Future of Healthcare Intelligence</div>
                <div className="text-lg text-slate-300">AI-assisted, human-validated clinical data curation at scale</div>
              </div>
            </motion.div>
            
            
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-32 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 left-16 w-3 h-3 bg-teal-400/30 rounded-full animate-pulse delay-1000" />
      </section>
    </div>
  )
}

export default Homepage 