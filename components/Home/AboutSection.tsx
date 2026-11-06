import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    // <section className="py-14 md:py-16">
    <section className="py-10 md:pt-10 md:pb-6">
      <div className="templateContainer grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image Column - 3 part collage */}
        <div className="grid grid-cols-2 gap-2 w-full">
          {/* Left column - single tall image */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="/about/Bahrain-Wala-Hardware-Storefront-(1).webp"
              alt="Bahrainwala Building Materials Trading CO LLC"
              className="object-contain w-full h-full rounded-lg"
            />
          </div>

          {/* Right column - two stacked images */}
          <div className="flex flex-col gap-2">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-sm">
              <img
                src="/about/Bright-Electronics-Shop-with-Smiling-Shopkeeper.webp"
                alt="Bahrainwala Building Materials Trading CO LLC"
                className="object-covcer w-full h-full"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-sm">
              <img
                src="/about/Bright-Hardware-and-Electrical-Supply-Shop.webp"
                alt="Bahrainwala Building Materials Trading CO LLC"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-center space-y-8">
          
          {/* Heading & Paragraph */}
          <div className="space-y-5">
            <p className="text-[10px] sm:text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#E46231]">
              About Us
            </p>
            
            <p className="text-[20px] sm:text-[24px] md:text-[28px] font-normal leading-[1.35] tracking-[-0.01em] text-gray-900">
              Bahrainwala Building Materials Trading CO LLC — your trusted partner for quality building materials, tools and industrial supplies across the UAE and beyond.
            </p>
            <p className="text-[15px] sm:text-base leading-[1.7] tracking-[0.01em] text-gray-600">
              From CNC and lathe machine tools to measuring instruments, carbide inserts, welding tools, paints and safety products — we deliver the highest quality in the fastest time at the lowest possible price.
            </p>
          </div>

          {/* Button */}
          <div>
            <Link href="/about" className="bg-[#333333] hover:bg-[#E46231] text-white rounded-full pl-6 pr-2 py-2 font-normal flex items-center gap-4 transition-colors w-fit">
              READ MORE
              <span className="bg-white text-[#333333] rounded-full p-1.5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <div className="text-4xl sm:text-5xl font-normal text-[#333333] flex items-start tracking-[-0.010em]">
                500<span className="text-[#E46231] text-xl sm:text-3xl ml-1">+</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-2 uppercase tracking-[0.08em]">
                Products & Supplies
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <div className="text-4xl sm:text-5xl font-normal text-[#333333] flex items-start tracking-[-0.010em]">
                25<span className="text-[#E46231] text-xl sm:text-3xl ml-1">+</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-2 uppercase tracking-[0.08em]">
                Trusted Brands
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <div className="text-4xl sm:text-5xl font-normal text-[#333333] flex items-start tracking-[-0.010em]">
                11<span className="text-[#E46231] text-xl sm:text-3xl ml-1">+</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-2 uppercase tracking-[0.08em]">
                Export Markets
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
