"use client";

import React, { useState } from "react";
import categoryImg from "../../../../public/images/home/categories/categories.jpg"

const PopularCategories: React.FC = () => {
    const items = [
        categoryImg,
        categoryImg,
        categoryImg,
        categoryImg,
        categoryImg,
        categoryImg,

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
            <div className="carousel flex space-x-5  rounded-box overflow-hidden">
                {items.slice(startIndex, startIndex + 6).map((item, index) => (
                    <div key={index} className="carousel-item flex-shrink-0">
                        <img
                            src={categoryImg.src}
                            alt={`Item ${index}`}
                            className="w-[210px] h-28 object-cover rounded-xl"
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

export default PopularCategories;
