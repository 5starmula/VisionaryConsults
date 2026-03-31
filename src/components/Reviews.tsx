'use client';

import React from 'react';

const reviews = [
  {
    name: 'Danielle M.',
    role: 'Career Coaching Client',
    quote:
      'Working with Char helped me reposition my resume and interview strategy. I landed a role that aligned with both my goals and values.',
    accent: 'border-[#A1887F] text-[#A1887F] bg-[#F8E1DA]',
  },
  {
    name: 'Marcus T.',
    role: 'HR Consulting Client',
    quote:
      'Visionary Consults brought structure and clarity to our HR processes. The support was practical, thoughtful, and results-driven.',
    accent: 'border-[#708238] text-[#708238] bg-[#E8F0D8]',
  },
  {
    name: 'Alyssa R.',
    role: 'Author Services Client',
    quote:
      'Char made the publishing process feel manageable and empowering. Her creative direction gave my project confidence and polish.',
    accent: 'border-[#D97B6C] text-[#D97B6C] bg-[#F8E1DA]',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-2">Client Reviews</h2>
          <div className="w-24 h-1 bg-[#A1887F] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="relative bg-white rounded-2xl border-2 border-[#E9D5CD] shadow-md p-6 min-h-[240px]"
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
      </div>
    </section>
  );
}
