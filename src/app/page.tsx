import Image from "next/image";
import Header from "./homePage/components/Header";
import Carousel from "./homePage/components/Carousel";
import TrendingProducts from "./homePage/components/TrendingProducts";
import PopularCategories from "./homePage/components/PopularCategories";
import Footer from "./homePage/components/Footer";


export default function Home() {
  return (
    <div className="bg-slate-50">

      <Header />
      <Carousel />
      <TrendingProducts />
      <PopularCategories />
      <Footer />
    </div>
  );
}
