"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/sanityClient";
import type { Product } from "@/types/types";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface UserDetails {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  [key: string]: string;
}

const Checkout = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
  });
  
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [shippingCost, setShippingCost] = useState(5);
  const [discountCode, setDiscountCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  useEffect(() => {
    const calculateCharges = () => {
      const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);
      setShippingCost(subtotal > 100 ? 0 : 5);
    };
    calculateCharges();
  }, [cart]);

  const validateInputs = () => {
    const newErrors = Object.fromEntries(
      Object.entries(userDetails).map(([key, value]) => [key, !value])
    );
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    if (!validateInputs()) {
      Swal.fire("Error", "Please complete all required fields.", "error");
      return;
    }

    Swal.fire("Success", "Your order has been placed!", "success").then(() => {
      localStorage.removeItem("cart");
      setCart([]);
      setUserDetails({ fullName: "", email: "", phone: "", country: "", city: "", state: "", zipCode: "" });
      router.push("/");
    });

    const totalPrice = calculateTotal();
    const orderData = {
      _type: "order",
      ...userDetails,
      cartItems: cart.map(item => ({ 
        _type: "reference", 
        _ref: item.id 
      })),
      total: totalPrice,
      discount: discountCode,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
    } catch (err) {
      console.error("Order error:", err);
    }
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);
    return subtotal + shippingCost;
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Form */}
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-medium mb-6">Checkout</h1>
          
          {/* Shipping Information */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Shipping Information</h2>
            <div className="flex gap-4 mb-6">
              <button
                className={`flex-1 py-3 px-4 rounded-lg border ${
                  deliveryMethod === 'delivery' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => setDeliveryMethod('delivery')}
              >
                <span className="flex items-center gap-2">
                  🚚 Delivery
                </span>
              </button>
              <button
                className={`flex-1 py-3 px-4 rounded-lg border ${
                  deliveryMethod === 'pickup' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => setDeliveryMethod('pickup')}
              >
                <span className="flex items-center gap-2">
                  📦 Pick up
                </span>
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={userDetails.fullName}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`}
                  placeholder="Enter full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1">Email address *</label>
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone number *</label>
                <PhoneInput
                  country={'us'}
                  value={userDetails.phone}
                  onChange={phone => setUserDetails({...userDetails, phone})}
                  containerClass="w-full"
                  inputClass="w-full p-3 border rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={userDetails.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={userDetails.state}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter state"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={userDetails.zipCode}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter ZIP code"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Country</label>
                  <select
                    name="country"
                    value={userDetails.country}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                  >
                    <option value="">Select country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="ES">Spain</option>
                    <option value="JP">Japan</option>
                    <option value="CN">China</option>
                    <option value="IN">India</option>
                    <option value="BR">Brazil</option>
                    <option value="MX">Mexico</option>
                    <option value="RU">Russia</option>
                    <option value="ZA">South Africa</option>
                    <option value="SG">Singapore</option>
                    <option value="KR">South Korea</option>
                    <option value="NL">Netherlands</option>
                    <option value="SE">Sweden</option>
                    <option value="NO">Norway</option>
                    <option value="NZ">New Zealand</option>
                    <option value="IE">Ireland</option>
                    <option value="PT">Portugal</option>
                    <option value="IL">Israel</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="CH">Switzerland</option>
                    <option value="BE">Belgium</option>
                    <option value="AT">Austria</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-lg font-medium mb-4">Review your cart</h2>
          
          {/* Cart Items */}
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <Image
                  src={item.image.asset.url}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity ?? 1}</p>
                  <p className="font-medium">${item.price * (item.quantity ?? 1)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Discount Code */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Discount code"
              className="flex-1 p-3 border rounded-lg"
            />
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Apply</button>
          </div>

          {/* Order Summary */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${calculateTotal() - shippingCost}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>${shippingCost}</span>
            </div>
            <div className="flex justify-between font-medium text-lg pt-2 border-t">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>

          {/* Pay Now Button */}
          <button
            onClick={placeOrder}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            Pay Now
          </button>

          {/* Secure Checkout */}
          <div className="mt-4 text-center text-sm text-gray-500">
            <span className="flex items-center justify-center gap-2">
              🔒 Secure Checkout - SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;