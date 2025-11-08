// app/api/send-confirmation/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendOrderConfirmationEmail } from '@/lib/nodemailer'; // ← CHANGE THIS IMPORT

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    
    console.log('📧 Received order data for email:', {
      email: orderData.email,
      orderNumber: orderData.orderNumber,
      itemCount: orderData.items?.length
    });

    // Validate required fields
    if (!orderData.email || !orderData.orderNumber) {
      return NextResponse.json(
        { error: 'Missing required fields: email and orderNumber are required' },
        { status: 400 }
      );
    }

    const result = await sendOrderConfirmationEmail(orderData);
    
    if (result.success) {
      console.log('✅ Email sent successfully for order:', orderData.orderNumber);
      return NextResponse.json({ 
        message: 'Email sent successfully',
        emailId: result.data?.messageId 
      });
    } else {
      console.error('❌ Failed to send email:', result.error);
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('💥 Email API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}