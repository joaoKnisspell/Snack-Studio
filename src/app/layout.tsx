import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Snack Studio - Home',
  description:
    'Hi, my name is João Knisspell, and I developed this application using Next.js, Tailwind, and The MovieDB API to practice my frontend skills.',
  icons: {
    icon: 'https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/512/Popcorn-icon.png',
    apple:
      'https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/512/Popcorn-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      {/* <head>
        <title></title>
      </head> */}
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="bg-bgColor lg:grid lg:grid-cols-app 2xl:grid-cols-appLarge">
          <Sidebar />
          <main className="col-start-2 min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  )
}
