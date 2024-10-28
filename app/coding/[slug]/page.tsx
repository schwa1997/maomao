'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { tuturials } from '../../data/data';
import { Tutorial } from '../../types/type';
import ReactMarkdown from 'react-markdown';


export default function TutorialPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [prevTutorial, setPrevTutorial] = useState<Tutorial | null>(null);
  const [nextTutorial, setNextTutorial] = useState<Tutorial | null>(null);

  useEffect(() => {
    const tutorialId = parseInt(slug as string, 10);
    const currentIndex = tuturials.findIndex(t => t.id === tutorialId);

    if (currentIndex !== -1) {
      setTutorial(tuturials[currentIndex]);
      setPrevTutorial(currentIndex > 0 ? tuturials[currentIndex - 1] : null);
      setNextTutorial(currentIndex < tuturials.length - 1 ? tuturials[currentIndex + 1] : null);
    } else {
      setTutorial(null);
      setPrevTutorial(null);
      setNextTutorial(null);
    }
  }, [slug]);

  if (!tutorial) {
    return <div className="container mx-auto px-4 py-8">Tutorial not found</div>;
  }

  const goToPrevious = () => {
    if (prevTutorial) {
      router.push(`/coding/${prevTutorial.id}`);
    }
  };

  const goToNext = () => {
    if (nextTutorial) {
      router.push(`/coding/${nextTutorial.id}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{tutorial.title}</h1>
      <div className="flex flex-wrap mb-4">
        {tutorial.tags.map((tag, index) => (
          <span key={index} className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <div className="prose max-w-none mb-6">
        <ReactMarkdown>{tutorial.content}</ReactMarkdown>
      </div>
      {tutorial.image && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Tutorial Image</h2>
          <img
            src={tutorial.image}
            alt={`Image for ${tutorial.title}`}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      {tutorial.video && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Tutorial Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={tutorial.video}
              title={`Video for ${tutorial.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      )}
      <div className="flex justify-between">
        <button
          onClick={goToPrevious}
          disabled={!prevTutorial}
          className={`px-4 py-2 rounded ${prevTutorial ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          Previous
        </button>
        <button
          onClick={goToNext}
          disabled={!nextTutorial}
          className={`px-4 py-2 rounded ${nextTutorial ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
