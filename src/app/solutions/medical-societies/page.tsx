'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Users, BookOpen, TrendingUp, Award, Clock, Shield, Target, CheckCircle, BarChart3, Database, FileText, Settings, Download, Stethoscope, AlertTriangle } from 'lucide-react'

const ClinicalRegistriesSolutionsPage = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

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
    { stat: "150+", description: "Clinical registries worldwide" },
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

  const comprehensiveSolutions = [
    {
      number: "1",
      title: "Smart Data Collection",
      icon: Clock,
      description: "Accelerate and error-proof data entry with intelligent automation.",
      features: [
        "65% faster entry with real-time error prompts",
        "Automated data validation and quality assurance",
        "Intuitive interfaces designed for clinical workflows",
        "Real-time error detection and correction"
      ]
    },
    {
      number: "2",
      title: "Real-Time Variable Management",
      icon: TrendingUp,
      description: "Apply evolving guidelines instantly across all registry sites.",
      features: [
        "Instant propagation of updates across all sites",
        "Eliminate months of delay from manual edits",
        "Version control and change tracking",
        "Automated notification system for updates"
      ]
    },
    {
      number: "3",
      title: "Accurate Risk Modeling",
      icon: Target,
      description: "Power predictive analytics and benchmarking with clinical-grade models.",
      features: [
        "95% accuracy in risk prediction models",
        "Outcome tracking + quality improvement",
        "Real-time risk calculations",
        "Benchmarking against national standards"
      ]
    },
    {
      number: "4",
      title: "Research-Ready Data Exports",
      icon: Database,
      description: "Enable secure, compliant research with flexible export options.",
      features: [
        "PHI-anonymized, analysis-ready exports",
        "Custom formats with data dictionaries",
        "Compliance with HIPAA and research standards",
        "Automated data quality reports"
      ]
    },
    {
      number: "5",
      title: "Point-of-Care Clinical Modules",
      icon: Stethoscope,
      description: "Bring clinical insights directly into physician workflows.",
      features: [
        "Risk calculators + treatment decision support",
        "Patient-specific outcome prediction tools",
        "Integration with existing clinical systems",
        "Real-time clinical decision support"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-2 text-purple-600 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">Solutions for Clinical Registries</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Modern Registry Infrastructure, Built for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clinical Impact</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Streamline data entry, manage variables in real-time, and deliver point-of-care decision support—all in one integrated platform intentionally designed for clinical registries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              The Registry Management Challenge
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Clinical registries need robust platforms that can adapt to evolving guidelines while delivering clinical insights to participating providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((painPoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/30 dark:border-slate-700/30 hover:border-red-300/50 dark:hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <painPoint.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{painPoint.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{painPoint.description}</p>
                {painPoint.impact && <div className="text-sm font-semibold text-red-600 dark:text-red-400">{painPoint.impact}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions Section */}
      <section className="py-16 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-purple-600 mb-6">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">Integrated Platform Solutions</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering real-time updates, better data quality, and point of care decision support in one integrated platform.
            </p>
          </motion.div>

          {/* Interactive Features Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Feature List */}
            <div className="space-y-3">
              {comprehensiveSolutions.map((feature, index) => (
                <div key={index}>
                  <motion.div
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
                        ? 'border-purple-200 bg-purple-50/50' 
                        : 'border-slate-200/50 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}>
                      {/* Number */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                        selectedFeature === index 
                          ? 'bg-purple-100' 
                          : 'bg-slate-100 group-hover:bg-slate-200'
                      }`}>
                        <span className={`text-sm font-semibold ${
                          selectedFeature === index 
                            ? 'text-purple-700' 
                            : 'text-slate-700'
                        }`}>
                          {feature.number}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`font-semibold text-sm ${
                          selectedFeature === index 
                            ? 'text-purple-700' 
                            : 'text-slate-900'
                        }`}>
                          {feature.title}
                        </h3>
                      </div>
                      
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                        selectedFeature === index 
                          ? 'bg-purple-100' 
                          : 'bg-slate-100 group-hover:bg-slate-200'
                      }`}>
                        <feature.icon className={`w-3 h-3 ${
                          selectedFeature === index 
                            ? 'text-purple-600' 
                            : 'text-slate-600'
                        }`} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile: Detailed Content appears directly under each feature */}
                  <div className="lg:hidden">
                    {selectedFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-slate-50/50 rounded-lg border border-slate-200/30"
                      >
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 mb-4 text-sm">
                          {feature.description}
                        </p>
                        
                        <ul className="space-y-3">
                          {feature.features.map((feat, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600 leading-relaxed">
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Right Side: Detailed Content */}
            <div className="hidden lg:block sticky top-8">
              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {comprehensiveSolutions[selectedFeature].title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {comprehensiveSolutions[selectedFeature].description}
                  </p>
                  
                  <ul className="space-y-4">
                    {comprehensiveSolutions[selectedFeature].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-200/20 to-pink-200/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Registry Infrastructure?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join leading clinical registries using ChartR to accelerate data collection and improve clinical outcomes.
            </p>
            <div className="flex justify-center">
              <a href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Schedule a Demo
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClinicalRegistriesSolutionsPage 