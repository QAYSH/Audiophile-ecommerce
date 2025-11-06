// lib/resend.ts
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Use your Vercel deployment name or Resend's domain
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 
  'audiophile@resend.dev' || 
  `noreply@${process.env.VERCEL_URL?.replace('https://', '')}` || 
  'onboarding@resend.dev';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface OrderData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: 'e-money' | 'cash';
  eMoneyNumber?: string;
  eMoneyPin?: string;
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

// Your existing email template function remains the same...
export const orderConfirmationTemplate = (order: OrderData) => { /* ... */ };

export const sendOrderConfirmationEmail = async (order: OrderData) => {
  try {
    console.log('Attempting to send email to:', order.email);
    
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [order.email],
      subject: `Order Confirmation #${order.orderNumber} - Audiophile`,
      html: orderConfirmationTemplate(order),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error };
    }

    console.log('✅ Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    return { success: false, error };
  }
};