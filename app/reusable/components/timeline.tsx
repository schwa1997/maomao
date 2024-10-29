'use client'

import { TimelineEvent } from '../../types/type';

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  // Add a stable key that doesn't change between server and client render
  const getStableKey = (index: number) => `timeline-event-${index}`;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
        
        {events.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={getStableKey(index)}
              className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}
            >
              {/* Content */}
              <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <h3 className="font-bold text-xl mb-2 text-black dark:text-white">{event.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{event.date}</p>
                <p className="mb-1 text-gray-800 dark:text-gray-200">{event.description}</p>
                <p className="font-semibold text-black dark:text-white">{event.work}</p>
              </div>

              {/* Circle marker */}
              <div className="w-4 h-4 bg-black dark:bg-white rounded-full flex items-center justify-center relative z-10 mx-auto">
                <div className="w-3 h-3 bg-white dark:bg-black rounded-full"></div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
