import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cart } from "../types/cartType";

const initialState: Cart[] = [
  {
    count: 2,
    imageUrl: "../assets/product-xx59-headphones/desktop/image-product.jpg",
    price: 100,
    productName: "Product1",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
