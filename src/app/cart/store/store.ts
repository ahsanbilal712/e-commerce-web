// src/app/cart/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle'; // Ensure lodash is installed

// Load the state from local storage
const preloadedState = loadState();

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    // Use preloadedState to initialize the store state from localStorage if not in development mode
    preloadedState: process.env.NODE_ENV === 'development' ? undefined : preloadedState,
});

// Use throttle to limit how often the state is saved to local storage
store.subscribe(
    throttle(() => {
        saveState({
            cart: store.getState().cart,
        });
    }, 1000) // Save state at most once every 1000 milliseconds
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
