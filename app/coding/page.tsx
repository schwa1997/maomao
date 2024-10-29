'use client'

import { useState } from 'react';
import { tuturials } from '../data/data';
import { Tutorial } from '../types/type';
import InfoHeader from '../reusable/reusable/InfoHeader';
import TutorialCardPreview from '../reusable/components/tuturialPreview';


export default function CodingTutorials() {
  const [searchTerm, setSearchTerm] = useState('');


  const filteredTutorials = tuturials.filter((tutorial: Tutorial) =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutorial.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <InfoHeader description="工具很重要!强女不仅是要内心强大，更重要的是去掌握更多的钱、权力和资源。搞钱也有很多方法论。但是在方法论实践之前也很有必要看一下如何去理解搞钱这件事的逻辑。" />
      <div className="mb-4 mt-4">
        <input
          type="text"
          placeholder="Search tutorials..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredTutorials.map((tutorial) => (
          <TutorialCardPreview key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
}
