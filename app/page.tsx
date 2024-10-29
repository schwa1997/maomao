"use client"
import { useState, useEffect } from 'react';
import { highlights } from './data/data';
import HighlightCard from './reusable/components/highlightCard';
import Container from './reusable/reusable/container';
import Footer from './reusable/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col dark:bg-black bg-white">
      <main className="flex-grow container px-6 py-8 flex flex-wrap justify-center items-center gap-6">
        {highlights.map((item, index) => (
          <Container key={index}>
            <HighlightCard description={item.text} key={index} highlight={item.highlight} /></Container>
        ))}
      </main>
      <Footer />
    </div>
  );
}
