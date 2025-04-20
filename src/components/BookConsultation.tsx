'use client';

import React, { useState } from 'react';

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phone: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your submission! We will contact you within 24 hours.');
  };

  return (
    <section id="book-consultation" className="py-16 bg-[#F8E1DA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-6 text-center">
            Book a Free Consultation
          </h2>
          
          <p className="text-lg text-center text-[#2E2E2E] mb-8">
            Complete the form and we will get back to you within 24-hours to book a consultation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-[#2E2E2E] font-medium mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-[#A1887F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238] text-black"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-[#2E2E2E] font-medium mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-[#A1887F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238] text-black"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="companyName" className="block text-[#2E2E2E] font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#A1887F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238] text-black"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-[#2E2E2E] font-medium mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#A1887F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238] text-black"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-[#2E2E2E] font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#A1887F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238] text-black"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-[#2E2E2E] font-medium mb-2">
                      Tell us a bit about your business and your HR challenges*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-[#A1887F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238] text-black"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#A1887F] text-white font-medium py-3 rounded-md hover:bg-[#8D776F] transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <p className="text-[#2E2E2E] mb-6 text-lg">
                  Our support is customized, on-demand and scales with your needs. You only pay when you use us.
                </p>
                
                <p className="text-[#2E2E2E] text-lg">
                  We take the stress out of HR. We are more than just strategic advisors – we do the work, so you can focus on building your business.
                </p>
              </div>
              
              <div className="bg-[#FAF9F6] p-6 rounded-lg border-l-4 border-[#708238]">
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-[#2E2E2E]">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#708238] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Personalized HR strategies tailored to your business
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#708238] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Flexible, on-demand support
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#708238] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Implementation, not just consultation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 