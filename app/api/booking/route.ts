import { NextRequest, NextResponse } from 'next/server';
import { SERVICES } from '@/lib/constants';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, preferredDate } = await request.json();
    if (!name || !email || !phone || !service || !preferredDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const validService = SERVICES.find((s) => s.id === service);
    if (!validService) {
      return NextResponse.json({ error: 'Invalid service selected' }, { status: 400 });
    }
    console.log('Booking Request:', { name, email, phone, service, preferredDate, timestamp: new Date().toISOString() });
    return NextResponse.json({ success: true, message: 'Booking request submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
