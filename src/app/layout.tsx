import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChartR - AI Platform Transforming Healthcare Data',
  description: 'ChartR is the comprehensive AI health technology platform that transforms healthcare through intelligent data curation, extraction, and analysis across research, literature, and clinical domains.',
  keywords: ['AI healthcare', 'clinical data', 'regulatory reporting', 'systematic literature review', 'research grants', 'medical AI'],
  authors: [{ name: 'ChartR Health' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'ChartR - AI Platform Transforming Healthcare Data',
    description: 'The comprehensive AI health technology platform transforming healthcare through intelligent data analysis.',
    type: 'website',
    url: 'https://chartrhealth.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChartR - AI Platform Transforming Healthcare Data',
    description: 'The comprehensive AI health technology platform transforming healthcare through intelligent data analysis.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 