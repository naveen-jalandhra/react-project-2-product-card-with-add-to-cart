import React from "react";
import { useContext } from "react";
import { MyStore } from "../Context/StoreContext";

export const Header = () => {
  const { setPage, CartItem } = useContext(MyStore);

  return (
    <header className="font-poppins fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14">
          <div className="shrink-0 text-gray-900 cursor-pointer">
            <img
              src="./public/pngwing.com.png"
              alt="SiteLogo"
              className="w-8"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            {/* Removed the font classes from here, they will inherit from the header */}
            <ul className="flex items-center space-x-10 text-[12px] font-medium  text-red-400 tracking-wide">
              <li
                onClick={() => {
                  setPage(false);
                }}
                className="cursor-pointer text-gray-800/80 hover:text-black transition-colors duration-200"
              >
                Store
              </li>
              <li className="cursor-pointer hover:text-red-400 transition-colors duration-200">
                Mac
              </li>
              <li className="cursor-pointer hover:text-red-400 transition-colors duration-200">
                iPad
              </li>
              <li className="cursor-pointer hover:text-red-400 transition-colors duration-200">
                iPhone
              </li>
              <li className="cursor-pointer hover:text-red-400 transition-colors duration-200">
                Watch
              </li>
              <li className="cursor-pointer hover:text-red-400 transition-colors duration-200">
                AirPods
              </li>
              <li className="cursor-pointer hover:text-red-400 transition-colors duration-200">
                Support
              </li>
            </ul>
          </nav>

          {/* Icons Area */}
          <div className="shrink-0 flex items-center space-x-5 text-gray-800/80">
            <span className="cursor-pointer hover:text-black transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
            <div
              className="relative cursor-pointer"
              onClick={() => setPage(true)}
            >
              <span className="hover:text-black transition-colors block p-1">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </span>

              {/* 🌟 Pop-up Badge (Sirf tab dikhega jab cart mein items honge) */}
              {CartItem.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white shadow-sm animate-pulse">
                  {CartItem.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
