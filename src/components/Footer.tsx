import Link from 'next/link'
import React from 'react'

const Footer = () => {
   const currentYear = new Date().getFullYear();
  return (
    <div className="h-auto p-4 md:h-24 md:p-6 lg:p-10 xl:p-15 text-red-500 text-sm flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-0">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <p>© {currentYear} ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer
