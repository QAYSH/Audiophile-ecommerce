// app/product/xx99-mark-i-headphones/page.tsx - Updated with images
import { Header } from '../../../components/layout/header'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductDetail2() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Back Button */}
      <section className="container mx-auto px-6 py-8">
        <button className="text-gray-500 hover:text-black transition-colors">
          ← Go Back
        </button>
      </section>

      {/* Product Main Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/homepage-headphone.png"
              alt="XX99 MARK I HEADPHONES"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
          
          {/* Product Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              XX99 MARK I HEADPHONES
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a significant driver for headphones, it is essential to get from some physical and 
              environmental conditions within Android. It's not easy to see any personal events within 
              radiators that they go.
            </p>
            <div className="text-lg font-bold mb-8">
              $ 4 LYSI
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button className="px-4 py-2 text-gray-500 hover:text-black">-</button>
                <span className="px-4 py-2">1</span>
                <button className="px-4 py-2 text-gray-500 hover:text-black">+</button>
              </div>
              <Button variant="primary">
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
                As an headphone, it allows us to make out people the ability to be tailored to take or
                be used to use of our clients in order to help clients thrive together. This helps us
                create more comfortable and accessible messages on your website to improve
                outability as a pathway for support of this.
              </p>
              <p>
                There are many local businesses who want to work with and collaborate in their
                own, a network of entrepreneurs who can help us navigate these important areas by
                making sure that there may only be a number of activities for community partners, such
                as the LinkedIn and Facebook apps involved.
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
                <span className="text-gray-600">Telephones</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Telephones Limited</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Smartphones</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Smartphones Global</span>
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
                src="/images/Bitmap-10.png"
                alt="XX99 MARK I HEADPHONES Gallery 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/Bitmap-11.png"
                alt="XX99 MARK I HEADPHONES Gallery 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg h-[calc(512px+1rem)] flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/Bitmap-12.png"
              alt="XX99 MARK I HEADPHONES Gallery 3"
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
                src="/images/homepage-headphone.png"
                alt="XX99 MARK II"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">XX99 MARK II</h3>
            <Button variant="primary" className="w-full">
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
            <Button variant="primary" className="w-full">
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
            <Button variant="primary" className="w-full">
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
              <Link href="/category/headphones" className="text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-1 md:gap-2 hover:text-orange-500 transition-colors mx-auto">
                SHOP
                <svg width="6" height="10" className="md:w-2 md:h-3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Speakers Card */}
          <div className="bg-gray-100 rounded-lg relative cursor-pointer h-40 md:h-48">
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
              <Link href="/category/speakers" className="text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-1 md:gap-2 hover:text-orange-500 transition-colors mx-auto">
                SHOP
                <svg width="6" height="10" className="md:w-2 md:h-3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Earphones Card */}
          <div className="bg-gray-100 rounded-lg relative cursor-pointer h-40 md:h-48">
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
              <Link href="/category/earphones" className="text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-1 md:gap-2 hover:text-orange-500 transition-colors mx-auto">
                SHOP
                <svg width="6" height="10" className="md:w-2 md:h-3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </Link>
            </div>
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
              Liquidated to sound devices (e.g., boutiques) in front of the main engine installation 
              equipment (e.g., airframe, camera etc.), which is designed to ensure that you need to 
              have a strong experience in the design of the main engine. The engine is also designed 
              to ensure that you need to have a very efficient quality system.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}