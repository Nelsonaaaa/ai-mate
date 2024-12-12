import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

function LogoImage() {
  return (
    <div className="relative w-[120px] h-[120px] mx-auto">
      <Image 
        src="/logo.svg"
        alt="MBTI测试"
        fill
        priority
        className="object-contain"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <Suspense fallback={<div className="w-[120px] h-[120px] mx-auto bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />}>
          <LogoImage />
        </Suspense>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          探索你的性格类型
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          通过专业的MBTI测试，发现真实的自己
        </p>

        <Link 
          href="/test"
          className="btn-primary focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          开始测试
        </Link>
      </div>
    </section>
  )
} 