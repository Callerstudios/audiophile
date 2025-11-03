import React from "react";
import type { Cart } from "../types/cartType";
import Button1 from "./Button1";

interface OrderSuccessModalProps {
  items: Cart[];
  total: number;
  onClose: () => void;
}

const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  items,
  total,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-[90%] max-w-md shadow-xl text-center">
        {/* Check icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-brown-1 text-white rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold uppercase mb-2">
          Thank you for your order
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          You will receive an email confirmation shortly.
        </p>

        {/* Order summary */}
        <div className="flex flex-col sm:flex-row bg-gray-100 rounded-md overflow-hidden mb-6">
          <div className="flex-1 p-4 border-b sm:border-b-0 sm:border-r border-gray-300">
            {items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-3 last:mb-0"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.imageUrl}
                    alt={item.productName}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-800">
                      {item.productName}
                    </p>
                    <p className="text-xs text-gray-500">${item.price}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">x{item.quantity}</p>
              </div>
            ))}
            {items.length > 3 && (
              <p className="text-xs text-gray-500 mt-2">View less</p>
            )}
          </div>

          <div className="bg-black text-white flex flex-col justify-center items-center p-4 sm:w-1/2">
            <p className="text-xs uppercase text-gray-400">Grand Total</p>
            <p className="text-lg font-semibold">${total.toLocaleString()}</p>
          </div>
        </div>

        {/* Button */}
        <Button1 content="back to home" onClick={onClose} type="primary"/>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
