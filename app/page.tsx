import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { InvestimHero } from "@/components/investim-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <InvestimHero />

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 md:items-start">
              <h2 className="text-4xl font-bold md:w-1/2">Prima investiție cu Investim: Ghidul tău în 3 pași</h2>
              <p className="text-gray-600 md:w-1/2">
                Cu Investim, îți poți începe aventura în lumea investițiilor simplu și rapid. Urmează trei pași pentru
                a-ți construi un portofoliu diversificat, adaptat nevoilor tale. Răspunde la câteva întrebări, acceptă
                sau ajustează recomandarea noastră, apoi deschide contul și începe să investești inteligent!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="p-8 rounded-2xl border-gray-100 group hover:shadow-lg transition-all duration-300">
              <div className="relative h-[180px] mb-4 overflow-hidden">
                <div className="text-right absolute bottom-0 right-0 w-full transition-transform duration-300 group-hover:-translate-y-11">
                  <div className="text-[140px] font-bold leading-none pt-10 bg-gradient-to-r from-[#807BDC] to-[#2F27CE] text-transparent bg-clip-text">
                    01
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[42px] bg-white"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Răspunde chestionarul</h3>
              <p className="text-gray-600 text-lg">
                Răspunde la câteva întrebări despre obiectivele tale financiare și preferințele de investiții pentru a
                determina toleranța ta la risc.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 rounded-2xl border-gray-100 group hover:shadow-lg transition-all duration-300">
              <div className="relative h-[180px] mb-4 overflow-hidden">
                <div className="text-right absolute bottom-0 right-0 w-full transition-transform duration-300 group-hover:-translate-y-11">
                  <div className="text-[140px] font-bold leading-none pt-10 bg-gradient-to-r from-[#807BDC] to-[#2F27CE] text-transparent bg-clip-text">
                    02
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[42px] bg-white"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Acceptă sau modifică recomandarea</h3>
              <p className="text-gray-600 text-lg">
                În conformitate cu răspunsurile din chestionar, Investim sugerează un portofoliu diversificat de active
                financiare ca ETF-uri, adaptat vârstei tale și apetitului tău pentru risc.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 rounded-2xl border-gray-100 group hover:shadow-lg transition-all duration-300">
              <div className="relative h-[180px] mb-4 overflow-hidden">
                <div className="text-right absolute bottom-0 right-0 w-full transition-transform duration-300 group-hover:-translate-y-11">
                  <div className="text-[140px] font-bold leading-none pt-10 bg-gradient-to-r from-[#807BDC] to-[#2F27CE] text-transparent bg-clip-text">
                    03
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[42px] bg-white"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Deschide cont și investește</h3>
              <p className="text-gray-600 text-lg">
                Deschide și alimentează contul tău de investiții. Fondurile sunt investite automat în portofoliul
                recomandat, iar ție îți rămâne doar să monitorizezi investiția.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* You can add more sections here if needed */}
    </div>
  )
}
