import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Investim Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Button asChild className="bg-[#2f27ce] hover:bg-[#2f27ce]/90 text-white px-6">
            <Link href="#">Deschide Cont</Link>
          </Button>
          <Button asChild className="bg-[#171717] hover:bg-[#171717]/90 text-white px-6">
            <Link href="#">Accesare Cont</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
