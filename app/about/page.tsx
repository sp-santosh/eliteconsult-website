import { Metadata } from 'next';
import { COLORS, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us - Elite Consultants',
  description: 'Learn about Elite Consultants, our team, mission, and commitment to excellence in tax and consulting services.',
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: COLORS.light }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            About Elite Consultants
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted partner in tax, audit, and regulatory compliance
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Elite Consultants was founded with a simple mission: to provide reliable,
                professional tax and audit services to businesses and individuals across Nepal.
                With over 15 years of experience, we've built a reputation for excellence and
                unwavering commitment to our clients' success.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of certified professionals stays updated with the latest changes in
                Nepalese tax laws and international accounting standards, ensuring our clients
                always receive the most accurate and current advice.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From startups to established enterprises, we've helped over 500 clients navigate
                complex financial regulations and optimize their tax positions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Our Mission & Values
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: COLORS.secondary }}>
                    Mission
                  </h3>
                  <p className="text-gray-600">
                    To empower businesses and individuals with expert tax and audit services
                    that ensure compliance, minimize risk, and maximize financial outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: COLORS.secondary }}>
                    Vision
                  </h3>
                  <p className="text-gray-600">
                    To be the most trusted and preferred consulting partner for tax and
                    financial services in Nepal.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: COLORS.secondary }}>
                    Core Values
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>✓ Integrity and transparency</li>
                    <li>✓ Excellence and professionalism</li>
                    <li>✓ Client-centric approach</li>
                    <li>✓ Continuous learning and innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 py-12 px-8 rounded-lg" style={{ backgroundColor: COLORS.light }}>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: COLORS.secondary }}>
                500+
              </div>
              <p className="text-gray-600 mt-2">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: COLORS.secondary }}>
                15+
              </div>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: COLORS.secondary }}>
                100%
              </div>
              <p className="text-gray-600 mt-2">Compliance Rate</p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: COLORS.primary }}>
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Raj Kumar Sharma',
                  role: 'Founder & Chief Tax Consultant',
                  desc: 'CA with 20+ years in tax and compliance',
                },
                {
                  name: 'Anjali Thapa',
                  role: 'Senior Audit Manager',
                  desc: 'Expert in financial audits and compliance',
                },
                {
                  name: 'Deepak Poudel',
                  role: 'Tax Specialist',
                  desc: 'Specialized in business tax planning',
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="p-8 rounded-lg text-center hover:shadow-lg transition"
                  style={{ backgroundColor: COLORS.light }}
                >
                  <div className="text-6xl mb-4">👤</div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="font-semibold text-sm mb-3" style={{ color: COLORS.secondary }}>
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
