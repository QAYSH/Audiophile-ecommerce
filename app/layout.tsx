// app/layout.tsx - TEMPORARY FIX
import './globals.css'
import { Footer } from '../components/layout/footer'
import { CartProvider } from '../lib/cart-context'

export const metadata = {
  title: 'Audiophile - Premium Audio Equipment',
  description: 'Experience the best audio gear for music enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}