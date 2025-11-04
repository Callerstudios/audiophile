import { useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import NavBar from "../components/NavBar";

const OrderDetails = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const order = useQuery(
    api.orders.getOrder,
    orderId ? { orderId } : ("skip" as const)
  );

  if (!orderId) return <p className="text-red-500">No order ID provided.</p>;
  if (orderId && !order)
    return <p className="text-gray-500">Loading order...</p>;
  if (!order) return <p className="text-red-500">Order not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
        <NavBar/>
      <h3 className="text-2xl font-bold text-brown-1 mb-4">Order #{orderId}</h3>

      <div className="space-y-2 mb-6">
        <p>
          <span className="font-semibold">Name:</span> {order.customerName}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {order.customerEmail}
        </p>
        <p>
          <span className="font-semibold">Phone:</span>{" "}
          {order.customerPhone ?? "N/A"}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {order.status}
        </p>
      </div>

      <h4 className="text-xl font-semibold text-brown-1 mb-2">Items</h4>
      {order.items.length ? (
        <ul className="list-disc list-inside mb-6">
          {order.items.map((item) => (
            <li key={item.id} className="py-1 border-b last:border-b-0">
              <span className="font-medium">{item.name}</span> — ₦{item.price} ×{" "}
              {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mb-6">No items in this order.</p>
      )}

      <h4 className="text-xl font-semibold text-brown-1 mb-2">Address</h4>
      <p className="mb-6 text-gray-700">
        {order.shippingAddress.street}, {order.shippingAddress.city},{" "}
        {order.shippingAddress.state}, {order.shippingAddress.country} (
        {order.shippingAddress.zipCode})
      </p>

      <h4 className="text-xl font-semibold text-brown-1 mb-2">Totals</h4>
      <div className="space-y-1 text-gray-700">
        <p>Subtotal: ₦{order.subtotal}</p>
        <p>Shipping: ₦{order.shipping}</p>
        <p>Taxes: ₦{order.taxes}</p>
        <p className="font-bold">Grand Total: ₦{order.grandTotal}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
