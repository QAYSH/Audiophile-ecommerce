// lib/resend.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const orderConfirmationTemplate = (order: any) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation - Audiophile</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body { 
      font-family: 'Arial', sans-serif; 
      line-height: 1.6; 
      color: #191919; 
      background-color: #fafafa;
      padding: 20px;
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header { 
      background: #000000; 
      color: #ffffff; 
      padding: 30px 20px; 
      text-align: center; 
    }
    .content { 
      padding: 30px; 
    }
    .order-summary { 
      background: #f1f1f1; 
      padding: 25px; 
      border-radius: 8px; 
      margin: 25px 0; 
    }
    .order-item { 
      display: flex; 
      justify-content: space-between; 
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #ddd;
    }
    .order-item:last-child { 
      border-bottom: none; 
    }
    .totals { 
      border-top: 2px solid #d87d4a; 
      padding-top: 20px; 
      margin-top: 20px; 
    }
    .total-row { 
      display: flex; 
      justify-content: space-between; 
      margin: 8px 0; 
    }
    .grand-total { 
      font-size: 18px; 
      font-weight: bold; 
      color: #d87d4a; 
      margin-top: 15px;
    }
    .shipping-info { 
      background: #f9f9f9; 
      padding: 20px; 
      border-radius: 8px; 
      margin: 20px 0; 
    }
    .footer { 
      text-align: center; 
      margin-top: 40px; 
      color: #666; 
      font-size: 14px;
      padding: 20px;
      border-top: 1px solid #eee;
    }
    .audiophile-logo {
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 3px;
      margin-bottom: 10px;
    }
    .thank-you {
      font-size: 24px;
      font-weight: bold;
      margin: 20px 0;
      color: #000;
    }
    .order-number {
      background: #d87d4a;
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      display: inline-block;
      margin: 10px 0;
    }
    @media (max-width: 600px) {
      .content {
        padding: 20px;
      }
      .order-summary {
        padding: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="audiophile-logo">AUDIOPHILE</div>
      <h1>Order Confirmation</h1>
    </div>
    
    <div class="content">
      <div class="thank-you">Thank you for your order, ${order.name}!</div>
      
      <p>Your order has been confirmed and will be shipped soon. Here's your order summary:</p>
      
      <div class="order-number">
        Order #${order.orderNumber}
      </div>
      
      <div class="order-summary">
        <h3 style="margin-bottom: 20px;">Order Details</h3>
        
        ${order.items.map((item: any) => `
          <div class="order-item">
            <div>
              <strong style="display: block; margin-bottom: 4px;">${item.name}</strong>
              <span style="color: #666; font-size: 14px;">$${item.price?.toLocaleString() || '0'} × ${item.quantity || 1}</span>
            </div>
            <strong>$${((item.price || 0) * (item.quantity || 1)).toLocaleString()}</strong>
          </div>
        `).join('')}
        
        <div class="totals">
          <div class="total-row">
            <span>Subtotal:</span>
            <span>$${order.subtotal?.toLocaleString() || '0'}</span>
          </div>
          <div class="total-row">
            <span>Shipping:</span>
            <span>$${order.shipping?.toLocaleString() || '0'}</span>
          </div>
          <div class="total-row">
            <span>VAT (20%):</span>
            <span>$${order.vat?.toLocaleString() || '0'}</span>
          </div>
          <div class="total-row grand-total">
            <span>Grand Total:</span>
            <span>$${order.grandTotal?.toLocaleString() || '0'}</span>
          </div>
        </div>
      </div>
      
      <div class="shipping-info">
        <h4 style="margin-bottom: 15px;">Shipping Address</h4>
        <p style="line-height: 1.8;">
          <strong>${order.name}</strong><br>
          ${order.address}<br>
          ${order.city}, ${order.zip}<br>
          ${order.country}
        </p>
        
        <h4 style="margin: 20px 0 10px 0;">Contact Information</h4>
        <p>
          <strong>Email:</strong> ${order.email}<br>
          <strong>Phone:</strong> ${order.phone}
        </p>
        
        <h4 style="margin: 20px 0 10px 0;">Payment Method</h4>
        <p><strong>${order.paymentMethod === 'e-money' ? 'e-Money' : 'Cash on Delivery'}</strong></p>
      </div>
      
      <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #2d5016;">
          <strong>📦 Estimated delivery:</strong> 3-5 business days
        </p>
      </div>
      
      <p>You'll receive a shipping confirmation email when your order is on its way.</p>
    </div>
    
    <div class="footer">
      <p>If you have any questions about your order, please contact our customer service team:</p>
      <p style="margin: 10px 0;">
        <strong>📞 Phone:</strong> +1 (555) 123-4567<br>
        <strong>✉️ Email:</strong> support@audiophile.com
      </p>
      <p style="margin-top: 20px; color: #999;">
        &copy; 2024 Audiophile. All rights reserved.<br>
        123 Audio Street, New York, NY 10001
      </p>
    </div>
  </div>
</body>
</html>
`;

export const sendOrderConfirmationEmail = async (order: any) => {
  try {
    console.log('Attempting to send email to:', order.email);
    
    const { data, error } = await resend.emails.send({
      from: 'Audiophile <onboarding@resend.dev>',
      to: [order.email],
      subject: `Order Confirmation #${order.orderNumber} - Audiophile`,
      html: orderConfirmationTemplate(order),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};