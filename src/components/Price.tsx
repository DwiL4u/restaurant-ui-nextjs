"use client";
import React from "react";
import { useState, useEffect } from "react";

type Props = {
  price: number;
  id: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);
  const addToCart = () => {
    const cartItem = {
      id,
      quantity,
      price: total,
      options: options ? options[selected] : null,
    };
    console.log(cartItem);
  }
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      <p className="text-sm">Product ID: {id}</p>
      {/* options container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="p-2 ring-1 ring-red-500 rounded-md min-w-[6rem]"
            style={{
              background: selected === index ? "rgb(248  113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        {/* quantity and add button container */}
        <div className="flex justify-between w-full p-2 ring-1 ring-red-500">
          {/* quantity */}
          <span>Quantity</span>
          <div className="flex gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* cart button */}
        <button
          className="uppercase w-56 bg-red-500 text-white p-2 ring-1 ring-red-500"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
