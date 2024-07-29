// src/app/productPage/components/ProductMainInfo.tsx
"use client";

import React from "react";
import ProductImages from "../components/ProductImages";
import ProductPurchase from "./ProductPurchase";

interface ProductProps {
    product: {
        image: string;
        name: string;
        price: number;
        specs: string[];
    };
}

const ProductMainInfo: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="max-w-7xl mx-auto p-10">
            <div className="flex flex-row bg-white rounded-r-xl">
                <ProductImages />
                <ProductPurchase {...product} />
            </div>
        </div>
    );
};

export default ProductMainInfo;
