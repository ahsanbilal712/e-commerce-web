// src/app/cart/components/ProductDescription.tsx
"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { incrementQuantity, decrementQuantity, removeItem } from '../store/cartSlice';
import { RiDeleteBinLine } from 'react-icons/ri';

const ProductDescription: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="max-w-full mx-auto pr-4">
            <hr className="mb-4" />

            <div className="grid grid-cols-3 gap-4 font-bold">
                <div>Product</div>
                <div>Quantity</div>
                <div>Subtotal</div>
            </div>
            <hr className="my-4" />
            {cartItems.map((item, index) => (
                <div key={index} className="grid grid-cols-3 items-center gap-4">
                    <div className="flex">
                        <img src={item.image} alt={item.title} className="h-24 w-24 mr-4 object-cover" />
                        <div className="w-32 content-center">
                            <p className="text-xs text-blue-700">{item.title}</p>
                            <p className="text-xs font-bold mt-2">${item.price}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => dispatch(decrementQuantity(index))} className="px-2 py-1 border-2 border-gray-300">-</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button onClick={() => dispatch(incrementQuantity(index))} className="px-2 py-1 border-2 border-gray-300">+</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>{`$${(item.price * item.quantity).toFixed(2)}`}</p>
                        <button onClick={() => dispatch(removeItem(index))} className="text-red-500 text-xl mr-10">
                            <RiDeleteBinLine />
                        </button>
                    </div>
                </div>
            ))}
            <hr className="mt-4" />
        </div>
    );
};

export default ProductDescription;
