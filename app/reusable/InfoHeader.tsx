'use client'

import { useState } from 'react';

interface InfoHeaderProps {
  title: string;
  description: string;
}

export default function InfoHeader({ title, description }: InfoHeaderProps) {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <>
      {showInfo ? (
        <div className="bg-green-100 p-6 rounded-lg mb-8 relative dark:bg-black/50 dark:border dark:border-white/40">
          <button 
            onClick={() => setShowInfo(false)}
            className="absolute top-2 right-2 text-green-800 hover:text-green-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-green-800 mb-4">{title}</h2>
          <p className="text-green-900 text-lg">
            {description}
          </p>
        </div>
      ) : (
        <button
          onClick={() => setShowInfo(true)}
          className="mb-8 text-green-800 hover:text-green-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      )}
    </>
  );
}
