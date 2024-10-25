'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { tuturials } from '../data/data';
import { Tutorial } from '../types/type';


export default function CodingTutorials() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const filteredTutorials = tuturials.filter((tutorial: Tutorial) =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutorial.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleTutorialClick = (tutorialId: number) => {
    router.push(`/coding/${tutorialId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Coding Tutorials</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tutorials..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTutorials.map((tutorial) => (
          <div key={tutorial.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{tutorial.title}</h2>
            <p className="text-gray-600 mb-4">{tutorial.description}</p>
            <div className="flex flex-wrap mb-4">
              {tutorial.tags.map((tag, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => handleTutorialClick(tutorial.id)}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              View Tutorial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
