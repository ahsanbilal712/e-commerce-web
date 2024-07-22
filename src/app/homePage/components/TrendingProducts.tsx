"use client";

import React, { useState } from "react";
import productImg from "../../../../public/images/home/products/products.webp";
import productImg2 from "../../../../public/images/home/products/productImg2.webp";
import productImg3 from "../../../../public/images/home/products/productImg3.webp";

const PopularCategories: React.FC = () => {
    const items = [
        {
            image: productImg,
            title: "Apple iPhone 12 Pro Max 128GB",
            price: "$56",
        },
        {
            image: productImg2,
            title: "Apple iPhone 12 Pro Max 128GB",
            price: "$56",
        },
        {
            image: productImg3,
            title: "Apple iPhone 12 Pro Max 128GB",
            price: "$56",
        },
        {
            image: productImg,
            title: "Apple iPhone 12 Pro Max 128GB",
            price: "$56",
        },
        {
            image: productImg2,
            title: "Apple iPhone 12 Pro Max 128GB",
            price: "$56",
        },
        {
            image: productImg,
            title: "Apple iPhone 12 Pro Max 128GB",
            price: "$56",
        },
        {
            image: productImg3,
            title: "Apple iPhone 13 Pro Max 128GB",
            price: "$56",
        },
        {
            image: productImg2,
            title: "Apple iPhone 12 Pro Max 128GB",
            price: "$56",
        },
        {
            image: productImg,
            title: "Apple iPhone 12 Pro Max 128GB",
            price: "$56",
        },
    ];

    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 6));
    };

    return (
        <div className="relative px-10 py-10">
            <div className="container  mt-10">
                <h1 className="text-xl ">Hot Trending Products</h1>
                <hr className="w-[220px] h-[2px]  border-0 rounded md:my-2 md:mb-10 bg-[#21b6d3]" />
            </div>
            <div className="carousel flex space-x-5 rounded-box overflow-hidden">
                {items.slice(startIndex, startIndex + 7).map((item, index) => (
                    <div key={index} className="carousel-item flex-shrink-0 w-[175px] p-3 rounded-xl  bg-white">
                        <img
                            src={item.image.src}
                            alt={`Item ${index}`}
                            className="w-[210px] h-36 object-cover rounded-xl"
                        />
                        <div className=" mt-2">
                            <div className="text-xs text-blue-800 font-bold">{item.title}</div>
                            <div className="text-xs font-bold">{item.price}</div>
                            <button className="bg-black text-xs w-full text-white px-4 py-2 rounded-3xl hover:bg-blue-600 mt-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 transform -translate-y-1/2 left-10 bg-white rounded-full shadow-md p-2"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 transform -translate-y-1/2 right-10 bg-white rounded-full shadow-md p-2"
            >
                &gt;
            </button>
        </div>
    );
};

export default PopularCategories;
