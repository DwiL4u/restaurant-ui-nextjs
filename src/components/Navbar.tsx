import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="text-red-500 flex p-4 h-10 items-center border-b-2 border-b-red-500 md:h-16 uppercase lg:px-15 xl:px-30 w-full">
      {/* left links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">MASSIMO</Link>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* right links */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="inline-flex items-center gap-1 cursor-pointer md:absolute top-3 r-2 lg:static bg-orange-300 rounded-md py-1 px-2 md:text-sm">
          <Image src="/phone.png" alt="phone" width={18} height={18} />
          <span className="whitespace-nowrap">053 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
