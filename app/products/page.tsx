'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { categories } from '@/lib/data';

interface Product {
  name: string;
  image: string;
  category: string;
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
        setIsFilterOpen(false);
      }
    }

    if (isModalOpen || isFilterOpen) {
      document.addEventListener('keydown', handleEscape);
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isModalOpen, isFilterOpen]);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = selectedCategory === 'all'
    ? categories.flatMap(cat => cat.products.map(p => ({ ...p, category: cat.title })))
    : categories
        .find(cat => cat.slug === selectedCategory)
        ?.products.map(p => ({ ...p, category: categories.find(c => c.slug === selectedCategory)!.title })) || [];

  const handleEnquireClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section className="py-14 md:py-16 bg-white font-sans">
      <div className="templateContainer">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-none tracking-[-0.010em] text-[#333333]">
            All Products
          </h1>
          <p className="mt-3 sm:mt-4 mx-auto max-w-2xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            Browse our complete range of high-quality products across all categories.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8 flex justify-center">
          {/* Mobile: Filter Button */}
          <div className="relative sm:hidden w-full">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-full text-sm tracking-[0.01em] font-medium text-[#333333] shadow-[0_-2px_10px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_-4px_15px_rgba(0,0,0,0.12),0_4px_15px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>Filter</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                {selectedCategory !== 'all' ? (
                  <span className="text-base font-medium text-[#333333]">
                    {categories.find(c => c.slug === selectedCategory)?.title || 'Selected'}
                  </span>
                ) : (
                  <span className="text-base text-[#333333]">All Categories</span>
                )}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Desktop: Horizontal Buttons */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-sm tracking-[0.01em] font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-[#333333] text-white shadow-lg'
                  : 'bg-white text-[#333333] border border-[#000000]/20 hover:border-[#333333] hover:bg-[#333333]/5'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-5 py-2.5 rounded-full text-sm tracking-[0.01em] font-medium transition-all duration-300 ${
                  selectedCategory === category.slug
                    ? 'bg-[#333333] text-white shadow-lg'
                    : 'bg-white text-[#333333] border border-[#000000]/20 hover:border-[#333333] hover:bg-[#333333]/5'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
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
                      href={`https://wa.me/971500000000?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Please send me more details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#333333] text-white py-1.5 px-4 rounded-full text-sm tracking-[0.01em] font-medium hover:bg-[#1a1a1a] transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <button
                      onClick={() => handleEnquireClick(product)}
                      className="flex-1 bg-white border-2 border-[#333333] text-[#333333] py-1.5 px-4 rounded-full text-sm tracking-[0.01em] font-medium hover:bg-[#333333]/10 transition-colors duration-200 whitespace-nowrap flex items-center justify-center"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* Enquiry Modal */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/50 px-3 sm:px-4 py-3 sm:py-8"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-4xl max-h-[88vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-full md:items-center">
              {/* Form on mobile (top), Right on desktop */}
              <div className="p-4 sm:p-5 md:p-6 relative order-1 md:order-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 sm:-top-4 sm:right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                  aria-label="Close"
                >
                  <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="mb-3 sm:mb-4 pr-8 sm:pr-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#333333]">
                    {selectedProduct.name}
                  </h3>
                  <p className="mt-1 text-gray-600 text-xs sm:text-sm">
                    Send us an enquiry and we'll get back to you soon.
                  </p>
                </div>

                <form className="space-y-2.5 sm:space-y-3">
                  <div className="grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1 sm:mb-1.5 block text-xs sm:text-sm tracking-[0.01em] font-medium text-[#333333]">
                        Full name<span className="text-red-500"> *</span>
                      </span>
                      <input
                        required
                        placeholder="e.g. Mohammed Al Ali"
                        className="w-full rounded-xl border border-[#000000]/20 px-2.5 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                        type="text"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1 sm:mb-1.5 block text-xs sm:text-sm tracking-[0.01em] font-medium text-[#333333]">
                        Phone<span className="text-red-500"> *</span>
                      </span>
                      <input
                        inputMode="tel"
                        required
                        placeholder="+971 50 000 0000"
                        className="w-full rounded-xl border border-[#000000]/20 px-2.5 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                        type="tel"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1 sm:mb-1.5 block text-xs sm:text-sm tracking-[0.01em] font-medium text-[#333333]">
                        Email<span className="text-red-500"> *</span>
                      </span>
                      <input
                        inputMode="email"
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-[#000000]/20 px-2.5 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                        type="email"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1 sm:mb-1.5 block text-xs sm:text-sm tracking-[0.01em] font-medium text-[#333333]">
                        Subject
                      </span>
                      <input
                        defaultValue={selectedProduct.name}
                        className="w-full rounded-xl border border-[#000000]/20 px-2.5 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                        type="text"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1 sm:mb-1.5 block text-xs sm:text-sm tracking-[0.01em] font-medium text-[#333333]">
                      Message <span className="text-red-500">*</span>
                    </span>
                    <textarea
                      rows={3}
                      required
                      placeholder={`Tell us about your requirements for ${selectedProduct.name}…`}
                      className="w-full resize-none rounded-xl border border-[#000000]/20 px-2.5 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                      spellCheck={false}
                    ></textarea>
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#333333] px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm tracking-[0.01em] font-medium text-white transition-colors hover:bg-[#E46231]"
                  >
                    Send enquiry
                  </button>

                  <p className="text-[10px] sm:text-xs tracking-[0.01em] text-neutral-400 text-center">
                    By submitting, you agree to be contacted about your enquiry.
                  </p>
                </form>
              </div>

              {/* Image on mobile (bottom), Left on desktop */}
              <div className="relative h-auto md:h-auto p-2 order-2 md:order-1">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Modal for Mobile */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3 sm:px-4 py-4 sm:py-8"
          onClick={() => setIsFilterOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-medium text-[#333333]">Filter by Category</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm tracking-[0.01em] font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-[#333333] text-white'
                      : 'bg-gray-50 text-[#333333] hover:bg-gray-100'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.slug);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm tracking-[0.01em] font-medium transition-colors ${
                      selectedCategory === category.slug
                        ? 'bg-[#333333] text-white'
                        : 'bg-gray-50 text-[#333333] hover:bg-gray-100'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default function Products() {
  return (
    <Suspense fallback={<div className="py-14 md:py-16 bg-white font-sans"><div className="templateContainer"><div className="text-center py-12"><p className="text-gray-500">Loading...</p></div></div></div>}>
      <ProductsContent />
    </Suspense>
  );
}
