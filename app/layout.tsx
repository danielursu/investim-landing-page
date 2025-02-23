import type React from "react"
import { Manrope } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
