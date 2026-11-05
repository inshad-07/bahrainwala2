import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md font-sans">
      <div className="flex justify-between items-stretch">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center pl-4 lg:pl-10 pr-10 py-2">
          <Link href="/">
            <Image
              src="/logo/main-logo.png"
              alt="Bahrainwala"
              width={515}
              height={233}
              className="h-14 lg:h-[72px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Right Side: Navigation Area */}
        <div className="flex-1 flex flex-col hidden lg:flex">
          
          {/* Header Tertiary (Top Teal Bar) */}
          <div className="w-full flex justify-end h-[42px]">
            <div
              className="bg-[#38b2ac] flex items-center justify-end px-6 lg:px-12 w-full max-w-[900px]"
              style={{ clipPath: 'polygon(2rem 0, 100% 0, 100% 100%, 0% 100%)' }}
            >
              <ul className="flex space-x-7 text-white text-[14px] items-center tracking-wide">
                <li>
                  <Link href="/find-a-doctor" className="hover:font-semibold transition-all">Find a Doctor</Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:font-semibold transition-all">Blogs</Link>
                </li>
                <li>
                  <a href="https://patient.maxhospitals.in/max/patient/login" target="_blank" rel="noreferrer" className="hover:font-semibold transition-all">My Reports</a>
                </li>
                <li>
                  <Link href="/opd" className="hover:font-semibold transition-all">Outstation OPD</Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:font-semibold transition-all">Contact Us</Link>
                </li>
                <li className="font-bold text-[15px]">
                  <a href="tel:+912268360000" className="hover:underline">+91 22 6836 0000</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Header Secondary (Main White Nav) */}
          <div className="flex justify-end items-center h-[70px] px-6 lg:px-12 bg-white">
            <ul className="flex space-x-8 text-[#003974] text-[16px] font-medium items-center">
              
              {/* Treatments Dropdown */}
              <li className="group flex items-center cursor-pointer hover:text-[#38b2ac] transition-colors">
                <span>Treatments</span>
                <svg className="w-5 h-5 ml-0.5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </li>

              {/* Standard Links */}
              <li className="cursor-pointer hover:text-[#38b2ac] transition-colors">
                <Link href="/academics">Academics</Link>
              </li>
              <li className="cursor-pointer hover:text-[#38b2ac] transition-colors">
                <Link href="/international">International Patients</Link>
              </li>

              {/* Quick Enquiry Dropdown */}
              <li className="group flex items-center cursor-pointer hover:text-[#38b2ac] transition-colors">
                <span>Quick Enquiry</span>
                <svg className="w-5 h-5 ml-0.5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </li>

              {/* Search Icon */}
              <li className="cursor-pointer pl-2">
                <svg className="w-[22px] h-[22px] text-[#003974] hover:text-[#38b2ac] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}