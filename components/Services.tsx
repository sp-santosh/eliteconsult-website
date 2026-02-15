'use client';

import { SERVICES, COLORS } from '@/lib/constants';

export function Services() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions tailored to your financial needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} id={service.id} className="p-8 rounded-lg border-2 hover:shadow-lg transition" style={{ borderColor: COLORS.secondary, backgroundColor: 'white' }}>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.primary }}>{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                <p className="font-semibold" style={{ color: COLORS.secondary }}>Key Features:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: COLORS.secondary }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
