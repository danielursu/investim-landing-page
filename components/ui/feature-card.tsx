import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  href: string
}

export function FeatureCard({ title, description, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/20 p-6 pr-16 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
    >
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
      <ChevronRight className="absolute top-1/2 -translate-y-1/2 right-6 h-8 w-8 text-white opacity-50 transition-all duration-300 group-hover:opacity-100" />
    </Link>
  )
}
