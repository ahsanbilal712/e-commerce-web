"use client";

import React, { useState } from "react";
import ProductImages from "../components/ProductImages"
import ProductPurchase from "./ProductPurchase";


const ProductMainInfo: React.FC = () => {


    return (
        <div className="max-w-7xl mx-auto p-10">
            <div className="flex flex-row bg-white rounded-r-xl ">
                <ProductImages />
                <ProductPurchase />
            </div>
        </div>

    );

};

export default ProductMainInfo;
