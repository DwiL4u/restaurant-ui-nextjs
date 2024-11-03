import React from 'react'
import Link from 'next/link'
import { menu } from '@/data'

const MenuPage = () => {
  return (
    <div className="p-3 lg:px-10 xl:px-30 h-[calc(120vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full lg:w-3/4 xl:w-2/3 h-1/3 bg-cover p-2 items-center justify-between flex md:h-[60%]"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-lg md:text-xl lg:text-3xl xl:text-4xl">
              {category.title}
            </h1>
            <p className="text-sm md:text-sm lg:text-base xl:text-xl my-4 lg:my-6">{category.desc}</p>
            <button
              className={`hidden 2xl:block py-2 px-4 rounded-md ${
                category.id === 2
                  ? `bg-${category.color} text-${
                      category.color === "black" ? "white" : "red"
                    }`
                  : "bg-white text-red-600 border border-red-600"
              }`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPage
