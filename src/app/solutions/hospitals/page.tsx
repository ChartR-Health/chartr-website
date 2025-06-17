'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, DollarSign, Shield, Clock, TrendingUp, Heart, FileCheck, AlertTriangle, CheckCircle, BarChart3, Stethoscope, Users, Search, Database, Target, Brain } from 'lucide-react'

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
    { stat: "94%", description: "Of healthcare companies use AI/ML" },
    { stat: "90%", description: "Reduction in manual reporting time" },
    { stat: "100%", description: "Compliance achievement rate" },
    { stat: "18%", description: "Faster data processing speed" }
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
      title: "Any Format, Fully Adaptive",
      features: [
        "Export to any registry standard (CMS, Joint Commission, specialty societies)",
        "Auto-update to meet evolving requirements",
        "Real-time data synchronization across multiple registries simultaneously",
        "Custom field mapping for any quality program"
      ]
    },
    {
      title: "Smart Review + Real-Time Monitoring",
      features: [
        "AI-assisted clinical documentation review",
        "Human validation of key decisions",
        "Continuous compliance tracking and performance metrics",
        "Institutional knowledge preservation"
      ]
    },
    {
      title: "Seamless, Scalable Workflow",
      description: "Real-time insights for operational excellence and patient care optimization",
      features: [
        "Real-time data sync across multiple registries",
        "Risk stratification and quality improvement insights",
        "Zero disruption to existing workflows"
      ]
    }
  ]

  const roi_metrics = [
    { metric: "$7.5M+", description: "Annual savings per facility" },
    { metric: "90%", description: "Reduction in manual reporting time" },
    { metric: "100%", description: "Compliance achievement rate" },
    { metric: "18%", description: "Faster data processing speed" }
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
              Save <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-cyan-500 bg-clip-text text-transparent animate-gradient">$7.5M+</span> Per Hospital with ChartR
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Automate regulatory reporting, cut labor costs, and eliminate compliance bottlenecks — all through one AI-powered platform
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
              The Real Cost of Manual Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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

      {/* Solutions Overview */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-green-400 mb-6">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Administrators</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              One Registry Platform. Every Requirement. Zero Disruption.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className={`bg-gradient-to-br backdrop-blur-lg rounded-3xl p-8 border ${
                  index === 0 
                    ? "from-green-500/20 to-emerald-500/20 border-green-400/20" 
                    : index === 1 
                    ? "from-emerald-500/20 to-cyan-500/20 border-emerald-400/20"
                    : "from-cyan-500/20 to-green-500/20 border-cyan-400/20"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        index === 0 
                          ? "text-green-400" 
                          : index === 1 
                          ? "text-emerald-400"
                          : "text-cyan-400"
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

      {/* For Clinicians Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-green-400 mb-6">
              <Stethoscope className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Clinicians</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Smarter Screening. Better Decisions.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Empower clinicians with AI-driven patient screening and real-time access to evidence-based guidelines for optimal care decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-3xl p-8 border border-green-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Precision Patient Screening</h3>
              </div>
              <p className="text-slate-300 mb-6">
                AI-driven tools for clinical condition detection, risk targeting, and trial matching.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Automated risk stratification + alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Population-level health tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Preventive care opportunity detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Clinical trial eligibility screening</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-8 border border-emerald-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Brain className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Evidence-Based Decision Support</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Live access to clinical guidelines, evidence, and treatment recommendations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Real-time clinical guideline delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Evidence synthesis and pathway suggestions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Drug interaction + contraindication alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Personalized treatment recommendations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Researchers Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-green-400 mb-6">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Researchers</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Accelerate Outcomes Research & Trial Infrastructure
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From real-world evidence to patient recruitment, ChartR equips research teams with automated tools to build datasets, screen patients, and streamline trials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-8 border border-green-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Research Insights</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Real-world evidence generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Health economics & value tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Comparative effectiveness analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Study-ready dataset preparation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-8 border border-emerald-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Database className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Database Building</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Clinical database automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Longitudinal patient tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Registry + biobank integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Cross-site data harmonization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="bg-gradient-to-br from-cyan-500/20 to-green-500/20 backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Search className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Clinical Trials Screening</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Automated patient eligibility screening</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Clinical trial feasibility assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Recruitment optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Site selection and performance analysis</span>
                </li>
              </ul>
            </motion.div>
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
              Impact and Return on Investment
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leading hospitals and health systems achieve immediate ROI with ChartR's AI-powered clinical data platform.
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
              Key Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how ChartR transforms healthcare operations and improves patient outcomes.
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