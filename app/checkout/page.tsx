// app/checkout/page.tsx - UPDATED WITH CONVEX INTEGRATION
'use client';

import { Header } from '../../components/layout/header';
import { useCart } from '../../lib/cart-context';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import Image from 'next/image';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

// Define validation schema with Zod
const checkoutSchema = z.object({
  // Billing Details
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  
  // Shipping Info
  address: z.string().min(1, 'Address is required'),
  zip: z.string().min(1, 'ZIP code is required'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
  
  // Payment Details
  paymentMethod: z.enum(['e-money', 'cash']),
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
}).refine((data) => {
  if (data.paymentMethod === 'e-money') {
    return data.eMoneyNumber && data.eMoneyPin;
  }
  return true;
}, {
  message: "e-Money number and PIN are required when using e-Money",
  path: ["eMoneyNumber"]
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

// Helper function to get product image based on product name
const getProductImage = (productName: string | undefined) => {
  if (!productName) {
    return '/images/homepage-headphone.png';
  }

  const imageMap: { [key: string]: string } = {
    'XX99 MARK II HEADPHONES': '/images/homepage-headphone.png',
    'XX99 MARK I HEADPHONES': '/images/headphone2.png',
    'XX59 HEADPHONES': '/images/headphone3.png',
    'ZX9 SPEAKER': '/images/homepage-speaker.png',
    'ZX7 SPEAKER': '/images/speaker2.png',
    'YX1 WIRELESS EARPHONES': '/images/homepage-earphone.png',
    'XX99 MARK II': '/images/homepage-headphone.png',
    'XX99 MARK I': '/images/headphone2.png',
    'XX59': '/images/headphone3.png',
    'ZX9': '/images/homepage-speaker.png',
    'ZX7': '/images/speaker2.png',
    'YX1': '/images/homepage-earphone.png',
  };

  return imageMap[productName.toUpperCase()] || '/images/homepage-headphone.png';
};

// Order Confirmation Modal Component
function OrderConfirmationModal({ 
  isOpen, 
  onClose, 
  orderNumber,
  grandTotal,
  cartItems 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  orderNumber: string;
  grandTotal: number;
  cartItems: any[];
}) {
  if (!isOpen) return null;

  const firstItem = cartItems[0];
  const otherItemsCount = cartItems.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
          <span className="text-white text-2xl">✓</span>
        </div>

        <h2 className="text-2xl font-bold uppercase mb-4">
          THANK YOU<br />FOR YOUR ORDER
        </h2>
        
        <p className="text-gray-600 mb-6">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
          {/* First Item */}
          {firstItem && (
            <div className="p-4 flex items-center justify-between border-b border-gray-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={getProductImage(firstItem?.name)}
                    alt={firstItem?.name || 'Product'}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{firstItem?.name || 'Product'}</h3>
                  <p className="text-gray-500 text-sm">${firstItem?.price?.toLocaleString() || '0'}</p>
                </div>
              </div>
              <div className="text-gray-500 text-sm font-bold">
                x{firstItem?.quantity || 1}
              </div>
            </div>
          )}

          {/* Other Items */}
          {otherItemsCount > 0 && (
            <div className="p-4 text-center border-t border-gray-300">
              <p className="text-gray-600 text-sm">
                and {otherItemsCount} other item(s)
              </p>
            </div>
          )}
        </div>

        {/* Grand Total */}
        <div className="bg-black text-white p-6 rounded-lg">
          <p className="text-gray-400 uppercase text-sm mb-2">GRAND TOTAL</p>
          <p className="text-lg font-bold">${grandTotal.toLocaleString()}</p>
        </div>

        {/* Order Number */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Order #: <span className="font-bold">{orderNumber}</span>
          </p>
        </div>

        {/* Back to Home Button */}
        <Button 
          variant="primary" 
          href="/"
          className="w-full mt-6"
          onClick={onClose}
        >
          BACK TO HOME
        </Button>
      </div>
    </div>
  );
}

// Main Checkout Page Component
export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderData, setOrderData] = useState<{orderNumber: string; grandTotal: number} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Convex mutation
  const createOrderMutation = useMutation(api.orders.createOrder);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: 'e-money',
    },
  });

  // Watch payment method to conditionally show fields
  const paymentMethod = watch('paymentMethod');

  const shippingCost = 50;
  const vatRate = 0.2;
  const vatAmount = getTotalPrice() * vatRate;
  const grandTotal = getTotalPrice() + shippingCost;

  // Form submission handler
  const onSubmit = async (data: CheckoutFormData) => {
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Creating order with data:', {
        ...data,
        items: cartItems,
        subtotal: getTotalPrice(),
        shipping: shippingCost,
        vat: vatAmount,
        grandTotal: grandTotal,
      });

      // Create order in Convex
      const result = await createOrderMutation({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        zip: data.zip,
        city: data.city,
        country: data.country,
        paymentMethod: data.paymentMethod,
        eMoneyNumber: data.eMoneyNumber || undefined,
        eMoneyPin: data.eMoneyPin || undefined,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name || 'Unknown Product',
          price: item.price || 0,
          quantity: item.quantity || 1,
          image: getProductImage(item.name),
        })),
        subtotal: getTotalPrice(),
        shipping: shippingCost,
        vat: vatAmount,
        grandTotal: grandTotal,
      });

      console.log('Order created successfully:', result);

      // Send confirmation email
      try {
        console.log('Attempting to send confirmation email...');
        const emailResult = await fetch('/api/send-confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            orderNumber: result.orderNumber,
            items: cartItems,
            subtotal: getTotalPrice(),
            shipping: shippingCost,
            vat: vatAmount,
            grandTotal: grandTotal,
          }),
        });

        const emailData = await emailResult.json();
        
        if (emailResult.ok) {
          console.log('✅ Confirmation email sent successfully:', emailData);
        } else {
          console.warn('⚠️ Failed to send email, but order was created:', emailData);
        }
      } catch (emailError) {
        console.warn('⚠️ Email sending failed, but order was created:', emailError);
      }

      // Show confirmation modal
      setOrderData({
        orderNumber: result.orderNumber,
        grandTotal: grandTotal
      });
      setShowConfirmation(true);
      
      // Clear cart after successful order
      clearCart();
      
    } catch (error) {
      console.error('❌ Failed to create order:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0 && !showConfirmation) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some products to your cart before checking out.</p>
            <Button variant="primary" href="/category/headphones">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-6 py-8 bg-gray-100 min-h-screen">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-black transition-colors inline-flex items-center"
          >
            ← Go Back
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold uppercase mb-8">CHECKOUT</h1>
                
                {/* Billing Details Section */}
                <section className="mb-12">
                  <h2 className="text-lg font-bold text-orange-500 uppercase mb-6">Billing Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Alexei Ward"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="alexei@mail.com"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="md:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-bold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+1 202-555-0136"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Shipping Info Section */}
                <section className="mb-12">
                  <h2 className="text-lg font-bold text-orange-500 uppercase mb-6">Shipping Info</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Address */}
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-bold mb-2">
                        Your Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        placeholder="1137 Williams Avenue"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                          errors.address ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('address')}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    {/* ZIP Code */}
                    <div>
                      <label htmlFor="zip" className="block text-sm font-bold mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zip"
                        placeholder="10001"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                          errors.zip ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('zip')}
                      />
                      {errors.zip && (
                        <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-bold mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        placeholder="New York"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                          errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('city')}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                      )}
                    </div>

                    {/* Country */}
                    <div>
                      <label htmlFor="country" className="block text-sm font-bold mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        placeholder="United States"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                          errors.country ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('country')}
                      />
                      {errors.country && (
                        <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Payment Details Section */}
                <section>
                  <h2 className="text-lg font-bold text-orange-500 uppercase mb-6">Payment Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Payment Method */}
                    <div>
                      <label className="block text-sm font-bold mb-4">Payment Method</label>
                      
                      {/* e-Money Option */}
                      <div 
                        className={`flex items-center p-4 border rounded-lg mb-4 cursor-pointer ${
                          paymentMethod === 'e-money' ? 'border-orange-500' : 'border-gray-300'
                        }`}
                        onClick={() => setValue('paymentMethod', 'e-money')}
                      >
                        <input
                          type="radio"
                          id="e-money"
                          value="e-money"
                          className="mr-4"
                          {...register('paymentMethod')}
                        />
                        <label htmlFor="e-money" className="font-bold cursor-pointer">e-Money</label>
                      </div>

                      {/* Cash on Delivery Option */}
                      <div 
                        className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                          paymentMethod === 'cash' ? 'border-orange-500' : 'border-gray-300'
                        }`}
                        onClick={() => setValue('paymentMethod', 'cash')}
                      >
                        <input
                          type="radio"
                          id="cash"
                          value="cash"
                          className="mr-4"
                          {...register('paymentMethod')}
                        />
                        <label htmlFor="cash" className="font-bold cursor-pointer">Cash on Delivery</label>
                      </div>
                    </div>

                    {/* Payment Details Fields */}
                    <div className="space-y-4">
                      {/* Conditionally show e-Money fields */}
                      {paymentMethod === 'e-money' && (
                        <>
                          {/* e-Money Number */}
                          <div>
                            <label htmlFor="eMoneyNumber" className="block text-sm font-bold mb-2">
                              e-Money Number
                            </label>
                            <input
                              type="text"
                              id="eMoneyNumber"
                              placeholder="238521993"
                              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                                errors.eMoneyNumber ? 'border-red-500' : 'border-gray-300'
                              }`}
                              {...register('eMoneyNumber')}
                            />
                            {errors.eMoneyNumber && (
                              <p className="text-red-500 text-sm mt-1">{errors.eMoneyNumber.message}</p>
                            )}
                          </div>

                          {/* e-Money PIN */}
                          <div>
                            <label htmlFor="eMoneyPin" className="block text-sm font-bold mb-2">
                              e-Money PIN
                            </label>
                            <input
                              type="text"
                              id="eMoneyPin"
                              placeholder="6891"
                              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                                errors.eMoneyPin ? 'border-red-500' : 'border-gray-300'
                              }`}
                              {...register('eMoneyPin')}
                            />
                            {errors.eMoneyPin && (
                              <p className="text-red-500 text-sm mt-1">{errors.eMoneyPin.message}</p>
                            )}
                          </div>
                        </>
                      )}

                      {/* Show message for Cash on Delivery */}
                      {paymentMethod === 'cash' && (
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-500 text-2xl">💰</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 md:p-8">
                <h2 className="text-lg font-bold uppercase mb-8">SUMMARY</h2>
                
                {/* Cart Items */}
                <div className="space-y-6 mb-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                          <Image
                            src={getProductImage(item.name)}
                            alt={item.name || 'Product'}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        </div>
                        
                        {/* Product Info */}
                        <div>
                          <h3 className="font-bold text-sm">{item.name || 'Product'}</h3>
                          <p className="text-gray-500 text-sm">${item.price?.toLocaleString() || '0'}</p>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="text-gray-500 text-sm font-bold">
                        x{item.quantity || 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500 uppercase text-sm">TOTAL</span>
                    <span className="font-bold">${getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 uppercase text-sm">SHIPPING</span>
                    <span className="font-bold">${shippingCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 uppercase text-sm">VAT (INCLUDED)</span>
                    <span className="font-bold">${vatAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-4 mt-4">
                    <span className="text-gray-500 uppercase text-sm">GRAND TOTAL</span>
                    <span className="font-bold text-lg text-orange-500">
                      ${grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Continue & Pay Button */}
                <Button 
                  variant="primary" 
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'PROCESSING...' : 'CONTINUE & PAY'}
                </Button>
              </div>
            </div>
          </div>
        </form>

        {/* Order Confirmation Modal */}
        <OrderConfirmationModal
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          orderNumber={orderData?.orderNumber || ''}
          grandTotal={orderData?.grandTotal || 0}
          cartItems={cartItems}
        />
      </div>
    </div>
  );
}