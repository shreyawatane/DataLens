import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
	{
		title: "Chatbot Integration",
		description:
			"Interact with your data using our integrated chatbot. Get instant insights and answers to your queries.",
		image: image4,
	},
	{
		title: "Real-time Analytics",
		description:
			"Monitor your social media performance in real-time. Make data-driven decisions on the fly.",
		image: image3,
	},
	{
		title: "Comprehensive Reports",
		description:
			"Generate detailed reports to uncover actionable insights and optimize your social media strategy.",
		image: image,
	},
	{
		title: "User-friendly Interface",
		description:
			"Navigate through your data effortlessly with our intuitive and user-friendly interface.",
		image: image,
	},
	{
		title: "Data Export",
		description:
			"Easily export your data in various formats for further analysis and sharing.",
		image: image4,
	},
	{
		title: "Multi-platform Support",
		description:
			"Access your data and insights across multiple platforms and devices seamlessly.",
		image: image3,
	},
];

const featureList: string[] = [
	"Chatbot Integration",
	"Real-time Analytics",
	"Comprehensive Reports",
	"User-friendly Interface",
	"Data Export",
	"Multi-platform Support",
	"Secure Data Handling",
	"24/7 Support",
	"Advanced Sentiment Analysis",
	"Trend Prediction",
	"Automated Insights"
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
