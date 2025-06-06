'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Users, BookOpen, TrendingUp, Award, Clock, Shield, Target, CheckCircle, BarChart3 } from 'lucide-react'

const MedicalSocietiesSolutionsPage = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Accelerated Evidence Synthesis",
      description: "Complete systematic literature reviews 70% faster with AI-powered analysis",
      metric: "70% faster reviews"
    },
    {
      icon: Users,
      title: "Enhanced Registry Management",
      description: "Streamline clinical registry operations with automated data collection and analysis",
      metric: "95% data accuracy"
    },
    {
      icon: Clock,
      title: "Rapid Guideline Development",
      description: "Reduce guideline development time from years to months with AI evidence extraction",
      metric: "60% time reduction"
    },
    {
      icon: Award,
      title: "Superior Evidence Quality",
      description: "Ensure highest standards with PRISMA-compliant workflows and bias detection",
      metric: "99% compliance rate"
    }
  ]

  const marketStats = [
    { stat: "$345M", description: "Healthcare chatbots market by 2026" },
    { stat: "53%", description: "Of EU healthcare orgs using AI" },
    { stat: "89%", description: "Believe AI speeds up processes" },
    { stat: "56%", description: "Say AI improves diagnosis quality" }
  ]

  const challenges = [
    {
      icon: Clock,
      title: "Time-Intensive Reviews",
      description: "Traditional systematic reviews take 6-24 months to complete",
      impact: "18-month average review cycle"
    },
    {
      icon: Users,
      title: "Resource Constraints",
      description: "Limited expert reviewers and increasing evidence volume create bottlenecks",
      impact: "60% of societies report resource shortage"
    },
    {
      icon: BarChart3,
      title: "Data Quality Issues",
      description: "Manual registry data collection leads to inconsistencies and errors",
      impact: "30% error rate in manual collection"
    }
  ]

  const solutions = [
    {
      title: "AI-Powered Literature Analysis",
      description: "Automate evidence extraction and synthesis for faster, more comprehensive reviews",
      features: [
        "Automated paper screening and categorization",
        "AI-driven evidence extraction and summarization",
        "Real-time bias and quality assessment",
        "PRISMA-compliant reporting generation"
      ]
    },
    {
      title: "Intelligent Registry Platform",
      description: "Transform clinical registries with automated data collection and real-time insights",
      features: [
        "Automated data ingestion from EMR systems",
        "Real-time quality monitoring and validation",
        "Advanced analytics and outcome tracking",
        "Regulatory compliance automation"
      ]
    },
    {
      title: "Evidence-Based Guidelines Engine",
      description: "Accelerate guideline development with AI-assisted evidence evaluation",
      features: [
        "Rapid evidence grading and recommendation generation",
        "Conflict of interest detection and management",
        "Collaborative review workflows",
        "Automated update notifications for new evidence"
      ]
    }
  ]

  const successMetrics = [
    { metric: "70%", description: "Faster systematic reviews" },
    { metric: "95%", description: "Data accuracy improvement" },
    { metric: "80%", description: "Resource efficiency gain" },
    { metric: "99%", description: "Compliance achievement" }
  ]

  const testimonials = [
    {
      quote: "ChartR Literature has transformed our evidence synthesis process. What used to take our team 18 months now takes 6 months with better accuracy.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer, American Heart Association",
      society: "Leading Cardiovascular Society"
    },
    {
      quote: "The registry management capabilities have revolutionized our data collection. We're seeing 95% accuracy rates and real-time insights.",
      author: "Dr. Michael Rodriguez",
      role: "Registry Director, Thoracic Surgery Society",
      society: "National Surgical Society"
    }
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
            <div className="flex items-center justify-center gap-2 text-purple-400 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">Solutions for Medical Societies</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Evidence Synthesis with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Accelerate systematic reviews, streamline registry management, and develop evidence-based guidelines 
              faster than ever with ChartR's AI-powered research platform.
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
                <div className="text-3xl font-bold text-purple-400 mb-2">{item.stat}</div>
                <div className="text-sm text-slate-300">{item.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              The Evidence Synthesis Challenge
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Medical societies face increasing pressure to develop evidence-based guidelines faster while maintaining the highest quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-lg rounded-2xl border border-orange-400/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <challenge.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{challenge.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{challenge.description}</p>
                <div className="text-sm font-semibold text-orange-400">{challenge.impact}</div>
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
              Why Leading Medical Societies Choose ChartR
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your evidence synthesis and registry management with AI-powered automation and intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-300 mb-4">{benefit.description}</p>
                    <div className="text-sm font-semibold text-purple-400">{benefit.metric}</div>
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
              Comprehensive Evidence Platform
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our integrated platform supports every aspect of evidence synthesis and registry management for medical societies.
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
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Trusted by Leading Medical Societies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how ChartR is transforming evidence synthesis for medical societies worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-lg rounded-2xl border border-purple-400/20"
              >
                <blockquote className="text-slate-300 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                    <div className="text-sm text-purple-400">{testimonial.society}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Results for Medical Societies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Medical societies using ChartR report significant improvements in efficiency and evidence quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-purple-400/20"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">{item.metric}</div>
                <div className="text-slate-300">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Evidence Synthesis?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading medical societies using ChartR to accelerate reviews and improve evidence quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                Download Evidence Brief
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MedicalSocietiesSolutionsPage 