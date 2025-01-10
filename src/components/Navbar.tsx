import { useLocation } from "react-router-dom";
import { GitHubLogoIcon} from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const routeList = [
  {
    href: "/#howItWorks",
    label: "How it works",
  },
  {
    href: "/#features",
    label: "Features",
  },
  {
    href: "/#services",
    label: "Services",
  },
  {
    href: "/#team",
    label: "Team",
  },
];

export const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <header className={`${isDashboard ? "sticky" : "fixed"} border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background`}>
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img src="/DataLens.png" alt="Data Lens Logo" className="h-6 w-6 mr-2" />
              Data Lens
            </a>
          </NavigationMenuItem>
          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5">
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Data Lens</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/shreyawatane/DataLens.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({ variant: "secondary" })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>
          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/shreyawatane/DataLens.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};