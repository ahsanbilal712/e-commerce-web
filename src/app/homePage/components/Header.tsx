"use client";

import React from "react";
import profileIcon from "../../../../public/images/home/header/icons/profile.svg"
import wishlistIcon from "../../../../public/images/home/header/icons/wishlist.svg"
import cartIcon from "../../../../public/images/home/header/icons/cart.svg"
import logo from "../../../../public/images/logo.jpg"
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';



const HeroSection: React.FC = () => {
    return (
        <header className="bg-[#2b3b92]">
            <div className="container mx-auto px-4 py-4 flex items-center">

                <div className="mr-auto md:w-48 flex-shrink-0">
                    <Link href="/" passHref>
                        <img className="h-20 md:h-20" src={logo.src} alt="" />
                    </Link>
                </div>

                <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
                    <select className="bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
                        <option>all categories</option>
                    </select>
                    <input className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4" type="text" placeholder="I'm searching for ..." />
                </div>

                <nav className="contents">
                    <ul className="ml-4 xl:w-48 flex items-center justify-end">
                        <li className="ml-2 lg:ml-4 relative  flex flex-row items-center">
                            <a className="" href="">
                                <img src={profileIcon.src} className="h-9 lg:h-10 p-2 text-gray-500" alt="Profile Icon" />
                                <span className="ml-2 text-gray-500 text-xs">Login</span>  {/* Text label next to profile icon */}
                            </a>
                        </li>
                        <li className="ml-2 lg:ml-4 relative  flex items-center">
                            <a className="" href="">
                                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">3</div>
                                <img src={wishlistIcon.src} className="h-9 lg:h-10 p-2 text-gray-500" alt="Wishlist Icon" />
                                <span className="ml-2 text-gray-500 text-xs">Wishlist</span>  {/* Text label next to wishlist icon */}
                            </a>
                        </li>
                        <li className="ml-2 lg:ml-4 relative flex flex-col items-center">
                            <Link href="/cart" passHref>
                                <button className="relative flex flex-col items-center">

                                    <FaShoppingCart className="text-white text-2xl" />
                                    <span className=" mt-1 text-white text-xs">Cart</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>


                <div className="ml-4 hidden sm:flex flex-col font-bold">
                    <span className="text-xs text-gray-400">Your Cart</span>
                    <span>$2,650,59</span>
                </div>

            </div>

            <hr />
        </header>
    );
};

export default HeroSection; 