
// src/app/page.tsx or wherever your HomePage component is located
"use client";
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock_quantity: number;
}

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <h2>{product.description}</h2>
                        <h2>{product.stock_quantity}</h2>
                        <p>Value: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;