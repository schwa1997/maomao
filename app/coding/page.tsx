'use client'

import { useState } from 'react';
import { tuturials } from '../data/data';
import { Tutorial } from '../types/type';
import InfoHeader from '../reusable/InfoHeader';
import TutorialCardPreview from '../reusable/components/tuturialPreview';


export default function CodingTutorials() {
  const [searchTerm, setSearchTerm] = useState('');


  const filteredTutorials = tuturials.filter((tutorial: Tutorial) =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutorial.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      
      <InfoHeader description="工具很重要 要学习如何去获取更多金钱和社会资源 反正就是搞钱" />
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
          <TutorialCardPreview key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
}
