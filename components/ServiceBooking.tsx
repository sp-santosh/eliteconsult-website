'use client';

import { useState } from 'react';
import { SERVICES, COLORS } from '@/lib/constants';

export function ServiceBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Booking request submitted! We will confirm your appointment soon.');
        setFormData({ name: '', email: '', phone: '', service: '', preferredDate: '' });
      } else {
        setMessage('Error submitting booking. Please try again.');
      }
    } catch (error) {
      setMessage('Error submitting booking. Please try again.');
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }} placeholder="your@email.com" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }} placeholder="+977 98XXXXXXXX" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Service *</label>
        <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }}>
          <option value="">Choose a service...</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.id}>{service.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
        <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }} />
      </div>

      {message && (
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: message.includes('submitted') ? '#D1FAE5' : '#FEE2E2', color: message.includes('submitted') ? '#065F46' : '#991B1B' }}>
          {message}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="w-full text-white font-bold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50" style={{ backgroundColor: COLORS.secondary }}>
        {isSubmitting ? 'Booking...' : 'Book Appointment'}
      </button>
    </form>
  );
}
