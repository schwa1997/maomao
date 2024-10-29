'use client'

import { Cross2Icon, InfoCircledIcon } from "@radix-ui/react-icons";

interface ButtonProps {
    text: string;
    useEyeIcon?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    size?: 'normal' | 'small' | 'large' | 'xlarge';
}

export default function PinkButton({ text, useEyeIcon, onClick, size }: ButtonProps) {
    return (
        useEyeIcon ? <> <button className={`flex flex-wrap justify-center gap-6 ${size === 'small' ? 'scale-90' : size === 'large' ? 'scale-110' : size === 'xlarge' ? 'scale-125' : ''
            }`} onClick={onClick}>
            {useEyeIcon ? (
                <InfoCircledIcon className="w-6 h-6" />
            ) : (
                <Cross2Icon className="w-6 h-6" />
            )}


        </button></> :
            <button className={`flex flex-wrap justify-center gap-6 ${size === 'small' ? 'scale-90' : size === 'large' ? 'scale-110' : size === 'xlarge' ? 'scale-125' : ''
                }`} onClick={onClick}>
                <a className="relative" href="#">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-white hover:bg-pink dark:hover:bg-pink"></span>
                    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-white bg-white dark:bg-black px-3 py-1 text-base font-bold text-black dark:text-white transition duration-100 hover:bg-pink dark:hover:bg-darkPink hover:text-gray-900 dark:hover:text-gray-100">{text}</span>
                </a>
            </button>
    );
}
