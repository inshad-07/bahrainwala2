'use client';

import React, { useEffect, useRef } from 'react';
import { Clock, Download, MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = footerRef.current?.querySelectorAll<HTMLElement>('[data-footer-reveal]');
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

  return (
    <footer ref={footerRef} className="footer-reveal w-full font-sans text-white">
      {/* Top Downloads Section */}
      <div className="bg-[#1a1a1a] w-full border-b border-gray-800">
        <div className="templateContainer py-4 md:py-6 relative flex flex-col md:flex-row items-center justify-between">
          <div className="z-10 order-1 md:order-0 mb-2 md:mb-0 w-full md:w-auto scroll-reveal [--reveal-delay:100ms]" data-footer-reveal>
            <h3 className="text-xs md:text-sm font-normal tracking-[0.04em] mb-1 uppercase">Download</h3>
            <h2 className="text-xl md:text-3xl font-light font-seasonmix leading-8 md:leading-15.5 tracking-[1.02px]">Bahrainwala Building Materials Trading CO LLC</h2>
          </div>

          {/* Catalog Image - Positioned absolutely for the overlap effect seen in the design */}
          <div className="absolute right-4 md:right-52 top-24 md:-top-4 z-0 scroll-reveal [--reveal-delay:300ms]" data-footer-reveal data-reveal-effect="zoom-in">
            <img
              src="/about/6517790d-f812-4330-b945-3615f6a858d0.webp"
              alt="Catalog Brochure"
              className="h-20 md:h-32 object-contain rotate-12 drop-shadow-xl"
            />
          </div>

          <div className="z-10 order-3 md:order-0 mt-2 md:mt-0 w-full md:w-auto scroll-reveal [--reveal-delay:200ms]" data-footer-reveal data-reveal-effect="fade-left">
            <a
              href="/BAHRAINWALA-CATALOGE.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-[#2d2d2d] px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-normal tracking-[0.01em] hover:bg-gray-100 transition-colors"
            >
              <span>Download</span>
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#2d2d2d] w-full pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="templateContainer">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-10">

            {/* Column 1: Company Info */}
            <div className="lg:col-span-4 space-y-4 md:space-y-6 scroll-reveal [--reveal-delay:100ms]" data-footer-reveal>
              <Image
                src="/logo/main-logo.png"
                alt="Bahrainwala Building Materials Trading CO LLC"
                width={515}
                height={233}
                className="w-full max-w-32 md:max-w-40 object-contain brightness-0 invert"
              />
              <p className="text-gray-300 text-sm leading-relaxed tracking-[0.01em]">
                Bahrainwala Building Materials Trading CO LLC is a trusted supplier of quality building materials, offering a wide range of products for construction and trading needs.
              </p>
              <p className="flex items-center gap-2 text-gray-300 text-sm tracking-[0.01em]">
                <Clock size={16} className="shrink-0" />
                <span>8am - 1pm, 4pm - 8pm</span>
              </p>
            </div>

            {/* Column 2: Company Links */}
            <div className="lg:col-span-2 lg:ml-8 scroll-reveal [--reveal-delay:200ms]" data-footer-reveal>
              <h3 className="text-base font-normal font-seasonmix mb-3 md:mb-6 uppercase tracking-[1.02px]">Company</h3>
              <ul className="space-y-2 md:space-y-3 [&_a]:text-[13px] md:[&_a]:text-sm">
                <li><Link href="/" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/products" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/brands" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Brands</Link></li>
                <li><Link href="/contact" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Column 3: Products Links */}
            <div className="lg:col-span-3 scroll-reveal [--reveal-delay:300ms]" data-footer-reveal>
              <h3 className="text-base font-normal font-seasonmix mb-3 md:mb-6 uppercase tracking-[1.02px]">Products</h3>
              <ul className="space-y-2 md:space-y-3 [&_a]:text-[13px] md:[&_a]:text-sm">
                <li><Link href="/products" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Building Materials</Link></li>
                <li><Link href="/products" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Cement & Concrete</Link></li>
                <li><Link href="/products" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Steel & Iron</Link></li>
                <li><Link href="/products" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Paint & Chemicals</Link></li>
                <li><Link href="/products" className="text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">Tiles & Sanitary</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Social */}
            <div className="lg:col-span-3 scroll-reveal [--reveal-delay:400ms]" data-footer-reveal>
              <h3 className="text-base font-normal font-seasonmix mb-3 md:mb-6 uppercase tracking-[1.02px]">Get in touch</h3>
              <ul className="space-y-3 md:space-y-4 mb-5 md:mb-8">
                <li className="flex items-start gap-3 text-gray-300 text-sm tracking-[0.01em]">
                  <MapPin className="mt-1 shrink-0" size={18} />
                  <span>Shop 1, Al Najah Building, Deira, Dubai</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">
                  <Phone size={18} className="shrink-0" />
                  <span>
                    <a href="tel:+97142250300">+971 4 2250300</a> / <a href="tel:+97142503515">+971 4 2503515</a>
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm tracking-[0.01em] hover:text-white transition-colors">
                  <Mail size={18} className="shrink-0" />
                  <a href="mailto:sales.bahrainwala@gmail.com">sales.bahrainwala@gmail.com</a>
                </li>
              </ul>

              <div className="flex gap-2 md:gap-3">
                <a href="#" aria-label="Facebook" className="p-2 border border-gray-400 rounded-full text-gray-300 hover:bg-white hover:text-[#2d2d2d] transition-all">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" aria-label="Instagram" className="p-2 border border-gray-400 rounded-full text-gray-300 hover:bg-white hover:text-[#2d2d2d] transition-all">
                  <FaInstagram size={14} />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2 border border-gray-400 rounded-full text-gray-300 hover:bg-white hover:text-[#2d2d2d] transition-all">
                  <FaLinkedinIn size={14} />
                </a>
                <a href="#" aria-label="YouTube" className="p-2 border border-gray-400 rounded-full text-gray-300 hover:bg-white hover:text-[#2d2d2d] transition-all">
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-[#0d0d0d] w-full py-3 md:py-4 text-sm text-gray-400">
        <div className="templateContainer">
          <p className="text-sm text-gray-400 tracking-[0.01em]">Copyright © 2026 Bahrainwala Building Materials Trading CO LLC. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
