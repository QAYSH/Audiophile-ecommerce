// app/api/test-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendOrderConfirmationEmail } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const testOrder = {
      name: "Test Customer",
      email: "qaisshittu001@gmail.com", // Use Resend's test email
      phone: "+1 555-0123",
      address: "123 Test Street",
      zip: "10001",
      city: "New York",
      country: "United States",
      paymentMethod: "e-money" as const,
      orderNumber: "TEST123",
      items: [
        {
          id: "1",
          name: "XX99 MARK II HEADPHONES",
          price: 2999,
          quantity: 1,
          image: "/images/homepage-headphone.png"
        }
      ],
      subtotal: 2999,
      shipping: 50,
      vat: 599.8,
      grandTotal: 3648.8
    };

    const result = await sendOrderConfirmationEmail(testOrder);
    
    if (result.success) {
      return NextResponse.json({ 
        message: 'Test email sent successfully',
        emailId: result.data?.id 
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to send test email', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}