import { Card } from "@/components/ui/card"

const STEPS = [
  {
    number: "01",
    title: "Răspunde chestionarul",
    description: "Răspunde la câteva întrebări despre obiectivele tale financiare și preferințele de investiții pentru a determina toleranța ta la risc."
  },
  {
    number: "02",
    title: "Acceptă sau modifică recomandarea",
    description: "În conformitate cu răspunsurile din chestionar, Investim sugerează un portofoliu diversificat de active financiare ca ETF-uri, adaptat vârstei tale și apetitului tău pentru risc."
  },
  {
    number: "03",
    title: "Deschide cont și investește",
    description: "Deschide și alimentează contul tău de investiții. Fondurile sunt investite automat în portofoliul recomandat, iar ție îți rămâne doar să monitorizezi investiția."
  }
] as const

export function StepsSection() {
  return (
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
          {STEPS.map((step) => (
            <Card 
              key={step.number}
              className="p-8 rounded-2xl border-gray-100 group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-[180px] mb-4 overflow-hidden">
                <div className="text-right absolute bottom-0 right-0 w-full transition-transform duration-300 group-hover:-translate-y-11">
                  <div className="text-[140px] font-bold leading-none pt-10 bg-[linear-gradient(180deg,#807BDC_0%,#2F27CE_100%)] text-transparent bg-clip-text">
                    {step.number}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[42px] bg-white"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
