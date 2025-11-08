// app/product/xx59-headphones/page.tsx - Updated with working Add to Cart and footer
'use client';

import { Header } from '../../../components/layout/header'
import { Footer } from '../../../components/layout/footer'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../../../lib/cart-context'
import Image from 'next/image'

export default function ProductDetail3() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'xx59-headphones',
      name: 'XX59 HEADPHONES',
      price: 899,
      quantity: quantity,
      image: '/images/headphone3.png'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Back Button */}
      <section className="container mx-auto px-6 py-8">
        <Link href="/category/headphones" className="text-gray-500 hover:text-black transition-colors inline-flex items-center">
          ← Go Back
        </Link>
      </section>
              {/* Product Main Section */}
<section className="max-w-[1110px] mx-auto px-6 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
    {/* Product Image */}
    <div className="bg-gray-100 rounded-lg h-96 md:h-[520px] md:w-[500px] flex items-center justify-center relative overflow-hidden">
      <Image
        src="/images/headphone3.png"
        alt="XX59 HEADPHONES"
        width={290}
        height={350}
        className="object-contain"
      />
    </div>
    
    {/* Product Content */}
    <div className="text-center md:text-left w-full md:w-[445px]">
      <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">
       XX59 <br/>HEADPHONES
      </h1>
      <p className="text-gray-400 mb-6 leading-relaxed">
       Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
      </p>
      <div className="text-lg font-bold mb-8">
        $ 899
      </div>
      <div className="flex items-center gap-4 justify-center md:justify-start">
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
        <Button 
          variant="primary" 
          onClick={handleAddToCart}
          className="w-[160px] h-[50px] flex items-center justify-center whitespace-nowrap"
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  </div>
</section>

     {/* Features & In The Box */}
<section className="max-w-[1110px] mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 md:h-[320px]">
    {/* Features */}
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">FEATURES</h2>
      <div className="text-gray-400 leading-relaxed space-y-4 text-xs ">
        <p>
        These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
        </p>
        <p>
         More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
        </p>
      </div>
    </div>
    
    
    {/* In The Box */}
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">IN THE BOX</h2>
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-orange-500 font-bold">1x</span>
          <span className="text-gray-600">Headphone Unit</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-orange-500 font-bold">2x</span>
          <span className="text-gray-600">Replacement Earcups</span>
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
<section className="max-w-[1110px] mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-4">
      <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
        <Image
          src="/images/Bitmap-14.png"
          alt="XX99 MARK II HEADPHONES Gallery 1"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
        <Image
          src="/images/Bitmap-15.png"
          alt="XX99 MARK II HEADPHONES Gallery 2"
          fill
          className="object-cover"
        />
      </div>
    </div>
    <div className="bg-gray-100 rounded-lg h-64 md:h-[calc(512px+1rem)] flex items-center justify-center relative overflow-hidden">
      <Image
        src="/images/Bitmap-13.png"
        alt="XX99 MARK II HEADPHONES Gallery 3"
        fill
        className="object-cover"
      />
    </div>
  </div>
</section>

     {/* You May Also Like */}
<section className="max-w-[1110px] mx-auto px-6 py-16">
  <h2 className="text-2xl md:text-3xl font-bold uppercase mb-12 text-center">YOU MAY ALSO LIKE</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Product 1 */}
    <div className="text-center w-full md:w-[350px] md:h-[470px]">
      <div className="bg-gray-100 rounded-lg h-48 md:h-[300px] flex items-center justify-center relative overflow-hidden mb-6">
        <Image
          src="/images/headphone2.png"
          alt="zx7 speaker"
          width={143}
          height={173}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold uppercase mb-4">XX99 Mark II</h3>
       <Button 
            variant="primary" 
            href="/product/xx99-mark-ii-headphones"
            className="w-full md:w-auto text-sm md:text-base"
          >
            See Product
          </Button>
    </div>
    
    {/* Product 2 */}
    <div className="text-center w-full md:w-[350px] md:h-[470px]">
      <div className="bg-gray-100 rounded-lg h-48 md:h-[300px] flex items-center justify-center relative overflow-hidden mb-6">
        <Image
          src="/images/headphone-27.png"
          alt="XX99 MARK I"
          width={143}
          height={173}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold uppercase mb-4">xx99 Mark I</h3>
       <Button 
            variant="primary" 
            href="/product/xx99-mark-i-headphones"
            className="w-full md:w-auto text-sm md:text-base"
          >
            See Product
          </Button>
    </div>
    
    {/* Product 3 */}
    <div className="text-center w-full md:w-[350px] md:h-[470px]">
      <div className="bg-gray-100 rounded-lg h-48 md:h-[300px] flex items-center justify-center relative overflow-hidden mb-6">
        <Image
          src="/images/speaker2.png"
          alt="XX9 SPEAKER"
          width={143}
          height={173}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold uppercase mb-4">zx7 speaker</h3>
       <Button 
            variant="primary" 
            href="/product/zx7-speaker"
            className="w-full md:w-auto text-sm md:text-base"
          >
            See Product
          </Button>
    </div>
  </div>
</section>


      {/* Categories Navigation - Fixed for mobile */}
<section className="max-w-[1110px] mx-auto px-6 py-12 md:py-24 mt-[30px] md:mt-[50px] h-auto">
  <div className="h-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[80px] md:gap-[30px] h-full">
      {/* Headphones Card */}
      <div className="bg-gray-100 rounded-lg relative cursor-pointer h-[250px] md:h-[280px] shadow-xl hover:shadow-2xl transition-all duration-300">
        <Link href="/category/headphones" className="block h-full w-full">
          <div className="absolute -top-[70px] md:-top-[80px] left-1/2 transform -translate-x-1/2">
            <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] flex items-center justify-center overflow-hidden">
              <div className="relative">
                <div className="absolute -bottom-[12px] left-1/2 transform -translate-x-1/2 w-[140px] h-[25px] md:w-[160px] md:h-[25px] bg-gray-300 rounded-full blur-sm opacity-70"></div>
                <Image
                  src="/images/homepage-headphone.png"
                  alt="Headphones"
                  width={140}
                  height={140}
                  className="object-contain relative z-10 w-[120px] h-[120px] md:w-[140px] md:h-[140px]"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[35px] md:bottom-[40px] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
            <h3 className="font-bold uppercase mb-[15px] md:mb-[17px] text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] tracking-[1.29px] md:tracking-[1.43px]">Headphones</h3>
            <div className="text-gray-500 text-[14px] md:text-[15px] font-bold flex items-center justify-center gap-[13px] hover:text-orange-500 transition-colors mx-auto tracking-wider">
              SHOP
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Speakers Card */}
      <div className="bg-gray-100 rounded-lg relative cursor-pointer h-[250px] md:h-[280px] shadow-xl hover:shadow-2xl transition-all duration-300">
        <Link href="/category/speakers" className="block h-full w-full">
          <div className="absolute -top-[70px] md:-top-[80px] left-1/2 transform -translate-x-1/2">
            <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] flex items-center justify-center overflow-hidden">
              <div className="relative">
                <div className="absolute -bottom-[12px] left-1/2 transform -translate-x-1/2 w-[140px] h-[25px] md:w-[160px] md:h-[25px] bg-gray-300 rounded-full blur-sm opacity-60"></div>
                <Image
                  src="/images/homepage-speaker.png"
                  alt="Speakers"
                  width={140}
                  height={140}
                  className="object-contain relative z-10 w-[130px] h-[130px] md:w-[150px] md:h-[150px]"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[35px] md:bottom-[40px] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
            <h3 className="font-bold uppercase mb-[15px] md:mb-[17px] text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] tracking-[1.29px] md:tracking-[1.43px]">Speakers</h3>
            <div className="text-gray-500 text-[14px] md:text-[15px] font-bold flex items-center justify-center gap-[13px] hover:text-orange-500 transition-colors mx-auto tracking-wider">
              SHOP
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Earphones Card */}
      <div className="bg-gray-100 rounded-lg relative cursor-pointer h-[250px] md:h-[280px] shadow-xl hover:shadow-2xl transition-all duration-300">
        <Link href="/category/earphones" className="block h-full w-full">
          <div className="absolute -top-[70px] md:-top-[80px] left-1/2 transform -translate-x-1/2">
            <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] flex items-center justify-center overflow-hidden">
              <div className="relative">
                <div className="absolute -bottom-[12px] left-1/2 transform -translate-x-1/2 w-[140px] h-[25px] md:w-[160px] md:h-[25px] bg-gray-300 rounded-full blur-sm opacity-60"></div>
                <Image
                  src="/images/homepage-earphone.png"
                  alt="Earphones"
                  width={140}
                  height={140}
                  className="object-contain relative z-10 w-[130px] h-[130px] md:w-[150px] md:h-[150px]"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[35px] md:bottom-[40px] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
            <h3 className="font-bold uppercase mb-[15px] md:mb-[17px] text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] tracking-[1.29px] md:tracking-[1.43px]">Earphones</h3>
            <div className="text-gray-500 text-[14px] md:text-[15px] font-bold flex items-center justify-center gap-[13px] hover:text-orange-500 transition-colors mx-auto tracking-wider">
              SHOP
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>

{/* About Section - Fixed for mobile */}
<section className="max-w-[1110px] mx-auto px-4 sm:px-6 mb-12 md:mb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
    {/* Content Side - Left on desktop, top on mobile */}
    <div className="text-center md:text-left order-2 md:order-1 h-[295px] w-full md:w-[445px] flex flex-col justify-center">
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6 md:mb-8 leading-tight">
        Bringing you the <br/> <span className="text-orange-500">best</span> audio gear
      </h2>
      <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
        rooms available for you to browse and experience a wide range of our products. Stop by our store 
        to meet some of the fantastic people who make Audiophile the best place to buy your portable 
        audio equipment.
      </p>
    </div>
    
    {/* Image Side - Right on desktop, bottom on mobile */}
    <div className="bg-gray-100 rounded-lg h-[300px] md:h-[570px] md:w-[500px] relative overflow-hidden order-1 md:order-2">
      <Image
        src="/images/Bitmap-7.png"
        alt="About Audiophile"
        fill
        className="object-cover"
      />
    </div>
  </div>
</section>

      {/* Add Footer */}
      <Footer />
    </div>
  )
}