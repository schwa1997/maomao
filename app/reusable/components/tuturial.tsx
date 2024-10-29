'use client'

import Link from 'next/link';
import { Tutorial } from '../../types/type';

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white dark:bg-black">
      <article className="prose max-w-none">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">{tutorial.title}</h1>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 font-light">{tutorial.description}</p>
        <div className="prose-lg text-black dark:text-white prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-800 dark:prose-p:text-gray-200" 
          dangerouslySetInnerHTML={{ __html: tutorial.content }} 
        />
        <div className="mt-8">
          <img src={tutorial.image} alt={tutorial.title} className="w-full rounded-lg" />
        </div>
        <div className="mt-8">
          <video className="w-full rounded-lg" controls>
            {/* <source src={tutorial.video} type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tutorial.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export function TutorialCardPreview({ tutorial }: TutorialCardProps) {
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
