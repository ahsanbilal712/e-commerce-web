//src/app/productPage/components/ProductPurchase.tsx
"use client";

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../cart/store/cartSlice'; // Import the action

interface ProductProps {
    image: string;
    title: string;
    price: number;
    specs: string[];
}

const ProductPurchase: React.FC<ProductProps> = ({ image, title, price, specs }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const dispatch = useDispatch();

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => quantity > 1 && setQuantity(prev => prev - 1);

    const handleAddToCart = () => {
        console.log("Dispatching addToCart", { image, title, price, quantity });

        dispatch(addToCart({ image, title, price, quantity }));
    };

    return (
        <div className="flex flex-col w-full p-4">
            <h1 className="text-2xl font-bold">{title}</h1>

            <div className="flex items-center my-2">
                <div className="flex text-yellow-400"> {/* Placeholder for star icons */}
                    ★★★★☆
                </div>
                <div className="text-sm text-gray-500 ml-2">(200 reviews)</div>
            </div>
            <hr />

            <div className="my-2">
                <p className="text-xl font-semibold">${price.toFixed(2)}</p>
                <ul className="list-disc list-inside">
                    {specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-2 my-2">
                <button onClick={decrementQuantity} className="bg-gray-300 px-2 py-1">-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity} className="bg-gray-300 px-2 py-1">+</button>
                <button onClick={handleAddToCart} className="flex-grow bg-black text-white px-4 text-sm font-bold py-2 rounded-3xl">

                    Add to Cart
                </button>
            </div>

            <div className="flex items-center my-2">
                <input type="checkbox" id="agree" className="mr-2" />
                <label htmlFor="agree">I agree to the terms and conditions</label>
            </div>

            <button className="bg-purple-500 text-white w-full text-sm font-bold py-2 my-2 rounded-3xl">
                Buy with Shop Pay
            </button>
            <hr className="my-5" />

            <div className="text-sm my-2">
                <p>Shipping and Returns</p>
                <p>Contact us</p>
                <p>Estimated Delivery: Jul 27 - Jul 31</p>
                <p>Return within 30 days of purchase. Taxes are non-refundable.</p>
                <hr className="my-5" />

                <p>Availability:<span className="text-green-400"> In Stock</span> </p>
                <p>SKU: N/A</p>
                <p>Vendor: Apple</p>
                <p>Categories: Best Selling, Featured Products</p>
                <p>Tags: Apple iPhone Smart Phones & Tablets Unlocked</p>
            </div>
        </div>
    );
};

export default ProductPurchase;
