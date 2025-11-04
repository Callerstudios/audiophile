// convex/orders.ts
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

// Mutation to create order
export const createOrder = mutation({
  args: {
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.optional(v.string()),
    shippingAddress: v.object({
      street: v.string(),
      city: v.string(),
      state: v.string(),
      zipCode: v.string(),
      country: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    subtotal: v.number(),
    shipping: v.number(),
    taxes: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", {
      ...args,
      status: "pending",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    // 📨 Trigger email sending internally
    await ctx.scheduler.runAfter(0, internal.email.sendOrderConfirmation, {
      orderId,
      name: args.customerName,
      to: args.customerEmail,
      items: args.items,
      shipping: {
        address: args.shippingAddress.street,
        city: args.shippingAddress.city,
        state: args.shippingAddress.state,
        country: args.shippingAddress.country,
      },
      totals: {
        grandTotal: args.grandTotal,
        shipping: args.shipping,
        taxes: args.taxes
      },
    });
    console.log("Email Triggered")
    return orderId;
  },
});

// Query to get order by ID
export const getOrder = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.orderId);
  },
});

// Query to get user's orders
export const getUserOrders = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_email", (q) => q.eq("customerEmail", args.email))
      .order("desc")
      .collect();
  },
});
