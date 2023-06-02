import dynamic from 'next/dynamic'
import './globals.css'

import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reveive',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="/js/remFlexible.js" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
