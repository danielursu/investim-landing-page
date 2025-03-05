'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RegisterButton } from "@/components/ui/register-button"
import { ChevronRight } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"
import { useGsapAnimations } from "@/hooks/use-gsap-animations"

const FEATURES = [
  {
    title: "Primul pas în investiții",
    description: "Obține un portofoliu de investiții personalizat.",
    href: "#"
  },
  {
    title: "3.5% anual la depozit în valută",
    description: "Depozitează economiile în valută fără restricții de retragere.",
    href: "#"
  }
] as const

export function Hero() {
  const { heroRef, featureCardsRef, registerButtonRef } = useGsapAnimations()

  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-image.jpg"
          alt="Investim Background"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container px-4 md:px-6 mx-auto pt-48 pb-16 2xl:pt-64 lg:pt-56">
        <div className="max-w-5xl">
          <div ref={heroRef}>
            <h1 className="text-7xl md:text-6xl font-bold text-white mb-4 opacity-0 translate-y-8">
              Investim pentru viitorul nostru!
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 opacity-0 translate-y-6">
              Investiția de azi, siguranța de mâine - nu lăsăm economiile să stea pe loc.
            </p>
          </div>
          <RegisterButton innerRef={registerButtonRef} variant="hero" className="opacity-0 translate-y-6" />
        </div>

        <div ref={featureCardsRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-52 lg:w-[900px] ml-auto">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} className="opacity-0 translate-y-8" />
          ))}
        </div>
      </div>
    </section>
  )
}
