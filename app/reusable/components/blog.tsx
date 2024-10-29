'use client'

import Link from 'next/link';
import { Blog } from '../../types/type';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white dark:bg-black">
      <article className="prose max-w-none">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">{blog.title}</h1>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 font-light">{blog.description}</p>
        <div className="prose-lg text-black dark:text-white prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-800 dark:prose-p:text-gray-200" 
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
      </article>
    </div>
  );
}

