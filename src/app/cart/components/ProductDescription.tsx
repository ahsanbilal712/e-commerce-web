// src/app/cart/components/ProductDescription.tsx
"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { incrementQuantity, decrementQuantity, removeItem } from '../store/cartSlice';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CiGift } from "react-icons/ci";

const ProductDescription: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="max-w-full mx-auto pr-4">
            <hr className="mb-4" />

            <div className="grid grid-cols-3 gap-4 font-bold">
                <div className='text-sm'>Product</div>
                <div className='text-sm'>Quantity</div>
                <div className='text-sm'>Subtotal</div>
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
            <div className='flex flex-row justify-between'>
                <button className="bg-black text-white text-xs px-4 py-2 mt-4 font-bold rounded-sm  hover:bg-blue-600 ">
                    Continue Shopping
                </button>
                {cartItems.map((item, index) => (
                    <button onClick={() => dispatch(removeItem(index))} className="bg-black text-white text-xs px-9 py-3 mt-4 font-bold rounded-sm hover:bg-blue-600 mr-10 ">
                        Delete All
                    </button>
                ))}
            </div>
            <hr className="mt-4" />
            <div className='flex flex-col mt-16 '>
                <div className='flex flex-row items-center'>
                    <CiGift />
                    <p className='ml-3 text-xs'>Do you want a gift wrap? Only $2.00</p>
                </div>
            </div>
            <button className="bg-black text-white text-xs px-7  py-3  mt-4 font-bold rounded-sm hover:bg-blue-600 ">
                Add a Gift Wrap
            </button>
            <div className='flex flex-col mt-16 '>
                <div className='flex flex-row items-center'>
                    <p className=' text-sm font-bold'>Add Order Note</p>
                </div>
            </div>

            <textarea id="message" rows={4} className="block p-2.5 mt-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>


        </div>
    );
};

export default ProductDescription;