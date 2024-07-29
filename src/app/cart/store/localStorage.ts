// Define the local storage key
const localStorageKey = 'cartState';

// Define the structure of the persisted state
type PersistedState = {
    cart: {
        items: {
            image: string;
            name: string;
            price: number;
            quantity: number;
        }[];
    };
};

// Clear localStorage in development mode if in the browser
export const clearLocalStorageIfInDevMode = () => {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        localStorage.removeItem(localStorageKey);
    }
};

// Load state from localStorage
export const loadState = (): PersistedState | undefined => {
    if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
        return undefined; // Always use default state in development if running on the server
    }

    try {
        if (typeof window !== 'undefined') {
            const serializedState = localStorage.getItem(localStorageKey);
            console.log("Loading state from localStorage:", serializedState); // Log loaded state
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState) as PersistedState;
        }
    } catch (err) {
        console.error("Failed to load state from localStorage:", err);
    }
    return undefined;
};

// Save state to localStorage
export const saveState = (state: PersistedState): void => {
    if (typeof window !== 'undefined') {
        try {
            const serializedState = JSON.stringify(state);
            console.log("Saving state to localStorage:", serializedState); // Log saved state
            localStorage.setItem(localStorageKey, serializedState);
        } catch (err) {
            console.error("Failed to save state to localStorage:", err);
            // Ignore write errors
        }
    }
};
