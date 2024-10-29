"use client";

import { Tutorial } from "../../types/type";

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white dark:bg-black">
      <article className="prose max-w-none">
        {/* <h1 className="text-4xl font-bold text-black dark:text-white mb-6">{tutorial.title}</h1>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 font-light">{tutorial.description}</p>
        <div className="mt-8">
          <img src={tutorial.image} alt={tutorial.title} className="w-full rounded-lg" /> </div> */}
        <div
          className="prose-lg text-black dark:text-white prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-800 dark:prose-p:text-gray-200"
          dangerouslySetInnerHTML={{ __html: tutorial.content }}
        />

        <div className="mt-4 flex flex-wrap gap-2">
          {tutorial.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
