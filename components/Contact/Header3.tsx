'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm';

export default function Header3() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/brands', label: 'Brands' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full font-sans transition-colors duration-300 ${
      isTransparent ? 'bg-transparent' : 'bg-white shadow'
    }`}>
      <div className="templateContainer pb-2 sm:pb-2 py-2 sm:py-0">
        <div className="flex items-center justify-between gap-8">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/main-logo.png"
              alt="Bahrainwala Building Materials Trading CO LLC"
              width={515}
              height={233}
              className="h-12 sm:h-14 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Right Side - Two Rows */}
          <div className="flex-1 flex flex-col gap-1">
            
            {/* First Row: Phone, Email & Social Media - Hidden on mobile */}
            <div className="hidden lg:flex justify-end items-center pb-2">
              <div className={`flex items-center gap-6 py-3 border-b ${isTransparent ? 'border-white/30' : 'border-gray-200'}`}>
                {/* Phone */}
                <a href="tel:+97142250300" className={`flex items-center gap-2 text-sm tracking-[0.02em] hover:text-[#E46231] transition-colors ${isTransparent ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  <svg className={`w-4 h-4 ${isTransparent ? 'text-white' : 'text-[#E46231]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+971 4 2250300</span>
                </a>

                {/* Email */}
                <a href="mailto:sales.bahrainwala@gmail.com" className={`flex items-center gap-2 text-sm tracking-[0.02em] hover:text-[#E46231] transition-colors ${isTransparent ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  <svg className={`w-4 h-4 ${isTransparent ? 'text-white' : 'text-[#E46231]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>sales.bahrainwala@gmail.com</span>
                </a>

                {/* Social Icons */}
                <div className="hidden lg:flex items-center gap-3">
                  <a href="#" aria-label="Facebook" className={`p-1.5 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors ${isTransparent ? 'border-white/30 text-white' : 'border-gray-300 text-[#1a1a1a]'}`}>
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" aria-label="Instagram" className={`p-1.5 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors ${isTransparent ? 'border-white/30 text-white' : 'border-gray-300 text-[#1a1a1a]'}`}>
                    <FaInstagram className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className={`p-1.5 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors ${isTransparent ? 'border-white/30 text-white' : 'border-gray-300 text-[#1a1a1a]'}`}>
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" aria-label="YouTube" className={`p-1.5 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors ${isTransparent ? 'border-white/30 text-white' : 'border-gray-300 text-[#1a1a1a]'}`}>
                    <FaYoutube className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Second Row: Navigation Menu */}
            <div className="flex justify-end items-center gap-6">
              <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`text-sm font-medium uppercase tracking-[0.04em] relative group transition-colors ${
                        isActive
                          ? 'text-[#E46231]'
                          : isTransparent
                          ? 'text-white hover:text-[#E46231]'
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

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isTransparent ? 'text-white hover:bg-white/10' : 'text-[#1a1a1a] hover:bg-gray-100'
                }`}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Enquiry Form Button */}
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(true)}
                className={`hidden lg:block px-5 py-2 rounded text-sm font-medium tracking-[0.01em] hover:bg-[#d3541f] transition-colors whitespace-nowrap ${
                  isTransparent
                    ? 'bg-[#E46231] text-white'
                    : 'bg-[#E46231] text-white'
                }`}
              >
                Enquiry Form
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-6 py-2 border-b border-gray-200">
              <Image
                src="/logo/main-logo.png"
                alt="Bahrainwala Building Materials Trading CO LLC"
                width={200}
                height={90}
                className="h-12 w-auto"
              />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-[#1a1a1a]"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-4 text-base font-medium uppercase tracking-[0.02em] transition-colors border-l-4 ${
                      isActive
                        ? 'text-[#E46231] border-[#E46231] bg-orange-50'
                        : 'text-[#1a1a1a] border-transparent hover:text-[#E46231] hover:border-[#E46231] hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Contact Info */}
            <div className="px-6 py-4 border-t border-gray-200">
              <p className="text-sm font-medium text-[#1a1a1a] mb-3 uppercase tracking-[0.02em]">Contact Us</p>
              <div className="space-y-3">
                <a href="tel:+97142250300" className="flex items-center gap-3 text-sm text-[#1a1a1a] hover:text-[#E46231] transition-colors">
                  <svg className="w-5 h-5 text-[#E46231]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+971 4 2250300</span>
                </a>
                <a href="mailto:sales.bahrainwala@gmail.com" className="flex items-center gap-3 text-sm text-[#1a1a1a] hover:text-[#E46231] transition-colors">
                  <svg className="w-5 h-5 text-[#E46231]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>sales.bahrainwala@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="px-6 py-4 border-t border-gray-200">
              <p className="text-sm font-medium text-[#1a1a1a] mb-3 uppercase tracking-[0.02em]">Follow Us</p>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Facebook" className="p-2.5 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors border-gray-300 text-[#1a1a1a]">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Instagram" className="p-2.5 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors border-gray-300 text-[#1a1a1a]">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2.5 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors border-gray-300 text-[#1a1a1a]">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="#" aria-label="YouTube" className="p-2.5 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors border-gray-300 text-[#1a1a1a]">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Sidebar Footer - Enquiry Form Button */}
            <div className="p-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  setIsEnquiryOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-5 py-3 rounded bg-[#E46231] text-white text-sm font-medium tracking-[0.01em] hover:bg-[#d3541f] transition-colors"
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
