import Link from "next/link"
import { Button } from "@/components/ui/button"

export function InvestimHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Investește în viitorul tău financiar
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Cu Investim, îți construiești un portofoliu diversificat și optimizat pentru obiectivele tale financiare.
              Începe să investești inteligent, cu doar câțiva pași simpli.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="bg-[#2f27ce] hover:bg-[#2f27ce]/90 text-white">
              <Link href="#">Deschide Cont</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#">Află mai multe</Link>
            </Button>
          </div>
          <div className="w-full max-w-full pt-12">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="text-3xl font-bold">5.5%</div>
                <p className="text-sm text-gray-500">Randament mediu anual</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="text-3xl font-bold">10K+</div>
                <p className="text-sm text-gray-500">Clienți activi</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="text-3xl font-bold">€50M+</div>
                <p className="text-sm text-gray-500">Active în administrare</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="text-3xl font-bold">24/7</div>
                <p className="text-sm text-gray-500">Suport clienți</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
