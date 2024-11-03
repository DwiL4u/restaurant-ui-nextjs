import React from "react";
import Image from "next/image";

const CartPage = () => {
  return (
    <div className="flex flex-col text-red-500 h-screen lg:flex-row">
      {/* product container  */}
      <div className="flex-grow p-4 flex flex-col justify-center overflow-y-auto h-[50%] md:h-[60%] lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* single item */}
        <div className="flex items-center justify-between mb-4 border-b pb-2">
          <Image
            src="/temporary/p1.png"
            alt="sicilian"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
            priority
          />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* single item */}
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/temporary/p1.png"
            alt="sicilian"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
            priority
          />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* single item */}
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/temporary/p1.png"
            alt="sicilian"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
            priority
          />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* payment container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-2/3 2xl:w-1/2 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$00.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 p-3 text-white rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
