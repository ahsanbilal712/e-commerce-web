import Image from "next/image";
import Header from "./components/Header";
import ProductMainInfo from "./components/ProductMainInfo"
import Footer from "../homePage/components/Footer"


export default function Home() {
    return (
        <div className="bg-slate-100">

            <Header />
            <ProductMainInfo />
            <Footer />

        </div>
    );
}
