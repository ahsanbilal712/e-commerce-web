"use client";
import React from "react";
import Image from 'next/image';
import Slider from "react-slick";
import CarouselImage1 from '../../../../public/images/home/carousel/Carousel_1.webp';
import CarouselImage2 from '../../../../public/images/home/carousel/Carousel_2.webp';
import CarouselSide from '../../../../public/images/home/carousel/carousel_sidebar.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer z-10 hover:bg-gray-400"
            onClick={onClick}
        >
            <span className="text-black">{'>'}</span>
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer z-10 hover:bg-gray-400"
            onClick={onClick}
        >
            <span className="text-black">{'<'}</span>
        </div>
    );
};

const CarouselImg: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    width: "100%"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                className="w-2 h-2 bg-gray-400 rounded-full"
                style={{
                    width: "10px",
                    height: "10px",
                    display: "inline-block",
                    margin: "0 4px",
                    cursor: "pointer"
                }}
            />
        )
    };

    return (

        <div className="flex flex-col md:flex-row p-10">
            <div className="w-[800px]  relative rounded-xl">
                <Slider {...settings}>
                    <div className="relative">
                        <Image src={CarouselImage1} alt="Carousel Image 1" className="rounded-xl w-[800px] h-[350px]" />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Discover Now
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <Image src={CarouselImage2} alt="Carousel Image 2" className="rounded-2xl w-[800px] h-[350px]" />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Discover Now
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="flex flex-col px-5 pb-2 justify-between">
                <Image src={CarouselSide} alt="Carousel Image 2" className="rounded-2xl w-[390px] h-[165px]" />
                <Image src={CarouselSide} alt="Carousel Image 2" className="rounded-2xl w-[390px] h-[165px]" />
            </div>
            <div className="flex flex-col  pb-2 justify-between">
                <Image src={CarouselSide} alt="Carousel Image 2" className="rounded-2xl w-[390px] h-[165px]" />
                <Image src={CarouselSide} alt="Carousel Image 2" className="rounded-2xl w-[390px] h-[165px]" />
            </div>
        </div>

    );
};

export default CarouselImg;
