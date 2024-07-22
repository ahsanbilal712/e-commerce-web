"use client";

import React, { useState } from "react";
import categoryImg from "../../../../public/images/home/categories/categories.jpg";

const PopularCategories: React.FC = () => {
    const items = [
        {
            image: categoryImg,
            title: "Camera & Photo",
            subtitle: "10 products",
        },
        {
            image: categoryImg,
            title: "Camera & Photo",
            subtitle: "10 products",
        },
        {
            image: categoryImg,
            title: "Camera & Photo",
            subtitle: "10 products",
        },
        {
            image: categoryImg,
            title: "Camera & Photo",
            subtitle: "10 products",
        },
        {
            image: categoryImg,
            title: "Camera & Photo",
            subtitle: "10 products",
        },
        {
            image: categoryImg,
            title: "Camera & Photo",
            subtitle: "10 products",
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
        <div className="relative px-10 py-5">
            <div className="container mt-2">
                <h1 className="text-xl">Popular Categories</h1>
                <hr className="w-[185px] h-[2px]  border-0 rounded md:my-2 md:mb-10 bg-[#21b6d3]" />
            </div>
            <div className="carousel flex space-x-5 rounded-box overflow-hidden">
                {items.slice(startIndex, startIndex + 6).map((item, index) => (
                    <div key={index} className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rounded-xl">
                        <img
                            src={item.image.src}
                            alt={`Item ${index}`}
                            className="w-[210px] h-28 object-cover rounded-xl transform transition duration-300 ease-in-out hover:scale-110 "
                        />
                        <div className="absolute bottom-12 left-5 text-white">
                            <div className="text-sm font-bold">{item.title}</div>
                            <div className="text-xs ttext-red-400">({item.subtitle})</div>
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
