import { Metadata } from 'next';
import { COLORS, COMPANY } from '@/lib/constants';
import { ContactForm } from '@/components/ContactForm';
import { ServiceBooking } from '@/components/ServiceBooking';

export const metadata: Metadata = {
  title: 'Contact Us - Elite Consultants',
  description: 'Get in touch with Elite Consultants for tax, audit, and consulting services.',
};

export default function Contact() {
  return (
    <div>
      <section className="py-20 px-4" style={{ backgroundColor: COLORS.light }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>Get in Touch</h1>
          <p className="text-xl text-gray-600">Have questions? We're here to help. Reach out to us today.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: COLORS.primary }}>Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-3xl" style={{ color: COLORS.secondary }}>📍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Address</h3>
                    <p className="text-gray-600">{COMPANY.location}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl" style={{ color: COLORS.secondary }}>✉️</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href={'mailto:' + COMPANY.email} className="text-blue-600 hover:underline">{COMPANY.email}</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: COLORS.primary }}>Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: COLORS.light }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: COLORS.primary }}>Book an Appointment</h2>
          <ServiceBooking />
        </div>
      </section>
    </div>
  );
}
