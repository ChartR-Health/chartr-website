'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, Lightbulb, Heart, Globe, ArrowRight, Linkedin, Twitter, Mail, Shield } from 'lucide-react'
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
      bio: "Former Chief Medical Officer with 15+ years in healthcare AI and clinical data management.",
      image: "/team/akash_kapoor.jpeg",
      linkedin: "#",
      email: "akash@chartrhealth.com"
    },
    {
      name: "Sebastian Ouslis",
      role: "CTO & Co-Founder", 
      bio: "AI/ML expert with extensive experience in healthcare technology and regulatory compliance systems.",
      image: "/team/sebastian.png",
      linkedin: "https://www.linkedin.com/in/sebastian-ouslis-3446b9148/",
      email: "sebastian@chartrhealth.com"
    },
    {
      name: "Ben Baranker",
      role: "CISO & Co-Founder",
      bio: "Board-certified physician specializing in clinical informatics and healthcare quality improvement.",
      image: "/team/ben-baranker.jpeg",
      linkedin: "https://www.linkedin.com/in/ben-baranker-6740a2143/",
      email: "ben@chartrhealth.com"
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
    }
  ]

  const fellows = [
    {
      name: "Leila Mirza",
      role: "Lead Fellow",
      school: "Biology & Economics Student at Barnard",
      image: "/team/leila.jpg",
      linkedin: "#",
      email: "leila@chartrhealth.com"
    },
    {
      name: "Isabella Zangari",
      role: "Strategy Fellow",
      school: "MPH Candidate at Columbia",
      image: "/team/isabella-zangari.jpg",
      linkedin: "https://www.linkedin.com/in/isabelladzangari",
      email: "isabella@chartrhealth.com"
    },
    {
      name: "Shailen Sampath",
      role: "Strategy Fellow", 
      school: "MD/MBA Candidate at Columbia",
      image: "/team/shailen-sampath.jpeg",
      linkedin: "#",
      email: "shailen@chartrhealth.com"
    },
    {
      name: "Marc Spence",
      role: "Business Development Fellow",
      school: "MHA Graduate from Columbia",
      image: "/team/marc_spence_headshot_720.jpg",
      linkedin: "#",
      email: "marc@chartrhealth.com"
    },
    {
      name: "Alexander Fontecchio",
      role: "Business Development Fellow",
      school: "Biochemistry Student at Brown",
      image: undefined, // No image available
      linkedin: "https://www.linkedin.com/in/alexander-fontecchio-47173035a/",
      email: "alexander@chartrhealth.com"
    },
    {
      name: "Zoran Ouslis",
      role: "Tech Fellow",
      school: "Electrical Engineering Student at University of Waterloo",
      image: undefined, // No image available
      linkedin: "https://www.linkedin.com/in/zoran-ouslis/?originalSubdomain=ca",
      email: "zoran@chartrhealth.com"
    },
    {
      name: "Bill Li",
      role: "Tech Fellow",
      school: "MIT EECS",
      image: undefined, // No image available
      linkedin: "#",
      email: "bill@chartrhealth.com"
    },
    {
      name: "Nearhos Hatzinikolaou",
      role: "Tech Fellow",
      school: "Electrical Engineering Student at Toronto Metropolitan University",
      image: undefined, // No image available
      linkedin: "#",
      email: "nearkos@chartrhealth.com"
    }
  ]

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
      className="group relative w-80 h-[32rem] flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-4 relative mt-6">
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
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-blue-400 font-medium mb-2">{member.role}</p>
            {member.title && (
              <p className="text-sm text-slate-400 mb-3">{member.title}</p>
            )}
            {member.school && (
              <p className="text-sm text-slate-400 mb-2">{member.school}</p>
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
      <section className="pb-8 pt-20 bg-slate-800/30">
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
            className="text-center mb-8"
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
            className="flex justify-center flex-wrap gap-8"
          >
            {coreTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} showEmail={true} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Board Advisors */}
      <section className="pt-8 pb-20 bg-slate-800/30">
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4"
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

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-0"
          >
            {fellows.map((fellow, index) => (
              <TeamMemberCard key={index} member={fellow} showEmail={true} />
            ))}
          </motion.div>
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