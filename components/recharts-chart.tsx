"use client"

import { PieChart, Pie, Cell } from "recharts"

interface RechartsChartProps {
  portfolio: Array<{
    name: string
    value: number
    color: string
  }>
}

export default function RechartsChart({ portfolio }: RechartsChartProps) {
  return (
    <PieChart width={288} height={288}>
      <Pie
        data={portfolio}
        cx={144}
        cy={144}
        innerRadius={90}
        outerRadius={135}
        startAngle={90}
        endAngle={-270}
        paddingAngle={2}
        dataKey="value"
      >
        {portfolio.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
        ))}
      </Pie>
    </PieChart>
  )
}
