import React, { useContext } from "react";
// Tanki (Context) import kiya taaki Cart ki ginti (length) nikal sakein
import { MyStore } from "./Components/Context/StoreContext";

export const Header = ({ setActivePage }) => {
  // Tanki se AddToCart array nikal liya
  const { AddToCart } = useContext(MyStore);

  return (
    // Header Background: Thoda aur luxury look dene ke liye shadow-sm aur border lagaya hai
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* 1. Logo / Brand Name (Click karne par Home par jayega) */}
        <div
          onClick={() => setActivePage("home")}
          className="text-2xl font-black text-gray-900 cursor-pointer tracking-tighter"
        >
          LUXE<span className="text-blue-600">.</span>
        </div>

        {/* 2. Navigation Links (Home aur Products dono add kar diye) */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
            <li
              onClick={() => setActivePage("home")}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => setActivePage("products")}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Shop
            </li>
          </ul>
        </nav>

        {/* 3. Cart Button (Icon aur Real-time Number badge ke sath) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActivePage("cart")}
            className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
          >
            {/* Cart wala SVG Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>

            {/* REAL-TIME BADGE: Agar cart me items hain (> 0), tabhi lal badge dikhega */}
            {AddToCart.length > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-blue-600 rounded-full border-2 border-white">
                {AddToCart.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
