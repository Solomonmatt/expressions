// Utility function to get the cart from localStorage
export const getCart = () => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  return [];
};

// Utility function to save the cart to localStorage
export const saveCart = (cart) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Add an item to the cart
export const addToCart = (item) => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    // If the item exists, increase its quantity
    cart[existingItemIndex].quantity += item.quantity || 1;
  } else {
    // If the item doesn't exist, add it to the cart
    cart.push({ ...item, quantity: item.quantity || 1 });
  }

  saveCart(cart);
};

// Remove an item from the cart
export const removeFromCart = (itemId) => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== itemId);
  saveCart(updatedCart);
};

// Update the quantity of an item in the cart
export const updateItemQuantity = (itemId, quantity) => {
  const cart = getCart();
  const updatedCart = cart.map((item) => {
    if (item.id === itemId) {
      return { ...item, quantity: item.quantity + quantity }; // Ensure quantity is at least 1
    }
    return item;
  });

  saveCart(updatedCart);
};

// Calculate the total quantity of items in the cart
export const getTotalQuantity = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
};

// Calculate the total price of items in the cart
export const getTotalPrice = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Clear the cart
export const clearCart = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cart");
  }
};
