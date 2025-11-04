// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    // Customer details
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.optional(v.string()),

    // Shipping details
    shippingAddress: v.object({
      street: v.string(),
      city: v.string(),
      state: v.string(),
      zipCode: v.string(),
      country: v.string(),
    }),

    // Items
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),

    // Totals
    subtotal: v.number(),
    shipping: v.number(),
    taxes: v.number(),
    grandTotal: v.number(),

    // Order status & timestamp
    status: v.string(), // "pending", "confirmed", "shipped", "delivered", "cancelled"
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_email", ["customerEmail"])
    .index("by_status", ["status"])
    .index("by_created_at", ["createdAt"]),
});
