"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="open menu"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          className="block md:hidden"
          style={{ width: "auto", height: "auto" }}
          priority
        />
      ) : (
        <Image
          src="/close.png"
          alt="close menu"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
          className="block md:hidden"
          style={{ width: "auto", height: "auto" }}
          priority
        />
      )}
      {open && (
        <nav className="bg-red-500 absolute left-0 top-24 h-[calc(100vh-6rem)] text-white flex items-center justify-center flex-col text-3xl uppercase w-full gap-8 z-10">
          <div className="flex flex-col gap-8 md:flex-row  md:justify-between md:w-full md:gap-4">
            {links.map((item) => (
              <Link href={item.url} passHref key={item.id}>
                <span
                  className="focus:outline-none  cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </span>
              </Link>
            ))}
            {!user ? (
              <Link href="/login" passHref>
                <span
                  onClick={() => setOpen(false)}
                  className="focus:outline-none cursor-pointer"
                >
                  Login
                </span>
              </Link>
            ) : (
              <Link href="/orders" passHref>
                <span onClick={() => setOpen(false)}>Orders</span>
              </Link>
            )}
            <Link href="/cart" passHref>
              <span onClick={() => setOpen(false)}>
                <CartIcon />
              </span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Menu;
