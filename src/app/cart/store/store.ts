// src/app/cart/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { loadState, saveState } from './localStorage';

// Load initial state from localStorage
const preloadedState = loadState();

// Create the store with preloaded state
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState,
});

// Save state to localStorage whenever the store state changes
store.subscribe(() => {
    saveState({
        cart: store.getState().cart,
    });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
