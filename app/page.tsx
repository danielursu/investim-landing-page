import { Hero } from "@/components/hero"
import { SiteHeader } from "@/components/site-header"
import { StepsSection } from "@/components/steps-section"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <StepsSection />
    </main>
  )
}
