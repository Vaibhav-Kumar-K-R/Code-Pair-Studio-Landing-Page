import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Code Pair Studio',
  description: '',
  generator: '',
  applicationName: 'Code Pair Studio',
  referrer: 'origin-when-cross-origin',
  keywords: ['code', 'pair programming', 'collaboration', 'real-time', 'editor'],
  authors: [{ name: 'Code Pair Studio Team' }],
  colorScheme: 'light',
  creator: 'Code Pair Studio Team',
  publisher: 'Code Pair Studio Team',
  
}

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
