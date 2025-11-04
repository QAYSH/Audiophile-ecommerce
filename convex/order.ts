// convex/orders.ts
import { mutation } from './_generated/server';
import { v } from 'convex/values';

export const createOrder = mutation({
  args: {
    // Customer Information
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    
    // Shipping Address
    address: v.string(),
    zip: v.string(),
    city: v.string(),
    country: v.string(),
    
    // Payment Information
    paymentMethod: v.union(v.literal('e-money'), v.literal('cash')),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),
    
    // Order Items
    items: v.array(v.object({
      id: v.string(),
      name: v.string(),
      price: v.number(),
      quantity: v.number(),
      image: v.string(),
    })),
    
    // Order Totals
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    // Generate order number (simple timestamp-based for now)
    const orderNumber = `AU${Date.now()}`;
    
    const orderId = await ctx.db.insert('orders', {
      ...args,
      orderNumber,
      status: 'confirmed',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return {
      orderId,
      orderNumber,
    };
  },
});