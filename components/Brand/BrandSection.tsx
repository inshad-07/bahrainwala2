'use client';

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from 'react';

const brands = [
  { src: "/brand/10001.png", alt: "Brand 1" },
  { src: "/brand/10002.png", alt: "Brand 2" },
  { src: "/brand/10003.png", alt: "Brand 3" },
  { src: "/brand/10004.png", alt: "Brand 4" },
  { src: "/brand/10005.png", alt: "Brand 5" },
  { src: "/brand/10006.png", alt: "Brand 6" },
  { src: "/brand/10007.png", alt: "Brand 7" },
  { src: "/brand/10008.png", alt: "Brand 8" },
];

export default function BrandSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('[data-brand-reveal]');
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
    <section ref={sectionRef} className="pt-8 pb-14 md:pt-16 md:pb-16 bg-white">
      <div className="templateContainer px-2 sm:px-0">
        <div className="mb-8 sm:mb-12 text-center scroll-reveal" data-brand-reveal>

          <h1 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-none tracking-[-0.010em] text-[#333333]">
            Brands We Deal With
          </h1>
          <p className="mt-3 sm:mt-4 mx-auto max-w-2xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            Authorized dealer of K-PRIX, COMET, MITUTOYO, INSIZE, BAKER &amp;
            KRISTEEL, KORLOY, TAEGUTEC and WIDIA — plus automobile tools, power
            tools and safety products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {brands.map((brand, index) => (
            <div
              key={brand.src}
              className="flex h-16 sm:h-18 md:h-22 w-40 sm:w-40 md:w-50 items-center justify-center overflow-hidden rounded-md border border-[#E5E0D8] bg-white px-3 sm:px-3 hover:border-[#E46231] transition-colors scroll-reveal"
              style={{ '--reveal-delay': `${index * 50}ms` } as CSSProperties}
              data-brand-reveal
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={160}
                height={64}
                className="h-auto max-h-14 sm:max-h-15 md:max-h-17.5 max-w-full w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
