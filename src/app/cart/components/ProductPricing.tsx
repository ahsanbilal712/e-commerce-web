"use client";

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ProductPricing: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [coupon, setCoupon] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        // Retrieve the user information from local storage
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            setUsername(parsedUser.username);
        }
    }, []);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = async () => {
        if (username && termsChecked) {
            // Create the JSON object
            const orderDetails = {
                username,
                country,
                state,
                zip,
                coupon,
                termsChecked,  // Ensure this matches the expected field name in the backend
                totalPrice: totalPrice.toFixed(2),  // Ensure this matches the expected field name in the backend
                items: cartItems.map(item => ({
                    itemName: item.name,  // Ensure these field names match the backend expectations
                    quantity: item.quantity,
                    price: item.price
                }))
            };

            try {
                // Send a POST request to the API
                const response = await fetch('/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderDetails)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Order placed successfully:', result);

                // Handle success, e.g., redirect to a confirmation page or show a success message
            } catch (error) {
                console.error('Error placing order:', error);
                // Handle error, e.g., show an error message to the user
            }
        } else {
            // Handle the case when username is not set or terms are not checked
            console.warn('Please complete all required fields.');
        }
    };

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
                        <option value="">Select State</option>
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
                <button className="bg-black text-white text-xs px-4 py-2 mt-2 rounded-sm hover:bg-blue-600 w-full">
                    Apply Coupon
                </button>
                <hr className="my-4" />
            </div>

            {/* Terms & Conditions */}
            <div className="mb-4 flex items-center">
                <input
                    type="checkbox"
                    checked={termsChecked}
                    onChange={() => setTermsChecked(!termsChecked)}
                    className="mr-2"
                />
                <label className="text-xs">
                    I have read and agree to the <a href="#" className="text-blue-600">terms and conditions</a>.
                </label>
            </div>

            {/* Checkout Button */}
            <button
                onClick={handleCheckout}
                className="bg-black text-white text-xs px-4 py-2 rounded-sm hover:bg-blue-600 w-full"
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default ProductPricing;
