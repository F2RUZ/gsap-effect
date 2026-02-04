'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  'branding',
  'web design',
  'motion',
  'development',
  'marketing'
]

export function BennetServices() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="services" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-medium text-muted-foreground mb-16"
        >
          You need it? We do it
        </motion.h2>

        <ul className="space-y-0">
          {services.map((service, i) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="py-6 md:py-8 border-t border-border flex items-center justify-between cursor-pointer">
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight group-hover:text-stroke transition-all duration-500">
                  {service}
                </span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="w-3 h-3 rounded-full bg-foreground"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
