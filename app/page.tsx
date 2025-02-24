import { Hero } from "@/components/hero"
import { SiteHeader } from "@/components/site-header"
import { StepsSection } from "@/components/steps-section"
import dynamic from "next/dynamic"

const PortfolioChart = dynamic(() => import("@/components/portfolio-chart"), {
  ssr: false,
})

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <PortfolioChart />
      <StepsSection />
    </main>
  )
}
