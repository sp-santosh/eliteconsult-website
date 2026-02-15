'use client';

import Link from 'next/link';
import { NAV_LINKS, COLORS } from '@/lib/constants';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.light }}>
              <span className="font-bold text-lg" style={{ color: COLORS.primary }}>EC</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline" style={{ color: COLORS.primary }}>Elite Consultants</span>
          </Link>

          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="font-medium" style={{ color: COLORS.dark }}>
                {link.label}
              </Link>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" style={{ color: COLORS.primary }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2" style={{ color: COLORS.dark }} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
