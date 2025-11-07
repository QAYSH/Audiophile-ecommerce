// app/page.tsx - Updated with footer
import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer' // Import the footer
import { Button } from '../components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Text aligned left on desktop, center on mobile */}
      <section className="relative bg-black text-white h-[600px] md:h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90">
          <Image
            src="/images/Bitmap-1.png"
            alt="XX99 Mark II Headphones"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-md text-center md:text-left">
            <span className="text-gray-400 text-sm uppercase tracking-[10px] mb-4 block">
              New Product
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 leading-tight">
              XX99 Mark II<br />Headphones
            </h1>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music<br/> enthusiast.
            </p>
            <Button 
              variant="primary" 
              href="/product/xx99-mark-ii-headphones"
              className="w-full md:w-auto"
            >
              See Product
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Navigation - Fixed for mobile */}
      {/* Categories Navigation - Pixel Perfect Design */}
<section className="container mx-auto px-6 py-16 md:py-24">
  <div className="max-w-[1110px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
      {/* Headphones Card */}
      <div className="bg-gray-100 rounded-lg relative cursor-pointer h-[284px] shadow-xl hover:shadow-2xl transition-all duration-300">
        <Link href="/category/headphones" className="block h-full w-full">
          <div className="absolute -top-[90px] left-1/2 transform -translate-x-1/2">
            <div className="w-[180px] h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/homepage-headphone.png"
                alt="Headphones"
                width={120}
                height={120}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute bottom-[55px] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
            <h3 className="font-bold uppercase mb-[17px] text-[18px] leading-[25px] tracking-[1.29px]">Headphones</h3>
            <div className="text-gray-500 text-[13px] font-bold flex items-center justify-center gap-[13px] hover:text-orange-500 transition-colors mx-auto tracking-wider">
              SHOP
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Speakers Card */}
      <div className="bg-gray-100 rounded-lg relative cursor-pointer h-[284px] shadow-xl hover:shadow-2xl transition-all duration-300">
        <Link href="/category/speakers" className="block h-full w-full">
          <div className="absolute -top-[90px] left-1/2 transform -translate-x-1/2">
            <div className="w-[180px] h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/homepage-speaker.png"
                alt="Speakers"
                width={120}
                height={120}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute bottom-[55px] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
            <h3 className="font-bold uppercase mb-[17px] text-[18px] leading-[25px] tracking-[1.29px]">Speakers</h3>
            <div className="text-gray-500 text-[13px] font-bold flex items-center justify-center gap-[13px] hover:text-orange-500 transition-colors mx-auto tracking-wider">
              SHOP
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Earphones Card */}
      <div className="bg-gray-100 rounded-lg relative cursor-pointer h-[284px] shadow-xl hover:shadow-2xl transition-all duration-300">
        <Link href="/category/earphones" className="block h-full w-full">
          <div className="absolute -top-[90px] left-1/2 transform -translate-x-1/2">
            <div className="w-[180px] h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/homepage-earphone.png"
                alt="Earphones"
                width={120}
                height={120}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute bottom-[55px] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
            <h3 className="font-bold uppercase mb-[17px] text-[18px] leading-[25px] tracking-[1.29px]">Earphones</h3>
            <div className="text-gray-500 text-[13px] font-bold flex items-center justify-center gap-[13px] hover:text-orange-500 transition-colors mx-auto tracking-wider">
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
      

      {/* ZX9 Speaker Section - Fixed for mobile */}
      <section className="bg-orange-500 rounded-lg overflow-hidden mx-4 sm:mx-6 mb-12 md:mb-16">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24 text-center md:text-left relative">
          {/* Speaker Image */}
          <div className="absolute bottom-0 left-1/2 md:left-10 transform -translate-x-1/2 md:translate-x-0 w-48 h-48 md:w-80 md:h-80 mb-8 md:mb-0">
            <Image
              src="/images/homepage-speaker.png"
              alt="ZX9 Speaker"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
          
          <div className="max-w-md mx-auto md:ml-auto md:mr-0 relative z-10 pt-48 md:pt-0">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 md:mb-6 text-white leading-tight">
              ZX9<br />SPEAKER
            </h2>
            <p className="text-white/90 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Button 
              variant="secondary" 
              href="/product/zx9-speaker"
              className="w-full md:w-auto"
            >
              See Product
            </Button>
          </div>
        </div>
      </section>

      {/* ZX7 Speaker Section - Fixed for mobile */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        <div className="bg-gray-100 rounded-lg h-64 md:h-80 relative">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <Image
              src="/images/Bitmap-5.png"
              alt="ZX7 Speaker"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="absolute left-4 sm:left-8 md:left-16 top-1/2 transform -translate-y-1/2">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 md:mb-6">ZX7 SPEAKER</h2>
            <Button 
              variant="transparent" 
              href="/product/zx7-speaker"
              className="w-full md:w-auto text-sm"
            >
              See Product
            </Button>
          </div>
        </div>
      </section>

      {/* YX1 Earphones Section - Fixed for mobile */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Image Side */}
          <div className="bg-gray-100 rounded-lg h-64 md:h-80 relative overflow-hidden">
            <Image
              src="/images/Bitmap-6.png"
              alt="YX1 Earphones"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content Side */}
          <div className="bg-gray-50 rounded-lg p-6 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 md:mb-6">YX1 EARPHONES</h2>
            <Button 
              variant="transparent" 
              href="/product/yx1-earphones"
              className="w-full md:w-auto text-sm"
            >
              See Product
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Fixed for mobile */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          {/* Image Side */}
          <div className="bg-gray-100 rounded-lg h-64 md:h-96 relative overflow-hidden order-2 md:order-1">
            <Image
              src="/images/Bitmap-7.png"
              alt="About Audiophile"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content Side */}
          <div className="order-1 md:order-2 text-center md:text-left">
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

      {/* Add Footer */}
      <Footer />
    </div>
  )
}