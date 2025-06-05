'use client'

import Navigation from '@/components/Navigation'
import LiteratureDemo from '@/components/demos/LiteratureDemo'

export default function LiteratureDemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              ChartR Literature Demo
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Experience AI-powered systematic literature review with intelligent search, 
              automated screening, and comprehensive analysis tools.
            </p>
          </div>
          <LiteratureDemo />
        </div>
      </div>
    </div>
  )
} 