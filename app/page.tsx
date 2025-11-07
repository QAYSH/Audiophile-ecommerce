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
      <section className="relative bg-black text-white h-[600px] flex items-center">
  {/* Mobile Background */}
  <div className="md:hidden absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90">
    <Image
      src="/images/Bitmap-4.png"
      alt="XX99 Mark II Headphones"
      fill
      className="object-cover"
      priority
    />
  </div>
  
  {/* Desktop Background */}
  <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90">
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
<section className="container mx-auto px-6 py-12 md:py-24 mt-[30px] md:mt-[50px] h-auto">
  <div className="max-w-[1110px] mx-auto h-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[20px] md:gap-[30px] h-full">
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

{/* ZX9 Speaker Section - Fixed for mobile */}
<section className="mt-12 md:mt-20">
  <div className="max-w-[1110px] mx-auto px-4 sm:px-6">
    <div className="bg-orange-500 rounded-lg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24 text-center md:text-left relative">
        {/* Speaker Image - Mobile: above text, Desktop: positioned left */}
        <div className="md:absolute bottom-0 left-[100px] transform md:translate-x-0 w-40 h-40 md:w-80 md:h-80 mb-8 md:mb-0 mx-auto md:mx-0">
          <Image
            src="/images/speaker-26.png"
            alt="ZX9 Speaker"
            width={410}
            height={480}
            className="object-contain w-full h-full"
          />
        </div>
        
        {/* Text Content - Mobile: below image, Desktop: positioned with left margin */}
        <div className="max-w-md md:ml-[500px] mx-auto md:mr-0 relative z-10 md:pt-0">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 md:mb-6 text-white leading-tight">
            ZX9<br />SPEAKER
          </h2>
          <p className="text-white/90 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            Upgrade to premium speakers that are<br/> phenomenally built to deliver truly<br/> remarkable sound.
          </p>
          <Button 
            variant="secondary" 
            href="/product/zx9-speaker"
            className="w-full md:w-auto text-sm md:text-base"
          >
            See Product
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ZX7 Speaker Section - Fixed for mobile */}
<section className="max-w-[1110px] mx-auto px-4 sm:px-6 mb-12 md:mb-16 mt-8 md:mt-16">
  <div className="bg-gray-100 rounded-lg h-[320px] relative">
    {/* Background Image */}
    <div className="absolute inset-0 rounded-lg overflow-hidden">
      <Image
        src="/images/Bitmap-5.png"
        alt="ZX7 Speaker"
        fill
        className="object-cover"
      />
    </div>
    
    <div className="absolute left-[165px] top-1/2 transform -translate-y-1/2">
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
<section className="max-w-[1110px] mx-auto px-4 sm:px-6 mb-12 md:mb-16">
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
    <div className="bg-gray-100 rounded-lg h-64 md:h-80 p-6 md:p-12 flex flex-col justify-center">
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
<section className="max-w-[1110px] mx-auto px-4 sm:px-6 mb-12 md:mb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
    {/* Content Side - Left on desktop, top on mobile */}
    <div className="text-center md:text-left order-1 md:order-1 h-[295px] w-full md:w-[445px] flex flex-col justify-center">
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
    <div className="bg-gray-100 rounded-lg h-[300px] md:h-[570px] md:w-[500px] relative overflow-hidden order-2 md:order-2">
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