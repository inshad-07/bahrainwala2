'use client';

import { useState, useRef, useEffect } from 'react';

export default function ContactSection() {
  const [subject, setSubject] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["Product Enquiry", "Price Quote", "Bulk Order", "Delivery", "Project Requirements", "Partnership", "General Inquiry", "Other"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="w-full bg-white px-4  sm:px-6 lg:px-[5vw] py-14 md:py-16">
      <div className="mx-auto grid max-w-[1340px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
        
        {/* Left Column: Heading, Info & Call Box */}
        <div>
          <p className="text-[10px] sm:text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#333333]">
            Get In Touch
          </p>
          <h2 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-[1.2] tracking-[-0.010em] text-[#333333]">
            Talk to Bahrainwala
          </h2>
          <p className="mt-3 sm:mt-4 mx-auto max-w-2xl leading-[1.7] text-gray-600 text-[14px] tracking-[0.01em] sm:text-[16px]">
            Questions about products, pricing, bulk orders or delivery? Email us directly or send a
            message below and our team will get back to you within one business day.
          </p>

          {/* Email Card */}
          <ul className="mt-8 space-y-4">
            <li>
              <div className="flex items-center gap-4 rounded-2xl border border-[#000000]/20 bg-white p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gray-100 text-[#333333]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3 7 9 6 9-6"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] sm:text-xs font-medium uppercase leading-5 tracking-[0.18em] text-neutral-400">
                    Email
                  </p>
                  <a
                    href="mailto:sales.bahrainwala@gmail.com"
                    className="mt-1.5 block text-[16px] font-light tracking-[0.01em] text-[#333333] transition-colors hover:text-[#E46231] sm:text-[18px]"
                  >
                    sales.bahrainwala@gmail.com
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4 rounded-2xl border border-[#000000]/20 bg-white p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gray-100 text-[#333333]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] sm:text-xs font-medium uppercase leading-5 tracking-[0.18em] text-neutral-400">
                    Phone
                  </p>
                  <a
                    href="tel:+97142250300"
                    className="mt-1.5 block text-[16px] font-light tracking-[0.01em] text-[#333333] transition-colors hover:text-[#E46231] sm:text-[18px]"
                  >
                    +971 4 2250300
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4 rounded-2xl border border-[#000000]/20 bg-white p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gray-100 text-[#333333]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] sm:text-xs font-medium uppercase leading-5 tracking-[0.18em] text-neutral-400">
                    Address
                  </p>
                  <p className="mt-1.5 text-[14px] font-light leading-normal tracking-[0.01em] text-[#333333] sm:text-[15px]">
                    Shop 1, Al Najah Building, Deira, Dubai, UAE
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: Form */}
        <div>
          <form className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              
              {/* Full Name */}
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

              {/* Phone */}
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

              {/* Email */}
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

              {/* Subject */}
              <label className="block">
                <span className="mb-2 block text-sm tracking-[0.01em] font-medium text-[#333333]">
                  Subject
                </span>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full rounded-xl border border-[#000000]/20 bg-white px-4 py-3 text-sm tracking-[0.01em] text-[#333333] transition-colors focus:border-[#E46231] focus:outline-none flex items-center justify-between"
                  >
                    <span className={subject ? "text-neutral-900" : "text-neutral-400"}>
                      {subject || "Select a topic..."}
                    </span>
                    <svg
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="absolute z-10 mt-2 w-full rounded-xl border border-[#000000]/20 bg-white shadow-lg">
                      <div className="max-h-60 overflow-y-auto py-1">
                        {options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setSubject(option);
                              setIsOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-sm tracking-[0.01em] text-[#333333] transition-colors hover:bg-[#E46231]/20 hover:text-[#333333] focus:bg-[#E46231]/20 focus:text-[#333333] focus:outline-none"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </label>
            </div>

            {/* Message */}
            <label className="mt-4 block">
              <span className="mb-2 block text-sm tracking-[0.01em] font-medium text-[#333333]">
                Message <span className="text-red-500">*</span>
              </span>
              <textarea
                rows={5}
                required
                placeholder="Tell us about your product requirements, quantities or question…"
                className="w-full resize-none rounded-xl border border-[#000000]/20 px-4 py-3 text-sm tracking-[0.01em] text-[#333333] transition-colors placeholder:text-neutral-400 focus:border-[#E46231] focus:outline-none"
                spellCheck={false}
              ></textarea>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#333333] px-7 py-3.5 text-sm tracking-[0.01em] font-medium text-white transition-colors hover:bg-[#E46231] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              Send message
            </button>

            {/* Subtext */}
            <p className="mt-3 text-xs tracking-[0.01em] text-neutral-400">
              By submitting, you agree to be contacted about your enquiry.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
