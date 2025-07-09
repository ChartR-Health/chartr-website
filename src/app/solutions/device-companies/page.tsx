'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Shield, DollarSign, Clock, TrendingUp, FileCheck, AlertTriangle, Target, CheckCircle, BarChart3, Database, Users, Zap, Brain, Heart, Stethoscope, Search, Eye } from 'lucide-react'

const DeviceCompaniesSolutionsPage = () => {
  const benefits = [
    {
      icon: Database,
      title: "Unified Data Management",
      description: "Streamline data entry from legacy systems and EMRs into a unified, HIPAA-compliant database",
      metric: "50x faster data extraction"
    },
    {
      icon: Search,
      title: "Patient Screening & Identification",
      description: "Proactively identify patients who need your devices under evolving clinical guidelines",
      metric: "25% more patients reached"
    },
    {
      icon: Brain,
      title: "Accelerate R&D",
      description: "AI-powered insights accelerate research, development, and innovation cycles",
      metric: "60% faster R&D cycles"
    },
    {
      icon: Shield,
      title: "Risk Assessment & Compliance",
      description: "Comprehensive risk assessment with real-time monitoring and regulatory compliance",
      metric: "100% compliance rate"
    }
  ]

  const challenges = [
    {
      icon: Database,
      title: "Fragmented Data Systems",
      description: "Multiple EMR systems, clinical databases, and research platforms create data silos",
      impact: "30% data redundancy"
    },
    {
      icon: Clock,
      title: "Slow Clinical Insights",
      description: "Manual data extraction and analysis delays critical clinical decision-making",
      impact: "6-12 month analysis cycles"
    },
    {
      icon: DollarSign,
      title: "High Operational Costs",
      description: "Inefficient data management and manual processes drive up operational expenses",
      impact: "$2M+ annual data costs"
    }
  ]

  const [selectedSolution, setSelectedSolution] = useState(0);

  const solutions = [
    {
      title: "Unified Data Platform",
      description: "Integrate data from legacy systems, custom databases, and EMR systems into one platform",
      icon: Database,
      features: [
        "Seamless integration with existing clinical workflows",
        "Real-time data synchronization and validation",
        "HIPAA-compliant AI with human verification process"
      ]
    },
    {
      title: "Patient Screening & Device Matching",
      description: "Get your devices to the patients who need them with AI-powered patient identification",
      icon: Search,
      features: [
        "Proactive patient identification under evolving guidelines",
        "Automated screening for device eligibility criteria",
        "Real-time alerts for new patient opportunities"
      ]
    },
    {
      title: "Regulatory Reporting",
      description: "Streamline FDA submissions and compliance monitoring with automated reporting",
      icon: FileCheck,
      features: [
        "Automated regulatory reporting and compliance monitoring",
        "Clinical data extraction for FDA submissions",
        "Real-time compliance tracking and alerts"
      ]
    },
    {
      title: "Outcomes Research",
      description: "Accelerate research and development with AI-powered clinical insights",
      icon: BarChart3,
      features: [
        "Automated clinical data extraction and synthesis",
        "Advanced analytics for outcomes research",
        "Risk assessment and predictive modeling"
      ]
    }
  ]

  const roi_calculator = [
    { metric: "$2.1M", description: "Average annual savings" },
    { metric: "50x", description: "Faster data extraction" },
    { metric: "25%", description: "More patients reached" },
    { metric: "60%", description: "Faster R&D cycles" }
  ]

  const testimonials = [
    {
      quote: "ChartR transformed our data management. We now have a unified platform that integrates all our clinical systems, accelerating our R&D by 60% and improving patient outcomes.",
      author: "Dr. Jennifer Walsh",
      role: "VP of Clinical Affairs",
      company: "Leading Medical Device Company"
    },
    {
      quote: "The AI-powered data extraction saved us over $1M annually while providing insights that helped us identify new market opportunities and increase revenue by 25%.",
      author: "Mark Stevens",
      role: "Director of Data Strategy",
      company: "Fortune 500 Medical Device Manufacturer"
    }
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
            <div className="flex items-center justify-center gap-2 text-orange-600 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">Solutions for Device Companies</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Get Your Devices to
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Patients Who Need Them</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Unify your data systems, accelerate patient screening, and drive innovation with ChartR's 
              AI-powered platform designed for medical device companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Data Flow Section */}
      <section className="py-16 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Patient Screening Challenge
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Medical device companies face complex data challenges that prevent them from reaching patients who need their devices
            </p>
          </motion.div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-red-100/40 to-red-50/30 backdrop-blur-sm rounded-2xl border border-red-200/30"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <challenge.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{challenge.title}</h3>
                    <p className="text-slate-600 mb-4">{challenge.description}</p>
                    <div className="text-sm font-semibold text-red-600">{challenge.impact}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Moved above solutions */}
      <section className="py-16 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Transform Your Impact
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading device companies use ChartR to increase patient reach, decrease costs, and enhance clinical outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-slate-100/80 to-slate-50/60 backdrop-blur-sm rounded-2xl border border-slate-200/30 hover:border-orange-300/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 mb-4">{benefit.description}</p>
                    <div className="text-sm font-semibold text-orange-600">{benefit.metric}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ChartR helps device companies unify data systems, accelerate patient screening, streamline regulatory processes, and accelerate research.
            </p>
          </motion.div>

          {/* Interactive Solutions Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Solution List */}
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div key={index}>
                  <motion.div
                    className={`group cursor-pointer transition-all duration-300 ${
                      selectedSolution === index ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: selectedSolution === index ? 1 : 0.6, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    onClick={() => setSelectedSolution(index)}
                  >
                    <div className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 ${
                      selectedSolution === index 
                        ? 'border-orange-200 bg-orange-50/50' 
                        : 'border-slate-200/50 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}>
                      {/* Number */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                        selectedSolution === index 
                          ? 'bg-orange-100' 
                          : 'bg-slate-100 group-hover:bg-slate-200'
                      }`}>
                        <span className={`text-sm font-semibold ${
                          selectedSolution === index 
                            ? 'text-orange-700' 
                            : 'text-slate-700'
                        }`}>
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`font-semibold text-sm ${
                          selectedSolution === index 
                            ? 'text-orange-700' 
                            : 'text-slate-900'
                        }`}>
                          {solution.title}
                        </h3>
                      </div>
                      
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                        selectedSolution === index 
                          ? 'bg-orange-100' 
                          : 'bg-slate-100 group-hover:bg-slate-200'
                      }`}>
                        <solution.icon className={`w-3 h-3 ${
                          selectedSolution === index 
                            ? 'text-orange-600' 
                            : 'text-slate-600'
                        }`} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile: Detailed Content appears directly under each solution */}
                  <div className="lg:hidden">
                    {selectedSolution === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-slate-50/50 rounded-lg border border-slate-200/30"
                      >
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                          {solution.title}
                        </h3>
                        <p className="text-slate-600 mb-4 text-sm">
                          {solution.description}
                        </p>
                        
                        <ul className="space-y-3">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600 leading-relaxed">
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

            {/* Desktop: Right Side: Detailed Content */}
            <div className="hidden lg:block sticky top-8">
              <motion.div
                key={selectedSolution}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {solutions[selectedSolution].title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {solutions[selectedSolution].description}
                  </p>
                  
                  <ul className="space-y-4">
                    {solutions[selectedSolution].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
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

      {/* Stats Section - Moved after solutions */}
      <section className="py-16 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Expected Impact
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ChartR's platform is designed to deliver measurable impact for device companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {roi_calculator.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className={`text-center p-6 bg-gradient-to-br ${
                  index === 0 ? "from-orange-400/10 to-orange-500/10" :
                  index === 1 ? "from-orange-500/10 to-orange-600/10" :
                  index === 2 ? "from-orange-600/10 to-orange-700/10" :
                  "from-orange-700/10 to-orange-700/10"
                } backdrop-blur-sm rounded-2xl border ${
                  index === 0 ? "border-orange-200/30" :
                  index === 1 ? "border-orange-300/30" :
                  index === 2 ? "border-orange-400/30" :
                  "border-orange-500/30"
                }`}
              >
                <div className={`text-4xl font-bold mb-2 ${
                  index === 0 ? "text-orange-600" :
                  index === 1 ? "text-orange-700" :
                  index === 2 ? "text-orange-800" :
                  "text-orange-900"
                }`}>{item.metric}</div>
                <div className="text-slate-600">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-200/20 to-red-200/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to Reach More Patients?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join leading device companies using ChartR to increase patient reach, decrease costs, and enhance clinical outcomes.
            </p>
            <div className="flex justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DeviceCompaniesSolutionsPage 