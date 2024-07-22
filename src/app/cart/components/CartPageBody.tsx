"use client";

import React, { useState } from "react";
import { AiOutlineStop } from "react-icons/ai";
import ProductDescription from "./ProductDescription"




const CartPageBody: React.FC = () => {


    return (
        <div className="max-w-full mx-auto p-10 bg-white" >
            <div className="flex justify-center flex-col py-2" >
                <div className="text-sm font-sans  mx-auto flex flex-row">
                    <AiOutlineStop className="text-red-600 mr-2" /> <span>Please, hurry! Someone has placed an order on one of the items you have in the cart. Products are limited, checkout within 44:28 s</span>
                </div>
                <div className="flex flex-row mx-auto py-10">
                    <div className="w-[950px]">
                        <ProductDescription />
                    </div>
                    <div className="w-[400px] bg-slate-500">
                        ff
                    </div>
                </div>
            </div>
        </div>


    );

};

export default CartPageBody;
