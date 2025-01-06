import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardsProps {
  likes: number
  shares: number
  comments: number
}

export function StatsCards({ likes, shares, comments }: StatsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{likes.toLocaleString()}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Shares</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{shares.toLocaleString()}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{comments.toLocaleString()}</div>
        </CardContent>
      </Card>
    </div>
  )
}

