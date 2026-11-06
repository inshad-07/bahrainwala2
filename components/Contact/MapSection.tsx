'use client';

import { useEffect, useRef } from 'react';

export default function MapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('[data-map-reveal]');
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
    <section ref={sectionRef} className="w-full bg-white px-4 sm:px-6 lg:px-[5vw] pb-14 md:pb-16">
      <div className="mx-auto max-w-335 text-center">
        <p className="text-[10px] sm:text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#333333] scroll-reveal" data-map-reveal>
          Location
        </p>
        <h2 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-[1.2] tracking-[-0.010em] text-[#333333] scroll-reveal [--reveal-delay:100ms]" data-map-reveal>
          Visit Our Store
        </h2>
        <div className="mt-6 sm:mt-8 rounded-xl md:rounded-3xl overflow-hidden border border-neutral-200 shadow-sm scroll-reveal [--reveal-delay:200ms]" data-map-reveal>
          <iframe
            title="Bahrainwala store location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9971801099196!2d55.305650199999995!3d25.2706803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4348e18ad207%3A0xb70b40390778316a!2sBAHRAINWALA%20BUILDING%20MATERIALS%20TRADING%20CO.L.L.C.-COMET!5e0!3m2!1sen!2sin!4v1793907621899!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block h-[320px] w-full sm:h-[360px] md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
