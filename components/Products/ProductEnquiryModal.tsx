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
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex-1 bg-white border-2 border-[#333333] text-[#333333] py-2 px-3 rounded-full text-sm tracking-[0.01em] font-medium hover:bg-[#333333]/10 transition-colors duration-200 whitespace-nowrap flex items-center justify-center"
      >
        Enquire Now
      </button>

      {/* Enquiry Modal */}
      {isModalOpen && (
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
                  src={product.image}
                  alt={product.name}
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
                    {product.name}
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
                        defaultValue={product.name}
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
                      placeholder={`Tell us about your requirements for ${product.name}…`}
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
    </>
  );
}
