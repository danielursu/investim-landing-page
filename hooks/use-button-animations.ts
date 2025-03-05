'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useButtonAnimations(ref: React.RefObject<HTMLButtonElement>) {
  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return

    const mouseEnterHandler = () => {
      if (!ref.current) return
      const buttonTl = gsap.timeline()
      const chevron = ref.current.querySelector('svg')

      buttonTl
        .to(ref.current, {
          scale: 1.02,
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(chevron, {
          x: 4,
          duration: 0.2,
          ease: 'power2.out'
        }, '-=0.2')
    }

    const mouseLeaveHandler = () => {
      if (!ref.current) return
      const buttonTl = gsap.timeline()
      const chevron = ref.current.querySelector('svg')

      buttonTl
        .to(ref.current, {
          scale: 1,
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(chevron, {
          x: 0,
          duration: 0.2,
          ease: 'power2.out'
        }, '-=0.2')
    }

    ref.current.addEventListener('mouseenter', mouseEnterHandler)
    ref.current.addEventListener('mouseleave', mouseLeaveHandler)

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', mouseEnterHandler)
        ref.current.removeEventListener('mouseleave', mouseLeaveHandler)
      }
    }
  }, [ref])
}
