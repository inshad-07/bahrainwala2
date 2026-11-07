"use client";

import { useEffect, useRef } from "react";
import { categories } from "@/lib/data";
import Link from "next/link";
import ProductEnquiryModal from "@/components/Products/ProductEnquiryModal";

interface Product {
  name: string;
  image: string;
  category: string;
}

const products: Product[] = categories.flatMap(cat =>
  cat.products.map(p => ({ ...p, category: cat.title }))
);

function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-lg transition-all duration-500 h-full">
      <div className="relative aspect-3/4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/15 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <span className="absolute top-4 left-4 text-[#333333] px-3 py-1.5 rounded-full text-sm font-medium tracking-[0.01em] flex items-center gap-2 bg-white/90 backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#E46231] rounded-full"></span>
          {product.category}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h4 className="text-white text-lg font-seasonmix font-medium tracking-wide mb-3 line-clamp-1">
          {product.name}
        </h4>
        <div className="flex gap-3">
          <a
            href={`https://wa.me/971555085725?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Please send me more details.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-[#333333] py-2 px-4 rounded-full text-sm tracking-[0.01em] font-medium hover:bg-[#333333] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <ProductEnquiryModal product={product} />
        </div>
      </div>
    </div>
  );
}

export default function ProductCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollIndexRef = useRef(0);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('[data-carousel-reveal]');
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

  const scroll = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    const card = carousel?.firstElementChild as HTMLElement | null;
    if (!carousel || !card) return;

    const gap = parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
    const scrollAmount = card.getBoundingClientRect().width + gap;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const maxIndex = Math.round(maxScroll / scrollAmount);

    // Track the destination so rapid clicks still move one complete card each.
    scrollIndexRef.current = Math.max(0, Math.min(
      maxIndex,
      scrollIndexRef.current + (direction === 'left' ? -1 : 1)
    ));

    carousel.scrollTo({
      left: Math.min(scrollIndexRef.current * scrollAmount, maxScroll),
      behavior: 'smooth'
    });
  };

  return (
    // <section className="py-14 md:py-16 bg-white overflow-visible">
    <section ref={sectionRef} className="py-10 md:pt-10 md:pb-6 bg-white overflow-visible">
      <div className="templateContainer overflow-visible">
        {/* Heading */}
        <div className="mb-6 sm:mb-10 scroll-reveal" data-carousel-reveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <p className="text-[10px] sm:text-xs font-normal uppercase leading-5 tracking-[0.18em] text-[#333333]">
                Our Products
              </p>
              <h2 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light font-seasonmix leading-8 md:leading-15.5 tracking-[1.02px] text-[#333333]">
                Featured Products
              </h2>
              <p className="mt-2 sm:mt-3 max-w-md leading-[1.7] font-light text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
                Browse our complete range of high-quality products across all categories.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[#333333] bg-transparent px-5 py-2 sm:px-6 sm:py-2 text-[10px] sm:text-xs font-normal uppercase tracking-[0.08em] text-[#333333] transition hover:bg-[#333333] hover:text-white shrink-0"
              >
                View All
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M16 8l4 4-4 4" />
                </svg>
              </Link>
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors duration-200"
                aria-label="Previous products"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors duration-200"
                aria-label="Next products"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        {products.length > 0 ? (
          <>
            <div className="relative overflow-hidden scroll-reveal" data-carousel-reveal>
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-hidden scroll-smooth pb-4 select-none"
                style={{ touchAction: 'pan-y' }}
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] snap-start"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex sm:hidden items-center justify-between mt-6 scroll-reveal" data-carousel-reveal>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[#333333] bg-transparent px-5 py-2 text-[10px] font-normal uppercase tracking-[0.08em] text-[#333333] transition hover:bg-[#333333] hover:text-white"
              >
                View All
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M16 8l4 4-4 4" />
                </svg>
              </Link>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scroll('left')}
                  className="w-9 h-9 rounded-full border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors duration-200"
                  aria-label="Previous products"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-9 h-9 rounded-full border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors duration-200"
                  aria-label="Next products"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
