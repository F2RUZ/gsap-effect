'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 800)
          }, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
              wait, wait..
            </p>
            
            <div className="relative">
              <motion.span 
                className="text-8xl md:text-[180px] font-bold tracking-tighter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {Math.min(100, Math.floor(progress))}
              </motion.span>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-20 left-0 right-0 h-[1px] bg-border mx-auto max-w-xs"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            style={{ originX: 0 }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
