'use client';

import React from 'react';
import Image from 'next/image';

export default function Books() {
  const books = [
    {
      title: "Navigating the Workforce While Black in America",
      image: "Workforce.jpg",
      blurb: "Are you a Black professional navigating workplace challenges, discrimination, or career setbacks? The corporate world can be a difficult space for Black professionals, filled with unspoken rules, systemic biases, and career roadblocks. This book provides strategies, legal insights, and workplace survival tactics to help you protect your career, advocate for yourself, and achieve success in corporate America and beyond.",
      buyLink: "https://www.amazon.com/Navigating-Workforce-While-Black-America/dp/B0DX7DPV1J?ref_=ast_author_dp_rw&dib=eyJ2IjoiMSJ9.AS-hc7y_jdrQpeAxX1NHO_TTDrQz9HPNRwkVFgUugdSaX7uisVVqxu8xF7gs4gjq0EGp9v_4rd6r9luqxPo9G6US8wrDwOyBskmXaEKOKw8.RQeUoz6d3DRafYOXc1jPKKPP8oW05nI"
    },
    {
      title: "Launch and Thrive: Step-By-Step Side Hustle Guide",
      image: "Thrive.jpg",
      blurb: "Unlock Your Entrepreneurial Potential with This Comprehensive Guide! Are you ready to take control of your financial future and build a thriving online business? The Ultimate Online Business Playbook is your step-by-step guide to success, offering you the tools and knowledge you need to launch and grow multiple streams of income. Whether you're just starting out or looking to expand your online empire, this book provides the actionable insights and practical steps you need to succeed.",
      buyLink: "https://www.amazon.com/Launch-Thrive-Step-Step-Hustle/dp/B0DDKSLTXG?ref_=ast_author_dp_rw&dib=eyJ2IjoiMSJ9.AS-hc7y_jdrQpeAxX1NHO_TTDrQz9HPNRwkVFgUugdSaX7uisVVqxu8xF7gs4gjq0EGp9v_4rd6r9luqxPo9G6US8wrDwOyBskmXaEKOKw8.RQeUoz6d3DRafYOXc1jPKKPP8oW05nIaQn6C2q7OW"
    },
    {
      title: "The Curious Adventures of Kiki in the Kitchen",
      image: "Kiki.jpg",
      blurb: "Welcome to The Curious Adventures of Kiki in the Kitchen Kitten, where the clinks, clatters, and chimes of kitchen life come alive! Join Kiki, a playful kitten, as she explores the magical world of pots, pans, and spoons, turning ordinary kitchen items into a symphony of sounds and fun. Through rhythmic verses that dance off the page, young readers will follow Kiki as she discovers the whisk's whir, the oven's gentle hum, and the tap-tap of tiny paws on the countertop. Each verse not only introduces children to common kitchen tools, but also encourages safe and imaginative play.",
      buyLink: "https://www.amazon.com/Curious-Adventures-Kiki-Kitchen/dp/B0DH2CV1HZ?ref_=ast_author_dp_rw&dib=eyJ2IjoiMSJ9.AS-hc7y_jdrQpeAxX1NHO_TTDrQz9HPNRwkVFgUugdSaX7uisVVqxu8xF7gs4gjq0EGp9v_4rd6r9luqxPo9G6US8wrDwOyBskmXaEKOKw8.RQeUoz6d3DRafYOXc1jPKKPP8oW05nIaQn6C2q7OWPI&dib_tag=AUTHOR"
    },
    {
      title: "Make sh*t happen",
      image: "Make.jpg",
      blurb: "This journal is designed to help you incorporate 30 powerful habits into your daily routine—habits that will not only enhance your physical and mental well-being but also pave the way for a life filled with abundance and prosperity. These habits are carefully curated to provide you with the tools and strategies needed to build a strong foundation for long-term success and happiness.",
      buyLink: "https://www.amazon.com/Make-that-sh-t-happen/dp/B0DDHD38ZV?ref_=ast_author_dp_rw&dib=eyJ2IjoiMSJ9.AS-hc7y_jdrQpeAxX1NHO_TTDrQz9HPNRwkVFgUugdSaX7uisVVqxu8xF7gs4gjq0EGp9v_4rd6r9luqxPo9G6US8wrDwOyBskmXaEKOKw8.RQeUoz6d3DRafYOXc1jPKKPP8oW05nIaQn6C2q7OWPI&dib_tag=AUTHOR"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group flex flex-col h-full">
              <div className="h-96 bg-gray-100 flex items-center justify-center relative">
                {book.image === "book-placeholder.jpg" ? (
                  <p className="text-gray-500">Book Cover Placeholder</p>
                ) : (
                  <Image 
                    src={`/images/${book.image}`} 
                    alt={book.title}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-purple-800 mb-2 group-hover:text-purple-600 transition duration-300">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {book.blurb}
                </p>
                <div className="mt-auto">
                  <a 
                    href={book.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.amazon.com/stores/Char-Vernon/author/B0DWJHMLH5?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true&ccs_id=6deca303-28b8-4091-b688-6e5c1177fce9"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block bg-white text-purple-700 border-2 border-purple-600 hover:bg-purple-50 font-semibold py-3 px-10 rounded-lg shadow-md transition duration-300"
          >
            See All Books
          </a>
        </div>
      </div>
    </section>
  );
} 