'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function BennetContact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Address
            </p>
            <div className="h-[1px] bg-border mb-4" />
            <p className="text-sm">35 M Str, New York, USA</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Phone
            </p>
            <div className="h-[1px] bg-border mb-4" />
            <p className="text-sm">0040 (7763) 574-8901</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              . . .
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Ready to work together?
          </p>
          
          <motion.a
            href="mailto:office@bennet.com"
            className="group inline-flex items-center gap-4 text-4xl md:text-6xl lg:text-8xl font-bold hover:text-stroke transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <span>office@bennet.com</span>
            <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
