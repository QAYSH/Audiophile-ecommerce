// app/category/headphones/page.tsx - Updated with footer and Figma matching
import { Header } from '../../../components/layout/header'
import { Footer } from '../../../components/layout/footer'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function HeadphonesCategory() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-bold uppercase text-center">
            HEADPHONES
          </h1>
        </div>
      </section>

      {/* Product 1: XX99 MARK II HEADPHONES */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">
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
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              XX99 MARK II HEADPHONES
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">
          {/* Product Content - Order reversed on desktop */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              XX99 MARK I HEADPHONES
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
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
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Product 3: XX59 HEADPHONES */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">
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
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              XX59 HEADPHONES
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
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
      {/* About Section - Updated to match homepage */}
      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          {/* Content Side - Left on desktop, bottom on mobile */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-4 md:mb-6 leading-tight">
              Bringing you the <span className="text-orange-500">best</span> audio gear
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto lg:mx-0">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
              earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
              rooms available for you to browse and experience a wide range of our products. Stop by our store 
              to meet some of the fantastic people who make Audiophile the best place to buy your portable 
              audio equipment.
            </p>
          </div>
          
          {/* Image Side - Right on desktop, top on mobile */}
          <div className="bg-gray-100 rounded-lg h-64 md:h-80 w-full relative overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/Bitmap-7.png"
              alt="About Audiophile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Add Footer */}
      <Footer />
    </div>
  )
}