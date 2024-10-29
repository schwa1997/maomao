"use client";

import { useState } from "react";
import { resources } from "../data/data";
import SectionContainer from "../reusable/reusable/sectionContainer";
import MediaCard from "../reusable/components/mediaCard";
import CommunityCard from "../reusable/components/communityCard";

export default function Communities() {
  const [communityLinks] = useState(resources.communities);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <SectionContainer title="女权社群">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communityLinks.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        </SectionContainer>

        <SectionContainer title="媒体资源">
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
