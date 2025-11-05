// app/product/zx9-speaker/page.tsx - Updated with images
'use client';

import { Header } from '../../../components/layout/header';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../../lib/cart-context';
import Image from 'next/image';

export default function ZX9Speaker() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'zx9-speaker',
      name: 'ZX9 Speaker',
      price: 4500,
      quantity: quantity,
      image: '/images/homepage-speaker.png'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Back Button */}
      <section className="container mx-auto px-6 py-8">
        <Link href="/category/speakers" className="text-gray-500 hover:text-black transition-colors inline-flex items-center">
          ← Go Back
        </Link>
      </section>

      {/* Product Main Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/homepage-speaker.png"
              alt="ZX9 SPEAKER"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          
          {/* Product Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              ZX9 SPEAKER
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Genesis can be used for safety, maintenance, and safety. The reader follows specific global needs (e.g., firewall, firewall, or other firewall) to ensure that the environment is safe. In particular, a special event occurs in the day of the event beforehand during day 30-31st (2024).
            </p>
            <div className="text-lg font-bold mb-8">
              $ 4,500
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
                Developing your personal knowledge from the person you need to help you know about the people you want to do with your life and experience in the world is essential. Your skills are also important to your employees and to your team members. You can also help you understand how many areas of work you need to serve in your workplace.
              </p>
              <p>
                Connect via Bluetooth or nearly any wired source. This speaker features 
                optical, digital coaxial, USB Type-B, stereo RCA, and XLR inputs, allowing 
                you to connect up to five wired source devices.
              </p>
            </div>
          </div>
          
          {/* In The Box */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">IN THE BOX</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">2x</span>
                <span className="text-gray-600">Speaker Unit</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">2x</span>
                <span className="text-gray-600">Speaker Grille</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">User Manual</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">3.5mm to RCA Cable</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Power Cable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/Bitmap-16.png"
                alt="ZX9 SPEAKER Gallery 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/Bitmap-17.png"
                alt="ZX9 SPEAKER Gallery 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg h-[calc(512px+1rem)] flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/Bitmap-18.png"
              alt="ZX9 SPEAKER Gallery 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-12 text-center">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center relative overflow-hidden mb-6">
              <Image
                src="/images/speaker2.png"
                alt="ZX7 SPEAKER"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">ZX7 SPEAKER</h3>
            <Button variant="primary" href="/product/zx7-speaker" className="w-full">
              SEE PRODUCT
            </Button>
          </div>
          
          {/* Product 2 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center relative overflow-hidden mb-6">
              <Image
                src="/images/headphone2.png"
                alt="XX99 MARK I"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">XX99 MARK I</h3>
            <Button variant="primary" href="/product/xx99-mark-i-headphones" className="w-full">
              SEE PRODUCT
            </Button>
          </div>
          
          {/* Product 3 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center relative overflow-hidden mb-6">
              <Image
                src="/images/headphone3.png"
                alt="XX59"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">XX59</h3>
            <Button variant="primary" href="/product/xx59-headphones" className="w-full">
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
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/homepage-headphone.png"
                    alt="Headphones"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
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
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/homepage-speaker.png"
                    alt="Speakers"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
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
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/homepage-earphone.png"
                    alt="Earphones"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
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
          <div className="bg-gray-100 rounded-lg h-64 md:h-96 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/Bitmap-7.png"
              alt="About Audiophile"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content Side */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6 md:mb-8 leading-tight">
              BRINGING YOU THE BEST AUDIO GEAR
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Leadership is a sustainable way to build a new business. It helps you create a new business with a great success and innovation. We have a strong understanding of our business and we can continue to develop our business with a great success and innovation. We can continue to develop our business with a great success and innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}