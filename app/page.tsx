'use client'

import { useState } from 'react'
import { SmoothScroll } from './components/smooth-scroll'
import { Preloader } from './components/preloader'
import { BennetHeader } from './components/bennet-header'
import { BennetHero } from './components/bennet-hero'
import { BennetAbout } from './components/bennet-about'
import { BennetProjects } from './components/bennet-projects'
import { BennetMarquee } from './components/bennet-marquee'
import { BennetServices } from './components/bennet-services'
import { BennetContact } from './components/bennet-contact'
import { BennetFooter } from './components/bennet-footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <SmoothScroll>
        <BennetHeader />
        <main>
          <BennetHero />
          <BennetAbout />
          <BennetProjects />
          <BennetMarquee />
          <BennetServices />
          <BennetContact />
        </main>
        <BennetFooter />
      </SmoothScroll>
    </>
  )
}
