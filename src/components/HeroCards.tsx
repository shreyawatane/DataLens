import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { LightBulbIcon } from "./Icons";
import { DisplayChart } from "./ui/DisplayChart";



export const HeroCards = () => {
	const navigate = useNavigate();
  return (
    <div className="hidden top-8 lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://i.ibb.co/TmG03Lx/DataLens.png"
            />
			<AvatarFallback>DL</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">DataLens</CardTitle>
          </div>
        </CardHeader>

        <CardContent>Transforming data into actionable insights.</CardContent>
      </Card>

      {/* DisplayChart */}
      <Card className="absolute right-[20px] top-4 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <DisplayChart />
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            Get started with essential features for social media analytics.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full" onClick={() => navigate('/dashboard')}>Start Free Trial</Button>
        </CardContent>

        {/* <hr className="w-4/5 m-auto mb-4" /> */}

        {/* <CardFooter className="flex">
          <div className="space-y-4">
            {["4 Team members", "4 GB Storage", "Up to 6 pages"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter> */}
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[20px] bottom-[-20px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Advanced Analytics</CardTitle>
            <CardDescription className="text-md mt-2">
              Leverage advanced analytics to gain deeper insights into your social media performance.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
