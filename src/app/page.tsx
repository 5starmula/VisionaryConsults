import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Mission from '../components/Mission';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import About from '../components/About';
import BookConsultation from '../components/BookConsultation';
import Books from '../components/Books';
import Templates from '../components/Templates';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <WhatWeDo />
      <Mission />
      <WhyWorkWithUs />
      <About />
      <BookConsultation />
      <Books />
      <Templates />
      <Footer />
    </main>
  );
}
