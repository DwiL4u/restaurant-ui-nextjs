import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="bg-black flex flex-col h-screen md:flex-row md:justify-between md:bg-[url(/offerBg.png)] bg-cover bg-center md:h-[70vh]">
      {/* text contaianer */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-white font-bold text-5xl xl:text-6xl gap-8 p-6">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and proccss-centric method
          of empowerment.Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white py-3 px-6 mt-4 rounded-md">
          Order Now!
        </button>
      </div>
      {/* image container */}
      <div className="relative flex-1 w-full md:h-full">
        <Image
          src="/offerProduct.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

export default Offer
