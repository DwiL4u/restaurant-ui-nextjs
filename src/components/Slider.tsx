"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "always fresh, always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in the city",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with family",
    image: "/slide3.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* text container */}
      <div className=" flex-1 flex items-center gap-8 justify-center flex-col text-red-500 font-bold">
        <h1 className="text-3xl uppercase text-center p-3 md:text-4xl md:p-10 xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-3 px-6 rounded-md">
          Order Now
        </button>
      </div>
      {/* image container */}
      <div className="h-1/2 relative w-full lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt="man"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
        />
      </div>
    </div>
  );
};

export default Slider;
