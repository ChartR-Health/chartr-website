'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, DollarSign, Shield, Clock, TrendingUp, Heart, FileCheck, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react'

const HospitalsSolutionsPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Massive Cost Savings",
      description: "Save $7.5M+ annually per hospital facility through automated regulatory reporting",
      metric: "$7.5M+ annual savings"
    },
    {
      icon: Shield,
      title: "Real-Time Compliance",
      description: "Continuous monitoring ensures 100% regulatory compliance with automated alerts",
      metric: "100% compliance rate"
    },
    {
      icon: Clock,
      title: "Accelerated Reporting",
      description: "Reduce manual reporting time by 90% with AI-powered data curation",
      metric: "90% time reduction"
    },
    {
      icon: Heart,
      title: "Improved Patient Outcomes",
      description: "94% accuracy in clinical data processing leads to better care decisions",
      metric: "94% data accuracy"
    }
  ]

  const marketStats = [
    { stat: "$504B", description: "AI healthcare market by 2032" },
    { stat: "94%", description: "Of healthcare companies use AI/ML" },
    { stat: "$13B", description: "Healthcare cost reduction by AI by 2025" },
    { stat: "25%", description: "Of US hospitals use AI predictive analytics" }
  ]

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Regulatory Burden",
      description: "Healthcare systems spend millions annually on manual regulatory reporting and compliance",
      impact: "$7.5M+ per facility annually"
    },
    {
      icon: FileCheck,
      title: "Data Quality Issues",
      description: "Unstructured EMR data creates compliance risks and inefficient workflows",
      impact: "60% of physician time on documentation"
    },
    {
      icon: TrendingUp,
      title: "Resource Constraints",
      description: "Limited clinical staff and increasing patient volumes strain operations",
      impact: "15M global healthcare worker shortage"
    }
  ]

  const solutions = [
    {
      title: "Automated Registry Reporting",
      description: "Transform manual processes into automated, accurate regulatory submissions",
      features: [
        "Real-time data extraction from EMR systems",
        "Automated quality measure calculations",
        "Continuous compliance monitoring",
        "Instant submission to regulatory bodies"
      ]
    },
    {
      title: "Smart Review Process",
      description: "Human-AI integration for optimal accuracy and institutional knowledge capture",
      features: [
        "AI-assisted clinical documentation review",
        "Human validation of critical decisions",
        "Continuous learning and improvement",
        "Institutional knowledge preservation"
      ]
    },
    {
      title: "Clinical Intelligence Dashboard",
      description: "Real-time insights for operational excellence and patient care optimization",
      features: [
        "Live compliance status monitoring",
        "Performance metrics visualization",
        "Risk stratification analytics",
        "Quality improvement recommendations"
      ]
    }
  ]

  const roi_metrics = [
    { metric: "$7.5M+", description: "Annual savings per facility" },
    { metric: "90%", description: "Reduction in reporting time" },
    { metric: "100%", description: "Compliance achievement rate" },
    { metric: "18%", description: "Improvement in processing speed" }
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
            <div className="flex items-center justify-center gap-2 text-green-400 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">Solutions for Hospitals</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Save $7.5M+ Annually with
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> AI Clinical Intelligence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform your EMR system into a system of action. ChartR automates regulatory reporting, ensures compliance, 
              and delivers measurable cost savings while improving patient outcomes.
            </p>
          </motion.div>

          {/* Market Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {marketStats.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">{item.stat}</div>
                <div className="text-sm text-slate-300">{item.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              The Hidden Costs of Manual Processes
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Healthcare systems are drowning in administrative burden. ChartR transforms these challenges into competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-lg rounded-2xl border border-red-400/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <point.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{point.description}</p>
                <div className="text-sm font-semibold text-red-400">{point.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable Impact from Day One
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leading hospitals and health systems achieve immediate ROI with ChartR's AI-powered clinical data platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-300 mb-4">{benefit.description}</p>
                    <div className="text-sm font-semibold text-green-400">{benefit.metric}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ChartR Clinical: Complete Platform Solution
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive platform transforms your EMR data into actionable intelligence with human-AI integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Return on Investment
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Healthcare systems using ChartR report immediate cost savings and operational improvements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {roi_metrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-green-400/20"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{item.metric}</div>
                <div className="text-slate-300">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Save $7.5M+ Annually?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading healthcare systems using ChartR to automate compliance and achieve measurable cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Calculate Your ROI
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                Download Case Study
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HospitalsSolutionsPage 