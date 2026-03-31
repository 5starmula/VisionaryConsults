'use client';

import React, { useEffect, useRef } from 'react';

const reviews = [
  {
    name: 'Umoki',
    role: 'Books Client - Baltimore',
    quote:
      'I was looking for ideas on how to strategically position myself for my next career move.',
    accent: 'border-[#A1887F] text-[#A1887F] bg-[#F8E1DA]',
  },
  {
    name: 'Latisha',
    role: 'Books and Candles Client - Fort Washington, MD',
    quote:
      'How to write my first book and what it takes.',
    accent: 'border-[#708238] text-[#708238] bg-[#E8F0D8]',
  },
  {
    name: 'Lisa',
    role: 'Books Client - Oakton, VA',
    quote:
      'I was struggling with understanding the job market and how to position myself in this climate.',
    accent: 'border-[#D97B6C] text-[#D97B6C] bg-[#F8E1DA]',
  },
  {
    name: 'Lisa',
    role: 'Business Consulting Client',
    quote:
      'I needed information on marketing my business and how to structure my next steps.',
    accent: 'border-[#A1887F] text-[#A1887F] bg-[#F8E1DA]',
  },
  {
    name: 'AST',
    role: 'Books and Candles Client - Clinton',
    quote:
      'Good business. Professional guidance and clear direction.',
    accent: 'border-[#708238] text-[#708238] bg-[#E8F0D8]',
  },
  {
    name: 'Ron',
    role: 'HR Consultation Client - Washington, DC',
    quote:
      'Leaving federal service unexpectedly after 25 years was difficult. This support helped me plan my transition with confidence.',
    accent: 'border-[#D97B6C] text-[#D97B6C] bg-[#F8E1DA]',
  },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollStepRef = useRef(0);
  const pausedRef = useRef(false);
  const loopedReviews = [...reviews, ...reviews];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (pausedRef.current) return;

      const maxLoopWidth = container.scrollWidth / 2;
      const nextPosition = container.scrollLeft + 1;

      if (nextPosition >= maxLoopWidth) {
        container.scrollLeft = 0;
        scrollStepRef.current = 0;
      } else {
        container.scrollLeft = nextPosition;
        scrollStepRef.current = nextPosition;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-2">Client Reviews</h2>
          <div className="w-24 h-1 bg-[#A1887F] mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
          >
          {loopedReviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="relative bg-white rounded-2xl border-2 border-[#E9D5CD] shadow-md p-6 min-h-[240px] flex-shrink-0 snap-start w-[85%] sm:w-[70%] md:w-[48%] lg:w-[32%]"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 ${review.accent}`}>
                <span className="text-2xl leading-none">"</span>
              </div>

              <p className="text-[#2E2E2E] text-sm leading-relaxed mb-4">{review.quote}</p>

              <div className="pt-4 border-t border-[#F1E3DE]">
                <h3 className="font-semibold text-[#2E2E2E]">{review.name}</h3>
                <p className="text-xs text-[#6B7280]">{review.role}</p>
              </div>

              <div
                className={`absolute -bottom-5 right-6 w-12 h-12 rounded-full border-4 bg-white flex items-center justify-center ${review.accent}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A7 7 0 1119 12.999M15 19l4 1-1-4"
                  />
                </svg>
              </div>
            </article>
          ))}
          </div>
          <p className="text-center text-sm text-[#6B7280]">Swipe or scroll to see more reviews.</p>
        </div>
      </div>
    </section>
  );
}
