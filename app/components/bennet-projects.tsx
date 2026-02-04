'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Son of a Tailor',
    category: 'Brand Identity',
    image: '/project-1.jpg',
    number: '01'
  },
  {
    id: 2,
    title: 'Stena Air',
    category: 'Graphic Design',
    image: '/project-2.jpg',
    number: '02'
  },
  {
    id: 3,
    title: 'Lounge Chair',
    category: 'Photography',
    image: '/project-3.jpg',
    number: '03'
  },
  {
    id: 4,
    title: 'Invincibles',
    category: 'Video',
    image: '/project-4.jpg',
    number: '04'
  }
]

export function BennetProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={containerRef} id="projects" className="py-32 md:py-48">
      <div ref={titleRef} className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={isInView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="block"
              >
                Featured
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={isInView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="block text-stroke"
              >
                Projects
              </motion.span>
            </span>
          </h2>
        </div>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="px-6 md:px-12 lg:px-24 mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 mb-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-[1px] flex-1 bg-border origin-left"
              />
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <p className="text-muted-foreground max-w-md">
              Continue exploring our work collection
            </p>
            <motion.button
              whileHover={{ x: 10 }}
              className="group flex items-center gap-3 text-sm uppercase tracking-widest"
            >
              <span>All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`px-6 md:px-12 lg:px-24 ${isEven ? '' : 'md:text-right'}`}
    >
      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isEven ? '' : 'md:[direction:rtl]'}`}>
        <motion.div
          style={{ y }}
          className="relative aspect-[4/5] overflow-hidden md:[direction:ltr]"
        >
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={isInView ? { scaleX: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-background origin-right"
          />
        </motion.div>

        <div className="space-y-6 md:[direction:ltr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 text-sm text-muted-foreground"
          >
            <span>{project.number}</span>
            <span>/</span>
            <span>04</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground"
          >
            {project.category}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
