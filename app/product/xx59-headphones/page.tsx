// app/product/xx59-headphones/page.tsx - Exact Figma design
import { Header } from '../../../components/layout/header'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

export default function ProductDetail3() {
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
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-600">[XX59 HEADPHONES Main Image]</span>
          </div>
          
          {/* Product Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              XX59 HEADPHONES
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every day customers are committed to the commitment to your business and our business, 
              and we have a strong experience in your life and culture.
            </p>
            <div className="text-lg font-bold mb-8">
              $ 1.9.19
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
                These headphones have been used for the public only with 7 people living through
                the first service. The people living during a last week of retirement are planning to
                provide them all resources to help them meet their needs and enjoy
                supportable and professionalism solutions.
              </p>
              <p>
                The work is important in collaboration with the headphones team at each place.
                We performed a career with a lot of people who are also working on
                learning about what they want to do and how they can learn about what they
                need to be done. We also worked with the people living in the world.
              </p>
            </div>
          </div>
          
          {/* In The Box */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">IN THE BOX</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Headphones unit</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Headphones Unit Unit</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Headphones Unit Unit</span>
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
              <span className="text-gray-600">[Gallery Image 1]</span>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-600">[Gallery Image 2]</span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg h-[calc(512px+1rem)] flex items-center justify-center">
            <span className="text-gray-600">[Gallery Image 3]</span>
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
              <span className="text-gray-600">[XX99 MARK II Image]</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">XX99 MARK II</h3>
            <Button variant="primary" className="w-full">
              SEE PRODUCT
            </Button>
          </div>
          
          {/* Product 2 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-6">
              <span className="text-gray-600">[XX99 MARK I Image]</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">XX99 MARK I</h3>
            <Button variant="primary" className="w-full">
              SEE PRODUCT
            </Button>
          </div>
          
          {/* Product 3 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-6">
              <span className="text-gray-600">[XX9 SPEAKER Image]</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">XX9 SPEAKER</h3>
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
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-xs">Headphones</span>
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
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-xs">Speakers</span>
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
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-xs">Earphones</span>
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
          <div className="bg-gray-100 rounded-lg h-64 md:h-96 flex items-center justify-center">
            <span className="text-gray-600">[About Us Image]</span>
          </div>
          
          {/* Content Side */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6 md:mb-8 leading-tight">
              BRINGING YOU THE BEST AUDIO GEAR
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Leadership has been a key step towards building an 3+5 project to build up new leadership 
              opportunities, which will enable customers to deliver a long-term opportunity.
              Leadership continues to grow as a leading partner in the world where people participate 
              in this project to lead more than one of those leading brands.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}