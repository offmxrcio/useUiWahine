"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
} from "react";

const CartContext = createContext(null);

const EMPTY_CART = [];

let cart = [];
let initialized = false;

const listeners = new Set();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function saveCart(nextCart) {
  cart = nextCart;

  if (typeof window !== "undefined") {
    localStorage.setItem(
      "useuiwhahine-cart",
      JSON.stringify(cart)
    );
  }

  notifyListeners();
}

function getSnapshot() {
  return cart;
}

function getServerSnapshot() {
  return EMPTY_CART;
}

function subscribe(listener) {
  listeners.add(listener);

  if (!initialized) {
    initialized = true;

    try {
      const savedCart = localStorage.getItem("useuiwhahine-cart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          cart = parsedCart;
        }
      }
    } catch {
      localStorage.removeItem("useuiwhahine-cart");
    }

    listener();
  }

  return () => {
    listeners.delete(listener);
  };
}

export function CartProvider({ children }) {
  const currentCart = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function addToCart(product, size, quantity = 1) {
    const existing = currentCart.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existing) {
      saveCart(
        currentCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );

      return;
    }

    saveCart([
      ...currentCart,
      {
        ...product,
        size,
        quantity,
      },
    ]);
  }

  function removeFromCart(id, size) {
    saveCart(
      currentCart.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  }

  function updateQuantity(id, size, quantity) {
    if (quantity < 1) return;

    saveCart(
      currentCart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  }

  function clearCart() {
    saveCart([]);
  }

  const cartCount = currentCart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = currentCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: currentCart,
        loaded: initialized,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart deve ser usado dentro de CartProvider"
    );
  }

  return context;
}