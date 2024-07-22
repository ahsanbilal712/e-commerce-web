import Image from "next/image";
import Header from "../homePage/components/Header";
import Footer from "../homePage/components/Footer"
import CartHeading from "./components/CartHeading"
import CartPageBody from "./components/CartPageBody";


export default function Home() {
    return (
        <div className="bg-slate-100">

            <Header />
            <CartHeading />
            <CartPageBody />

            <Footer />

        </div>
    );
}
