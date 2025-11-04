// app/layout.tsx - UPDATED
import './globals.css'
import { Footer } from '../components/layout/footer'
import { CartProvider } from '../lib/cart-context'
import { ConvexClientProvider } from '../components/providers/convex-client-provider'

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
        <ConvexClientProvider>
          <CartProvider>
            {children}
            <Footer />
          </CartProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}