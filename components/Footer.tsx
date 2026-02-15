'use client';

import Link from 'next/link';
import { COMPANY, COLORS, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: COLORS.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: COLORS.secondary }}>{COMPANY.name}</h3>
            <p className="text-gray-300 mb-4">{COMPANY.location}</p>
            <p className="text-gray-300">Email: <a href={`mailto:${COMPANY.email}`} className="hover:underline">{COMPANY.email}</a></p>
            <p className="text-gray-300">Phone: <a href={`tel:${COMPANY.phone}`} className="hover:underline">{COMPANY.phone}</a></p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: COLORS.secondary }}>Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-gray-300 hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: COLORS.secondary }}>Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services#tax-filing" className="hover:text-white">Tax Filing</Link></li>
              <li><Link href="/services#audit-reports" className="hover:text-white">Audit Reports</Link></li>
              <li><Link href="/services#tax-clearance" className="hover:text-white">Tax Clearance Certificate</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
