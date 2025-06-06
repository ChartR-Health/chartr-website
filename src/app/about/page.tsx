'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, Lightbulb, Heart, Globe, ArrowRight, Linkedin, Twitter, Mail, Shield } from 'lucide-react'

const AboutPage = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Team data - replace with actual information from pitch decks
  const coreTeam = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former Chief Medical Officer with 15+ years in healthcare AI and clinical data management.",
      image: "/team/sarah-johnson.jpg", // Replace with actual image path
      linkedin: "#",
      twitter: "#",
      email: "sarah@chartrhealth.com"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder", 
      bio: "AI/ML expert with extensive experience in healthcare technology and regulatory compliance systems.",
      image: "/team/michael-chen.jpg", // Replace with actual image path
      linkedin: "#",
      twitter: "#",
      email: "michael@chartrhealth.com"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      bio: "Board-certified physician specializing in clinical informatics and healthcare quality improvement.",
      image: "/team/emily-rodriguez.jpg", // Replace with actual image path
      linkedin: "#",
      email: "emily@chartrhealth.com"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Full-stack engineer with deep expertise in healthcare data systems and HIPAA-compliant architectures.",
      image: "/team/david-kim.jpg", // Replace with actual image path
      linkedin: "#",
      email: "david@chartrhealth.com"
    }
  ]

  const boardAdvisors = [
    {
      name: "Dr. Robert Thompson",
      role: "Board Advisor",
      title: "Former Chief Innovation Officer, Mayo Clinic",
      bio: "Healthcare innovation leader with 20+ years transforming clinical operations through technology.",
      image: "/team/robert-thompson.jpg", // Replace with actual image path
      linkedin: "#"
    },
    {
      name: "Lisa Martinez",
      role: "Board Advisor", 
      title: "Former VP of Regulatory Affairs, Medtronic",
      bio: "Regulatory compliance expert with deep knowledge of FDA requirements and medical device regulations.",
      image: "/team/lisa-martinez.jpg", // Replace with actual image path
      linkedin: "#"
    },
    {
      name: "Dr. James Wilson",
      role: "Board Advisor",
      title: "Professor of Biomedical Informatics, Stanford University",
      bio: "Leading researcher in clinical data standards and healthcare AI ethics.",
      image: "/team/james-wilson.jpg", // Replace with actual image path
      linkedin: "#"
    }
  ]

  const summerFellows = {
    strategy: [
      {
        name: "Alexandra Park",
        role: "Strategy Fellow",
        school: "Harvard Business School",
        focus: "Market expansion and strategic partnerships",
        image: "/team/alexandra-park.jpg", // Replace with actual image path
        linkedin: "#"
      },
      {
        name: "Jordan Williams",
        role: "Strategy Fellow", 
        school: "Wharton School",
        focus: "Healthcare economics and value-based care models",
        image: "/team/jordan-williams.jpg", // Replace with actual image path
        linkedin: "#"
      }
    ],
    business: [
      {
        name: "Priya Patel",
        role: "Business Development Fellow",
        school: "Columbia Business School",
        focus: "Partnership development and customer success",
        image: "/team/priya-patel.jpg", // Replace with actual image path
        linkedin: "#"
      },
      {
        name: "Marcus Johnson",
        role: "Business Development Fellow",
        school: "MIT Sloan",
        focus: "Enterprise sales and market penetration",
        image: "/team/marcus-johnson.jpg", // Replace with actual image path
        linkedin: "#"
      }
    ],
    tech: [
      {
        name: "Aisha Kumar",
        role: "Tech Fellow",
        school: "Stanford Computer Science",
        focus: "Machine learning and natural language processing",
        image: "/team/aisha-kumar.jpg", // Replace with actual image path
        linkedin: "#"
      },
      {
        name: "Ryan Zhang",
        role: "Tech Fellow",
        school: "MIT EECS",
        focus: "Healthcare data infrastructure and security",
        image: "/team/ryan-zhang.jpg", // Replace with actual image path
        linkedin: "#"
      }
    ]
  }

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Patient-Centered Innovation",
      description: "Every solution we build is designed to ultimately improve patient outcomes and healthcare quality."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-AI Collaboration",
      description: "We believe the future of healthcare lies in intelligent systems that enhance, not replace, human expertise."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Transparency",
      description: "We maintain the highest standards of data security, privacy, and regulatory compliance."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Our platform and team are designed to continuously improve through feedback and innovation."
    }
  ]

  const TeamMemberCard = ({ member, showEmail = false }: { member: any, showEmail?: boolean }) => (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          {/* Profile Image */}
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border border-white/20">
              {/* Placeholder for actual image */}
              <Users className="w-12 h-12 text-slate-400" />
              {/* Uncomment when you have actual images:
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
              />
              */}
            </div>
          </div>

          {/* Member Info */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-blue-400 font-medium mb-2">{member.role}</p>
            {member.title && (
              <p className="text-sm text-slate-400 mb-3">{member.title}</p>
            )}
            {member.school && (
              <p className="text-sm text-slate-400 mb-2">{member.school}</p>
            )}
            {member.focus && (
              <p className="text-sm text-slate-300 mb-3 italic">Focus: {member.focus}</p>
            )}
            <p className="text-sm text-slate-300 leading-relaxed mb-4">{member.bio}</p>

            {/* Social Links */}
            <div className="flex justify-center space-x-3">
              {member.linkedin && (
                <a href={member.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {showEmail && member.email && (
                <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text mb-6">
              About ChartR
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We're building the future of healthcare through AI-powered clinical data intelligence, 
              transforming how healthcare organizations manage, analyze, and act on their most valuable asset: data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                To transform healthcare through AI-powered clinical data intelligence, creating the structured 
                data layer that turns EMR systems from passive records into active systems of clinical action.
              </p>
              <p className="text-slate-400">
                We believe that healthcare's greatest untapped resource is the wealth of clinical data locked 
                away in unstructured formats. Our mission is to unlock this potential through intelligent 
                AI-human collaboration.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                A world where every healthcare decision is informed by comprehensive, accurate, and 
                actionable clinical intelligence, leading to better patient outcomes and more efficient care delivery.
              </p>
              <p className="text-slate-400">
                We envision healthcare systems that learn and improve continuously, where clinical data 
                flows seamlessly to support research, compliance, and patient care simultaneously.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Team</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Meet the leaders driving ChartR's mission to transform healthcare through AI
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} showEmail={true} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Board Advisors */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Board Advisors</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Industry leaders and experts guiding our strategic direction
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {boardAdvisors.map((advisor, index) => (
              <TeamMemberCard key={index} member={advisor} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Summer Fellows */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Summer Fellows Program</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Talented students and recent graduates contributing to ChartR's growth across strategy, 
              business development, and technology
            </p>
          </motion.div>

          {/* Strategy Fellows */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-blue-400 mb-8 text-center"
            >
              Strategy Fellows
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {summerFellows.strategy.map((fellow, index) => (
                <TeamMemberCard key={index} member={fellow} />
              ))}
            </motion.div>
          </div>

          {/* Business Development Fellows */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-purple-400 mb-8 text-center"
            >
              Business Development Fellows
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {summerFellows.business.map((fellow, index) => (
                <TeamMemberCard key={index} member={fellow} />
              ))}
            </motion.div>
          </div>

          {/* Tech Fellows */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-green-400 mb-8 text-center"
            >
              Tech Fellows
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {summerFellows.tech.map((fellow, index) => (
                <TeamMemberCard key={index} member={fellow} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We're always looking for passionate individuals who want to transform healthcare through technology. 
              Whether you're a clinician, engineer, researcher, or business professional, there's a place for you at ChartR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:careers@chartrhealth.com"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
                <Mail className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 