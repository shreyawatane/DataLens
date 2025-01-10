import { Card, CardContent } from "./ui/card";

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Watch our step-by-step guide to understand how Data Lens works.
      </p>

    
<div className="flex justify-center mt-8">
    <Card className="w-full max-w-4xl bg-muted/50">
        <CardContent className="p-2">
            <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <iframe
                    src="https://www.youtube-nocookie.com/embed/abVJhnymuNk?si=o-y-VyyosfC8Ndri"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
            </div>
        </CardContent>
    </Card>
</div>
    </section>
  );
};
