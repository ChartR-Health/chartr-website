'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, TrendingUp, Clock, DollarSign, Users, Award, Target, Zap, BarChart3, CheckCircle } from 'lucide-react'

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
      metric: "→ 40% faster grant discovery"
    },
    {
      icon: Clock,
      title: "Automate Literature Reviews",
      description: "Use AI to streamline systematic search and analysis.",
      metric: "→ 20+ hours saved per project"
    },
    {
      icon: Users,
      title: "Connect with Research Mentors",
      description: "AI-powered mentor matching connects researchers with experienced PIs and collaborators",
      metric: "Smart mentor matching"
    },
    {
      icon: BarChart3,
      title: "Extract Actionable Insights",
      description: "Transform unstructured research data into evidence-based intelligence",
      metric: "→ 94% data accuracy"
    }
  ]

  const marketStats = [
    { stat: "$208.2B", description: "Projected AI healthcare market by 2030" },
    { stat: "21%", description: "VC funding in healthcare AI" },
    { stat: "$6.1B", description: "2022 healthcare AI research investment" },
    { stat: "44%", description: "Annual growth of the healthcare AI market" }
  ]

  const features = [
    {
      title: "ChartR Accelerate",
      description: "AI-powered grant discovery and research mentor search platform",
      capabilities: [
        "Automated grant discovery across 500+ funding sources",
        "Smart matching based on research focus and history",
        "Research mentor and collaboration network identification",
        "Real-time funding alerts and application deadlines",
        "PI track record analysis and success prediction"
      ]
    },
    {
      title: "ChartR Literature",
      description: "Systematic literature reviews (SLR) and evidence synthesis acceleration",
      capabilities: [
        "Automated research paper analysis and categorization",
        "AI-powered evidence extraction and synthesis",
        "PRISMA-compliant systematic review workflows",
        "Citation network analysis and research gap identification",
        "Meta-analysis support and statistical synthesis"
      ]
    }
  ]

  const successMetrics = [
    { metric: "150%", description: "Increase in grant application volume" },
    { metric: "67%", description: "Reduction in literature review time" },
    { metric: "89%", description: "Research accuracy improvement" },
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
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
              Comprehensive Research Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our integrated platform covers the entire research lifecycle, from funding discovery to evidence synthesis.
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
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Research Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Universities using ChartR report significant improvements in research efficiency and funding success rates.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {successMetrics.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-blue-400/20"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{item.metric}</div>
                <div className="text-slate-300">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
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