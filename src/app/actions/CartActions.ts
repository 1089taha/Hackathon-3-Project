import type { Product } from "@/types/types";

export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // Ensure the product has an ID
  if (!product.id) {
    console.error("Product is missing an ID!", product);
    return;
  }

  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = cart.filter((item) => item.id !== product.id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export const updateQuantity = (product: Product, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex((item) => item.id === product.id);

  if (productIndex > -1) {
    cart[productIndex].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};
