'use client';

import React from 'react';

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <div className="w-24 h-1 bg-purple-300 mx-auto mb-8"></div>
          <p className="text-xl mb-8 leading-relaxed">
            To empower professionals and organizations with innovative HR strategies and creative business solutions that foster growth, wellness, and success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-4">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-purple-200">Pioneering fresh approaches to workplace challenges</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
              <p className="text-purple-200">Equipping individuals with tools for success</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-purple-200">Committed to delivering exceptional quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 