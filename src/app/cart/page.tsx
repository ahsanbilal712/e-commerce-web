// src/app/cart/page.tsx

"use client";

import { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store'; // Adjust the path according to your file structure
import Header from '../homePage/components/Header';
import Footer from '../homePage/components/Footer';
import CartHeading from './components/CartHeading';
import CartPageBody from './components/CartPageBody';

export default function Home() {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        // Retrieve the user information from local storage
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            setUsername(parsedUser.username);
        }
    }, []);
    return (
        <Provider store={store}>
            <div className="bg-slate-100">
                <Header />
                {username && (
                    <div className="text-center text-2xl font-semibold my-4">
                        {username}!
                    </div>
                )}
                <CartHeading />
                <CartPageBody />
                <Footer />
            </div>
        </Provider>
    );
}
