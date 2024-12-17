"use client";

import { Community } from "@/app/types/type";
import { useRouter } from "next/navigation";
import PinkButton from "../reusableComponents/PinkButton";
import Image from "next/image";
import Container from "../reusableComponents/containerBox";

interface CommunityModalProps {
  community: Community;
}

export default function CommunityCard({ community }: CommunityModalProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(community.url);
  };

  return (
    <>
      <Container key={community.id}>
        <div className="bg-white dark:bg-black overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium">{community.name}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {community.description}
            </p>
            <div className="mt-4">
              <Image
                src={community.image}
                alt={`${community.name} logo`}
                width={100}
                height={100}
              />
            </div>
            <div className="mt-4">
              <PinkButton text="Visit Community" onClick={handleClick} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
