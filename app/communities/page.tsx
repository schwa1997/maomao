'use client'

import { useState } from 'react';
import { resources } from '../data/data';
import InfoHeader from '../reusable/InfoHeader';
import SectionContainer from '../reusable/components/sectionContainer';
import MediaCard from '../reusable/components/mediaCard';

export default function Communities() {
  const [communityLinks] = useState(resources.communities);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <InfoHeader
        description="社区是互联网上的一些组织，他们有共同的兴趣和目标，可以互相交流和分享信息。"
      />
      <div className="flex flex-col gap-6">
        <SectionContainer title="Communities">
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
        </SectionContainer>

        <SectionContainer title="Media Resources">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.media.map((item) => (
              <MediaCard key={item.id} media={item} />
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
