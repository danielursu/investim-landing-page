'use client'

import { Button } from "@/components/ui/button"
import { RegisterButton } from "@/components/ui/register-button"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { useButtonAnimations } from "@/hooks/use-button-animations"

export function SiteHeader() {
  const headerButtonRef = useRef<HTMLButtonElement>(null)
  useButtonAnimations(headerButtonRef)

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
          <Link href="#" className="hover:text-black/70 px-6 py-2 rounded-md">Accesare Cont</Link>
          <RegisterButton variant="default" innerRef={headerButtonRef} />
        </div>
      </div>
    </header>
  )
}
