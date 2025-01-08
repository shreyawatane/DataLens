import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Instagram, Linkedin, Github, Twitter } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQG_9Bjv45GZbA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731152153375?e=1741824000&v=beta&t=Q01o57JRLtg5Pj-Vxs7IoUK_ja2NDpbeKv1OVIF4LM4",
    name: "Pratap Parui",
    position: "Frontend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/pratap-parui-mr-sumbuddy/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/mr_sumbuddy/",
      },
      {
        name: "Github",
        url: "https://github.com/pratap360",
      },
      {
        name: "Twitter",
        url: "https://x.com/parui_pratap",
      },
    ],
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFQIGSEgMB1mQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731182250556?e=1741824000&v=beta&t=NjKiDcuDU-EXFq2SJ0O5ObKsOpjj449H3vHzOuhopIk",
    name: "Shreya Watane",
    position: "Tech Lead",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/shreya-watane-974757276/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/shreya_watane/",
      },
      {
        name: "Github",
        url: "https://github.com/shreyawatane",
      },
      {
        name: "Twitter",
        url: "https://x.com/shreya_watane",
      },
    ],
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/C4E03AQEpaXO7hvUCSg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1646743604214?e=1741824000&v=beta&t=5ZQIQNH2ca74eaphxF_i2xuQOTo_d6U1Uh8omLXTL5A",
    name: "Rahmat ali Shaikh",
    position: "Backend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/rahmatalishaikh-bhaitabahi/",
      },
        {
            name: "Instagram",
            url: "https://www.instagram.com/bhai_tabahi_786",
        },
      {
        name: "Github",
        url: "https://github.com/bhaitabahi786"
      },
      {
        name: "Twitter",
        url: "https://x.com/Codeinfiltr4tor",
      },
    ],
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEVr38cnTbNYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693517283615?e=1741824000&v=beta&t=XSTMB3_6sx-lsUeePGs6Q3B2Bf1u1TWhfx7y3pMXZ_s",
    name: "Prathamesh Yandolli",
    position: "pata nahi",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/prathameshglitch14/",
      },
        {
            name: "Instagram",
            url: "https://www.instagram.com/glitch_py/",
        },
        {
            name: "Github",
            url: "https://github.com/glitch1410"
        },
        {
            name: "Twitter",
            url: "https://x.com/Glitch1410",
        },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Github":
        return <Github size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    
      case "Twitter":
        return <Twitter size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

    <p className="mt-4 mb-10 text-xl text-muted-foreground">
    Get to know the experts behind Data Lens, committed to shaping the future of social media analytics.
    </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
