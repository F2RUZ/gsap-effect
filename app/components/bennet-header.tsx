'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function BennetHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between mix-blend-difference">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          bennet
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-3 text-sm uppercase tracking-widest text-white"
        >
          <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
              className="w-6 h-[2px] bg-white block"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="w-6 h-[2px] bg-white block"
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
              className="w-6 h-[2px] bg-white block"
            />
          </div>
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ clipPath: 'circle(0% at calc(100% - 60px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 60px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 60px) 40px)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-foreground flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-4">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl md:text-7xl font-bold text-background hover:text-stroke hover:text-background transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
