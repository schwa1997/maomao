"use client";

import { useState } from "react";
import PinkButton from "./PinkButton";
import Container from "./containerBox";

interface InfoHeaderProps {
  description: string;
}

export default function InfoHeader({ description }: InfoHeaderProps) {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-end mb-2 px-4">
          {!showInfo && (
            <PinkButton
              text="info"
              size="small"
              onClick={() => setShowInfo(true)}
            />
          )}
        </div>
        {showInfo && (
          <Container>
            <div className="flex flex-col items-center justify-center h-full relative">
              <button
                className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setShowInfo(false)}
              >
                ✕
              </button>
              <p className="text-center m-2">{description}</p>
            </div>
          </Container>
        )}
      </div>
    </>
  );
}
