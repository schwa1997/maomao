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
        <div className="bg-white dark:bg-black p-6 rounded-lg mb-8 relative border border-gray-200 dark:border-gray-800 shadow-[4px_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_10px_rgba(255,255,255,0.1)]">
          <button 
            onClick={() => setShowInfo(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-3">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            {description}
          </p>
        </div>
      ) : (
        <button
          onClick={() => setShowInfo(true)}
          className="mb-8 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      )}
    </>
  );
}
