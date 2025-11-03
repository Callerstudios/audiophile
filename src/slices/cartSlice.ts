import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cart } from "../types/cartType";

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.push(action.payload);
    },
    changeCountToBuy: (state, action: PayloadAction<Cart>) => {
      const item = state.find((s) => s.productId === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, changeCountToBuy, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
