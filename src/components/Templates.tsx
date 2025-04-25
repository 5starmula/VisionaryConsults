'use client';

import React from 'react';
import Image from 'next/image';

export default function Templates() {
  const templates = [
    {
      title: "Hiring & Recruitment Toolkit",
      image: "Hiring.png",
      description: "A complete set of forms and templates to streamline your hiring process from job descriptions to offer letters. Perfect for building a consistent and compliant recruitment workflow.",
      url: "https://www.etsy.com/listing/4296049993/hiring-recruitment-toolkit?ref=shop_home_active_1&logging_key=af170f3358efdfd8bc711bcb8943ce7dc8841825%3A4296049993"
    },
    {
      title: "Employment Management Essentials",
      image: "MANAGEMENT.png",
      description: "Everything you need to manage employees with confidence. Includes performance evaluations, disciplinary forms, attendance trackers, and more to support day-to-day HR operations.",
      url: "https://www.etsy.com/listing/4296033747/hr-employee-management?ref=shop_home_active_3&logging_key=d8f13418beb1a8b4acfc67e75d2cc66e0b881fef%3A4296033747"
    },
    {
      title: "Compliance & Policies Starter Pack",
      image: "Compliance.png",
      description: "Protect your business with HR documents aligned with federal labor standards. Includes at-will acknowledgments, confidentiality agreements, code of conduct templates, and basic policy.",
      url: "https://www.etsy.com/listing/4296003599/hrsmall-buisness-compliance-policy?ref=shop_home_active_5&logging_key=190fa202f3299eadce221908cdc0028c7416dafe%3A4296003599"
    },
    {
      title: "Onboarding & Offboarding Kit",
      image: "Onboarding.png",
      description: "Make a lasting first and final impression. Includes checklists, welcome letters, orientation forms, exit interviews, and termination templates for smooth transitions.",
      url: "#"
    }
  ];

  return (
    <section id="templates" className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">Templates</h2>
          <div className="w-24 h-1 bg-[#A1887F] mx-auto mb-6"></div>
          <p className="text-[#2E2E2E] max-w-2xl mx-auto">
            Practical templates and resources to help you optimize your professional life and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-[#F8E1DA]">
              <div className="h-96 bg-[#F8E1DA] flex items-center justify-center relative">
                {template.image === "template-placeholder.jpg" ? (
                  <p className="text-[#2E2E2E]">Template Image Placeholder</p>
                ) : (
                  <Image
                    src={`/images/${template.image}`}
                    alt={template.title}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#708238] mb-2 group-hover:text-[#A1887F] transition duration-300">{template.title}</h3>
                <p className="text-[#2E2E2E] text-sm mb-4 line-clamp-3">{template.description}</p>
                <div className="mt-auto">
                  <a 
                    href={template.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
                  >
                    Shop on Etsy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Templates button */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.etsy.com/shop/VisionaryConsultsLLC?ref=shop-header-name&listing_id=4296049993&from_page=listing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#708238] hover:bg-[#5F6E30] text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300"
          >
            View All Templates
          </a>
        </div>
      </div>
    </section>
  );
} 