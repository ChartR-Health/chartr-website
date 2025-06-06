'use client'


import AccelerateDemo from '@/components/demos/AccelerateDemo'

export default function AccelerateDemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              ChartR Accelerate Demo
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Discover AI-powered research funding opportunities with intelligent matching, 
              personalized recommendations, and application timeline optimization.
            </p>
          </div>
          <AccelerateDemo />
        </div>
      </div>
    </div>
  )
} 