'use client'

import React, { useState } from 'react'
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
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

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
      linkedin: "https://www.linkedin.com/in/akashkapp/",
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
      bio: "Associate Vice Chancellor of Student Health & Chief Well-Being Officer | UC Santa Cruz",
      image: "/team/John_Bollard.png",
      website: "https://news.ucsc.edu/2023/01/avc-shw-announcement/"
    },
    {
      name: "Dr. Erin Ferenchick",
      role: "Board Advisor",
      bio: "Assistant Clinical Professor of Medicine | Columbia University",
      image: "/team/erin_f.png",
      website: "https://www.vagelos.columbia.edu/profile/erin-ferenchick-md"
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
      linkedin: "https://www.linkedin.com/in/shailen-sampath-73906712b/",
      email: "shailen@chartrhealth.com"
    },
    {
      name: "Marc Spence",
      role: "Business Development Fellow",
      school: "MHA Graduate | Columbia University",
      image: "/team/marc_spence_headshot_720.jpg",
      linkedin: "https://www.linkedin.com/in/marc-spence-0224a51b9/",
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
      linkedin: "https://www.linkedin.com/in/nearhos-hatzinikolaou-591538240/?originalSubdomain=ca",
      email: "nearkos@chartrhealth.com"
    }
  ]

  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Human-AI Synergy",
      description: "We design systems where AI enhances clinical judgment—not replaces it."
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Verified & Transparent",
      description: "Every output links to its source—so clinicians can review, trust, and act."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Structural Security",
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
      className="group relative w-80 flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-slate-100/80 backdrop-blur-sm border border-slate-200/30 p-6 hover:border-blue-200/50 transition-all duration-300 h-full flex flex-col">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto relative mt-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border border-white/20">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`w-full h-full object-cover rounded-full ${
                    member.name === "Akash Kapoor" 
                      ? "object-[center_50%]" 
                      : "object-[center_20%]"
                  }`}
                />
              ) : (
                <Users className="w-12 h-12 text-slate-400" />
              )}
            </div>
          </div>

          {/* Member Info */}
          <div className="text-center flex flex-col flex-1">
            <div className="flex-1 flex flex-col justify-start">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-lg text-blue-600 font-medium mb-2">{member.role}</p>
              {member.title && (
                <p className="text-base text-slate-500 mb-3">{member.title}</p>
              )}
              {member.school && (
                <p className="text-base text-slate-500 mb-2">{member.school}</p>
              )}
              <p className="text-base text-slate-700 leading-relaxed mb-4 flex-1">{member.bio}</p>
            </div>
            {/* Social Links */}
            <div className="flex justify-center space-x-3 mt-auto pt-4">
              {member.linkedin && (
                <a href={member.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.website && (
                <a href={member.website} className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
                  <Globe className="w-5 h-5" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {showEmail && member.email && (
                <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white">
        {/* Removed farthest back gradient for pure white background */}

        {/* Animated Neural Network Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Animated connection lines */}
            <g stroke="url(#networkGradient)" strokeWidth="1" fill="none">
              {[...Array(6)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M${100 + i * 180},150 Q${200 + i * 180},${250 + i * 30} ${300 + i * 180},200 T${500 + i * 180},180`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </g>
            
            {/* Network nodes */}
            {[...Array(12)].map((_, i) => (
              <motion.circle
                key={i}
                cx={100 + (i % 4) * 300}
                cy={150 + Math.floor(i / 4) * 200}
                r="4"
                fill="url(#networkGradient)"
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex justify-center">
            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl"
            >
                             <motion.h1
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-slate-900"
               >
                 Clinician-Led. AI-Enhanced.
               </motion.h1>
              
                             <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="text-xl text-slate-600 leading-relaxed mb-8"
               >
                 We believe healthcare data should work for clinicians, not against them.
               </motion.p>

          <motion.div
                 initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 className="flex flex-wrap gap-4 justify-center"
               >
                 <div className="flex items-center space-x-2 text-blue-600">
                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                   <span className="text-sm font-medium">Transparent AI</span>
                 </div>
                 <div className="flex items-center space-x-2 text-indigo-600">
                   <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                   <span className="text-sm font-medium">HIPAA Compliant</span>
                 </div>
                 <div className="flex items-center space-x-2 text-purple-600">
                   <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                   <span className="text-sm font-medium">Instant Insights</span>
                 </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Mission */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To unlock the potential of unstructured clinical data through intelligent AI-human collaboration—empowering healthcare professionals and researchers with secure, transparent tools that accelerate insight without compromising accuracy or compliance.
              </p>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center items-center relative"
            >
              {/* Animated Background Graphics */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Rotating outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-40 h-40 border border-blue-500/10 rounded-full"
                />
                
                {/* Counter-rotating inner ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 border border-purple-500/10 rounded-full border-dashed"
                />
                
                {/* Subtle floating dots - reduced to 2 */}
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-2 h-2 bg-blue-400/30 rounded-full -top-6 -left-6"
                />
                
                <motion.div
                  animate={{ 
                    y: [5, -5, 5],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  className="absolute w-2 h-2 bg-purple-400/30 rounded-full -bottom-6 -right-6"
                />
                
                {/* Very subtle pulsing glow effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-36 h-36 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
                />
              </div>
              
              {/* Logo with enhanced styling */}
              <motion.div
                animate={{ 
                  y: [-1, 1, -1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 p-4 rounded-full bg-gradient-to-br from-white/80 to-slate-100/80 backdrop-blur-sm border border-slate-200/30 shadow-xl"
              >
                <img 
                  src="/logo.png" 
                  alt="ChartR Logo" 
                  className="w-24 h-24 object-contain filter drop-shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                A healthcare system where clinical data flows seamlessly to fuel continuous learning—driving every decision with comprehensive, actionable intelligence to improve outcomes, advance research, and deliver more efficient care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pt-16 pb-20 relative overflow-hidden bg-white">
        {/* Animated Background Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-6 h-6 bg-blue-400/15 transform rotate-45"
          />
          
          <motion.div
            animate={{ 
              y: [10, -10, 10],
              x: [8, -8, 8]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-20 w-8 h-8 border-2 border-purple-400/15 rounded-full"
          />
          
          <motion.div
            animate={{ 
              y: [-8, 8, -8],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-1/4 w-4 h-10 bg-cyan-400/12 rounded-full"
          />
          
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              x: [-12, 12, -12]
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-1/3 w-5 h-5 bg-indigo-400/15 transform rotate-45"
          />
          
          {/* AI-themed neural network connections */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 600">
              {/* Neural network style connections */}
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              
              {/* Flowing data lines */}
              <path d="M50,100 Q200,50 350,100 T650,100" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M100,200 Q300,150 500,200 T800,200" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" opacity="0.4" />
              <path d="M150,350 Q400,300 650,350 T950,350" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M80,450 Q250,400 420,450 T720,450" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" opacity="0.4" />
              
              {/* Neural nodes */}
              <circle cx="200" cy="100" r="3" fill="#3b82f6" opacity="0.7" />
              <circle cx="400" cy="150" r="3" fill="#8b5cf6" opacity="0.6" />
              <circle cx="600" cy="200" r="3" fill="#06b6d4" opacity="0.7" />
              <circle cx="300" cy="350" r="3" fill="#3b82f6" opacity="0.6" />
              <circle cx="750" cy="400" r="3" fill="#8b5cf6" opacity="0.7" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              ChartR's Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Building the future of healthcare through intelligent, ethical AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="h-[280px] cursor-pointer"
                onClick={() => setSelectedValue(selectedValue === index ? null : index)}
              >
                <div className={`h-full flex flex-col p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 relative overflow-hidden group ${
                  selectedValue === index 
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/50 shadow-2xl shadow-blue-500/20' 
                    : 'bg-gradient-to-br from-white/80 to-slate-100/80 border-slate-200/30 hover:border-blue-200/50'
                }`}>
                  {/* Card background graphics */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 transition-opacity duration-300 ${
                    selectedValue === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                  
                  {/* Illumination effects when selected */}
                  {selectedValue === index && (
                    <>
                      {/* Particle effects */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0"
                      >
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ 
                              x: '50%', 
                              y: '50%',
                              scale: 0
                            }}
                            animate={{
                              x: `${50 + (Math.cos(i * Math.PI / 6) * 50)}%`,
                              y: `${50 + (Math.sin(i * Math.PI / 6) * 50)}%`,
                              scale: [0, 1.2, 0],
                              opacity: [0, 0.9, 0]
                            }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              delay: i * 0.15,
                              ease: "easeOut"
                            }}
                            className="absolute w-3 h-3 bg-blue-400/70 rounded-full shadow-lg shadow-blue-400/50"
                          />
                        ))}
                      </motion.div>
                      
                      {/* Energy lines */}
                      <motion.div
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.8 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <svg className="w-full h-full">
                          <defs>
                            <linearGradient id={`energyGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.9" />
                            </linearGradient>
                          </defs>
                          <motion.path
                            d="M15,15 Q90,8 165,15 T285,15"
                            stroke={`url(#energyGradient-${index})`}
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          />
                          <motion.path
                            d="M15,265 Q90,258 165,265 T285,265"
                            stroke={`url(#energyGradient-${index})`}
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                          />
                          {/* Vertical energy lines */}
                          <motion.path
                            d="M15,15 Q8,90 15,165 T15,285"
                            stroke={`url(#energyGradient-${index})`}
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
                          />
                          <motion.path
                            d="M285,15 Q278,90 285,165 T285,285"
                            stroke={`url(#energyGradient-${index})`}
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.8, delay: 0.9, ease: "easeInOut" }}
                          />
                        </svg>
                      </motion.div>
                    </>
                  )}
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div 
                      className={`flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 ${
                        selectedValue === index 
                          ? 'bg-gradient-to-br from-blue-600/50 to-purple-600/50 scale-110' 
                          : 'bg-gradient-to-br from-blue-600/70 to-purple-600/70 group-hover:scale-110'
                      }`}
                      animate={selectedValue === index ? { 
                        rotate: [0, 5, -5, 0],
                        scale: [1.1, 1.15, 1.1]
                      } : {
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={selectedValue === index ? { 
                        duration: 0.8, 
                        repeat: Infinity 
                      } : {
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        delay: index * 0.8,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </motion.div>
                    
                    <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      selectedValue === index 
                        ? 'text-blue-700 font-bold' 
                        : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                      {value.title}
                    </h3>
                    
                    <p className={`leading-relaxed flex-1 transition-colors duration-300 ${
                      selectedValue === index 
                        ? 'text-slate-100 font-medium' 
                        : 'text-slate-600 group-hover:text-slate-700'
                    }`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="pt-16 pb-16 relative overflow-hidden bg-white">
        {/* Minimal background graphics */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Single subtle line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
          />
          
          {/* Two small accent dots */}
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 right-16 w-1 h-1 bg-purple-400/15 rounded-full"
          />
          
          <motion.div
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-20 left-20 w-1 h-1 bg-blue-400/12 rounded-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Our Leaders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are driven by a shared commitment to advancing healthcare through innovation and collaboration.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
          >
            {coreTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Board Advisors */}
      <section className="pt-16 pb-16 relative overflow-hidden bg-white">
        {/* Elegant connecting constellation */}
        <motion.div
          className="absolute bottom-16 left-16 w-48 h-32"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 192 128" className="w-full h-full opacity-12">
            <defs>
              <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            
            {/* Elegant connection lines */}
            <g stroke="url(#constellationGradient)" strokeWidth="1" fill="none">
              <path d="M20,40 Q60,20 100,40 Q140,60 180,40" opacity="0.6" />
              <path d="M40,80 Q80,60 120,80 Q160,100 180,80" opacity="0.5" />
              <path d="M20,40 L40,80" opacity="0.4" />
              <path d="M100,40 L120,80" opacity="0.4" />
              <path d="M180,40 L180,80" opacity="0.4" />
            </g>
            
            {/* Premium nodes */}
            <circle cx="20" cy="40" r="2.5" fill="url(#constellationGradient)" opacity="0.8" />
            <circle cx="100" cy="40" r="2.5" fill="url(#constellationGradient)" opacity="0.9" />
            <circle cx="180" cy="40" r="2.5" fill="url(#constellationGradient)" opacity="0.8" />
            <circle cx="40" cy="80" r="2" fill="url(#constellationGradient)" opacity="0.7" />
            <circle cx="120" cy="80" r="2" fill="url(#constellationGradient)" opacity="0.8" />
            <circle cx="180" cy="80" r="2" fill="url(#constellationGradient)" opacity="0.7" />
          </svg>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Our Advisors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Industry leaders and experts guiding our strategic direction
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {boardAdvisors.map((advisor, index) => (
              <TeamMemberCard key={index} member={advisor} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Summer Fellows */}
      <section className="pt-16 pb-16 relative overflow-hidden bg-white">
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-2">
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Our Fellows
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed whitespace-nowrap">
              Driven students and recent graduates offering fresh perspectives and innovative ideas.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center max-w-5xl mx-auto"
          >
            {fellows.map((fellow, index) => (
              <TeamMemberCard key={index} member={fellow} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Artistic Background Logos */}
        <div className="absolute inset-0">
          {/* Large subtle logo top-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-8 left-8 hidden lg:block"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <img 
                src="/logo.png" 
                alt="ChartR Logo" 
                className="w-32 h-32 object-contain opacity-10 filter blur-[1px]"
              />
            </motion.div>
          </motion.div>

          {/* Featured accent logo bottom-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: 25 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-12 right-12 hidden lg:block"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.4, 0.25]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Subtle glow ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-28 h-28 -m-2 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-md"
              />
              
              {/* Main logo */}
              <img 
                src="/logo.png" 
                alt="ChartR Logo" 
                className="w-24 h-24 object-contain relative z-10 filter drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Small logo top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="absolute top-20 right-24 hidden xl:block"
          >
            <motion.div
              animate={{ 
                rotate: [0, -360],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <img 
                src="/logo.png" 
                alt="ChartR Logo" 
                className="w-16 h-16 object-contain opacity-8"
              />
            </motion.div>
          </motion.div>

          {/* Tiny floating logo left-bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="absolute bottom-32 left-20 hidden xl:block"
          >
            <motion.div
              animate={{ 
                y: [-8, 8, -8],
                rotate: [0, 180, 360],
                opacity: [0.06, 0.12, 0.06]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/logo.png" 
                alt="ChartR Logo" 
                className="w-12 h-12 object-contain opacity-8"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Join Our Mission</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
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