import './globals.css'

import Script from 'next/script'

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
    <html lang="en" className="hairlines" style={{ fontSize: '39px' }}>
      <head>
        <script async={false} src="/js/remFlexible.js" />
      </head>
      <body style={{ fontFamily: 'Goldman' }}>{children}</body>
    </html>
  )
}
