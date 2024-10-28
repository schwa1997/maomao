'use client'

import Link from 'next/link';
import { Blog } from '../../types/type';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.description}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}

export function BlogCardPreview({ blog }: BlogCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-sm text-gray-500 mb-2">作者: {blog.author}</p>
      <p className="text-gray-600 mb-4">{blog.description}</p>
      <Link href={`/blogs/${blog.id}`} className="text-green-600 hover:text-green-800">阅读更多 &rarr;</Link>
    </div>
  );
}

