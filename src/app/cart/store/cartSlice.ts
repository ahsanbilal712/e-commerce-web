// src/app/cart/store/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Define initial state matching CartState
const initialState: CartState = {
  items: [
    {
      image: "/images/home/products/products.webp",
      title: "Apple iPhone 12 Pro Max 128GB",
      price: 200,
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.items[action.payload].quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items[action.payload];
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
    resetState: () => initialState,
  },
});

export const { incrementQuantity, decrementQuantity, removeItem, resetState } = cartSlice.actions;
export default cartSlice.reducer;
