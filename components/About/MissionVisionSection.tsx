'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MissionVisionSection() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      disable: 'mobile',
    });
  }, []);

  return (
    <section className="pb-14 md:pb-16 font-sans">
      <div className="templateContainer">

        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-[#E46231] text-xs font-normal uppercase leading-5 tracking-[0.18em] mb-2">
            Who We Are
          </h3>
          <h2 className="mt-2 sm:mt-3 text-balance text-[26px] font-light leading-none tracking-[-0.010em] text-[#333333] sm:text-[32px] md:text-[40px]">
            Our Mission & Vision
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-start" data-aos="fade-up" data-aos-delay="0">
            <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-normal text-[#333333] mb-3 tracking-[0.01em]">Our Mission</h4>
            <p className="text-gray-600 text-sm leading-[1.7] tracking-[0.01em]">
              To provide high-quality building materials and industrial supplies that meet the diverse needs of our customers across the UAE with excellence and reliability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-start" data-aos="fade-up" data-aos-delay="100">
            <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-normal text-[#333333] mb-3 tracking-[0.01em]">Our Vision</h4>
            <p className="text-gray-600 text-sm leading-[1.7] tracking-[0.01em]">
              To be the leading supplier of building materials and industrial solutions in the UAE, recognized for quality, innovation, and exceptional customer service.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-start" data-aos="fade-up" data-aos-delay="200">
            <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl font-normal text-[#333333] mb-3 tracking-[0.01em]">Our Values</h4>
            <p className="text-gray-600 text-sm leading-[1.7] tracking-[0.01em]">
              Committed to integrity, quality, and customer satisfaction in every interaction, building long-term relationships based on trust and mutual success.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
