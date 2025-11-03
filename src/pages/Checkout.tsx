import React, { useState } from "react";
import TextField from "../components/form_elements/TextField/TextField";
import CustomRadio from "../components/form_elements/CustomRadio/CustomRadio";
import NumberSelector from "../components/form_elements/NumberSelector/NumberSelector";
import Button1 from "../components/Button1";
import NavBar from "../components/NavBar";

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

type SummaryItem = {
  name: string;
  price: number;
  qty: number;
};

const Checkout: React.FC = () => {
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

  const handleChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const summaryItems: SummaryItem[] = [
    { name: "ZX9 MK II", price: 2999, qty: 1 },
    { name: "ZX9", price: 999, qty: 2 },
    { name: "YX1", price: 599, qty: 1 },
  ];

  const totals = {
    total: 5996,
    shipping: 50,
    vat: 1079,
    grandTotal: 6466,
  };

  return (
    <main>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col md:flex-row gap-8 justify-center">
        {/* Checkout Form */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-2/3">
          <button className="text-sm text-gray-500 mb-4 hover:underline">
            Go Back
          </button>

          <h2 className="text-2xl font-semibold mb-6">CHECKOUT</h2>

          {/* Billing Details */}
          <section className="mb-6">
            <h3 className="text-orange-500 font-semibold text-sm mb-3">
              BILLING DETAILS
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <TextField
                label="Name"
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Alexei Ward"
              />
              <TextField
                label="Email Address"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="alexei@mail.com"
              />
              <TextField
                label="Phone Number"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+1 202-555-0136"
              />
            </div>
          </section>

          {/* Shipping Info */}
          <section className="mb-6">
            <h3 className="text-orange-500 font-semibold text-sm mb-3">
              SHIPPING INFO
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <TextField
                  label="Address"
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="1137 Williams Avenue"
                />
              </div>
              <TextField
                label="ZIP Code"
                id="zip"
                value={formData.zip}
                onChange={(e) => handleChange("zip", e.target.value)}
                placeholder="10001"
              />
              <TextField
                label="City"
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="New York"
              />
              <div className="md:col-span-2">
                <TextField
                  label="Country"
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  placeholder="United States"
                />
              </div>
            </div>
          </section>

          {/* Payment Details */}
          <section>
            <h3 className="text-orange-500 font-semibold text-sm mb-3">
              PAYMENT DETAILS
            </h3>
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

            {formData.paymentMethod === "e-Money" && (
              <div className="grid md:grid-cols-2 gap-4">
                <NumberSelector
                  value={formData.eMoneyNumber}
                  onChange={(value) => handleChange("eMoneyNumber", value)}
                  min={100000}
                  max={999999}
                />
                <NumberSelector
                  value={formData.eMoneyPin}
                  onChange={(value) => handleChange("eMoneyPin", value)}
                  min={1000}
                  max={9999}
                />
              </div>
            )}
          </section>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">SUMMARY</h3>
          <div className="flex flex-col gap-4 mb-4">
            {summaryItems.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500 text-sm">${item.price}</p>
                </div>
                <span className="text-gray-600 font-medium">x{item.qty}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-gray-600 text-sm mb-1">
            <span>TOTAL</span>
            <span className="font-semibold text-gray-900">
              ${totals.total.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-gray-600 text-sm mb-1">
            <span>SHIPPING</span>
            <span className="font-semibold text-gray-900">
              ${totals.shipping}
            </span>
          </div>
          <div className="flex justify-between text-gray-600 text-sm mb-4">
            <span>VAT (INCLUDED)</span>
            <span className="font-semibold text-gray-900">
              ${totals.vat.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-gray-800 text-base font-semibold mb-6">
            <span>GRAND TOTAL</span>
            <span className="text-orange-500">
              ${totals.grandTotal.toLocaleString()}
            </span>
          </div>

          <Button1
            content="Continue & Pay"
            type="primary"
            onClick={() => console.log(formData)}
          />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
