'use client';

import { TESTIMONIALS, COLORS } from '@/lib/constants';

export function Testimonials() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: COLORS.light }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Success stories from businesses we've helped</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} style={{ color: COLORS.secondary }} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
