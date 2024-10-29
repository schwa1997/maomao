'use client'

import { MediaItem } from "@/app/types/type";
import { useState } from "react";
import PinkButton from "../reusable/PinkButton";

interface MediaModalProps {
  media: MediaItem;
  onClose: () => void;
}

const renderMediaIcon = (category: string) => {
  switch (category) {
    case "电视剧":
      return (
        <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      );
    case "歌曲":
      return (
        <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      );
    default:
      return (
        <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
  }
};

export default function MediaCard({ media, onClose }: MediaModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      <div
        className="bg-white dark:bg-gray-600 overflow-hidden shadow rounded-lg cursor-pointer "
        onClick={handleClick}
      >
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{media.name}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{media.creator}</p>
          <div className="flex items-center mt-2">
            {renderMediaIcon(media.category)}
            <span className="text-gray-600">{media.category}</span>
          </div>
          <div className="mt-4">
            <img
              src={media.image}
              alt={media.name}
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
          <div className="mt-4">
            <PinkButton text="View Details" onClick={handleClick} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <MediaModal media={media} onClose={handleClose} />
      )}
    </>
  );
}

function MediaModal({ media, onClose }: MediaModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-4">{media.name}</h2>
        <div className="flex items-center mb-4">
          {renderMediaIcon(media.category)}
          <span className="text-gray-600">{media.category}</span>
        </div>
        <div className="mb-4">
          <img
            src={media.image}
            alt={`${media.name} image`}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-600">{media.description}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Comments</h3>
          {media.comments?.map((comment, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg mb-2">
              <p className="text-gray-600">{comment}</p>
            </div>
          ))}
          {(!media.comments || media.comments.length === 0) && (
            <p className="text-gray-500 italic">No comments yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
