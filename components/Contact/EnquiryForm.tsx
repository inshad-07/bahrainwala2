'use client';

import React, { useState, useEffect } from 'react';

type EnquiryFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EnquiryForm({ isOpen, onClose }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // TODO: wire up form submission (email / API)
    onClose();
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-medium text-[#1a1a1a]">Enquiry Form</h2>
            <p className="mt-1 text-sm text-neutral-500">
              Fill in your details and we&apos;ll get back to you.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-[#f97316] transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
              Name <span className="text-red-500">*</span>
            </span>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-[#1a1a1a] transition-colors placeholder:text-neutral-400 focus:border-[#f97316] focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
              Phone <span className="text-red-500">*</span>
            </span>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+971 4 000 0000"
              className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-[#1a1a1a] transition-colors placeholder:text-neutral-400 focus:border-[#f97316] focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-[#1a1a1a] transition-colors placeholder:text-neutral-400 focus:border-[#f97316] focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
              Message <span className="text-red-500">*</span>
            </span>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help you?"
              className="w-full resize-none rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-[#1a1a1a] transition-colors placeholder:text-neutral-400 focus:border-[#f97316] focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-[#f97316] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#ea580c]"
          >
            Send enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
