'use client'

import { blogs } from '../../data/data'
import BlogCard from '../../reusable/components/blog'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function BlogPost() {
  const params = useParams()
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

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogCard blog={blog} />

      <nav className="flex justify-between items-center max-w-3xl mx-auto mt-8">
        {prevBlog ? (
          <Link
            href={`/blogs/${prevBlog.id}`}
            className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
          >
            <span className="mr-2">←</span>
            <span className="hidden sm:inline">{prevBlog.title}</span>
            <span className="sm:hidden">上一篇</span>
          </Link>
        ) : (
          <div />
        )}

        {nextBlog ? (
          <Link
            href={`/blogs/${nextBlog.id}`}
            className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 ml-auto"
          >
            <span className="hidden sm:inline">{nextBlog.title}</span>
            <span className="sm:hidden">下一篇</span>
            <span className="ml-2">→</span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  )
}
