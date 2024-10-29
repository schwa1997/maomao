'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { tuturials } from '../../data/data';
import { Tutorial } from '../../types/type';

import { TutorialCard } from '../../reusable/components/tuturial';
import PinkButton from '@/app/reusable/reusable/PinkButton';
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
      <TutorialCard tutorial={tutorial} key={tutorial.id} />
      <div className="flex justify-between">
        <PinkButton text="Previous" onClick={goToPrevious} size="small" />
        <PinkButton text="Next" onClick={goToNext} size="small" />
      </div>
    </div>
  );
}
