"use client";

import { Provider } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import store from '../cart/store/store'; // Path to your Redux store
import Header from "../homePage/components/Header";
import ProductMainInfo from "./components/ProductMainInfo";
import RelatedProducts from "./components/RelatedProducts";
import Footer from "../homePage/components/Footer";

export default function ProductPage() {
    const searchParams = useSearchParams();

    // Extract query parameters
    const image = searchParams.get('image') || '';
    const name = searchParams.get('name') || '';
    const price = parseFloat(searchParams.get('price') || '0');
    const specs = JSON.parse(searchParams.get('specs') || '[]') as string[];

    const product = {
        image,
        name,
        price,
        specs
    };

    return (
        <Provider store={store}>
            <div className="bg-slate-100">
                <Header />
                <ProductMainInfo product={product} />
                <RelatedProducts />
                <Footer />
            </div>
        </Provider>
    );
}
