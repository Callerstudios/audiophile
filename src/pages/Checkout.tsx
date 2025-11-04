import React, { useState } from "react";
import CustomRadio from "../components/form_elements/CustomRadio/CustomRadio";
import TextField from "../components/form_elements/TextField/TextField";
// import NumberSelector from "../components/form_elements/NumberSelector/NumberSelector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../app/store";
import cashIcon from "../assets/cash-svg.svg";
import Button1 from "../components/Button1";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import OrderSuccessModal from "../components/OrderSuccessModal";
import type { Cart } from "../types/cartType";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: "e-Money" | "Cash on Delivery";
  eMoneyNumber: number;
  eMoneyPin: number;
};

const Checkout: React.FC = () => {
  const createOrder = useMutation(api.orders.createOrder);
  const shipping = 50;
  
  const navigate = useNavigate();
  const cartData = useSelector((state: RootState) => state.cart);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [showSuccess, setShowSuccess] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);
  const vat = (grandTotal - shipping) * 0.12;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-Money",
    eMoneyNumber: 0,
    eMoneyPin: 0,
  });

  const handleCheckout = async () => {
    try {
      // Create the order in Convex
      const orderId = await createOrder({
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        shippingAddress: {
          street: formData.address,
          city: formData.city,
          state: formData.city,
          zipCode: formData.zip,
          country: formData.country,
        },
        items: cartData.map((item: Cart) => ({
          id: item.productId,
          name: item.productName,
          price: item.price,
          quantity: item.quantity,
        })),
        subtotal: grandTotal - shipping - vat,
        shipping, // Calculate your shipping cost
        taxes: vat,
        grandTotal: grandTotal,
      });

      console.log("Order created:", orderId);
      // Redirect to success page or show confirmation
      // The email will be sent automatically via the action
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };
  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.match(/^[0-9+\s-]{7,}$/))
      newErrors.phone = "Enter a valid phone number";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.zip.trim()) newErrors.zip = "ZIP code is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    // if (formData.paymentMethod === "e-Money") {
    //   if (!formData.eMoneyNumber)
    //     newErrors.eMoneyNumber = "e-Money number required";
    //   if (!formData.eMoneyPin) newErrors.eMoneyPin = "e-Money PIN required";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ returns true if valid
  };
  const handleSubmit = async (_grandTotal: number) => {
    setGrandTotal(_grandTotal);
    if (validateForm()) {
      await handleCheckout();
      setShowSuccess(true);
      // proceed with payment logic or navigation
    } else {
      alert("Form invalid ❌");
    }
  };

  const handleChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="flex flex-col gap-10 bg-gray-50">
      <NavBar noBorder />
      <div className="min-h-screen px-[10%] bg-gray-50 py-10 flex flex-col md:flex-row gap-8 justify-center">
        {/* Checkout Form */}
        <div className="bg-white rounded-lg p-6 w-full md:w-2/3">
          <button
            className="text-sm text-gray-500 mb-4 hover:underline"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>

          <h3 className="text-2xl font-semibold mb-6">CHECKOUT</h3>

          {/* Billing Details */}
          <section className="mb-6">
            <h6 className="text-brown-1 font-semibold text-sm mb-3">
              BILLING DETAILS
            </h6>
            <div className="grid md:grid-cols-2 gap-4">
              <TextField
                label="Name"
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Alexei Ward"
                error={errors.name}
              />
              <TextField
                label="Email Address"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="alexei@mail.com"
                error={errors.email}
              />
              <TextField
                label="Phone Number"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+1 202-555-0136"
                error={errors.phone}
              />
            </div>
          </section>

          {/* Shipping Info */}
          <section className="mb-6">
            <h6 className="text-brown-1 font-semibold text-sm mb-3">
              SHIPPING INFO
            </h6>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <TextField
                  label="Address"
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="1137 Williams Avenue"
                  fullWidth
                  error={errors.address}
                />
              </div>
              <TextField
                label="ZIP Code"
                id="zip"
                value={formData.zip}
                onChange={(e) => handleChange("zip", e.target.value)}
                placeholder="10001"
                error={errors.zip}
              />
              <TextField
                label="City"
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="New York"
                error={errors.city}
              />
              <div className="md:col-span-2">
                <TextField
                  label="Country"
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  placeholder="United States"
                  error={errors.country}
                />
              </div>
            </div>
          </section>

          {/* Payment Details */}
          <section>
            <h6 className="text-brown-1 font-semibold text-sm mb-3">
              PAYMENT DETAILS
            </h6>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <span className="font-medium text-gray-800">Payment Method</span>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <CustomRadio
                  label="e-Money"
                  name="paymentMethod"
                  value="e-Money"
                  checked={formData.paymentMethod === "e-Money"}
                  onChange={() => handleChange("paymentMethod", "e-Money")}
                />
                <CustomRadio
                  label="Cash on Delivery"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={formData.paymentMethod === "Cash on Delivery"}
                  onChange={() =>
                    handleChange("paymentMethod", "Cash on Delivery")
                  }
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <img src={cashIcon} alt="Cash Icon" />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          </section>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-lg p-6 h-fit w-full md:w-1/3">
          <div className="flex flex-col gap-4 mb-4">
            <CartPreview items={cartData} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <Footer />
      {showSuccess && (
        <OrderSuccessModal
          items={cartData}
          onClose={() => setShowSuccess(false)}
          total={grandTotal}
        />
      )}
    </main>
  );
};

export default Checkout;

type CartPreviewProps = {
  items: Cart[];
  handleSubmit: (grandTotal: number) => void;
};

const CartPreview: React.FC<CartPreviewProps> = ({ items, handleSubmit }) => {
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = 50;
  const vat = totalPrice * 0.12;
  const grandTotal = totalPrice + shipping + vat;

  return (
    <div
      className="bg-white rounded-lg w-[350px] max-w-full ml-auto flex flex-col gap-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-row justify-between">
        <h6 className="text-lg font-bold mb-4">SUMMARY</h6>
      </div>
      <div className="flex flex-col gap-5">
        {items.map((i) => (
          <div className="flex flex-row gap-2 items-center">
            <img
              className="max-w-16 rounded-xl"
              src={i.imageUrl}
              alt={i.productName}
            />
            <div className="flex-2">
              <p>{i.productName}</p>
              <p className="opacity-50">${i.price}</p>
            </div>
            <p>x{i.quantity}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-gray-600 text-sm mb-1">
        <span>TOTAL</span>
        <span className="font-semibold text-gray-900">${totalPrice}</span>
      </div>
      <div className="flex justify-between text-gray-600 text-sm mb-1">
        <span>SHIPPING</span>
        <span className="font-semibold text-gray-900">${shipping}</span>
      </div>
      <div className="flex justify-between text-gray-600 text-sm mb-4">
        <span>VAT (INCLUDED)</span>
        <span className="font-semibold text-gray-900">${vat}</span>
      </div>

      <div className="flex justify-between text-gray-800 text-base font-semibold mb-6">
        <span>GRAND TOTAL</span>
        <span className="text-brown-1">${grandTotal}</span>
      </div>

      <Button1
        content="Continue"
        type="primary"
        onClick={() => handleSubmit(grandTotal)}
      />
    </div>
  );
};
