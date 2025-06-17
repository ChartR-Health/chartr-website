'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, Lightbulb, Heart, Globe, ArrowRight, Linkedin, Twitter, Mail, Shield, Search, Zap, Layers, Brain, Eye, Lock, Boxes, Sparkles, CircuitBoard, ShieldCheck, Puzzle } from 'lucide-react'
// Import team images
import alexandraParkImage from '@/assets/team/alexandra-park.jpg'
// import isabellaZangariImage from '@/assets/team/isabella-zangari.jpg'
// import jordanWilliamsImage from '@/assets/team/jordan-williams.jpg'
// import priyaPatelImage from '@/assets/team/priya-patel.jpg'
// import marcusJohnsonImage from '@/assets/team/marcus-johnson.jpg'
// import aishaKumarImage from '@/assets/team/aisha-kumar.jpg'
// import ryanZhangImage from '@/assets/team/ryan-zhang.jpg'
import shailenSampathImage from '@/assets/team/shailen-sampath.jpeg'
import benBarankerImage from '@/assets/team/ben-baranker.jpeg'
import leilaMirzaImage from '@/assets/team/leila.jpg'
import sebastianOuslisImage from '@/assets/team/sebastian.png'
import akashKapoorImage from '@/assets/team/akash_kapoor.jpeg'
import marcSpenceImage from '@/assets/team/marc_spence_headshot_720.jpg'
import JohnBollardImage from '@/assets/team/John_Bollard.png'

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
      name: "Akash Kapoor",
      role: "CEO & Founder",
      bio: "3rd year M.D. Candidate | Columbia University",
      image: "/team/akash_kapoor.jpeg",
      linkedin: "#",
      email: "akash@chartrhealth.com"
    },
    {
      name: "Sebastian Ouslis",
      role: "CTO & Co-Founder", 
      bio: "Software Engineer | Bloomberg",
      image: "/team/sebastian.png",
      linkedin: "https://www.linkedin.com/in/sebastian-ouslis-3446b9148/",
      email: "sebastian@chartrhealth.com"
    },
    {
      name: "Ben Baranker",
      role: "CISO & Co-Founder",
      bio: "2nd year M.D. Candidate | Columbia University",
      image: "/team/ben-baranker.jpeg",
      linkedin: "https://www.linkedin.com/in/ben-baranker-6740a2143/",
      email: "ben@chartrhealth.com"
    }
  ]

  const boardAdvisors = [
    {
      name: "John Bollard",
      role: "Board Advisor",
      bio: "Associate Vice Chancellor of Student Health & Chief Well-Being Officer | UCLA",
      image: "/team/bollard.jpg"
    },
    {
      name: "Dr. Erin Ferenchick",
      role: "Board Advisor",
      bio: "Assistant Clinical Professor of Medicine | Columbia University",
      image: "/team/erin_f.png",
      linkedin: "#"
    }
  ]

  const fellows = [
    {
      name: "Leila Mirza",
      role: "Lead Fellow",
      school: "Biology & Economics Student | Barnard College",
      image: "/team/leila.jpg",
      linkedin: "#",
      email: "leila@chartrhealth.com"
    },
    {
      name: "Isabella Zangari",
      role: "Strategy Fellow",
      school: "MPH Candidate | Columbia University",
      image: "/team/isabella-zangari.jpg",
      linkedin: "https://www.linkedin.com/in/isabelladzangari",
      email: "isabella@chartrhealth.com"
    },
    {
      name: "Shailen Sampath",
      role: "Strategy Fellow", 
      school: "MD/MBA Candidate | Columbia University",
      image: "/team/shailen-sampath.jpeg",
      linkedin: "#",
      email: "shailen@chartrhealth.com"
    },
    {
      name: "Marc Spence",
      role: "Business Development Fellow",
      school: "MHA Graduate | Columbia University",
      image: "/team/marc_spence_headshot_720.jpg",
      linkedin: "#",
      email: "marc@chartrhealth.com"
    },
    {
      name: "Alexander Fontecchio",
      role: "Business Development Fellow",
      school: "Biochemistry Student | Brown University",
      image: undefined, // No image available
      linkedin: "https://www.linkedin.com/in/alexander-fontecchio-47173035a/",
      email: "alexander@chartrhealth.com"
    },
    {
      name: "Zoran Ouslis",
      role: "Tech Fellow",
      school: "Electrical Engineering Student | University of Waterloo",
      image: undefined, // No image available
      linkedin: "https://www.linkedin.com/in/zoran-ouslis/?originalSubdomain=ca",
      email: "zoran@chartrhealth.com"
    },
    {
      name: "Bill Li",
      role: "Tech Fellow",
      school: "Computer Science Student | University of Waterloo",
      image: undefined, // No image available
      linkedin: "#",
      email: "bill@chartrhealth.com"
    },
    {
      name: "Nearhos Hatzinikolaou",
      role: "Tech Fellow",
      school: "Electrical Engineering Student | Toronto Metropolitan University",
      image: undefined, // No image available
      linkedin: "#",
      email: "nearkos@chartrhealth.com"
    }
  ]

  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Human-AI Synergy",
      description: "We design systems where AI augments clinical judgment—not overrides it."
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Verifiable, Not Black-Box",
      description: "Every output links to its source—so clinicians can review, trust, and act."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Security as Architecture",
      description: "HIPAA-compliant, fully encrypted, and built for healthcare-grade privacy."
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Modular by Design",
      description: "Built to evolve with shifting clinical standards, data types, and workflows."
    }
  ]

  const TeamMemberCard = ({ member, showEmail = false }: { member: any, showEmail?: boolean }) => (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className="group relative w-80 h-88 flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto relative mt-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border border-white/20">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_20%] rounded-full"
                />
              ) : (
                <Users className="w-12 h-12 text-slate-400" />
              )}
            </div>
          </div>

          {/* Member Info */}
          <div className="text-center flex flex-col h-full">
            <div className="flex-1 flex flex-col justify-start overflow-hidden" style={{ minHeight: '8rem', maxHeight: '12rem' }}>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-blue-400 font-medium mb-2">{member.role}</p>
              {member.title && (
                <p className="text-sm text-slate-400 mb-3">{member.title}</p>
              )}
              {member.school && (
                <p className="text-sm text-slate-400 mb-2">{member.school}</p>
              )}
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{member.bio}</p>
            </div>
            {/* Social Links */}
            <div className="flex justify-center space-x-3 mt-auto">
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
      <section className="relative py-8 overflow-hidden">
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
              ChartR unlocks the power of unstructured clinical data—using transparent, human-centered AI to deliver the clarity, speed, and control healthcare teams need to move from complexity to insight, instantly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="space-y-6 text-left">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 p-8 hover:border-white/20 transition-all duration-300 h-[380px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Our Mission</h2>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      To empower healthcare professionals and researchers with transparent, reliable AI tools that streamline data extraction, enhance decision-making, and reduce the time from data to insight—without compromising accuracy, security, or compliance.
                    </p>
                    <p className="text-slate-400 mt-6">
                      We believe that healthcare's greatest untapped resource is the wealth of clinical data locked 
                      away in unstructured formats. Our mission is to unlock this potential through intelligent 
                      AI-human collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="space-y-6 text-left">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 p-8 hover:border-white/20 transition-all duration-300 h-[380px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-50" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Our Vision</h2>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      A world where every healthcare decision is informed by comprehensive, accurate, and 
                      actionable clinical intelligence, leading to better patient outcomes and more efficient care delivery.
                    </p>
                    <p className="text-slate-400 mt-6">
                      We envision healthcare systems that learn and improve continuously, where clinical data 
                      flows seamlessly to support research, compliance, and patient care simultaneously.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pt-12 pb-20 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-slate-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">ChartR's Values</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Building the future of healthcare through intelligent, ethical AI
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-[280px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed flex-1">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Leaders</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We are driven by a shared commitment to advancing healthcare through innovation and collaboration. With a unique blend of expertise and fresh perspectives, we work together to create solutions that drive meaningful change and improve patient outcomes
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 justify-center"
          >
            {coreTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Board Advisors */}
      <section className="pt-2 pb-2 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
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
            className="flex justify-center gap-2"
          >
            {boardAdvisors.map((advisor, index) => (
              <TeamMemberCard key={index} member={advisor} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Summer Fellows */}
      <section className="pt-2 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Summer Fellows</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Talented students and recent graduates contributing to ChartR's growth across strategy, 
              business development, and technology
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-2"
          >
            {fellows.map((fellow, index) => (
              <TeamMemberCard key={index} member={fellow} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Reimagining healthcare with AI takes all kinds of minds. If you're a builder, thinker, or innovator—clinical or technical—ChartR is where your work can shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:leila@chartrhealth.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 