// app/api/send-confirmation/route.ts - FIXED VERSION
import { NextRequest, NextResponse } from 'next/server';
import { sendOrderConfirmationEmail } from '@/lib/nodemailer';

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
      
      // FIX: Nodemailer returns different response structure than Resend
      const emailId = result.data && 'messageId' in result.data 
        ? result.data.messageId 
        : 'sent'; // Fallback for when email is skipped in development
      
      return NextResponse.json({ 
        message: 'Email sent successfully',
        emailId: emailId
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