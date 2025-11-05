// convex/orders.ts
import { mutation, query } from './_generated/server';
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
    const orderNumber = `AU${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    const timestamp = Date.now();
    
    const orderId = await ctx.db.insert("orders", {
      ...args,
      status: "confirmed",
      orderNumber,
      createdAt: timestamp,
      updatedAt: timestamp,
    });

    return { orderId, orderNumber };
  },
});

export const getOrderByNumber = query({
  args: { orderNumber: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .filter(q => q.eq(q.field("orderNumber"), args.orderNumber))
      .first();
    
    return order;
  },
});

export const getOrdersByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const orders = await ctx.db
      .query("orders")
      .filter(q => q.eq(q.field("email"), args.email))
      .order("desc")
      .collect();
    
    return orders;
  },
});