"use client"

import Link from 'next/link'
import { useTheme } from "next-themes"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { SheetTitle } from '@/components/ui/sheet'

const NavLinks = () => (
    <>
        <Link href="/" className="hover:text-black/50 dark:hover:text-white/50 transition-colors duration-200">
            主页
        </Link>
        <Link href="/maomao" className="hover:text-black/50 dark:hover:text-white/50 transition-colors duration-200">
            毛毛语录
        </Link>
        <Link href="/blogs" className="hover:text-black/50 dark:hover:text-white/50 transition-colors duration-200">
            博客
        </Link>
        <Link href="/coding" className="hover:text-black/50 dark:hover:text-white/50 transition-colors duration-200">
            编程教程
        </Link>
        <Link href="/communities" className="hover:text-black/50 dark:hover:text-white/50 transition-colors duration-200">
            其他资源
        </Link>
        <Link href="/wo" className="hover:text-black/50 dark:hover:text-white/50 transition-colors duration-200">
            关于我
        </Link>
    </>
)

export default function Header() {
    const { theme, setTheme } = useTheme()

    return (
        <header className="border-b border-black dark:border-white bg-white dark:bg-black text-black dark:text-white">
            <div className="container mx-auto px-4 h-16 flex justify-between items-center">
                <div className="flex items-center">
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden mr-4">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[240px] sm:w-[280px] bg-white dark:bg-black border-r border-black dark:border-white">
                            <VisuallyHidden>
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </VisuallyHidden>
                            <nav className="flex flex-col space-y-4 mt-6">
                                <NavLinks />
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h1 className="text-xl font-normal">
                        icon
                    </h1>
                </div>

                <nav className="hidden lg:flex items-center space-x-8">
                    <NavLinks />
                </nav>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="ml-4"
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </header>
    )
}
