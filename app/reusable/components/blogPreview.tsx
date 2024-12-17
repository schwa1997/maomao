"use client";

import Link from "next/link";
import { Blog } from "../../types/type";
import Container from "../reusableComponents/containerBox";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCardPreview({ blog }: BlogCardProps) {
  return (
    <Container>
      <div className="flex flex-col gap-2 px-10 py-4">
        <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
          {blog.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          作者: {blog.author}
        </p>
        <div>
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {blog.description}
        </p>
        <Link
          href={`/blogs/${blog.id}`}
          className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          阅读更多 &rarr;
        </Link>
      </div>
    </Container>
  );
}
