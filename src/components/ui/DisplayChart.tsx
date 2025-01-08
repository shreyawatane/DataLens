"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "Reels", visitors: 275, fill: "#4285F4" },
  { browser: "Carousel", visitors: 200, fill: "#FF9500" },
  { browser: "Photos", visitors: 187, fill: "#FF7139" },
  { browser: "Stories", visitors: 173, fill: "#0078D7" },
  { browser: "other", visitors: 90, fill: "#34A853" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Reels: {
    label: "Reels",
    color: "hsl(var(--chart-1))",
  },
  Carousel: {
    label: "Carousel",
    color: "hsl(var(--chart-2))",
  },
  Photos: {
    label: "Photos",
    color: "hsl(var(--chart-3))",
  },
  Stories: {
    label: "Stories",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function DisplayChart() {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Watch Trends of your Social Media <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Get Insights on your Social Media Visitors
        </div>
      </CardFooter>
    </Card>
  )
}
