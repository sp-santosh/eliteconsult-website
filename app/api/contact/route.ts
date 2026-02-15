import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    console.log('Contact Form:', { name, email, phone, subject, message, timestamp: new Date().toISOString() });
    return NextResponse.json({ success: true, message: 'Contact form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
