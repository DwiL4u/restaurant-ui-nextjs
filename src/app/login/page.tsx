

import React from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className=" p-4 flex items-center justify-center h-screen">
      {/* box */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[70%] xl:w-1/2">
        {/* image container */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image
            src="/loginBg.png"
            alt="login bg"
            fill
            className="object-cover rounded-md"
            layout="fill"
          />
        </div>
        {/* form container */}
        <div className="flex flex-col gap-8 p-10">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 rounded-md p-4 ring-1 ring-orange-100">
            <Image
              src="/google.png"
              alt="google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 rounded-md p-4 ring-1 ring-blue-100">
            <Image
              src="/facebook.png"
              alt="google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem? <Link href="/" className="underline cursor-pointer">Contact Us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
