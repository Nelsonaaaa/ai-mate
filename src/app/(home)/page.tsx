'use client'

import Header from '@/app/(home)/components/Header'
import Hero from '@/app/(home)/components/Hero'
import Introduction from '@/app/(home)/components/Introduction'
import Footer from '@/app/(home)/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Introduction />
      </main>
      <Footer />
    </div>
  )
} 