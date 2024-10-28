"use client"
import { useState, useEffect } from 'react';
import { highlights } from './data/data';

export default function Home() {
  const [currentTime, setCurrentTime] = useState<number | null>(null);

  useEffect(() => {
    setCurrentTime(Date.now());
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 50); // Update more frequently for smoother animation

    return () => clearInterval(interval);
  }, []);

  const highlightText = (text: string) => {
    if (currentTime === null) return text; // Return plain text if currentTime is not set yet

    return text.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block transition-all duration-300 ease-in-out"
        style={{
          transform: `scale(${1 + Math.sin(currentTime / 200 + index) * 0.2})`,
          color: `hsl(${(index * 10) % 360}, 70%, 50%)`,
          textShadow: `0 0 5px hsl(${(index * 10 + 180) % 360}, 70%, 50%)`,
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-black bg-white dark:text-black text-white">
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-wrap justify-center items-center">
        {highlights.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              {currentTime === null ? item.text : highlightText(item.text)}
            </h1>
          </div>
        ))}
      </main>
    </div>
  );
}
