'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  // Calculate opacity based on scroll position
  const opacity = Math.max(0, 1 - scrollY / 300)

  return (
    <nav 
      className="backdrop-blur-sm sticky top-0 z-50 relative transition-opacity duration-300"
      style={{ opacity }}
    >
      
      <div className="w-full px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left aligned with manual padding */}
          <div className="flex items-center lg:pl-12">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <img 
                  src="/logo.svg" 
                  alt="ChartR Logo" 
                  className="w-8 h-8 relative"
                />
              </div>
              <span className="text-2xl chartr-brand text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text leading-none">ChartR</span>
            </Link>
          </div>

          {/* Desktop Navigation - Positioned manually */}
          <div className="hidden md:flex">
            <div className="flex items-center space-x-4 lg:mr-24">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button className="flex items-center space-x-1 text-slate-300 hover:text-white transition-all duration-300 chartr-body-medium group px-4 py-2 rounded-lg hover:bg-white/5">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      <div className="absolute top-full right-0 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 z-50">
                        <div className="chartr-bg-floating shadow-2xl border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                          <div className="space-y-3">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group/item"
                              >
                                <div className="chartr-body-medium text-white group-hover/item:text-indigo-300 transition-colors">
                                  {subItem.name}
                                </div>
                                <div className="text-sm text-slate-400 chartr-body">
                                  {subItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-all duration-300 chartr-body-medium px-4 py-2 rounded-lg hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 chartr-bg-floating shadow-2xl border-t border-white/10 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <div className="chartr-body-medium text-white py-2 border-b border-white/10">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-2 mt-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-slate-300 hover:text-white transition-colors chartr-body"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-slate-300 hover:text-white transition-colors chartr-body-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
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