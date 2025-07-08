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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'ChartR - Healthcare AI Reimagined',
    description: 'Building the industry\'s first AI-native operating system for healthcare.',
    type: 'website',
    url: 'https://chartrhealth.com',
    siteName: 'ChartR Health',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ChartR - AI Platform Transforming Healthcare Data',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChartR - Healthcare AI Reimagined',
    description: 'Building the industry\'s first AI-native operating system for healthcare.',
    images: ['/og-image.png'],
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