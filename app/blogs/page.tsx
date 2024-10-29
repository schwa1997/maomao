"use client"

import { useState, useEffect } from 'react';
import { blogs } from '../data/data';
import { Blog } from '../types/type';
import BlogCardPreview from '../reusable/components/blogPreview';

export default function BlogsPage() {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

  useEffect(() => {
    setBlogPosts(blogs);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">博客文章</h1>
      <div className="flex gap-6 flex-wrap justify-center">
        {blogPosts.map((blog) => (
          <BlogCardPreview blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}
