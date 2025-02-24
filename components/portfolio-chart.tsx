"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import dynamic from "next/dynamic"

const RechartsChart = dynamic(() => import("./recharts-chart"), { ssr: false })

const COLORS = {
  stocks: "#4338ca",
  bonds: "#818cf8",
  commodities: "#c7d2fe",
  diversifier: "#e0e7ff",
}

export default function PortfolioChart() {
  const [mounted, setMounted] = useState(false)
  const [riskLevel, setRiskLevel] = useState(40)
  const [portfolio, setPortfolio] = useState([
    { name: "Acțiuni", value: 60, color: COLORS.stocks },
    { name: "Obligațiuni", value: 25, color: COLORS.bonds },
    { name: "Aur și mărfuri", value: 15, color: COLORS.commodities },
    { name: "Diversificator", value: 0, color: COLORS.diversifier },
  ])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Update portfolio based on risk level
    const newPortfolio = [
      { name: "Acțiuni", value: Math.round(riskLevel * 0.9), color: COLORS.stocks },
      { name: "Obligațiuni", value: Math.round((100 - riskLevel) * 0.8), color: COLORS.bonds },
      { name: "Aur și mărfuri", value: Math.round(riskLevel * 0.1), color: COLORS.commodities },
      {
        name: "Diversificator",
        value: Math.max(0, 100 - (Math.round(riskLevel * 0.9) + Math.round((100 - riskLevel) * 0.8) + Math.round(riskLevel * 0.1))),
        color: COLORS.diversifier,
      },
    ]
    setPortfolio(newPortfolio)
  }, [riskLevel])

  const estimatedReturn = (riskLevel * 0.1 + 2).toFixed(1)

  if (!mounted) {
    return null
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2 items-center px-6">
        {/* Left column with chart and allocations */}
        <div className="space-y-8">
           {/* Risk slider */}
           <div className="max-w-sm mx-auto space-y-3">
            <div className="text-sm text-gray-600">Risc și *potential de randament</div>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600">Scăzut</div>
              <Slider
                value={[riskLevel]}
                onValueChange={(value) => setRiskLevel(value[0])}
                max={100}
                step={1}
                className="flex-1"
              />
              <div className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600">Ridicat</div>
            </div>
          </div>

          {/* Donut chart */}
          <div className="relative w-72 h-72 mx-auto">
            <RechartsChart portfolio={portfolio} />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <div className="text-sm text-gray-400">Randament estimat:</div>
                <div className="text-2xl font-semibold text-gray-900">*{estimatedReturn}% anual</div>
              </div>
            </div>
          </div>

          {/* Allocation list */}
          <div className="grid grid-cols-2 gap-6 w-72 mx-auto pl-12">
            {portfolio.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2.5 h-2.5 rounded-full mt-2" style={{ backgroundColor: item.color }}></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-medium text-gray-900">{item.value}%</span>
                  <span className="text-sm text-gray-500">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column with text content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Descoperă portofoliul potrivit pentru tine</h2>
          <p className="text-gray-600">
            Folosește graficul interactiv pentru a explora gama de opțiuni de portofolii de investiții, personalizate în
            funcție de vârsta și nivelul de toleranță la risc.
          </p>
          <p className="text-gray-600">
            Portofoliile de investiții cu risc mai ridicat pot genera randamente mai mari, dar vin cu o volatilitate și
            un risc mai mare de scădere a valorii capitalului. În schimb, portofoliile cu risc mai scăzut oferă
            randamente mai mici, dar sunt mai stabile și au un risc redus de scădere a valorii capitalului.
          </p>
        </div>
      </div>
    </section>
  )
}
