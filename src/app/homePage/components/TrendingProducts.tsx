"use client";

import React, { useState } from "react";
import productsImage from "../../../../public/images/home/products/products.webp"

const TrendingProducts: React.FC = () => {
    const items = [
        productsImage,
        productsImage,
        productsImage,
        productsImage,
        productsImage,
        productsImage,
        productsImage,
        productsImage,
        productsImage,
        productsImage,
        productsImage,

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
            <div className="carousel flex space-x-5 rounded-box overflow-hidden ">
                {items.slice(startIndex, startIndex + 7).map((item, index) => (
                    <div key={index} className="carousel-item flex-shrink-0 h-[270px] rounded-xl bg-white">
                        <img
                            src={productsImage.src}
                            alt={`Item ${index}`}
                            className="w-[177px] h-68 object-cover rounded-lg"
                        />
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

export default TrendingProducts;
