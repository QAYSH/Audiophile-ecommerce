// components/cart/cart-modal.tsx
'use client';

import { useCart } from '../../lib/cart-context';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice 
  } = useCart();

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const shippingCost = 50; // Fixed shipping cost
  const vatRate = 0.2; // 20% VAT
  const vatAmount = getTotalPrice() * vatRate;
  const grandTotal = getTotalPrice() + shippingCost;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div 
        className="bg-white w-full max-w-md h-full md:h-auto md:max-h-[90vh] md:m-4 md:rounded-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold uppercase">
            Cart ({cartItems.length})
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="Close cart"
          >
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button variant="primary" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-6 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-400">Image</span>
                      </div>
                      
                      {/* Product Info */}
                      <div>
                        <h3 className="font-bold text-sm">{item.name}</h3>
                        <p className="text-gray-500 text-sm">${item.price.toLocaleString()}</p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Cart Button */}
              {cartItems.length > 0 && (
                <div className="mb-6">
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-500 hover:text-red-700 transition-colors"
                  >
                    Remove all items
                  </button>
                </div>
              )}

              {/* Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase text-sm">Total</span>
                  <span className="font-bold">${getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase text-sm">Shipping</span>
                  <span className="font-bold">${shippingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase text-sm">VAT (20%)</span>
                  <span className="font-bold">${vatAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="text-gray-500 uppercase text-sm">Grand Total</span>
                  <span className="font-bold text-lg">${grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <Button 
              variant="primary" 
              href="/checkout"
              className="w-full"
              onClick={onClose}
            >
              Checkout
            </Button>
            <div className="mt-4 text-center">
              <Link 
                href="/category/headphones" 
                className="text-sm text-gray-500 hover:text-black transition-colors"
                onClick={onClose}
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}