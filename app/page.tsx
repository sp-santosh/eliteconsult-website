import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { COLORS } from '@/lib/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Tax & Audit Compliance?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Contact us today for a free consultation with our expert team
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white font-bold rounded-lg hover:opacity-90 transition"
            style={{ color: COLORS.primary }}
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
