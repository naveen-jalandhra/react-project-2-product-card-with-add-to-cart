import React from "react";

export const Footer = ({ setActivePage }) => {
  // Ye JavaScript ka jaadu hai jo apne aap current saal (year) nikal lega
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Logo (Click karke Home par ja sakte hain) */}
        <div
          onClick={() => setActivePage("home")}
          className="text-3xl font-black tracking-tighter text-gray-900 mb-6 md:mb-0 cursor-pointer"
        >
          LUXE<span className="text-blue-600">.</span>
        </div>

        {/* Dynamic Navigation Links */}
        <div className="flex space-x-8 text-sm font-medium text-gray-500">
          <span
            onClick={() => setActivePage("home")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => setActivePage("products")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Shop
          </span>
          <span
            onClick={() => setActivePage("cart")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Cart
          </span>
        </div>
      </div>

      {/* Dynamic Copyright Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center md:text-left text-xs text-gray-400">
        &copy; {currentYear} LUXE Worldwide. All rights reserved.
      </div>
    </footer>
  );
};
