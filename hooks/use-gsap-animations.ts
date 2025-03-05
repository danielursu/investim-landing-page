'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useButtonAnimations } from '@/hooks/use-button-animations'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type UseGsapAnimationsResult = {
  heroRef: React.RefObject<HTMLDivElement>
  featureCardsRef: React.RefObject<HTMLDivElement>
  registerButtonRef: React.RefObject<HTMLButtonElement>
}

const useGsapAnimations = (): UseGsapAnimationsResult => {
  const heroRef = useRef<HTMLDivElement>(null)
  const featureCardsRef = useRef<HTMLDivElement>(null)
  const registerButtonRef = useRef<HTMLButtonElement>(null)

  // Use the shared button animations for the hero button
  useButtonAnimations(registerButtonRef)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Hero content animation timeline
    const heroTl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        duration: 1
      }
    })

    if (heroRef.current) {
      const h1 = heroRef.current.querySelector('h1')
      const p = heroRef.current.querySelector('p')

      heroTl
        .to(h1, {
          y: 0,
          opacity: 1,
          duration: 1
        })
        .to(p, {
          y: 0,
          opacity: 1,
          duration: 1
        }, '-=0.7')
    }

    // Register button initial animation
    if (registerButtonRef.current) {
      heroTl.to(registerButtonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8
      }, '-=0.5')
    }

    // Feature cards animation
    if (featureCardsRef.current) {
      const cards = featureCardsRef.current.children
      
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featureCardsRef.current,
          start: 'top bottom-=100',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse'
        }
      })
    }

    return () => {
      heroTl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return { heroRef, featureCardsRef, registerButtonRef }
}

export { useGsapAnimations }
