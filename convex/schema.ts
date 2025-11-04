// convex/schema.ts
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  orders: defineTable({
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
    
    // Order Metadata
    status: v.union(
      v.literal('pending'),
      v.literal('confirmed'),
      v.literal('shipped'),
      v.literal('delivered')
    ),
    orderNumber: v.string(),
    
    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
});