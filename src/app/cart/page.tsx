"use client";
// src/app/cart/page.tsx
import Image from "next/image";
import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the path according to your file structure
import Header from "../homePage/components/Header";
import Footer from "../homePage/components/Footer";
import CartHeading from "./components/CartHeading";
import CartPageBody from "./components/CartPageBody";

export default function Home() {
    return (
        <Provider store={store}>
            <div className="bg-slate-100">
                <Header />
                <CartHeading />
                <CartPageBody />
                <Footer />
            </div>
        </Provider>
    );
}
