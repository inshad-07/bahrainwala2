'use client';

import React, { useEffect, useRef, useState } from 'react';

const fadeUpClass = 'scroll-reveal';

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ products: 0, brands: 0, markets: 0, years: 0 });

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('[data-stats-reveal]');
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

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('[data-stats-heading-reveal]');
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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { products: 500, brands: 25, markets: 12, years: 15 };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        products: Math.floor(targets.products * easeOut),
        brands: Math.floor(targets.brands * easeOut),
        markets: Math.floor(targets.markets * easeOut),
        years: Math.floor(targets.years * easeOut),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:pt-10 md:pb-6">
      <div className="templateContainer">
        <div className={`text-center mb-8 ${fadeUpClass}`} data-stats-heading-reveal>
          <h3 className="text-[#E46231] text-xs font-normal uppercase leading-5 tracking-[0.18em] mb-2">
            Our Achievements
          </h3>
          <h2 className="text-[26px] font-light font-seasonmix leading-8 md:leading-10 tracking-[1.02px] text-[#333333] sm:text-[32px] md:text-[40px]">
            Trusted by <span className="text-[#E46231]">Thousands</span>
          </h2>
          <p className="text-[15px] sm:text-base leading-[1.7] font-light tracking-[0.01em] text-gray-600 mt-4 max-w-2xl mx-auto">
            Building trust through quality products and exceptional service across the UAE and international markets.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-200 ${fadeUpClass}`} data-stats-reveal style={{ '--reveal-delay': '200ms' } as React.CSSProperties}>
          <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-normal text-[#333333] flex items-center tracking-[-0.010em]">
              {counts.products}<span className="text-[#E46231] text-lg sm:text-xl ml-1">+</span>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 mt-2 uppercase tracking-[0.08em]">
              Products & Supplies
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-normal text-[#333333] flex items-center tracking-[-0.010em]">
              {counts.brands}<span className="text-[#E46231] text-lg sm:text-xl ml-1">+</span>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 mt-2 uppercase tracking-[0.08em]">
              Trusted Brands
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-normal text-[#333333] flex items-center tracking-[-0.010em]">
              {counts.markets}<span className="text-[#E46231] text-lg sm:text-xl ml-1">+</span>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 mt-2 uppercase tracking-[0.08em]">
              Export Markets
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-normal text-[#333333] flex items-center tracking-[-0.010em]">
              {counts.years}<span className="text-[#E46231] text-lg sm:text-xl ml-1">+</span>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 mt-2 uppercase tracking-[0.08em]">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
