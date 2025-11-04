// convex/orders.ts
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import { v4 as uuidv4 } from "uuid"; // for generating unique string order IDs

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
    // Generate a unique string order ID for URL use
    const orderId = uuidv4(); // string for URLs

    await ctx.db.insert("orders", {
      ...args,
      orderId, // store string ID in database
      status: "pending",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    // Call email action with the string ID
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
        taxes: args.taxes,
      },
    });

    return orderId; // return string orderId for URL
  },
});

// Query to get order by string orderId
export const getOrder = query({
  args: { orderId: v.string() },
  handler: async (ctx, { orderId }) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_orderId", (q) => q.eq("orderId", orderId))
      .first();

    return order ?? null;
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
