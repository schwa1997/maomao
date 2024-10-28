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
        <Link href="/" className="hover:text-green-200 transition duration-300 dark:hover:text-green-400">
            主页
        </Link>
        <Link href="/maomao" className="hover:text-green-200 transition duration-300 dark:hover:text-green-400">
            毛毛语录
        </Link>
        <Link href="/blogs" className="hover:text-green-200 transition duration-300 dark:hover:text-green-400">
            博客
        </Link>
        <Link href="/coding" className="hover:text-green-200 transition duration-300 dark:hover:text-green-400">
            编程教程
        </Link>
        <Link href="/communities" className="hover:text-green-200 transition duration-300 dark:hover:text-green-400">
            其他资源
        </Link>
        <Link href="/wo" className="hover:text-green-200 transition duration-300 dark:hover:text-green-400">
            关于我
        </Link>
    </>
)

export default function Header() {
    const { theme, setTheme } = useTheme()

    return (
        <header className="bg-green-600 text-white py-4 dark:bg-black/50 dark:text-white dark:border-b dark:border-white/40">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden mr-4 bg-green-600 dark:bg-black/50">
                            <Button variant="outline" size="icon" className="dark:border-white/40 dark:hover:bg-green-900/50">
                                <Menu className="h-[1.2rem] w-[1.2rem]" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[240px] sm:w-[280px] bg-green-600 dark:bg-black/90 dark:border-white/40">
                            <VisuallyHidden>
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </VisuallyHidden>
                            <nav className="flex flex-col space-y-4 mt-6">
                                <NavLinks />
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h1 className="text-2xl font-bold dark:text-white">林毛毛语录</h1>
                </div>

                <nav className="hidden lg:flex items-center space-x-4">
                    <NavLinks />
                </nav>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="bg-green-600 dark:bg-black/50 dark:border-white/40 dark:hover:bg-green-900/50"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </header>
    )
}
