'use client'

import Link from 'next/link'

interface NavLinkProps {
    href: string;
    text: string;
}

export default function NavLink({ href, text }: NavLinkProps) {
    return (
        <Link href={href} className="relative group">
           <span className="relative inline-block h-full w-full bg-white dark:bg-black px-3 py-1 text-base font-bold text-black dark:text-white transition duration-100 hover:text-pink dark:hover:text-pink hover:border-pink dark:hover:border-pink border border-transparent">
                {text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
            </span>
        </Link>
    )
}
