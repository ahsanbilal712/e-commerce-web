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

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.items.findIndex(item => item.title === action.payload.title);
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
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

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, resetState } = cartSlice.actions;
export default cartSlice.reducer;
