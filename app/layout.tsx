import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
// @ts-ignore: CSS imports are handled by Next.js
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'Code Pair Studio | Real-time Collaborative IDE',
  description: 'An advanced real-time code collaboration platform featuring AI-powered code generation, integrated audio/video calling, multiplayer whiteboards, and cross-platform desktop support.',
  generator: 'Next.js',
  applicationName: 'Code Pair Studio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Code Pair Studio', 
    'Real-time Collaboration', 
    'Pair Programming', 
    'AI Code Editor', 
    'Gemini AI', 
    'Multiplayer Whiteboard', 
    'Remote Engineering', 
    'JDoodle API'
  ],
  authors: [{ name: 'Vaibhav', url: 'https://portfolio-steel-six-31.vercel.app/' }],
  colorScheme: 'dark', // Since we've been using a dark developer aesthetic
  creator: 'Vaibhav',
  publisher: 'Vaibhav',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

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
