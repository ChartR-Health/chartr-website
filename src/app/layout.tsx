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
  title: 'ChartR - Healthcare AI Reimagined',
  description: 'Building the industry\'s first AI-native operating system for healthcare.',
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
    // Custom OG image (commented out - using fallback style instead)
    // images: [
    //   {
    //     url: 'https://opengraph.b-cdn.net/production/images/9474df1d-c4bd-4ef8-959b-db4ac119881e.png?token=SsOLgDhIp6A-S04DmvHjbO7fARgoXPDkEJuDfUPOe-A&height=653&width=1200&expires=33288022433',
    //     width: 1200,
    //     height: 653,
    //     alt: 'ChartR - Healthcare AI Reimagined',
    //   },
    // ],
  },
  twitter: {
    card: 'summary',
    title: 'ChartR - Healthcare AI Reimagined',
    description: 'Building the industry\'s first AI-native operating system for healthcare.',
    creator: '@chartrhealth',
    // Custom Twitter image (commented out - using fallback style instead)
    // images: ['https://opengraph.b-cdn.net/production/images/9474df1d-c4bd-4ef8-959b-db4ac119881e.png?token=SsOLgDhIp6A-S04DmvHjbO7fARgoXPDkEJuDfUPOe-A&height=653&width=1200&expires=33288022433'],
  },
  other: {
    'twitter:domain': 'chartrhealth.com',
    'twitter:url': 'https://chartrhealth.com',
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