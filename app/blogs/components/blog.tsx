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

export function BlogCardPreview({ blog }: BlogCardProps) {
  return (
    <div className="relative bg-white dark:bg-black rounded-lg p-6 hover:shadow-[4px_4px_10px_rgba(0,0,0,0.1)] dark:hover:shadow-[4px_4px_10px_rgba(255,255,255,0.1)] transition duration-300 border border-gray-200 dark:border-gray-800">
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-100 dark:bg-gray-900 rounded-lg -z-10"></div>
      <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-50 dark:bg-gray-800 rounded-lg -z-20"></div>
      <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">{blog.title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">作者: {blog.author}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.description}</p>
      <Link href={`/blogs/${blog.id}`} className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">阅读更多 &rarr;</Link>
    </div>
  );
}
