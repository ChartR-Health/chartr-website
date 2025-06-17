'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Shield, DollarSign, Clock, TrendingUp, FileCheck, AlertTriangle, Target, CheckCircle, BarChart3 } from 'lucide-react'

const DeviceCompaniesSolutionsPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Reduce Regulatory Costs",
      description: "Save millions on FDA submissions with automated data collection and reporting",
      metric: "$540K+ average PMA cost"
    },
    {
      icon: Clock,
      title: "Accelerate Time to Market",
      description: "Streamline clinical data collection and regulatory submission preparation",
      metric: "50% faster submissions"
    },
    {
      icon: Shield,
      title: "Ensure Compliance",
      description: "Maintain 100% regulatory compliance with real-time monitoring and alerts",
      metric: "100% compliance rate"
    },
    {
      icon: Target,
      title: "Improve Success Rates",
      description: "Higher FDA approval rates with accurate, comprehensive clinical data",
      metric: "95% data accuracy"
    }
  ]

  const marketStats = [
    {
      stat: "900+",
      description: "FDA Authorized AI/ML medical devices"
    },
    {
      stat: "21.3%",
      description: "2024 -> 2025 increase in registration fees"
    },
    {
      stat: "6 months",
      description: "Average premarket approval timeline"
    },
    {
      stat: "95%",
      description: "Want integrated clinical tools"
    }
  ]

  const submissionFees = [
    {
      submission: "PMA Submission",
      standardFee: "$540,000",
      smallBusinessFee: "$135,000",
      description: "Full premarket approval pathway"
    },
    {
      submission: "De Novo Classification",
      standardFee: "$135,000",
      smallBusinessFee: "$33,750",
      description: "Novel device classification pathway"
    }
  ]

  const challenges = [
    {
      icon: DollarSign,
      title: "Skyrocketing Regulatory Costs",
      description: "FDA user fees increased 11.8% in 2025, with PMA submissions now costing over $540K",
      impact: "$540K+ per PMA submission"
    },
    {
      icon: FileCheck,
      title: "Complex Data Requirements",
      description: "Increasing FDA scrutiny requires comprehensive clinical data and documentation",
      impact: "30+ clinical studies per device"
    },
    {
      icon: Clock,
      title: "Extended Review Times",
      description: "Regulatory delays can cost millions in lost revenue and market opportunity",
      impact: "18-month average review cycle"
    }
  ]

  const solutions = [
    {
      title: "Clinical Evidence & Quality Management",
      description: "Align clinical and quality workflows with an integrated platform",
      features: [
        "Automated evidence synthesis and audit-ready reporting",
        "Real-time compliance monitoring and quality analytics"
      ]
    },
    {
      title: "Regulatory Submission Optimization",
      description: "Accelerate submission prep time by 60% to reduce delays and market entry risk",
      features: [
        "Intelligent clinical summary generation and validation",
        "Streamlined documentation for faster filing readiness"
      ]
    },
    {
      title: "Compliance & Postmarket Approval Success",
      description: "Achieve regulatory confidence with complete, accurate data",
      features: [
        "Real-time monitoring and alerting for compliance",
        "High-quality submissions that improve approval outcome"
      ]
    }
  ]

  const roi_calculator = [
    { metric: "$2.1M", description: "Average savings per device" },
    { metric: "60%", description: "Reduction in submission prep time" },
    { metric: "45%", description: "Faster regulatory approval" },
    { metric: "95%", description: "First-time approval rate" }
  ]

  const testimonials = [
    {
      quote: "ChartR transformed our regulatory workflow. We reduced our PMA preparation time by 6 months and achieved first-time FDA approval.",
      author: "Dr. Jennifer Walsh",
      role: "VP of Regulatory Affairs",
      company: "Leading Cardiovascular Device Company"
    },
    {
      quote: "The automated data collection saved us over $1M in clinical data management costs for our last device submission.",
      author: "Mark Stevens",
      role: "Clinical Operations Director",
      company: "Fortune 500 Medical Device Manufacturer"
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
            <div className="flex items-center justify-center gap-2 text-orange-400 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">Solutions for Device Companies</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Navigate FDA Regulations with
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> AI Precision</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Reduce regulatory costs, accelerate time to market, and ensure compliance with ChartR's 
              AI-powered clinical data platform designed for medical device companies.
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
                <div className="text-3xl font-bold text-orange-400 mb-2">{item.stat}</div>
                <div className="text-sm text-slate-300">{item.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Regulatory Costs Table */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              2025 Costs: The Rising Burden of Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              FDA fee increases, skyrocketing regulatory costs, complex data requirements, and extended review times make efficiency more critical than ever
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-gradient-to-br from-red-900/40 to-red-800/30 backdrop-blur-lg rounded-2xl border border-red-400/20">
              <thead>
                <tr className="border-b border-red-400/20">
                  <th className="text-left p-6 text-white font-semibold">Submission Type</th>
                  <th className="text-center p-6 text-white font-semibold">Standard Fee</th>
                  <th className="text-center p-6 text-white font-semibold">Small Business Fee</th>
                  <th className="text-left p-6 text-white font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {submissionFees.map((cost, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    className="border-b border-red-400/10 hover:bg-red-900/20 transition-all duration-300"
                  >
                    <td className="p-6 text-white font-medium">{cost.submission}</td>
                    <td className="p-6 text-center text-red-300 font-bold">{cost.standardFee}</td>
                    <td className="p-6 text-center text-red-300 font-bold">{cost.smallBusinessFee}</td>
                    <td className="p-6 text-slate-300">{cost.description}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
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
            ChartR helps device companies streamline compliance, reduce costs, and accelerate approval.            </p>
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
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Regulatory Strategy
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leading device companies use ChartR to reduce costs, accelerate approvals, and maintain compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-300 mb-4">{benefit.description}</p>
                    <div className="text-sm font-semibold text-orange-400">{benefit.metric}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Trusted by Leading Device Companies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how ChartR is helping device companies navigate regulatory challenges and accelerate approvals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-lg rounded-2xl border border-orange-400/20"
              >
                <blockquote className="text-slate-300 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                    <div className="text-sm text-orange-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven ROI for Device Companies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Device companies using ChartR report significant cost savings and faster regulatory approvals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {roi_calculator.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-400/20"
              >
                <div className="text-4xl font-bold text-orange-400 mb-2">{item.metric}</div>
                <div className="text-slate-300">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Reduce Your Regulatory Burden?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading device companies using ChartR to streamline regulatory processes and accelerate time to market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Calculate ROI
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                Download Regulatory Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DeviceCompaniesSolutionsPage 