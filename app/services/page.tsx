import { Metadata } from 'next';
import { COLORS, SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services - Elite Consultants',
  description: 'Explore our comprehensive range of tax filing, audit, and tax clearance services.',
};

export default function ServicesPage() {
  return (
    <div>
      <section className="py-20 px-4" style={{ backgroundColor: COLORS.light }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive solutions for all your tax and audit needs</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <div key={service.id} id={service.id} className={`mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>{service.title}</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4" style={{ color: COLORS.secondary }}>What's Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-xl font-bold mt-1" style={{ color: COLORS.secondary }}>✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="px-8 py-3 font-bold rounded-lg text-white hover:opacity-90 transition" style={{ backgroundColor: COLORS.primary }}>Request Quote</button>
              </div>
              <div className="text-9xl text-center p-12 rounded-lg" style={{ backgroundColor: COLORS.light }}>{service.icon}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
