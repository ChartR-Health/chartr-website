'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Users, BookOpen, TrendingUp, Award, Clock, Shield, Target, CheckCircle, BarChart3, Database, FileText, Settings, Download, Stethoscope, AlertTriangle } from 'lucide-react'

const MedicalSocietiesSolutionsPage = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Streamlined Data Collection",
      description: "Reduce data entry time by 65% with intuitive interfaces, automated validation, and real-time error prompts."
    },
    {
      icon: TrendingUp,
      title: "Dynamic Variable Management",
      description: "Apply evolving guideline updates across all registry sites instantly, eliminating months of delay with real-time propagation."
    },
    {
      icon: Target,
      title: "95% model accuracy",
      description: "Build and validate clinical prediction models with 95% accuracy, supporting quality improvement and benchmarking efforts."
    },
    {
      icon: Stethoscope,
      title: "Seamless integration",
      description: "Deliver clinical insights directly into physician workflows with seamless decision support for treatment selection and outcome tracking."
    }
  ]

  const marketStats = [
    { stat: "150+", description: "Medical society registries worldwide" },
    { stat: "75%", description: "Report data quality challenges" },
    { stat: "60%", description: "Struggle with variable management" },
    { stat: "90%", description: "Want integrated clinical tools" }
  ]

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Complex Variable Management",
      description: "Evolving guidelines require constant database edits, delaying improvements across sites by months",
      impact: "6-month delays in implementing critical updates"
    },
    {
      icon: Clock,
      title: "Manual Data Collection",
      description: "Manual entry adds 40+ minutes per case, slowing down registry updates",
      impact: "65% increase in data collection costs"
    },
    {
      icon: Shield,
      title: "Complex PHI Requirements",
      description: "3-month delays for data requests to PHI export delays frequently limit research collaboration and timeliness",
      impact: "Missed research opportunities and delayed publications"
    }
  ]

  const solutions = [
    {
      title: "Smart Data Collection",
      description: "Accelerate and error-proof data entry with intelligent automation.",
      features: [
        "65% faster entry with real-time error prompts",
        "Automated data validation and quality assurance"
      ]
    },
    {
      title: "Real-Time Variable Management",
      description: "Apply evolving guidelines instantly across all registry sites.",
      features: [
        "Instant propagation of updates across all sites",
        "Eliminate months of delay from manual edits"
      ]
    },
    {
      title: "Accurate Risk Modeling",
      description: "Power predictive analytics and benchmarking with clinical-grade models.",
      features: [
        "95% accuracy in risk prediction models",
        "Outcome tracking + quality improvement"
      ]
    },
    {
      title: "Research-Ready Data Exports",
      description: "Enable secure, compliant research with flexible export options.",
      features: [
        "PHI-anonymized, analysis-ready exports",
        "Custom formats with data dictionaries"
      ]
    },
    {
      title: "Point-of-Care Clinical Modules",
      description: "Bring clinical insights directly into physician workflows.",
      features: [
        "Risk calculators + treatment decision support",
        "Patient-specific outcome prediction tools"
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
              Modern Registry Infrastructure, Built for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clinical Impact</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Streamline data entry, manage variables in real-time, and deliver point-of-care decision support—all in one integrated platform designed for today's medical societies.
            </p>
          </motion.div>

          {/* Market Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl border ${
                  index === 0 
                    ? "bg-gradient-to-r from-purple-600/30 to-purple-500/30 border-purple-500/30" 
                    : index === 1 
                    ? "bg-gradient-to-r from-purple-500/30 to-purple-400/30 border-purple-500/30"
                    : index === 2
                    ? "bg-gradient-to-r from-purple-400/30 to-purple-300/30 border-purple-400/30"
                    : "bg-gradient-to-r from-purple-300/30 to-fuchsia-400/30 border-fuchsia-400/30"
                }`}
              >
                <div className={`text-3xl font-bold mb-2 ${
                  index === 0 
                    ? "text-purple-500" 
                    : index === 1 
                    ? "text-purple-500"
                    : index === 2
                    ? "text-purple-400"
                    : "text-fuchsia-400"
                }`}>
                  {stat.stat}
                </div>
                <div className="text-slate-300">{stat.description}</div>
              </motion.div>
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
            {painPoints.map((painPoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-lg rounded-2xl border border-red-400/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <painPoint.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{painPoint.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{painPoint.description}</p>
                {painPoint.impact && <div className="text-sm font-semibold text-red-400">{painPoint.impact}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Delivering real-time updates, better data quality, and point of care decision support in one integrated platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.slice(0, 3).map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className={`bg-gradient-to-r backdrop-blur-lg rounded-3xl p-8 border h-[350px] ${
                  index === 0 
                    ? "from-purple-500/20 to-purple-400/20 border-purple-400/20" 
                    : index === 1 
                    ? "from-purple-400/20 to-purple-300/20 border-purple-400/20"
                    : "from-purple-300/20 to-pink-300/20 border-pink-300/20"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        index === 0 
                          ? "text-purple-400" 
                          : index === 1 
                          ? "text-purple-400"
                          : "text-pink-400"
                      }`} />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {solutions.slice(3).map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className={`bg-gradient-to-r backdrop-blur-lg rounded-3xl p-8 border h-[350px] ${
                  index === 0 
                    ? "from-purple-500/20 to-purple-400/20 border-purple-400/20" 
                    : "from-purple-400/20 to-pink-300/20 border-pink-300/20"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        index === 0 
                          ? "text-purple-400" 
                          : "text-pink-400"
                      }`} />
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