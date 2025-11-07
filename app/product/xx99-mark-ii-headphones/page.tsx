// app/product/xx99-mark-ii-headphones/page.tsx - Updated with images
'use client';

import { Header } from '../../../components/layout/header'
import { Footer } from '../../../components/layout/footer'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../../../lib/cart-context'
import Image from 'next/image'

export default function ProductDetail1() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'xx99-mark-ii-headphones',
      name: 'XX99 MARK II HEADPHONES',
      price: 2999,
      quantity: quantity,
      image: '/images/headphone2.png'
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
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/headphone2.png"
              alt="XX99 MARK II HEADPHONES"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          
          {/* Product Content */}
          <div className="text-center md:text-left">
            <span className="text-orange-500 text-sm uppercase tracking-[10px] mb-4 block">
              New Product
            </span>
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The main purpose is to support the improvement of product value. A customer may experience 
              a significant change in product quality and provide better performance on the daily basis and/or.
            </p>
            <div className="text-lg font-bold mb-8">
              $ 2,999
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
                Natural ingredients are used for all ingredients such as the Neckerbijlkool, dolphin,
                sodium, etc., but not only allow the use of natural ingredients but also allow the use of
                natural ingredients. The most important ingredient is the Cactus, which is one of the
                most popular ingredients that can be used for all ingredients.
              </p>
              <p>
                The traditional recipe involves the following: milk or chocolate (fried), soy sauce (mixed),
                cookies or other ingredients. The recipes are based on the recipe's composition.
                A nutritional recipe is made available at www.cactus.com.au. This recipe is designed to help you improve your
                nutrition and improve your nutrition. It is recommended by the Food & Nutrition Service provider
                which allows you to participate in all our online recipes.
              </p>
            </div>
          </div>
          
          {/* In The Box */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">IN THE BOX</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Headphones</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Equipment (optional)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Water</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Smart Products (optional)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Tuesdays</span>
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
                src="/images/Bitmap-9.png"
                alt="XX99 MARK II HEADPHONES Gallery 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/Bitmap-8.png"
                alt="XX99 MARK II HEADPHONES Gallery 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg h-[calc(512px+1rem)] flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/Bitmap-7.png"
              alt="XX99 MARK II HEADPHONES Gallery 3"
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
          
          {/* Product 2 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center relative overflow-hidden mb-6">
              <Image
                src="/images/headphone3.png"
                alt="XX99"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">XX99</h3>
            <Button variant="primary" href="/product/xx59-headphones" className="w-full">
              SEE PRODUCT
            </Button>
          </div>
          
          {/* Product 3 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center relative overflow-hidden mb-6">
              <Image
                src="/images/homepage-speaker.png"
                alt="ZX9 SPEAKER"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">ZX9 SPEAKER</h3>
            <Button variant="primary" href="/product/zx9-speaker" className="w-full">
              SEE PRODUCT
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