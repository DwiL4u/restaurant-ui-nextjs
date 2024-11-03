import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border rounded-lg p-6 shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <span className="font-medium text-gray-700 mr-2">Phone:</span>
            <a href="tel:+1234567890" className="text-red-500 underline">
              +123 456 7890
            </a>
          </div>
          <div className="flex items-center justify-center">
            <span className="font-medium text-gray-700 mr-2">Email:</span>
            <a
              href="mailto:info@example.com"
              className="text-red-500 underline"
            >
              info@example.com
            </a>
          </div>
          <div className="flex items-center justify-center">
            <span className="font-medium text-gray-700 mr-2">Address:</span>
            <span className="text-gray-800">123 Main St, Anytown, USA</span>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/" className="text-red-500 underline">
            Go back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
