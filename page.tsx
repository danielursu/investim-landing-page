import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Investește în viitorul tău financiar
              </h1>
              <p className="text-gray-600 text-xl mb-8">
                Cu Investim, îți construiești un portofoliu diversificat și optimizat pentru obiectivele tale
                financiare. Începe să investești inteligent, cu doar câțiva pași simpli.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#2f27ce] hover:bg-[#2f27ce]/90 text-white px-8 py-6 text-lg rounded-lg">
                  <Link href="#">Deschide Cont</Link>
                </Button>
                <Button asChild variant="outline" className="px-8 py-6 text-lg rounded-lg border-2">
                  <Link href="#">Află Mai Multe</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Investment Illustration"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

