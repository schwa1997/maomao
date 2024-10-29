'use client'

import Link from "next/link";
import NavLink from "../reusable/nav";

interface HighlightCardProps {
    title?: string;
    description: string;
    highlight: string[];
}

export default function HighlightCard({
    description,
    highlight
}: HighlightCardProps) {
    const highlightText = (text: string) => {
        if (!highlight || highlight.length === 0) return text;
        
        let highlightedText = text;
        highlight.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="border-b-2 border-pink">$1</span>');
        });
        return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    return (
        <div className="relative justify-center overflow-hidden ">
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <div className="absolute -bottom-1 -right-1 w-full h-full bg-black/60 dark:bg-white/50 rounded-lg -z-10 hover:bg-pink/50 dark:hover:bg-pink/50"></div>
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-pink transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-darkPink">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-8 h-8"
                        >
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                    </span>
                    <div className="space-y-6 pt-5 text-2xl leading-10 text-black transition-all duration-300 group-hover:text-black/90 font-bold">
                        <p>{highlightText(description)}</p>
                    </div>
                    <div className="pt-5 text-sm font-semibold leading-7 text-black">
                        <Link href="/maomao">Read more &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
