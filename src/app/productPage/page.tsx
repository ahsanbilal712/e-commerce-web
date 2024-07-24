"use client"
// src/app/productPage/page.tsx
import { Provider } from 'react-redux';
import store from '../cart/store/store'; // Path to your Redux store
import Header from "./components/Header";
import ProductMainInfo from "./components/ProductMainInfo";
import RelatedProducts from "./components/RelatedProducts";
import Footer from "../homePage/components/Footer";

export default function ProductPage() {
    return (
        <Provider store={store}>
            <div className="bg-slate-100">
                <Header />
                <ProductMainInfo />
                <RelatedProducts />
                <Footer />
            </div>
        </Provider>
    );
}
