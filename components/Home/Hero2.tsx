import React from 'react';
import Link from 'next/link';

export default function Hero2() {
  return (
    <section className="relative w-full h-[80vh] md:h-auto md:aspect-16/9 -mt-35">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/about/Industrial-Toolkit-on-Textured-Concretes.webp"
        />
        <img
          src="/about/112.jpeg"
          alt="Bahrainwala Building Materials Trading CO LLC"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/5"></div>
      <div className="absolute top-50 lg:top-48 left-0 w-full">
        <div className="templateContainer">
          <div className="py-4 lg:py-12">
            <div className="w-16 h-1 bg-orange-500 mb-4 animate-fade-up-delay-300"></div>

            <h1 className="text-[26px] lg:text-6xl font-light text-left leading-tight tracking-tight text-white drop-shadow-2xl animate-fade-up">
              Premium Building Materials.
              <br />
              Trusted Quality Since Years.
            </h1>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-300">
              <Link
                href="/products"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white bg-black/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#333333] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
