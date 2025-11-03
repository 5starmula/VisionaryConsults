'use client';

import React from 'react';
import Image from 'next/image';

export default function BookConsultation() {
  return (
    <section id="book-consultation" className="py-16 bg-[#708238]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Book a Free Consultation
          </h2>
          
          <p className="text-lg text-center text-[#F8E1DA] mb-12">
            Complete the form and we will get back to you within 24-hours to book a consultation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Phone Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-md">
                <Image 
                  src="/images/phone.jpg" 
                  alt="Book a consultation" 
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Right side - Content and Button */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <p className="text-white mb-6 text-lg">
                  Our support is customized, on-demand and scales with your needs. You only pay when you use us.
                </p>
                
                <p className="text-white text-lg">
                  We take the stress out of HR. We are more than just strategic advisors – we do the work, so you can focus on building your business.
                </p>
              </div>
              
              <div className="bg-[#FAF9F6] p-6 rounded-lg border-l-4 border-[#A1887F]">
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-[#2E2E2E]">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#A1887F] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Personalized HR strategies tailored to your business
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#A1887F] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Flexible, on-demand support
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#A1887F] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Implementation, not just consultation
                  </li>
                </ul>
              </div>
              
              <div className="text-center md:text-left">
                <a 
                  href="https://pci.jotform.com/form/253065665915161" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 