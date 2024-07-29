"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

interface Product {
    image: string;
    name: string;
    price: number;
    specs: string[];
}

const TrendingProducts: React.FC = () => {
    const [items, setItems] = useState<Product[]>([]);
    const [startIndex, setStartIndex] = useState(0);
    const router = useRouter();

    useEffect(() => {
        // Fetch product data from API or a local source
        const fetchProducts = async () => {
            try {
                // Replace with your API endpoint
                const response = await fetch('/api/products');
                const data: Product[] = await response.json();

                // Hard-coded specs for demonstration
                const updatedData = data.map(product => ({
                    ...product,
                    specs: ["Spec 1", "Spec 2", "Spec 3"] // Hard-coded specs
                }));

                setItems(updatedData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 6));
    };

    const handleProductClick = (item: Product) => {
        // Manually construct the URL with query parameters
        const query = new URLSearchParams({
            image: item.image,
            name: item.name,
            price: item.price.toString(),
            specs: JSON.stringify(item.specs)
        }).toString();

        router.push(`/productPage?${query}`);
    };

    return (
        <div className="relative px-10 py-10">
            <div className="carousel flex space-x-5 rounded-box overflow-hidden">
                {items.slice(startIndex, startIndex + 7).map((item, index) => (
                    <div key={index} className="carousel-item flex-shrink-0 w-[175px] p-3 rounded-xl bg-white">
                        <div onClick={() => handleProductClick(item)} className="cursor-pointer">
                            <img
                                src={item.image}
                                alt={`Item ${index}`}
                                className="w-[210px] h-36 object-cover rounded-xl"
                            />
                        </div>
                        <div className="mt-2">
                            <div className="text-xs text-blue-800 font-bold">{item.name}</div>
                            <div className="text-xs font-bold">${item.price.toFixed(2)}</div>
                            <button className="bg-black text-xs w-full text-white px-4 py-2 rounded-3xl hover:bg-blue-600 mt-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handlePrev} className="absolute top-1/2 transform -translate-y-1/2 left-10 bg-white rounded-full shadow-md p-2">
                &lt;
            </button>
            <button onClick={handleNext} className="absolute top-1/2 transform -translate-y-1/2 right-10 bg-white rounded-full shadow-md p-2">
                &gt;
            </button>
        </div>
    );
};

export default TrendingProducts;
