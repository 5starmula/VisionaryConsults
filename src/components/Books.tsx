'use client';

import React from 'react';

export default function Books() {
  const books = [
    {
      title: "The HR Professional's Guide",
      image: "book-placeholder.jpg",
      blurb: "A comprehensive guide for HR professionals looking to advance their careers and make a meaningful impact within their organizations."
    },
    {
      title: "Strategic Leadership in Modern Workplaces",
      image: "book-placeholder.jpg",
      blurb: "Discover actionable leadership strategies that help create inclusive, productive, and innovative workplace environments."
    },
    {
      title: "Personal Growth in Professional Settings",
      image: "book-placeholder.jpg",
      blurb: "Learn how to balance personal development with professional growth, creating a fulfilling career that aligns with your values."
    }
  ];

  return (
    <section id="books" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Books</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of insightful books designed to help you navigate your professional journey with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div className="h-56 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Book Cover Placeholder</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3 group-hover:text-purple-600 transition duration-300">{book.title}</h3>
                <p className="text-gray-600 mb-6">{book.blurb}</p>
                <a 
                  href="#" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 