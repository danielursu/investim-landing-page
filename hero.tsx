import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:w-3/5">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Investim pentru viitorul nostru!
          </h1>
          <p className="max-w-2xl text-lg text-gray-200 sm:text-xl">
            Investiția de azi, siguranța de mâine - nu lăsăm economiile să stea pe loc.
          </p>
          <Button size="lg" className="bg-indigo-600 text-lg hover:bg-indigo-500">
            Deschide Cont
          </Button>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:w-[600px] ml-auto">
          <Link
            href="#"
            className="group relative overflow-hidden rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Primul pas în investiții</h3>
              <p className="text-gray-200">Obține un portofoliu de investiții personalizat.</p>
            </div>
            <ChevronRight className="absolute bottom-6 right-6 h-6 w-6 text-white opacity-50 transition-all duration-300 group-hover:opacity-100" />
          </Link>

          <Link
            href="#"
            className="group relative overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">3.5% anual la depozit in valută</h3>
              <p className="text-gray-200">Depozitează economiile în valută fără restricții de retragere.</p>
            </div>
            <ChevronRight className="absolute bottom-6 right-6 h-6 w-6 text-white opacity-50 transition-all duration-300 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </section>
  )
}

