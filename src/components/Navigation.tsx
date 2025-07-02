'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      name: 'Products',
      href: '#products',
      submenu: [
        { name: 'ChartR Accelerate', href: '/products/accelerate', description: 'Research funding discovery' },
        { name: 'ChartR Literature', href: '/products/literature', description: 'Systematic literature review' },
        { name: 'ChartR Clinical', href: '/products/clinical', description: 'Clinical data platform' },
      ]
    },
    {
      name: 'Solutions',
      href: '#solutions',
      submenu: [
        { name: 'Universities', href: '/solutions/universities', description: 'Research & funding solutions' },
        { name: 'Hospitals', href: '/solutions/hospitals', description: 'Clinical data & compliance' },
        { name: 'Medical Societies', href: '/solutions/medical-societies', description: 'Registry management' },
        { name: 'Device Companies', href: '/solutions/device-companies', description: 'Regulatory reporting' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-slate-900/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 relative">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <img 
                  src="/logo.svg" 
                  alt="ChartR Logo" 
                  className="w-8 h-8 relative"
                />
              </div>
              <span className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">ChartR</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button className="flex items-center space-x-1 text-slate-300 hover:text-white transition-all duration-300 font-medium group px-4 py-2 rounded-lg hover:bg-white/5">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      <div className="absolute top-full left-0 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 z-50">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg" />
                          <div className="relative bg-slate-800/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                            <div className="p-2">
                              {item.submenu.map((subItem, index) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group/item border border-transparent hover:border-white/20"
                                >
                                  <div className="font-semibold text-white group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-blue-400 group-hover/item:to-purple-400 group-hover/item:bg-clip-text transition-all duration-300">{subItem.name}</div>
                                  <div className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors duration-300">{subItem.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-all duration-300 font-medium relative group px-4 py-2 rounded-lg hover:bg-white/5"
                    >
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors duration-300 p-2 rounded-xl hover:bg-white/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop spacer to balance logo */}
          <div className="hidden md:block w-10"></div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-lg transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 