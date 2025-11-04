// src/pages/orders/[orderId].tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const OrderDetails: React.FC = () => {
  // Get orderId from the URL
  const { orderId } = useParams<{ orderId: string }>();

  // Fetch order using the string orderId
  const order = useQuery(orderId ? api.orders.getOrder : null, orderId || "");

  if (!orderId) return <p>No order ID provided.</p>;
  if (!order) return <p>Loading order...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Order #{order.orderId}</h2>
      <p>
        <strong>Name:</strong> {order.customerName}
      </p>
      <p>
        <strong>Email:</strong> {order.customerEmail}
      </p>
      <p>
        <strong>Phone:</strong> {order.customerPhone ?? "N/A"}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>

      <h3>Items</h3>
      {order.items.length > 0 ? (
        <ul>
          {order.items.map((item) => (
            <li key={item.id}>
              {item.name} — ₦{item.price} × {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in this order.</p>
      )}

      <h3>Shipping Address</h3>
      <p>
        {order.shippingAddress.street}, {order.shippingAddress.city},{" "}
        {order.shippingAddress.state}, {order.shippingAddress.country} (
        {order.shippingAddress.zipCode})
      </p>

      <h3>Totals</h3>
      <p>Subtotal: ₦{order.subtotal}</p>
      <p>Shipping: ₦{order.shipping}</p>
      <p>Taxes: ₦{order.taxes}</p>
      <p>Grand Total: ₦{order.grandTotal}</p>
    </div>
  );
};

export default OrderDetails;
