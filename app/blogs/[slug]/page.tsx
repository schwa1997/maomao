"use client"

import React, { useState, useEffect } from 'react';
import { blogs } from '../../data/data';
import { Blog } from '../../types/type';
import { useParams } from 'next/navigation';
import BlogCard from '../components/component';



export default function BlogPost() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const params = useParams();

  useEffect(() => {
    const slug = params.slug as string;
    const blogPost = blogs.find(b => b.id === parseInt(slug));
    if (blogPost) {
      setBlog(blogPost);
    }
  }, [params]);

  if (!blog) {
    return <div className="container mx-auto px-4 py-8">Blog post not found</div>;
  }
  return <BlogCard blog={blog} key={blog.id} />;
}
