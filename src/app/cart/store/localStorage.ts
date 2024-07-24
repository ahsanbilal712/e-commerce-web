// src/app/cart/store/localStorage.ts

import { RootState } from './store';

// Define the structure of the persisted state
type PersistedState = {
    cart: {
        items: {
            image: string;
            title: string;
            price: number;
            quantity: number;
        }[];
    };
};

// Load state from localStorage
export const loadState = (): PersistedState | undefined => {
    try {
        const serializedState = localStorage.getItem('cartState');
        console.log("Loading state from localStorage:", serializedState); // Log loaded state
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState) as PersistedState;
    } catch (err) {
        console.error("Failed to load state from localStorage:", err);
        return undefined;
    }
};

// Save state to localStorage
export const saveState = (state: PersistedState): void => {
    try {
        const serializedState = JSON.stringify(state);
        console.log("Saving state to localStorage:", serializedState); // Log saved state
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        console.error("Failed to save state to localStorage:", err);
        // Ignore write errors
    }
};
