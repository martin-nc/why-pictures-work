import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Why Pictures Work',
  description: 'Why pictures and designs are effective',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en" className='prose prose-stone max-w-3xl mx-auto px-4'>  
      <body>
        <Header />
        {children}
<Footer />
      </body>
    </html>
  )
}
