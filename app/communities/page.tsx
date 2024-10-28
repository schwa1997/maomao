"use client"

import { useState, useEffect } from 'react';
import { resources } from '../data/data';
import InfoHeader from '../reusable/InfoHeader';

type MediaItem = {
  id: number;
  name: string;
  creator: string;
  category: string;
  description: string;
  image: string;
  quotes?: string[];
  comments?: string[];
}

export default function Communities() {
  const [communityLinks, setCommunityLinks] = useState(resources.communities);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Combine all media types into a single array
  const allMedia = [
    ...resources.media.books,
    ...resources.media.music,
    ...resources.media.shows
  ];

  useEffect(() => {
    // You can add any side effects here if needed
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <InfoHeader title="社区" description="社区是互联网上的一些组织，他们有共同的兴趣和目标，可以互相交流和分享信息。" />
      <div className="max-w-7xl mx-auto">
        <details className="mb-8" open>
          <summary className="text-3xl font-extrabold text-gray-900 mb-6 cursor-pointer hover:text-indigo-600">Communities</summary>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communityLinks.map((community) => (
              <div key={community.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{community.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{community.description}</p>
                  <div className="mt-4">
                    <img
                      src={community.image}
                      alt={`${community.name} logo`}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  <div className="mt-4">
                    <a
                      href={community.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Visit Community
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>

      <div className="max-w-7xl mx-auto">
        <details className="mb-8" open>
          <summary className="text-2xl font-extrabold text-gray-900 mb-6 cursor-pointer hover:text-indigo-600">Media Resources</summary>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allMedia.map((item) => (
              <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{item.name}</h3>
                  <div className="mt-2 flex items-center">
                    {item.category === "电视剧" && (
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                      </svg>
                    )}
                    {item.category === "歌曲" && (
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    )}
                    {item.category !== "电视剧" && item.category !== "歌曲" && (
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    <span className="text-sm text-gray-500">{item.category}</span>
                  </div>
                  <div className="mt-4">
                    <img
                      src={item.image}
                      alt={`${item.name} image`}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => setSelectedMedia(item)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </details>

        {/* Modal/Popup for media details */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-4">{selectedMedia.name}</h2>
              <div className="mb-4">
                <img
                  src={selectedMedia.image}
                  alt={`${selectedMedia.name} image`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600">{selectedMedia.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                {selectedMedia.comments?.map((comment, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg mb-2">
                    <p className="text-gray-600">{comment}</p>
                  </div>
                ))}
                {(!selectedMedia.comments || selectedMedia.comments.length === 0) && (
                  <p className="text-gray-500 italic">No comments yet</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
