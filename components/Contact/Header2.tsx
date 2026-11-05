'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm';

export default function Header2() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/brands', label: 'Brands' },
    { href: '/contact', label: 'Contact Us' },
  ];
  return (
    <header className="sticky top-0 z-50 w-full font-sans bg-white shadow">
      <div className="templateContainer pb-2">
        <div className="flex items-center justify-between gap-8">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-center pt-2">
            <Image
              src="/logo/main-logo.png"
              alt="Bahrainwala Building Materials Trading CO LLC"
              width={515}
              height={233}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Right Side - Two Rows */}
          <div className="flex-1 flex flex-col gap-1">
            
            {/* First Row: Phone, Email & Social Media */}
            <div className="flex justify-end items-center pb-2">
              <div className="flex items-center gap-6 py-3 border-b border-gray-200">
                {/* Phone */}
                <a href="tel:+97142250300" className="flex items-center gap-2 text-[#1a1a1a] text-sm tracking-[0.02em] hover:text-[#E46231] transition-colors">
                  <svg className="w-4 h-4 text-[#E46231]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hidden sm:inline">+971 4 2250300</span>
                </a>

                {/* Email */}
                <a href="mailto:sales.bahrainwala@gmail.com" className="flex items-center gap-2 text-[#1a1a1a] text-sm tracking-[0.02em] hover:text-[#E46231] transition-colors">
                  <svg className="w-4 h-4 text-[#E46231]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">sales.bahrainwala@gmail.com</span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  <a href="#" aria-label="Facebook" className="p-1.5 border border-gray-300 rounded-full text-[#1a1a1a] hover:border-[#E46231] hover:text-[#E46231] transition-colors">
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" aria-label="Instagram" className="p-1.5 border border-gray-300 rounded-full text-[#1a1a1a] hover:border-[#E46231] hover:text-[#E46231] transition-colors">
                    <FaInstagram className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="p-1.5 border border-gray-300 rounded-full text-[#1a1a1a] hover:border-[#E46231] hover:text-[#E46231] transition-colors">
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" aria-label="YouTube" className="p-1.5 border border-gray-300 rounded-full text-[#1a1a1a] hover:border-[#E46231] hover:text-[#E46231] transition-colors">
                    <FaYoutube className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Second Row: Navigation Menu */}
            <div className="flex justify-end items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`text-sm font-medium uppercase tracking-[0.04em] relative group transition-colors ${
                        isActive
                          ? 'text-[#E46231]'
                          : 'text-[#1a1a1a] hover:text-[#E46231]'
                      }`}
                    >
                      {label}
                      <span
                        className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#E46231] transition-transform origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Enquiry Form Button */}
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-[#E46231] text-white px-5 py-2 rounded text-sm font-medium tracking-[0.01em] hover:bg-[#d3541f] transition-colors whitespace-nowrap"
              >
                Enquiry Form
              </button>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </header>
  );
}
