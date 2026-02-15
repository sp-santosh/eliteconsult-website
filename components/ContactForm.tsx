'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Thank you! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setMessage('Error submitting form. Please try again.');
      }
    } catch (error) {
      setMessage('Error submitting form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }} placeholder="your@email.com" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }} placeholder="+977 98XXXXXXXX" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }} placeholder="Inquiry subject" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none" style={{ borderColor: COLORS.primary }} placeholder="Your message here..." />
      </div>

      {message && (
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: message.includes('Thank you') ? '#D1FAE5' : '#FEE2E2', color: message.includes('Thank you') ? '#065F46' : '#991B1B' }}>
          {message}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="w-full text-white font-bold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50" style={{ backgroundColor: COLORS.primary }}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
