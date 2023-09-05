"use client";
import Container from "@/components/ui/container";
import Link from "next/link";
import { Button } from "./button";
import { ShoppingCart, Sun, Moon, Menu } from "lucide-react";
import ProfileButton from "./ProfileButton";
import { useTheme } from "next-themes";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  {
    href: "/",
    label: "Products",
  },
  {
    href: "/",
    label: "Categories",
  },
  {
    href: "/",
    label: "On Sale",
  },
];
const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4sm:px-6lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 md:hidden"></Menu>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link href={route.href} key={i}>
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold uppercase">Store Name</h1>
            </Link>
          </div>
          <nav className="mx-6 flex-items-center space-x-4lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i}>
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 "
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6">
                <span className="sr-only">Shopping Cart</span>
              </ShoppingCart>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"></Sun>
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"></Moon>
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton></ProfileButton>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
