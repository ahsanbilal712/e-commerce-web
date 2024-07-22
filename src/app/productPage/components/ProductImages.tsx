"use client";

import React, { useState } from "react";
import ReactImageMagnify from 'react-image-magnify';
import productImg from "../../../../public/images/home/products/products.webp";
import productImg2 from "../../../../public/images/home/products/productImg2.webp";
import productImg3 from "../../../../public/images/home/products/productImg3.webp";

const ProductImages: React.FC = () => {
    const [expandedImg, setExpandedImg] = useState<string>(productImg.src);
    const [imgText, setImgText] = useState<string>("Nature");
    const [showExpanded, setShowExpanded] = useState<boolean>(true);

    const handleImageClick = (src: string, alt: string) => {
        setExpandedImg(src);
        setImgText(alt);
        setShowExpanded(true);
    };

    const closeExpanded = () => {
        setShowExpanded(false);
    };

    return (
        <div className="flex flex-row w-full">
            {/* Grid on the left */}
            <div className="flex flex-wrap flex-col w-24 mt-10">
                <div className="w-full p-2">
                    <img src={productImg.src} alt="Nature" onClick={() => handleImageClick(productImg.src, "Nature")} className="opacity-80 hover:opacity-100 cursor-pointer" />
                </div>
                <div className="w-full p-2">
                    <img src={productImg2.src} alt="Snow" onClick={() => handleImageClick(productImg2.src, "Snow")} className="opacity-80 hover:opacity-100 cursor-pointer" />
                </div>
                <div className="w-full p-2">
                    <img src={productImg3.src} alt="Mountains" onClick={() => handleImageClick(productImg3.src, "Mountains")} className="opacity-80 hover:opacity-100 cursor-pointer" />
                </div>
                <div className="w-full p-2">
                    <img src={productImg.src} alt="Nature" onClick={() => handleImageClick(productImg.src, "Nature")} className="opacity-80 hover:opacity-100 cursor-pointer" />
                </div>
            </div>

            {/* Expanded image container on the right */}
            <div className="w-full">
                {showExpanded && (
                    <div className="relative h-full p-4">
                        {/* Close the image */}
                        <span onClick={closeExpanded} className="absolute top-2 right-2 text-white text-4xl cursor-pointer">&times;</span>

                        {/* Expanded image with ReactImageMagnify */}
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: imgText,
                                isFluidWidth: true,
                                src: expandedImg,
                            },
                            largeImage: {
                                src: expandedImg,
                                width: 1200,
                                height: 1200,
                            },
                            enlargedImageContainerDimensions: {
                                width: '200%',
                                height: '100%',
                            },
                            enlargedImagePosition: 'beside'
                        }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductImages;
