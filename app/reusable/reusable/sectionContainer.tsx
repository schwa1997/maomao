'use client'

import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Container from './Container';


interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function SectionContainer({ title, children, defaultOpen = true }: SectionContainerProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
    <section 
      className="relative bg-white dark:bg-black p-8 rounded-lg shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}  
    >
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-100 dark:bg-gray-900 rounded-lg -z-10"></div>
      <div className={`flex items-center transition-all duration-300 ${isOpen ? 'justify-between' : 'justify-center'} `}>
        <h2 className={`text-2xl font-bold text-black dark:text-white inline-block border-b-2 ${isHovered ? 'border-pink dark:border-darkPink' : 'border-gray-200 dark:border-gray-700'} pb-2 transition-all duration-300 ${isOpen ? '' : 'transform translate-x-0'}`}>
          {title}
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-100 absolute right-8'}`}
          aria-label={isOpen ? "Close section" : "Open section"}
        >
          <ChevronDownIcon className={`w-6 h-6 transition-transform duration-200 ${isOpen ? '' : '-rotate-180'}`} />
        </button>
      </div>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden  ${isOpen ? 'mt-8 opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0'}`}>
        {children}
      </div>
    </section>
    </Container>
  );
}
