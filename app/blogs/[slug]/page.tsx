"use client"

import React, { useState, useEffect } from 'react';
import { blogs } from '../../data/data';
import { Blog } from '../../types/type';
import { useParams } from 'next/navigation';

function BlogPostContent({ blog }: { blog: Blog }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.description}</p>
      <div className="prose max-w-none">
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default function BlogPost() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const params = useParams();

  useEffect(() => {
    const slug = params.slug as string;
    const blogPost = blogs.blogs.find(b => b.id === parseInt(slug));
    if (blogPost) {
      setBlog(blogPost);
    }
  }, [params]);

  if (!blog) {
    return <div className="container mx-auto px-4 py-8">Blog post not found</div>;
  }

  return <BlogPostContent blog={blog} />;
}
