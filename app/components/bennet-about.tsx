'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function BennetAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(textRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px'])

  const words = ['creative', 'visionary', 'digital']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div ref={textRef}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={isInView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="block"
              >
                {"We're a"}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={isInView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="block text-stroke"
              >
                {words[currentWordIndex]}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={isInView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="block"
              >
                agency
              </motion.span>
            </span>
          </h2>

          <div className="flex gap-4 my-8">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="h-[1px] flex-1 bg-border origin-left"
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-md"
          >
            Crafting exceptional websites tailored to your vision, we blend creativity 
            with functionality to deliver stunning digital experiences.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 group flex items-center gap-3 text-sm uppercase tracking-widest"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </motion.button>
        </div>

        <motion.div style={{ y }} className="relative">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="aspect-[3/4] relative overflow-hidden"
              >
                <Image
                  src={`/project-${i}.jpg`}
                  alt={`Project ${i}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
