"use client";

import React, { useState } from "react";
import productImg from "../../../../public/images/home/products/products.webp";
import { RiDeleteBinLine } from "react-icons/ri";


const items = [
    {
        image: productImg,
        title: "Apple iPhone 12 Pro Max 128GB",
        price: "$200",
    }
];

const CartPageBody: React.FC = () => {
    const [cartItems, setCartItems] = useState(items.map(item => ({ ...item, quantity: 1 })));

    const handleQuantityChange = (index, delta) => {
        const newItems = [...cartItems];
        const newQuantity = newItems[index].quantity + delta;
        if (newQuantity > 0) {
            newItems[index].quantity = newQuantity;
        }
        setCartItems(newItems);
    };

    const handleRemoveItem = (index) => {
        const newItems = [...cartItems];
        newItems.splice(index, 1);
        setCartItems(newItems);
    };

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
                        <img src={item.image.src} alt={item.title} className="h-24 w-24 mr-4 object-cover" />
                        <div className="w-32 content-center">
                            <p className="text-xs text-blue-700">{item.title}</p>
                            <p className="text-xs font-bold mt-2">{item.price}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleQuantityChange(index, -1)} className="px-2 py-1 border-2 border-gray-300">-</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(index, 1)} className="px-2 py-1 border-2 border-gray-300">+</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>{`$${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}`}</p>
                        <button onClick={() => handleRemoveItem(index)} className="text-red-500 text-xl mr-10"><RiDeleteBinLine />
                        </button>
                    </div>
                </div>
            ))}
            <hr className="mt-4" />

        </div>
    );
};

export default CartPageBody;
