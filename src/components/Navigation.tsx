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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="w-full px-4 sm:px-4 lg:px-12">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <img 
                  src="/logo.svg" 
                  alt="ChartR Logo" 
                  className="w-8 h-8 relative"
                />
              </div>
              <span className="text-2xl chartr-brand text-transparent bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text leading-none drop-shadow-sm">ChartR</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="flex items-center space-x-1 text-slate-800 hover:text-indigo-600 transition-all duration-300 text-sm font-medium px-2 py-1 rounded-lg hover:bg-indigo-50/80">
                      <span>{item.name}</span>
                      <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <div className="absolute top-full right-0 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 z-50">
                      <div className="bg-white shadow-2xl border border-slate-200 rounded-2xl p-6 backdrop-blur-md">
                        <div className="space-y-3">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block p-3 rounded-lg hover:bg-slate-50 transition-all duration-200 group/item"
                            >
                              <div className="font-semibold text-slate-900 group-hover/item:text-indigo-600 transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-slate-600 font-normal">
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
                    className="text-slate-800 hover:text-indigo-600 transition-all duration-300 text-sm font-medium px-2 py-1 rounded-lg hover:bg-indigo-50/80"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-indigo-600 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 py-6 space-y-4 bg-white shadow-xl border-t border-slate-200">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <div className="font-semibold text-slate-900 py-2 border-b border-slate-200">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-2 mt-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-slate-700 hover:text-indigo-600 transition-colors font-medium"
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
                      className="block py-2 text-slate-700 hover:text-indigo-600 transition-colors font-medium"
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