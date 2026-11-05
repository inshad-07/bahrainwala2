'use client';

import React, { useState, useEffect } from 'react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsModalOpen(false);
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsModalOpen(false);
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleEnquireClick = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <section className="py-14 md:py-16 bg-white font-sans">
      <div className="templateContainer">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-none tracking-[-0.010em] text-[#333333]">
            Product Categories
          </h1>
          <p className="mt-3 sm:mt-4 mx-auto max-w-2xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            Explore our wide range of high-quality construction materials and building supplies. From cement and steel to plumbing and electrical equipment, we have everything you need for your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-4/5 overflow-hidden p-2">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="px-4 pb-2 pt-0">
                <h4 className="text-xl font-normal text-[#333333] mb-2 tracking-[0.01em] border-b border-gray-200 pb-2 inline-block">
                  {category.title}
                </h4>
                <div className="flex gap-3 justify-center pt-1">
                  <a
                    href={`/products/${category.slug}`}
                    className="flex-1 bg-[#333333] text-white py-1.5 px-4 rounded-full text-sm tracking-[0.01em] font-medium hover:bg-[#1a1a1a] transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                  <button
                    onClick={() => handleEnquireClick(category)}
                    className="flex-1 bg-white border-2 border-[#333333] text-[#333333] py-1.5 px-4 rounded-full text-sm tracking-[0.01em] font-medium hover:bg-[#333333]/10 transition-colors duration-200 whitespace-nowrap flex items-center justify-center"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      {isModalOpen && selectedCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Left: Image */}
              <div className="relative h-64 md:h-auto p-2">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Right: Form */}
              <div className="p-6 md:p-8 relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-light text-[#333333]">
                    {selectedCategory.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">
                    Send us an enquiry and we'll get back to you soon.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm tracking-[0.01em] font-medium text-[#333333]">
                        Full name<span className="text-red-500"> *</span>
                      </span>
                      <input
                        required
                        placeholder="e.g. Mohammed Al Ali"
                        className="w-full rounded-xl border border-[#000000]/20 px-4 py-3 text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                        type="text"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm tracking-[0.01em] font-medium text-[#333333]">
                        Phone<span className="text-red-500"> *</span>
                      </span>
                      <input
                        inputMode="tel"
                        required
                        placeholder="+971 50 000 0000"
                        className="w-full rounded-xl border border-[#000000]/20 px-4 py-3 text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                        type="tel"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm tracking-[0.01em] font-medium text-[#333333]">
                        Email<span className="text-red-500"> *</span>
                      </span>
                      <input
                        inputMode="email"
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-[#000000]/20 px-4 py-3 text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                        type="email"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm tracking-[0.01em] font-medium text-[#333333]">
                        Subject
                      </span>
                      <input
                        defaultValue={selectedCategory.title}
                        className="w-full rounded-xl border border-[#000000]/20 px-4 py-3 text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                        type="text"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm tracking-[0.01em] font-medium text-[#333333]">
                      Message <span className="text-red-500">*</span>
                    </span>
                    <textarea
                      rows={4}
                      required
                      placeholder={`Tell us about your requirements for ${selectedCategory.title}…`}
                      className="w-full resize-none rounded-xl border border-[#000000]/20 px-4 py-3 text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                      spellCheck={false}
                    ></textarea>
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#333333] px-7 py-3.5 text-sm tracking-[0.01em] font-medium text-white transition-colors hover:bg-[#E46231]"
                  >
                    Send enquiry
                  </button>

                  <p className="text-xs tracking-[0.01em] text-neutral-400 text-center">
                    By submitting, you agree to be contacted about your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
