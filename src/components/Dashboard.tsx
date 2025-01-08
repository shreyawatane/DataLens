import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "./dashboard-components/date-range";
import { PerformanceChart } from "./dashboard-components/performance-chart";
import { StatsCards } from "./dashboard-components/stats-cards";
import { PieChartData } from "./dashboard-components/pie-chart";
import { AreaChartLegend } from "./dashboard-components/area-charts";
// import { DistributionChart } from "./dashboard-components/distribution-chart";
import { Chatbot } from "./dashboard-components/chat-bot";

export const Dashboard = () => {
  return (
    <>
      <div className="p-2 md:p-4 space-y-4 bg-card rounded-lg shadow-sm">
        <div className="container mx-auto px-2 md:px-5 mb-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-4 md:mb-0">Dashboard</h1>
              <div className="flex flex-col md:flex-row gap-3">
                <DateRangePicker />
                <Button className="w-full md:w-auto">
                  Download
                  <Download className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 md:px-0">
          <StatsCards likes={167828} shares={34555} comments={22315} />
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 md:px-0">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <PieChartData />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <AreaChartLegend />
          </div>
          <Card className="col-span-1 md:col-span-2">
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
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <PerformanceChart />
          </div>
        </div>
      </div>

      <Chatbot />
    </>
  );
};
