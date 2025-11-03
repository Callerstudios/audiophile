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
        item.count = action.payload.count;
      }
    },
  },
});

export const { addToCart, changeCountToBuy } = cartSlice.actions;

export default cartSlice.reducer;
