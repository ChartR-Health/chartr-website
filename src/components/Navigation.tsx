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
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 dark:bg-slate-900/95 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/logo.svg" 
                alt="ChartR Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold chartr-gradient-text">ChartR</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="flex items-center space-x-1 text-slate-700 hover:text-chartr-blue-600 dark:text-slate-300 dark:hover:text-chartr-blue-400 transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 w-72 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                      <div className="p-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                          >
                            <div className="font-medium text-slate-900 dark:text-slate-100">{subItem.name}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">{subItem.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-700 hover:text-chartr-blue-600 dark:text-slate-300 dark:hover:text-chartr-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/demo"
              className="px-4 py-2 text-chartr-blue-600 hover:text-chartr-blue-700 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-chartr-blue-600 text-white rounded-lg hover:bg-chartr-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-slate-700 hover:text-chartr-blue-600 dark:text-slate-300 dark:hover:text-chartr-blue-400 transition-colors"
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
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-chartr-blue-600 dark:text-slate-400 dark:hover:text-chartr-blue-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/demo"
                  className="block px-3 py-2 text-chartr-blue-600 hover:text-chartr-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Request Demo
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 bg-chartr-blue-600 text-white rounded-lg hover:bg-chartr-blue-700 transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 