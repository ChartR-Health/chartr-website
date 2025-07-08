'use client'

import React from 'react'

export default function FontPreview() {
  const fonts = [
    { name: 'Current (Inter)', className: 'chartr-brand' },
    { name: 'Montserrat', className: 'chartr-brand-montserrat' },
    { name: 'Poppins', className: 'chartr-brand-poppins' },
    { name: 'Space Grotesk', className: 'chartr-brand-space' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">ChartR Font Preview</h1>
        
        <div className="space-y-8">
          {fonts.map((font) => (
            <div key={font.name} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-4">{font.name}</p>
              <div className="space-y-4">
                {/* Logo with icon */}
                <div className="flex items-center gap-1">
                  <img 
                    src="/logo.svg" 
                    alt="ChartR Logo" 
                    className="w-8 h-8"
                  />
                  <span className={`text-[26px] leading-none ${font.className} font-bold chartr-logo-text select-none`}>
                    ChartR
                  </span>
                </div>
                
                {/* Standalone text */}
                <div className="flex items-center space-x-4">
                  <span className={`text-4xl ${font.className} font-bold chartr-logo-text`}>
                    ChartR
                  </span>
                  <span className={`text-2xl ${font.className} text-gray-800`}>
                    Transforming Healthcare Data
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">How to Use</h2>
          <p className="text-gray-700 mb-2">To change the font in your navigation, update the className in Navigation.tsx:</p>
          <code className="block bg-gray-100 p-3 rounded text-sm">
            className="... chartr-brand-[fontname] ..."
          </code>
          <p className="text-sm text-gray-600 mt-2">
            Replace [fontname] with: montserrat, poppins, or space
          </p>
          <p className="text-sm text-gray-600 mt-2">
            The logo now uses an animated gradient effect with enhanced vibrancy and closer spacing between the icon and text.
          </p>
        </div>
      </div>
    </div>
  )
} 