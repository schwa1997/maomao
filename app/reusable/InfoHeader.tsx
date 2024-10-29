'use client'

import { useState } from 'react';
import Container from './reusable/container';
import PinkButton from './reusable/PinkButton';

interface InfoHeaderProps {
  description: string;
}

export default function InfoHeader({ description }: InfoHeaderProps) {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <>
      <div className="relative">
        {showInfo &&
          <Container>
            <div className="flex items-center justify-center h-full">
              <p className="text-center">{description}</p>
            </div>
          </Container>
        }
        <div className="absolute top-0 right-4">
          <PinkButton text={showInfo ? '隐藏说明' : '使用说明'} useEyeIcon={true} size="small" onClick={() => setShowInfo(!showInfo)} />
        </div>
      </div>
    </>
  );
}
