"use client";

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { FC, useCallback, useEffect } from 'react';



const ProductPricing: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [coupon, setCoupon] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);



    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="p-4 bg-white border rounded-sm border-[#21b6d3] shadow-sm">
            <h2 className="text-xs font-bold mb-4">Cart Totals</h2>

            {/* Subtotal */}
            <div className="mb-4">
                <hr className="my-2" />
                <div className="flex justify-between text-xs font-semibold">
                    <p>Subtotal:</p>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>
                <hr className="my-2" />
            </div>

            {/* Estimated Shipping Rates */}
            <div className="mb-4">
                <h3 className="text-xs font-semibold mb-2">Estimated Shipping Rates</h3>
                <div className="mb-2">
                    <label className="block text-xs font-medium mb-1">Country</label>
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full border-gray-300 rounded-md shadow-sm text-xs"
                    >
                        <option value="">Select Country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        {/* Add more country options here */}
                    </select>
                </div>
                <div className="mb-2">
                    <label className="block text-xs font-medium mb-1">State</label>
                    <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full border-gray-300 rounded-md shadow-sm text-xs"
                    >
                        <option value="" >Select State</option>
                        <option value="ny">New York</option>
                        <option value="ca">California</option>
                        {/* Add more state options here */}
                    </select>
                </div>
                <div className="mb-2">
                    <label className="block text-xs font-medium mb-1">Zip/Postal Code</label>
                    <input
                        type="text"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="w-full border-gray-300 rounded-md shadow-sm text-xs"
                    />
                </div>
                <button className="bg-black text-white text-xs px-4 py-2 mt-4 rounded-sm hover:bg-blue-600 w-full">
                    Calculate Shipping Rates
                </button>
                <hr className="my-4" />
            </div>

            {/* Coupon */}
            <div className="mb-4">
                <h3 className="text-xs font-semibold mb-2">Coupon</h3>
                <p className="text-xs mb-2">Coupon code will work on checkout page.</p>
                <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm text-xs"
                />
                <hr className="my-4" />
            </div>

            {/* Order Total */}
            <div className="flex justify-between text-md font-semibold mb-4">
                <p>Order Total:</p>
                <p className='text-lime-700 text-xl'>${totalPrice.toFixed(2)}</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">Taxes and shipping calculated at checkout.</p>

            {/* Terms & Conditions */}
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    checked={termsChecked}
                    onChange={() => setTermsChecked(!termsChecked)}
                    className="mr-2"
                />
                <label className="text-sm">I agree with Terms & Conditions</label>
            </div>

            <button
                disabled={!termsChecked}
                className={`bg-black text-white text-xs px-4 py-4 rounded-sm hover:bg-blue-600 w-full ${!termsChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Checkout
            </button>
        </div>
    );
};

export default ProductPricing;