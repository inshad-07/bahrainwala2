'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const fadeUpClass = 'scroll-reveal';

export default function OverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('[data-overview-reveal]');
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
    <section ref={sectionRef} className="pt-10 pb-14 md:pt-16 md:pb-16 bg-white">
      <div className="templateContainer grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">

        {/* Left Content */}
        <div className="flex flex-col pr-0 lg:pr-0 xl:pr-0">
          <p className={`mb-3 text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#333333] ${fadeUpClass}`} data-overview-reveal>
            About Us
          </p>
          <h2 className={`mt-2 sm:mt-3 mb-5 text-balance text-[26px] font-light font-seasonmix leading-8 md:leading-15.5 tracking-[1.02px] text-[#333333] sm:text-[32px] md:text-[36px] lg:text-[40px] ${fadeUpClass}`} data-overview-reveal>
            Bahrainwala Building Materials Trading CO LLC
          </h2>

          <div className="text-gray-600 text-[14px] leading-[1.7] font-light tracking-[0.01em] space-y-5 mb-10 sm:text-[16px]">
            <p className={fadeUpClass} data-overview-reveal>
              Bahrainwala Building Materials Trading CO LLC is a trusted supplier of quality building materials, offering a wide range of products for construction and trading needs across the UAE.
            </p>
            <p className={fadeUpClass} data-overview-reveal>
              We offer CNC and lathe machine tools, measuring instruments, carbide inserts, welding tools, construction materials, power tools, safety products, paints, adhesives and abrasives — delivering the highest quality in the fastest time at the lowest possible price.
            </p>
          </div>

          {/* Counters Grid */}
          <div className="grid grid-cols-2 gap-6 mb-12 items-center">
            <div className={`text-left ${fadeUpClass} [--reveal-delay:100ms]`} data-overview-reveal>
              <h3 className="text-2xl md:text-3xl text-[#333333] mb-1.5 leading-[1.1] tracking-[-0.010em]">
                500+
              </h3>
              <p className="text-[14px] sm:text-[16px] leading-normal tracking-[0.01em] text-gray-600">
                Quality Building Material Products
              </p>
            </div>
            <div className={`text-left ${fadeUpClass} [--reveal-delay:200ms]`} data-overview-reveal>
              <h3 className="text-2xl md:text-3xl text-[#333333] mb-1.5 leading-[1.1] tracking-[-0.010em]">
                25+
              </h3>
              <p className="text-[14px] sm:text-[16px] leading-normal tracking-[0.01em] text-gray-600">
                Trusted Brands We Deal With
              </p>
            </div>
          </div>

          {/* Download Button */}
          <a
            href="/BAHRAINWALA-CATALOGE.pdf"
            download
            className={`group flex items-center w-fit text-[#f97316] tracking-widest uppercase text-xs md:text-sm hover:opacity-80 transition-opacity ${fadeUpClass} [--reveal-delay:200ms]`}
            data-overview-reveal
          >
            <span className="mr-4">Download Brochure</span>
            <span className="w-10 h-10 rounded-full border border-[#f97316] flex items-center justify-center group-hover:bg-[#f97316] group-hover:text-white transition-colors">
              <svg className="w-4 h-4 text-[#f97316] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Right Content - Image Collage */}
        <div className="flex items-end justify-center lg:justify-end gap-3 md:gap-5 relative">

          {/* Small Left Image */}
          <div className={`relative w-[45%] max-w-60 aspect-3/4 overflow-hidden rounded-tl-[100px] md:rounded-tl-[140px] ${fadeUpClass} [--reveal-delay:300ms]`} data-overview-reveal>
            <Image
              src="/about/Detailed-Shelved-Office-Storage-Room.webp"
              alt="Overview small representation"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              quality={95}
              className="object-cover"
            />
          </div>

          {/* Large Right Image */}
          <div className={`relative w-[55%] max-w-[340px] aspect-7/10 shadow-lg ring-2 ring-[#f97316]/30 ${fadeUpClass} [--reveal-delay:400ms]`} data-overview-reveal>
            <Image
              src="/about/Bahrain-Wala-Hardware-Storefront-(1).webp"
              alt="Overview large room view"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              quality={95}
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
