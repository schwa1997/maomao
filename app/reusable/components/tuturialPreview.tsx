'use client'

import Link from 'next/link';
import { Tutorial } from '../../types/type';

interface TutorialCardProps {
  tutorial: Tutorial;
}


export default function TutorialCardPreview({ tutorial }: TutorialCardProps) {
  return (
    <div className="relative bg-white dark:bg-black rounded-lg p-6 hover:shadow-[4px_4px_10px_rgba(0,0,0,0.1)] dark:hover:shadow-[4px_4px_10px_rgba(255,255,255,0.1)] transition duration-300 border border-gray-200 dark:border-gray-800">
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-100 dark:bg-gray-900 rounded-lg -z-10"></div>
      <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-50 dark:bg-gray-800 rounded-lg -z-20"></div>
      <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">{tutorial.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{tutorial.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tutorial.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/coding/${tutorial.id}`} className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">阅读更多 &rarr;</Link>
    </div>
  );
}
