import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "./dashboard-components/date-range";
import { PerformanceChart } from "./dashboard-components/performance-chart";
import { StatsCards } from "./dashboard-components/stats-cards";
import { PieChartData } from "./dashboard-components/pie-chart";
import { AreaChartLegend } from "./dashboard-components/area-charts";
// import { DistributionChart } from "./dashboard-components/distribution-chart";
export const Dashboard = () => {
  return (
    <>
      <div className="p-4 space-y-4 bg-card rounded-lg shadow-sm">
        <div className="container mx-auto px-5 mb-2 flex items-center justify-between space-y-6">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          {/* <div className="flex items-center space-x-2"> */}
          {/* <div className="flex items-center space-x-6"> */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-3">
            <DateRangePicker />
            <Button>
              Download
              <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>
          </div>
        </div>

      <StatsCards likes={167828} shares={34555} comments={22315} />

      <div className="grid gap-4 md:grid1-cols-2 lg:grid-cols-4">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"> */}
        {/* <DistributionChart /> */}
        <PieChartData />
        <AreaChartLegend />
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Engagement Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Reel</span>
                <span className="text-green-600">62382.4%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Carousel</span>
                <span className="text-red-600">40745.0%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Static</span>
                <span className="text-green-600">29120.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <PerformanceChart />
      </div>
      </div>
    </>
  );
};
