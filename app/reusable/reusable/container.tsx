'use client'

interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="relative group">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-white group-hover:bg-pink dark:group-hover:bg-darkPink"></span>
                <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-white bg-white dark:bg-black px-3 py-1 text-base font-bold text-black dark:text-white transition duration-100">
                    {children}
                </span>
            </div>
        </div>
    );
}
