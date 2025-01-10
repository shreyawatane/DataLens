"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { date: "2024-01-08", likes: 2500, shares: 1200, comments: 800 },
  { date: "2024-01-16", likes: 1500, shares: 900, comments: 600 },
  { date: "2024-01-24", likes: 2000, shares: 1100, comments: 700 },
  { date: "2024-02-01", likes: 1800, shares: 1000, comments: 650 },
  { date: "2024-02-09", likes: 2200, shares: 1300, comments: 750 },
]

export function PerformanceChart() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Post Performance Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] md:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="likes"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="shares" stroke="#82ca9d" />
              <Line type="monotone" dataKey="comments" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

