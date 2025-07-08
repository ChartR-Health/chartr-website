import type { Metadata } from 'next'
import { Inter, Outfit, Montserrat, Poppins, Space_Grotesk } from 'next/font/google'
import React from 'react'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit'
})

// Add the new fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
  display: 'swap', // This prevents the flash
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ChartR - AI Platform Transforming Healthcare Data',
  description: 'ChartR is the comprehensive AI health technology platform that transforms healthcare through intelligent data curation, extraction, and analysis across research, literature, and clinical domains.',
  keywords: ['AI healthcare', 'clinical data', 'regulatory reporting', 'systematic literature review', 'research grants', 'medical AI'],
  authors: [{ name: 'ChartR Health' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'ChartR - Healthcare AI Reimagined',
    description: 'Building the industry\'s first AI-native operating system for healthcare.',
    type: 'website',
    url: 'https://chartrhealth.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChartR - Healthcare AI Reimagined',
      description: 'Building the industry\'s first AI-native operating system for healthcare.',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${outfit.variable} ${montserrat.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 