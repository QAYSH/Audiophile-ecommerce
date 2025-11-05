// app/category/headphones/page.tsx - Updated with images
import { Header } from '../../../components/layout/header'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function HeadphonesCategory() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-center">
            HEADPHONES
          </h1>
        </div>
      </section>

      {/* Product 1: XX99 MARK II HEADPHONES */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/headphone2.png"
              alt="XX99 MARK II HEADPHONES"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
          
          {/* Product Content */}
          <div className="text-center md:text-left">
            <span className="text-orange-500 text-sm uppercase tracking-[10px] mb-4 block">
              New Product
            </span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              XX99 MARK II HEADPHONES
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              This was a 2020 first 1.1 million year to be promoted pipeline that has traditionally 
              been proven in high-tech engineering, and has led to the growing experience of public quality talent.
            </p>
            <Button 
              variant="primary" 
              href="/product/xx99-mark-ii-headphones"
            >
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </section>

      {/* Product 2: XX99 MARK I HEADPHONES */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Product Content - Order reversed on desktop */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              XX99 MARK I HEADPHONES
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              As a project leader for healthcare, we operate 2021-based AI+ digital solutions focusing 
              on creating a diverse range of services, including education, health and safety, and other 
              advanced skills in healthcare training.
            </p>
            <Button 
              variant="primary" 
              href="/product/xx99-mark-i-headphones"
            >
              SEE PRODUCT
            </Button>
          </div>
          
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center relative overflow-hidden order-1 md:order-2">
            <Image
              src="/images/homepage-headphone.png"
              alt="XX99 MARK I HEADPHONES"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Product 3: XX59 HEADPHONES */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/headphone3.png"
              alt="XX59 HEADPHONES"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
          
          {/* Product Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              XX59 HEADPHONES
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every year, educational programs are supported by many specific leaders across both 
              healthcare and technology. The development of these new technologies is a leading 
              step towards developing an innovative solution.
            </p>
            <Button 
              variant="primary" 
              href="/product/xx59-headphones"
            >
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
              Bringing you the <span className="text-orange-500">best</span> audio gear
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
  )
}