import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CartIcon = () => {
      return (
        <Link href="/cart" className="flex items-center gap-4">
          <div className="relative h-8 w-8 md:w-5 md:h-5">
            <Image
              src="/cart.png"
              alt="cart"
              fill
              sizes="(max-width: 768px) 20px, (min-width: 768px) 32px"
            />
          </div>
          <span>Cart (3)</span>
        </Link>
      );
}

export default CartIcon
