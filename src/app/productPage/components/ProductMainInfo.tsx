//src/app/productPage/components/ProductMainInfo.tsx
"use client";

import React, { useState } from "react";
import ProductImages from "../components/ProductImages"
import ProductPurchase from "./ProductPurchase";
import productImage from "../../../../public/images/home/products/products.webp";


const ProductMainInfo: React.FC = () => {
    const product = {
        image: '/images/home/products/products.webp',
        title: 'Apple iPhone 12 Pro Max 128GB',
        price: 299.99,
        specs: ['Spec 1', 'Spec 2', 'Spec 3'],
    };

    return (
        <div className="max-w-7xl mx-auto p-10">
            <div className="flex flex-row bg-white rounded-r-xl ">
                <ProductImages />
                <ProductPurchase {...product} />
            </div>
        </div>

    );

};

export default ProductMainInfo;
