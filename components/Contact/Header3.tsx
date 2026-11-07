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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full font-sans transition-colors duration-300 ${
      isTransparent ? 'bg-transparent' : 'bg-white shadow'
    }`}>
      <div className={`templateContainer pb-2 sm:pb-2 transition-all duration-300 ${isScrolled ? 'py-1 sm:py-1' : 'py-2 sm:py-0'}`}>
        <div className="flex items-center justify-between gap-8">

          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/main-logo.png"
              alt="Bahrainwala Building Materials Trading CO LLC"
              width={515}
              height={233}
              className={`transition-all duration-300 w-auto ${isScrolled ? 'h-10 sm:h-12 md:h-14' : 'h-12 sm:h-14 md:h-20'} ${isTransparent ? 'brightness-0 invert' : ''}`}
              priority
            />
          </Link>

          {/* Right Side - Navigation Menu */}
          <div className="flex-1 flex items-center justify-end gap-6">
              <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`text-xs font-light uppercase tracking-[0.04em] relative group transition-colors ${
                        isTransparent
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
              {!isMobileMenuOpen && (
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  className={`lg:hidden flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    isTransparent ? 'text-white hover:bg-white/10' : 'text-[#1a1a1a] hover:bg-gray-100'
                  }`}
                  aria-label="Open menu"
                >
                  <span className="text-sm font-light uppercase tracking-[0.02em]">Menu</span>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              )}

              {/* Enquiry Form Button */}
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(true)}
                className={`hidden lg:block px-5 py-2 rounded-full text-sm font-medium tracking-[0.01em] border-2 hover:bg-white transition-colors whitespace-nowrap ${
                  isTransparent
                    ? 'border-white text-white hover:text-[#1a1a1a]'
                    : 'border-[#1a1a1a] text-[#1a1a1a] hover:text-[#1a1a1a]'
                }`}
              >
                Enquiry Form
              </button>
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
            <div className="flex items-center justify-between px-6 py-2 border-b border-gray-200 shrink-0">
              <Image
                src="/logo/main-logo.png"
                alt="Bahrainwala"
                width={200}
                height={90}
                className="h-12 w-auto"
              />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-[#1a1a1a]"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content - Navigation Links, Contact Info, Social Icons */}
            <div className="flex-1 overflow-y-auto">
              {/* Navigation Links */}
              <nav className="py-3">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-5 py-3 text-sm font-light uppercase tracking-[0.02em] transition-colors ${
                        isActive
                          ? 'text-[#E46231] bg-gray-50'
                          : 'text-[#1a1a1a] hover:text-[#E46231] hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              {/* Contact Info */}
              <div className="px-5 py-3 border-t border-gray-200">
                <p className="text-xs font-light text-[#1a1a1a] mb-2 uppercase tracking-[0.02em]">Contact</p>
                <div className="space-y-2">
                  <a href="tel:+97142250300" className="flex items-center gap-2.5 text-sm font-light text-[#1a1a1a] hover:text-[#E46231] transition-colors">
                    <svg className="w-4 h-4 text-[#E46231]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+971 4 2250300</span>
                  </a>
                  <a href="mailto:sales.bahrainwala@gmail.com" className="flex items-center gap-2.5 text-sm font-light text-[#1a1a1a] hover:text-[#E46231] transition-colors">
                    <svg className="w-4 h-4 text-[#E46231]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>sales.bahrainwala@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="px-5 py-3 border-t border-gray-200">
                <p className="text-xs font-light text-[#1a1a1a] mb-2 uppercase tracking-[0.02em]">Follow</p>
                <div className="flex items-center gap-3">
                  <a href="#" aria-label="Facebook" className="p-2 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors border-gray-300 text-[#1a1a1a]">
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="p-2 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors border-gray-300 text-[#1a1a1a]">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="p-2 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors border-gray-300 text-[#1a1a1a]">
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="YouTube" className="p-2 border rounded-full hover:border-[#E46231] hover:text-[#E46231] transition-colors border-gray-300 text-[#1a1a1a]">
                    <FaYoutube className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Enquiry Form Button */}
              <div className="px-5 py-3 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setIsEnquiryOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-5 py-2.5 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-xs font-semibold tracking-[0.01em] hover:bg-white hover:text-[#1a1a1a] transition-colors"
                >
                  Enquiry Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </header>
  );
}
