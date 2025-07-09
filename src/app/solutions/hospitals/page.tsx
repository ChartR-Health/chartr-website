'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, DollarSign, Shield, Clock, TrendingUp, Heart, FileCheck, AlertTriangle, CheckCircle, BarChart3, Stethoscope, Users, Search, Database, Target, Brain, Layers, Network, Cpu, Settings } from 'lucide-react'

const HospitalsSolutionsPage = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const benefits = [
    {
      icon: DollarSign,
      title: "Massive Cost Savings",
      description: "Save $15M+ annually per hospital facility through automated regulatory reporting",
      metric: "$15M+ annual savings"
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
    { stat: "94%", description: "Of healthcare companies use AI/ML" },
    { stat: "90%", description: "Reduction in manual reporting time" },
    { stat: "100%", description: "Compliance achievement rate" }
  ]

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Regulatory Burden",
      description: "Manual reporting drains staff time and budgets, increasing the risk of delays and penalties"
    },
    {
      icon: FileCheck,
      title: "Data Quality Issues",
      description: "Unstructured EMRs introduce compliance risks and inefficiencies—60% of physician time is spent on documentation"
    },
    {
      icon: TrendingUp,
      title: "Resource Constraints",
      description: "A 15M global healthcare worker shortage is intensifying patient loads and stretching clinical capacity"
    }
  ]

  const solutions = [
    {
      number: "1",
      title: "Any Format, Fully Adaptive",
      icon: Layers,
      features: [
        "Export to any registry standard (CMS, Joint Commission, National Societies)",
        "Auto-update to meet evolving requirements",
        "Real-time data synchronization across multiple registries",
        "Custom field mapping for any quality program"
      ]
    },
    {
      number: "2",
      title: "Smart Review + Real-Time Monitoring",
      icon: Shield,
      features: [
        "AI-assisted clinical documentation review",
        "Human validation of key decisions",
        "Continuous compliance tracking and performance metrics",
        "Institutional knowledge preservation"
      ]
    },
    {
      number: "3",
      title: "Seamless, Scalable Workflow",
      icon: Settings,
      features: [
        "Real-time data sync across multiple registries",
        "Risk stratification and quality improvement insights",
        "Zero disruption to existing workflows"
      ]
    }
  ]

  const roi_metrics = [
    { metric: "$15M+", description: "Annual savings per facility" },
    { metric: "90%", description: "Reduction in manual reporting time" },
    { metric: "100%", description: "Compliance achievement rate" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-green-600 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">Solutions for Hospitals</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Save <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-cyan-500 bg-clip-text text-transparent animate-gradient">$15M+</span> Per Hospital with ChartR
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Unlock measurable returns on investment—streamline compliance, accelerate reporting, and improve care with one AI-powered platform.
            </p>
          </motion.div>

          {/* Market Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {marketStats.map((item, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center p-6 rounded-xl border border-slate-200/30 dark:border-slate-700/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-3xl font-bold mb-2 text-emerald-600 dark:text-emerald-400">{item.stat}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              The Real Cost of Manual Compliance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hospitals are drowning in administrative work. ChartR transforms this burden into a competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/30 dark:border-slate-700/30 hover:border-red-300/50 dark:hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <point.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{point.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-green-600 mb-6">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Administrators</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              One Registry Platform. Every Requirement. Zero Disruption.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">
              Streamline data workflows and compliance across all registries with one adaptive system.
            </p>
          </motion.div>

          {/* Interactive Solutions Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side: Numbered List */}
            <div className="space-y-3">
              {solutions.map((solution, index) => (
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
                        ? 'border-green-200 dark:border-green-700 bg-green-50/50 dark:bg-green-900/20' 
                        : 'border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50/50 dark:hover:bg-slate-800/50'
                    }`}>
                      {/* Number */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                        selectedFeature === index 
                          ? 'bg-green-100 dark:bg-green-800' 
                          : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                      }`}>
                        <span className={`text-sm font-semibold ${
                          selectedFeature === index 
                            ? 'text-green-700 dark:text-green-300' 
                            : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          {solution.number}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-sm font-medium transition-colors ${
                          selectedFeature === index 
                            ? 'text-green-900 dark:text-green-100' 
                            : 'text-slate-900 dark:text-white group-hover:text-slate-800 dark:group-hover:text-slate-200'
                        }`}>
                          {solution.title}
                        </h3>
                      </div>
                      
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                        selectedFeature === index 
                          ? 'bg-green-100 dark:bg-green-800' 
                          : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                      }`}>
                        <solution.icon className={`w-3 h-3 ${
                          selectedFeature === index 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-slate-600 dark:text-slate-400'
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
                        className="mt-4 p-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/30 dark:border-slate-700/30"
                      >
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                          {solution.title}
                        </h3>
                        <ul className="space-y-3">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature}
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

            {/* Right Side: Clean Detail Panel - Desktop Only */}
            <div className="hidden lg:block sticky top-8">
              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                    {solutions[selectedFeature].title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {solutions[selectedFeature].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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

      {/* For Clinicians Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-green-600 mb-6">
              <Stethoscope className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Clinicians</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Smarter Screening. Better Decisions.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI-powered tools for real-time risk detection and personalized clinical guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200/30 dark:border-slate-700/30 hover:border-green-300/50 dark:hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Precision Patient Screening</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                AI-driven tools for clinical condition detection, risk targeting, and trial matching.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Automated risk stratification + alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Population-level health tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Preventive care opportunity detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Clinical trial eligibility screening</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200/30 dark:border-slate-700/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Brain className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Evidence-Based Decision Support</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Live access to clinical guidelines, evidence, and treatment recommendations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Real-time clinical guideline delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Evidence synthesis and pathway suggestions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Drug interaction + contraindication alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Personalized treatment recommendations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Researchers Section */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-green-600 mb-6">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Researchers</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Accelerate Outcomes Research & Trial Infrastructure
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Automate data prep, patient screening, and recruitment to streamline clinical studies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200/30 dark:border-slate-700/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Research Insights</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Real-world evidence generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Health economics & value tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Comparative effectiveness analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Study-ready dataset preparation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200/30 dark:border-slate-700/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Database className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Database Building</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Clinical database automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Longitudinal patient tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Registry + biobank integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Cross-site data harmonization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200/30 dark:border-slate-700/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Search className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Clinical Trials Screening</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Automated patient eligibility screening</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Clinical trial feasibility assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Recruitment optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Site selection and performance analysis</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-200/20 to-blue-200/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to Save $15M+ Annually?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join leading healthcare systems using ChartR to automate compliance and achieve measurable cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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

export default HospitalsSolutionsPage 