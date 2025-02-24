import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"

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
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-image.png"
          alt="Investim Background"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container px-4 md:px-6 mx-auto pt-32 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investim pentru viitorul nostru!
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Investiția de azi, siguranța de mâine - nu lăsăm economiile să stea pe loc.
          </p>
          <Button className="bg-[#2f27ce] hover:bg-[#2f27ce]/90 text-white px-8 py-6 rounded-lg text-lg">
            Deschide Cont
          </Button>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-52 lg:w-[900px] ml-auto">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
