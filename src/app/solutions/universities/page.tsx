'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, TrendingUp, Clock, DollarSign, Users, Award, Target, Zap, BarChart3, CheckCircle } from 'lucide-react'

interface Feature {
  title: string
  description: string
  features: string[]
}

const UniversitiesSolutionsPage = () => {
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const benefits = [
    {
      icon: TrendingUp,
      title: "Accelerate Grant Discovery",
      description: "Find relevant funding opportunities faster with AI-powered search.",
      metric: "→ 150% increase in grant application volume"
    },
    {
      icon: Clock,
      title: "Automate Literature Reviews",
      description: "Use AI to streamline systematic search and analysis.",
      metric: "→ 67% reduction in time spent on reviews"
    },
    {
      icon: Users,
      title: "Connect with Research Mentors",
      description: "AI-powered smart matching connects researchers with experienced PIs and collaborators",
      metric: "Higher match rates with relevant mentors"
    },
    {
      icon: BarChart3,
      title: "Extract Actionable Insights",
      description: "Transform unstructured research data into evidence-based intelligence",
      metric: "→ 89% improvement in data accuracy"
    }
  ]

  const marketStats = [
    { stat: "44%", description: "Annual growth of the healthcare AI market" },
    { stat: "$208.2B", description: "Projected AI healthcare market by 2030" },
    { stat: "21%", description: "VC funding in healthcare AI" },
    { stat: "$7.3B", description: "2023 healthcare AI research investment" }
  ]

  const features = [
    {
      title: "ChartR Accelerate",
      description: "AI-powered grant discovery and research collaboration platform",
      features: [
        "Discover grants from 500+ sources",
        "Match with mentors by research history",
        "Identify collaboration networks",
        "Get real-time alerts and deadlines",
        "Analyze PI track records and funding potential"
      ]
    },
    {
      title: "ChartR Literature",
      description: "Systematic literature reviews (SLR) and evidence synthesis acceleration",
      features: [
        "Analyze and categorize research papers",
        "Extract and synthesize evidence with AI",
        "Use PRISMA-compliant workflows",
        "Map citation networks and identify gaps",
        "Support meta-analysis and synthesis"
      ]
    }
  ]

  const successMetrics = [
    { metric: "150%", description: "Increase in grant application volume" },
    { metric: "67%", description: "Less time spent on literature reviews" },
    { metric: "89%", description: "Improved data accuracy" },
    { metric: "40%", description: "Faster research cycles" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-blue-400 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">Solutions for Universities</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Accelerate Research with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Empower your institution with AI-driven grant discovery, mentor matching, and literature reviews. Top universities use ChartR to secure funding faster and synthesize evidence with greater accuracy.
            </p>
          </motion.div>

          {/* Market Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {marketStats.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-4">{item.stat}</div>
                <div className="text-sm text-slate-300">{item.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Top Institutions Trust ChartR
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform boosts research efficiency and grant success for universities worldwide.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-300 mb-4">{benefit.description}</p>
                    <div className="text-sm font-semibold text-blue-400">{benefit.metric}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              End-to-End Research Intelligence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From grant discovery to evidence synthesis, ChartR supports every stage of the research lifecycle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Research?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading research institutions using ChartR to secure more funding and accelerate discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Demo
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                Download Research Brief
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default UniversitiesSolutionsPage 