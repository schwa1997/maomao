'use client'

import PinkButton from '@/app/reusable/reusable/PinkButton'
import { blogs } from '../../data/data'
import BlogCard from '../../reusable/components/blog'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation';

export default function BlogPost() {
  const params = useParams()
  const router = useRouter();
  const currentId = parseInt(params.slug as string)
  const blog = blogs.find(b => b.id === currentId)

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            博客文章未找到
          </h1>
          <Link
            href="/blogs"
            className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
          >
            返回博客列表
          </Link>
        </div>
      </div>
    )
  }

  const prevBlog = blogs.find(b => b.id === currentId - 1)
  const nextBlog = blogs.find(b => b.id === currentId + 1)

  const goToPrevious = () => {
    if (prevBlog) {
      router.push(`/blogs/${prevBlog.id}`);
    }
  };

  const goToNext = () => {
    if (nextBlog) {
      router.push(`/blogs/${nextBlog.id}`);
    }
  };









  return (
    <div className="container mx-auto px-4 py-8">
      <BlogCard blog={blog} />

      <nav className="flex justify-between items-center max-w-3xl mx-auto mt-8">
        {prevBlog ? (
          
   
          <PinkButton text="←上一篇" onClick={goToPrevious} size="small" />
        ) : (
          <div />
        )}

        {nextBlog ? (
          
          <PinkButton text="下一篇→" onClick={goToNext} size="small" />
         
        ) : (
          <div />
        )}
      </nav>
    </div>
  )
}
