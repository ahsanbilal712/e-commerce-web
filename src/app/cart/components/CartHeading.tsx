"use client";

import React, { useState } from "react";


const CartHeading: React.FC = () => {


    return (
        <div className="max-w-7xl mx-auto p-10">
            <div className="flex justify-center flex-col py-2" >
                <div className="text-2xl font-sans font-bold mx-auto">
                    Your Cart
                </div>
                <div className="text-sm font-sans mx-auto py-4 ">
                    Home / cart
                </div>
            </div>
        </div>


    );

};

export default CartHeading;
