'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function BennetHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const titleVariants = {
    hidden: { y: '100%' },
    visible: (i: number) => ({
      y: '0%',
      transition: {
        duration: 1.2,
        delay: i * 0.1,
        ease: [0.76, 0, 0.24, 1]
      }
    })
  }

  const words = ['creative', 'visionary', 'digital']
  const currentWord = words[0]

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8"
          >
            Featured Projects
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-[120px] font-bold leading-[0.9] tracking-tight">
            <div className="overflow-hidden">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                className="block"
              >
                bennet
              </motion.span>
            </div>
          </h1>

          <div className="mt-8 md:mt-12 max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Bringing brands to life through
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-xl font-semibold"
            >
              <span className="text-stroke">{currentWord}</span> web solutions
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
