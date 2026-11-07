'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Category {
  id: number;
  title: string;
  slug: string;
  image: string;
}

interface ProductCategoriesProps {
  categories: Category[];
}

export default function ProductCategories({ categories }: ProductCategoriesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('[data-category-reveal]');
    if (!cards || !('IntersectionObserver' in window)) return;

    // Observe each card separately so off-screen cards wait for their own reveal.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.reveal = 'visible';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    cards.forEach((card) => {
      if (card.dataset.reveal === 'visible') return;
      card.dataset.reveal = 'pending';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <section ref={sectionRef} className="py-10 md:pt-10 md:pb-6 bg-white font-sans">
      <div className="templateContainer">
        <div className="mb-6 sm:mb-12 text-center scroll-reveal" data-category-reveal>
          <h1 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light font-seasonmix leading-[32px] md:leading-[62px] tracking-[1.02px] text-[#333333]">
            Product Categories
          </h1>
          <p className="mt-2 sm:mt-2 mx-auto max-w-2xl leading-[1.7] font-light text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            Explore our range of construction materials from cement and steel to plumbing and electrical supplies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 scroll-reveal cursor-pointer"
              style={{ '--reveal-delay': `${index * 150}ms` } as React.CSSProperties}
              data-category-reveal
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/15 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-lg font-seasonmix font-medium tracking-wide">
                    {category.title}
                  </h4>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -rotate-45 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H-4" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
