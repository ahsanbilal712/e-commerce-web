"use client";
// src/app/page.tsx

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./homePage/components/Header";
import Carousel from "./homePage/components/Carousel";
import TrendingProducts from "./homePage/components/TrendingProducts";
import PopularCategories from "./homePage/components/PopularCategories";
import Footer from "./homePage/components/Footer";

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
    <div className="bg-slate-50">
      <Header />

      {/* Conditionally render the welcome message if username is available */}
      {username && (
        <div className="text-center text-2xl font-semibold my-4">
          Welcome, {username}!
        </div>
      )}

      <Carousel />
      <TrendingProducts />
      <PopularCategories />
      <Footer />
    </div>
  );
}
