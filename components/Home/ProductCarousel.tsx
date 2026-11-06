"use client";

import { useState, useEffect, useRef } from "react";
import { categories } from "@/lib/data";
import Link from "next/link";
import ProductEnquiryModal from "@/components/Products/ProductEnquiryModal";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Product {
  name: string;
  image: string;
  category: string;
}

function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 h-full">
      <div className="relative aspect-3/4 overflow-hidden p-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl"
        />
        <span className="absolute top-4 left-4 text-[#333333] px-3 py-1.5 rounded-full text-base font-medium tracking-[0.01em] flex items-center gap-2">
          <span className="w-2 h-2 bg-[#E46231] rounded-full"></span>
          {product.category}
        </span>
      </div>
      <div className="px-4 pb-2 pt-0">
        <h4 className="text-xl font-normal text-[#333333] mb-1 tracking-[0.01em] border-b border-gray-200 pb-2 inline-block truncate max-w-full">
          {product.name}
        </h4>
        <div className="flex gap-3 justify-center pb-1">
          <a
            href={`https://wa.me/971555085725?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Please send me more details.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#333333] text-white py-1.5 px-4 rounded-full text-sm tracking-[0.01em] font-medium hover:bg-[#1a1a1a] transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
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
  const [products, setProducts] = useState<Product[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      disable: 'mobile',
    });
  }, []);

  // Get all products from all categories
  useEffect(() => {
    const allProducts = categories.flatMap(cat =>
      cat.products.map(p => ({ ...p, category: cat.title }))
    );
    setProducts(allProducts);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0] as HTMLElement;
      const gap = 16;
      const cardsToScroll = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
      const scrollAmount = (cardWidth.offsetWidth + gap) * cardsToScroll;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    // <section className="py-14 md:py-16 bg-white overflow-visible">
    <section className="py-10 md:pt-10 md:pb-6 bg-white overflow-visible">
      <div className="templateContainer overflow-visible">
        {/* Heading */}
        <div className="mb-6 sm:mb-10" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <p className="text-[10px] sm:text-xs font-normal uppercase leading-5 tracking-[0.18em] text-[#333333]">
                Our Products
              </p>
              <h2 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-none tracking-[-0.010em] text-[#333333]">
                Featured Products
              </h2>
              <p className="mt-2 sm:mt-3 max-w-md leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
                Browse our complete range of high-quality products across all categories.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[#E46231] bg-transparent px-5 py-2.5 sm:px-7 sm:py-3 text-[10px] sm:text-xs font-normal uppercase tracking-[0.08em] text-[#E46231] transition hover:bg-[#E46231] hover:text-white shrink-0"
              >
                View All
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors duration-200"
                aria-label="Previous products"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors duration-200"
                aria-label="Next products"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
            <div className="relative px-2 overflow-hidden">
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-hidden scroll-smooth pb-4 select-none"
                style={{ touchAction: 'pan-y' }}
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] snap-start"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex sm:hidden items-center justify-between mt-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[#E46231] bg-transparent px-5 py-2.5 text-[10px] font-normal uppercase tracking-[0.08em] text-[#E46231] transition hover:bg-[#E46231] hover:text-white"
              >
                View All
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border-2 border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors duration-200"
                  aria-label="Previous products"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border-2 border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors duration-200"
                  aria-label="Next products"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
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
