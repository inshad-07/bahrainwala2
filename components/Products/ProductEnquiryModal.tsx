'use client';

import React, { useState, useEffect } from 'react';

interface Product {
  name: string;
  image: string;
}

interface ProductEnquiryModalProps {
  product: Product;
}

export default function ProductEnquiryModal({ product }: ProductEnquiryModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsModalOpen(false);
    }

    if (isModalOpen) {
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
  }, [isModalOpen]);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 px-3 rounded-full text-sm tracking-[0.01em] font-medium hover:bg-white hover:text-[#333333] transition-all duration-300 whitespace-nowrap flex items-center justify-center"
      >
        Enquire Now
      </button>

      {/* Enquiry Modal */}
      {isModalOpen && (
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
                    {product.name}
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
                        defaultValue={product.name}
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
                      placeholder={`Tell us about your requirements for ${product.name}…`}
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
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
