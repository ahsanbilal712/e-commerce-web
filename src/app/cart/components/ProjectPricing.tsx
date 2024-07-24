// src/app/cart/components/ProductPricing.tsx
"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ProductPricing: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Total Price</h2>
            <p className="text-xl">${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default ProductPricing;
