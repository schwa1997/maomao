"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogs } from '../data/data';
import { Blog } from '../types/type';

export default function BlogsPage() {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

  useEffect(() => {
    setBlogPosts(blogs.blogs);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">博客文章</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-2">作者: {blog.author}</p>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="text-purple-600 hover:text-purple-800">阅读更多 &rarr;</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
