'use client';

import React, { useEffect, useRef } from 'react';

const fadeUpClass = 'scroll-reveal';

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('[data-feature-reveal]');
    if (!elements || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.reveal = 'visible';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    elements.forEach((element) => {
      if (element.dataset.reveal === 'visible') return;
      element.dataset.reveal = 'pending';
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // <section className="pb-14 md:pb-16 font-sans">
    <section ref={sectionRef} className="py-10 md:pt-10 md:pb-6 font-sans">
      <div className="templateContainer">

        {/* Header Section */}
        <div className={`text-center mb-12 ${fadeUpClass}`} data-feature-reveal>
          {/* Optional small top header (based on standard layouts) */}
          <h3 className="text-[#E46231] text-xs font-normal uppercase leading-5 tracking-[0.18em] mb-2">
            Why Choose Us
          </h3>
          <h2 className="mt-2 sm:mt-3 text-balance text-[26px] font-light font-seasonmix leading-8 md:leading-15.5 tracking-[1.02px] text-[#333333] sm:text-[32px] md:text-[40px]">
            Premium Quality <br className="sm:hidden" />
            Industrial <span className="text-[#E46231]">Supplies</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className={`bg-white p-8 rounded-2xl shadow-md flex flex-col justify-start ${fadeUpClass}`} data-feature-reveal style={{ boxShadow: '0 -1px 4px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-normal text-[#333333] mb-2 tracking-[0.01em]">CNC & Machine Tools</h4>
            <p className="text-gray-600 text-sm leading-[1.7] font-light tracking-[0.01em]">
              High-precision CNC and lathe machine tools designed for industrial excellence and reliable performance in manufacturing operations.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`bg-white p-8 rounded-2xl shadow-md flex flex-col justify-start ${fadeUpClass} [--reveal-delay:100ms]`} data-feature-reveal style={{ boxShadow: '0 -1px 4px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 className="text-lg font-normal text-[#333333] mb-2 tracking-[0.01em]">Measuring Instruments</h4>
            <p className="text-gray-600 text-sm leading-[1.7] font-light tracking-[0.01em]">
              Precision measuring instruments and tools for accurate industrial measurements and quality control applications.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`bg-white p-8 rounded-2xl shadow-md flex flex-col justify-start ${fadeUpClass} [--reveal-delay:200ms]`} data-feature-reveal style={{ boxShadow: '0 -1px 4px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <h4 className="text-lg font-normal text-[#333333] mb-2 tracking-[0.01em]">Welding Tools</h4>
            <p className="text-gray-600 text-sm leading-[1.7] font-light tracking-[0.01em]">
              Professional-grade welding tools and equipment for industrial fabrication and metalworking applications.
            </p>
          </div>

          {/* Card 4 */}
          <div className={`bg-white p-8 rounded-2xl shadow-md flex flex-col justify-start ${fadeUpClass} [--reveal-delay:300ms]`} data-feature-reveal style={{ boxShadow: '0 -1px 4px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-lg font-normal text-[#333333] mb-2 tracking-[0.01em]">Safety Products</h4>
            <p className="text-gray-600 text-sm leading-[1.7] font-light tracking-[0.01em]">
              Comprehensive range of safety products and equipment to ensure workplace compliance and worker protection.
            </p>
          </div>

          {/* Card 5 */}
          <div className={`bg-white p-8 rounded-2xl shadow-md flex flex-col justify-start ${fadeUpClass} [--reveal-delay:400ms]`} data-feature-reveal style={{ boxShadow: '0 -1px 4px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-normal text-[#333333] mb-2 tracking-[0.01em]">Power Tools</h4>
            <p className="text-gray-600 text-sm leading-[1.7] font-light tracking-[0.01em]">
              High-performance power tools and accessories for demanding industrial applications and heavy-duty operations.
            </p>
          </div>

          {/* Card 6 */}
          <div className={`bg-white p-8 rounded-2xl shadow-md flex flex-col justify-start ${fadeUpClass} [--reveal-delay:500ms]`} data-feature-reveal style={{ boxShadow: '0 -1px 4px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h4 className="text-lg font-normal text-[#333333] mb-2 tracking-[0.01em]">Material Handling</h4>
            <p className="text-gray-600 text-sm leading-[1.7] font-light tracking-[0.01em]">
              Efficient material handling equipment and solutions for streamlined logistics and warehouse operations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
