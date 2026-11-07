'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const fadeUpClass = 'scroll-reveal';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('[data-about-reveal]');
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
    // <section className="py-14 md:py-16">
    <section ref={sectionRef} className="py-10 md:pt-10 md:pb-6">
      <div className="max-w-[1600px] mx-auto w-full px-4 md:px-12 flex flex-col lg:flex-row lg:gap-12 items-center">

        {/* Image Column - 610x530 */}
        <div className={`w-full lg:w-auto ${fadeUpClass}`} data-about-reveal style={{ maxWidth: '700px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 items-start ml-0 lg:ml-8">
            {/* First column - two rows */}
            <div className="flex flex-col gap-1 items-center flex-1">
              <div className="relative overflow-hidden rounded-lg shadow-sm w-full" style={{ height: '260px' }}>
                <img
                  src="/about/Bright-Electronics-Shop-with-Smiling-Shopkeeper.webp"
                  alt="Bahrainwala Building Materials Trading CO LLC"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-sm w-full" style={{ height: '260px' }}>
                <img
                  src="/about/Bright-Hardware-and-Electrical-Supply-Shop.webp"
                  alt="Bahrainwala Building Materials Trading CO LLC"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>

            {/* Second column - single vertical */}
            <div className="relative ml-0 mt-2 md:mt-0 sm:ml-2 rounded-lg shadow-sm p-2 flex items-start w-full sm:w-[350px]" style={{ height: '521px', border: '1.5px solid #E46231', borderRadius: '12px' }}>
              <img
                src="/about/Bahrain-Wala-Hardware-Storefront-(1).webp"
                alt="Bahrainwala Building Materials Trading CO LLC"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
        

        {/* Content Column */}
        <div className="flex flex-col pt-8 md:pt-0 justify-center space-y-8 w-full lg:flex-1 min-w-0">

          {/* Heading & Paragraph */}
          <div className={`space-y-5 ${fadeUpClass}`} data-about-reveal>
            <p className="text-[10px] sm:text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#E46231]">
              About Us
            </p>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] font-normal font-seasonmix leading-7 md:leading-10 tracking-[1.02px] text-gray-900">
              Bahrainwala Building Materials Trading CO LLC your trusted partner for quality building materials, tools and industrial supplies across the UAE and beyond.
            </p>
            <p className="text-[15px] sm:text-base leading-[1.7] font-light tracking-[0.01em] text-gray-600">
              From CNC and lathe machine tools to measuring instruments, carbide inserts, welding tools, paints and safety products — we deliver the highest quality in the fastest time at the lowest possible price.
            </p>
          </div>

          {/* Button */}
          <div className={`${fadeUpClass} [--reveal-delay:100ms]`} data-about-reveal>
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-[#333333] bg-[#333333] px-5 py-2.5 text-[10px] sm:text-xs font-normal uppercase tracking-[0.08em] text-white transition hover:bg-[#1a1a1a] group">
              Read More
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M16 8l4 4-4 4" />
              </svg>
            </Link>
          </div>

        

        </div>
      </div>
    </section>
  );
}
