// app/product/yx1-earphones/page.tsx - Exact Figma design
'use client';

import { Header } from '../../../components/layout/header';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../../lib/cart-context';

export default function YX1Earphones() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'yx1-earphones',
      name: 'YX1 Wireless Earphones',
      price: 599, // Assuming $599
      quantity: quantity,
      image: '/assets/product-yx1-earphones/desktop/image-product.jpg'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Back Button */}
      <section className="container mx-auto px-6 py-8">
        <Link href="/category/earphones" className="text-gray-500 hover:text-black transition-colors inline-flex items-center">
          ← Go Back
        </Link>
      </section>

      {/* Product Main Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-600">[YX1 EARPHONES Main Image]</span>
          </div>
          
          {/* Product Content */}
          <div className="text-center md:text-left">
            <span className="text-orange-500 text-sm uppercase tracking-[10px] mb-4 block">
              New Product
            </span>
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              YX1 WIRELESS EARPHONES
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tailor your listening experience with bespoke dynamic drivers from the new YX1 
              Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments 
              with its active noise cancellation feature.
            </p>
            <div className="text-lg font-bold mb-8">
              $ 599
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button 
                  className="px-4 py-2 text-gray-500 hover:text-black"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                <button 
                  className="px-4 py-2 text-gray-500 hover:text-black"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <Button variant="primary" onClick={handleAddToCart}>
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features & In The Box */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Features */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">FEATURES</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Experience the ultimate freedom of truly wireless audio. The YX1 earphones 
                feature the latest Bluetooth 5.2 technology for stable, high-quality connections 
                and low power consumption. With up to 6 hours of battery life and an additional 
                18 hours from the charging case, you can enjoy your music all day long.
              </p>
              <p>
                These earphones are designed for comfort and stability, with multiple ear tip 
                sizes included to ensure a perfect fit for every user. The IPX4 rating means 
                they're resistant to sweat and light rain, making them perfect for workouts 
                and outdoor activities.
              </p>
            </div>
          </div>
          
          {/* In The Box */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">IN THE BOX</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">2x</span>
                <span className="text-gray-600">Earphone Unit</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">6x</span>
                <span className="text-gray-600">Multi-size Earplugs</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">User Manual</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">USB-C Charging Cable</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Travel Pouch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-600">[YX1 Gallery Image 1]</span>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-600">[YX1 Gallery Image 2]</span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg h-[calc(512px+1rem)] flex items-center justify-center">
            <span className="text-gray-600">[YX1 Gallery Image 3]</span>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-12 text-center">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-6">
              <span className="text-gray-600">[XX99 MARK I Image]</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">XX99 MARK I</h3>
            <Button variant="primary" href="/product/xx99-mark-i-headphones" className="w-full">
              SEE PRODUCT
            </Button>
          </div>
          
          {/* Product 2 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-6">
              <span className="text-gray-600">[XX59 Image]</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">XX59</h3>
            <Button variant="primary" href="/product/xx59-headphones" className="w-full">
              SEE PRODUCT
            </Button>
          </div>
          
          {/* Product 3 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-6">
              <span className="text-gray-600">[ZX9 SPEAKER Image]</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">ZX9 SPEAKER</h3>
            <Button variant="primary" href="/product/zx9-speaker" className="w-full">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Headphones Card */}
          <div className="bg-gray-100 rounded-lg relative cursor-pointer h-40 md:h-48">
            <Link href="/category/headphones" className="block h-full">
              <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs">Headphones</span>
                </div>
              </div>
              <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <h3 className="font-bold uppercase mb-2 text-sm md:text-base">HEADPHONES</h3>
                <div className="text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-1 md:gap-2 hover:text-orange-500 transition-colors mx-auto">
                  SHOP
                  <svg width="6" height="10" className="md:w-2 md:h-3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Speakers Card */}
          <div className="bg-gray-100 rounded-lg relative cursor-pointer h-40 md:h-48">
            <Link href="/category/speakers" className="block h-full">
              <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs">Speakers</span>
                </div>
              </div>
              <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <h3 className="font-bold uppercase mb-2 text-sm md:text-base">SPEAKERS</h3>
                <div className="text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-1 md:gap-2 hover:text-orange-500 transition-colors mx-auto">
                  SHOP
                  <svg width="6" height="10" className="md:w-2 md:h-3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Earphones Card */}
          <div className="bg-gray-100 rounded-lg relative cursor-pointer h-40 md:h-48">
            <Link href="/category/earphones" className="block h-full">
              <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs">Earphones</span>
                </div>
              </div>
              <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <h3 className="font-bold uppercase mb-2 text-sm md:text-base">EARPHONES</h3>
                <div className="text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-1 md:gap-2 hover:text-orange-500 transition-colors mx-auto">
                  SHOP
                  <svg width="6" height="10" className="md:w-2 md:h-3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          {/* Image Side */}
          <div className="bg-gray-100 rounded-lg h-64 md:h-96 flex items-center justify-center">
            <span className="text-gray-600">[About Us Image]</span>
          </div>
          
          {/* Content Side */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6 md:mb-8 leading-tight">
              BRINGING YOU THE BEST AUDIO GEAR
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
              earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
              rooms available for you to browse and experience a wide range of our products. Stop by our store 
              to meet some of the fantastic people who make Audiophile the best place to buy your portable 
              audio equipment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}