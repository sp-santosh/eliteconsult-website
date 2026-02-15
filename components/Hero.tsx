'use client';

import { COLORS } from '@/lib/constants';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: `linear-gradient(135deg, ${COLORS.light} 0%, white 100%)` }}>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: COLORS.primary }}>Elite Consulting Solutions</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">Professional tax filing, audit reports, and tax clearance services for businesses and individuals in Nepal</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition" style={{ backgroundColor: COLORS.primary }}>Explore Services</Link>
          <Link href="/contact" className="px-8 py-4 font-semibold rounded-lg border-2 hover:opacity-90 transition" style={{ color: COLORS.primary, borderColor: COLORS.primary, backgroundColor: 'transparent' }}>Schedule Consultation</Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-20">
          <div>
            <div className="text-3xl font-bold" style={{ color: COLORS.secondary }}>500+</div>
            <p className="text-gray-600">Clients Served</p>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{ color: COLORS.secondary }}>15+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{ color: COLORS.secondary }}>100%</div>
            <p className="text-gray-600">Compliance Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
