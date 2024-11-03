import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* wrapper */}
      <div className="w-max flex">
        {/* single item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen  flex flex-col items-center h-[90vh] justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]"
          >
            {/* image container */}
            {item.img && (
              <div
                className="relative flex-1 w-full hover:rotate-[60deg] transition-all
               duration-500"
              >
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
                />
              </div>
            )}
            {/* text container  */}
            <div className="flex flex-col gap-4 items-center text-center justify-center">
              <h1 className="text-xl uppercase font-bold xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 p-2 rounded-md text-white">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
