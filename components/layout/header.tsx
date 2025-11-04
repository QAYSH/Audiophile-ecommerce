// components/layout/header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../lib/cart-context';
import { CartModal } from '../cart/cart-modal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <>
      <header className="bg-black text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu for Mobile */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h16v3H0zm0 6h16v3H0zm0 6h16v3H0z" fill="#FFF" fillRule="evenodd"/>
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              audiophile
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-bold uppercase tracking-wider hover:text-orange-500">
                Home
              </Link>
              <Link href="/category/headphones" className="text-sm font-bold uppercase tracking-wider hover:text-orange-500">
                Headphones
              </Link>
              <Link href="/category/speakers" className="text-sm font-bold uppercase tracking-wider hover:text-orange-500">
                Speakers
              </Link>
              <Link href="/category/earphones" className="text-sm font-bold uppercase tracking-wider hover:text-orange-500">
                Earphones
              </Link>
            </nav>

            {/* Cart Icon */}
            <button 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="#FFF" fillRule="nonzero"/>
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-20 bg-white text-black shadow-lg z-50">
              <div className="container mx-auto px-6 py-8 space-y-8">
                <Link href="/category/headphones" className="block font-bold uppercase text-lg">
                  Headphones
                </Link>
                <Link href="/category/speakers" className="block font-bold uppercase text-lg">
                  Speakers
                </Link>
                <Link href="/category/earphones" className="block font-bold uppercase text-lg">
                  Earphones
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}