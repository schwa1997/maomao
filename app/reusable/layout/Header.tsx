"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SheetTitle } from "@/components/ui/sheet";
import PinkButton from "../reusable/PinkButton";
import NavLink from "../reusable/nav";

const NavLinks = () => (
  <>
    <NavLink href="/" text="主页" />
    <NavLink href="/maomao" text="毛毛语录" />
    <NavLink href="/blogs" text="博客" />
    <NavLink href="/coding" text="编程教程" />
    <NavLink href="/communities" text="其他资源" />
    <NavLink href="/wo" text="关于我" />
  </>
);

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-black border-b-2 dark:border-white bg-white dark:bg-black text-black dark:text-white hover:border-pink dark:hover:border-pink">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden mr-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[240px] sm:w-[280px] bg-white dark:bg-black border-r border-black dark:border-white"
            >
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col space-y-4 mt-6">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
          <PinkButton text="强女手册" size="xlarge" />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <NavLinks />
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4"
        >
          <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
      </div>
    </header>
  );
}
