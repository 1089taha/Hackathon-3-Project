"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../product/[slug]/page";
import Footer from "@/components/Footer";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Mock functions for actions (Replace these with actual API logic or localStorage)
const getCartItems = (): Product[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const removeFromCart = (product: Product) => {
  const cart = getCartItems();
  const updatedCart = cart.filter((item) => item.id !== product.id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const updateQuantity = (product: Product, quantity: number) => {
  const cart = getCartItems();
  const updatedCart = cart.map((item) =>
    item.id === product.id ? { ...item, quantity } : item
  );
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Fetch cart items on component load
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  // Remove item from cart
  const handleRemove = (product: Product) => {
    Swal.fire({
      title: "Are you sure you want to remove this item?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(product);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };

  // Update quantity in cart
  const handleQuantity = (product: Product, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(product, quantity);
    setCartItems(getCartItems());
  };

  // Increment quantity
  const handleIncrement = (product: Product) => {
    const item = cartItems.find((item) => item.id === product.id);
    if (item) handleQuantity(product, (item.quantity ?? 0) + 1);
  };

  // Decrement quantity
  const handleDecrement = (product: Product) => {
    const item = cartItems.find((item) => item.id === product.id);
    if (item) handleQuantity(product, Math.max((item.quantity ?? 0) - 1, 1));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity ?? 0),
      0
    );
  };

  const router = useRouter();

  // Proceed to checkout
  const handleProceedToCheckout = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Do you want to proceed to checkout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "You have successfully checked out.", "success");
        router.push("/checkout"); // Redirect to checkout page
        setCartItems([]); // Clear cart
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Cart</h1>
          <p>Total Items: {cartItems.length}</p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="container mx-auto px-4 py-6 flex-1">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
              >
                <Image
                  src={item.image.asset.url}
                  alt={item.name}
                  height={500}
                  width={500}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity ?? 0}</p>
                <p className="text-gray-600">
                  Total: ${item.price * (item.quantity ?? 0)}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Button
                    onClick={() => handleDecrement(item)}
                    className="bg-blue-500 px-3 py-1 rounded-md "
                  >
                    -
                  </Button>
                  <span>{item.quantity ?? 0}</span>
                  <Button
                    onClick={() => handleIncrement(item)}
                    className="bg-blue-500 px-3 py-1 rounded-md "
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => handleRemove(item)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h2 className="text-lg font-bold">Total: ${calculateTotal()}</h2>
            <Button
              onClick={handleProceedToCheckout}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CartPage;