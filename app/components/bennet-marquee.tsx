'use client'

import { motion } from 'framer-motion'

export function BennetMarquee() {
  const items = ['Creative', 'Design', 'Development', 'Branding', 'Motion', 'Strategy']

  return (
    <section className="py-16 md:py-24 border-y border-border overflow-hidden">
      <div className="marquee">
        <motion.div 
          className="marquee-content"
          animate={{ x: [0, '-50%'] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight mx-8 text-stroke whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </motion.div>
        <motion.div 
          className="marquee-content"
          animate={{ x: [0, '-50%'] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight mx-8 text-stroke whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
