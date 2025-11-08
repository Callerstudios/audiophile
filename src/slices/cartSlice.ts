import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cart } from "../types/cartType";

const initialState: Cart[] = [];

const saveCart = (cart: Cart[]) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to save cart to localStorage", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (_, action: PayloadAction<Cart[]>) => {
      saveCart(action.payload);
      return action.payload;
    },
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    changeCountToBuy: (state, action: PayloadAction<Cart>) => {
      const item = state.find((s) => s.productId === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const { addToCart, changeCountToBuy, clearCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
