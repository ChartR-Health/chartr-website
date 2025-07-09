'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  const navigationItems = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const solutionsItems = [
    { name: 'Hospitals', href: '/solutions/hospitals' },
    { name: 'Device Companies', href: '/solutions/device-companies' },
    { name: 'Medical Registries', href: '/solutions/medical-societies' },
    { name: 'ChartR Literature', href: '/products/literature' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="w-full px-4 sm:px-4 lg:px-12">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative flex items-center gap-1">
                <img 
                  src="/logo.svg" 
                  alt="ChartR Logo" 
                  className="w-8 h-8 relative z-10"
                />
                <span className="relative z-10 text-[26px] leading-none chartr-brand-din font-bold chartr-logo-text select-none">
                  ChartR
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center text-slate-800 hover:text-indigo-600 transition-all duration-300 text-sm font-medium px-2 py-1 rounded-lg hover:bg-indigo-50/80"
              >
                Solutions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      onClick={() => setSolutionsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-800 hover:text-indigo-600 transition-all duration-300 text-sm font-medium px-2 py-1 rounded-lg hover:bg-indigo-50/80"
              >
                {item.name}
              </Link>
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
              {/* Solutions section in mobile menu */}
              <div>
                <div className="text-sm font-semibold text-slate-900 mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-1 text-slate-600 hover:text-indigo-600 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-slate-700 hover:text-indigo-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 