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
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-200"></div>
        
        {events.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={getStableKey(index)}
              className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}
            >
              {/* Content */}
              <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <p className="text-sm text-green-600 mb-2">{event.date}</p>
                <p className="mb-1">{event.description}</p>
                <p className="font-semibold">{event.work}</p>
              </div>

              {/* Circle marker */}
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center relative z-10 mx-auto">
                <div className="w-6 h-6 bg-white rounded-full"></div>
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
