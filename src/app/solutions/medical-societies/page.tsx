'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Users, BookOpen, TrendingUp, Award, Clock, Shield, Target, CheckCircle, BarChart3, Database, FileText, Settings, Download, Stethoscope } from 'lucide-react'

const MedicalSocietiesSolutionsPage = () => {
  const benefits = [
    {
      icon: FileText,
      title: "Streamlined Data Collection",
      description: "Reduce data entry time by 65% with intuitive interfaces and automated validation",
      metric: "65% faster data entry"
    },
    {
      icon: Settings,
      title: "Dynamic Variable Management",
      description: "Instantly propagate guideline updates across the entire registry infrastructure",
      metric: "Real-time updates"
    },
    {
      icon: BarChart3,
      title: "Advanced Risk Modeling",
      description: "Build and validate clinical prediction models with 95% accuracy for quality improvement",
      metric: "95% model accuracy"
    },
    {
      icon: Stethoscope,
      title: "Point of Care Integration",
      description: "Deliver clinical insights directly to physician workflows for better patient outcomes",
      metric: "Seamless integration"
    }
  ]

  const marketStats = [
    { stat: "150+", description: "Medical society registries worldwide" },
    { stat: "75%", description: "Report data quality challenges" },
    { stat: "60%", description: "Struggle with variable management" },
    { stat: "90%", description: "Want integrated clinical tools" }
  ]

  const challenges = [
    {
      icon: Settings,
      title: "Complex Variable Management",
      description: "Evolving clinical guidelines require constant database updates and variable modifications",
      impact: "6-month delays for guideline updates"
    },
    {
      icon: Database,
      title: "Data Entry Burden",
      description: "Manual data collection creates administrative burden for participating sites and partners",
      impact: "40+ minutes per case entry"
    },
    {
      icon: Shield,
      title: "Research Data Access",
      description: "Complex PHI requirements and data export processes limit research collaboration",
      impact: "3-month delays for data requests"
    }
  ]

  const solutions = [
    {
      title: "Streamlined Electronic Data Entry",
      description: "Simplified, intuitive data collection platform for registry partners and participating sites",
      features: [
        "User-friendly web-based data entry interfaces",
        "Automated data validation and quality checks",
        "Real-time error detection and correction prompts",
        "Mobile-responsive design for clinical workflow integration"
      ]
    },
    {
      title: "Variable Management & Real-Time Updates",
      description: "Dynamic database architecture that adapts to evolving clinical guidelines and definitions",
      features: [
        "Flexible variable definition and modification system",
        "Automated propagation of guideline updates",
        "Version control for data element changes",
        "Backward compatibility for historical data analysis"
      ]
    },
    {
      title: "Risk Models & Algorithm Development",
      description: "Build and validate sophisticated clinical risk prediction models and quality algorithms",
      features: [
        "Machine learning model development and validation",
        "Risk stratification and outcome prediction tools",
        "Automated algorithm testing and performance monitoring",
        "Statistical analysis and model refinement capabilities"
      ]
    },
    {
      title: "PHI-Anonymized Data Exports",
      description: "Secure, analysis-ready data exports for research and quality improvement initiatives",
      features: [
        "Automated de-identification and anonymization",
        "Customizable data export formats and specifications",
        "Researcher-friendly data dictionaries and documentation",
        "Secure data sharing protocols and compliance tools"
      ]
    },
    {
      title: "Point of Care Clinical Modules",
      description: "Real-time clinical decision support tools integrated into partner practice workflows",
      features: [
        "Risk calculator integration at point of care",
        "Clinical guideline alerts and recommendations",
        "Patient-specific outcome predictions and insights",
        "Performance benchmarking and quality metrics display"
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
      quote: "ChartR's variable management system allows us to implement guideline updates instantly across all participating sites. What used to take 6 months now happens in real-time.",
      author: "Anonymous",
      role: "Registry Director",
      society: "Leading Cardiac Surgery Society"
    },
    {
      quote: "The point-of-care modules have transformed how our members interact with registry data. Risk calculators integrated directly into their workflow have improved both data quality and patient care.",
      author: "Anonymous",
      role: "Database Chair",
      society: "National Quality Improvement Initiative"
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
              Next-Generation Registry Platform with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Clinical Intelligence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform your medical society registry operations with streamlined data entry, dynamic variable management, 
              and integrated point-of-care clinical decision support. Built for the modern healthcare ecosystem.
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
              The Registry Management Challenge
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Medical societies need robust registry platforms that can adapt to evolving guidelines while delivering clinical insights to participating providers.
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