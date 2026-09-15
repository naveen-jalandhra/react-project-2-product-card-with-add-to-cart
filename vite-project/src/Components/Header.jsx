import React, { useState } from "react";
import { Search, ShoppingBag, Menu, X, Globe, ArrowRight } from "lucide-react";

export function Header({ setToggleCondition }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090a0f]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <Globe className="w-4 h-4" />
          </div>
          <span className="text-base font-medium tracking-tight text-white">
            NEXUS<span className="text-neutral-500 font-light ml-1">AI</span>
          </span>
        </a>

        {/* Center Navigation - Sabhi li ko alag-alag likha gaya hai */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li
              onClick={() => {
                setToggleCondition(false);
              }}
              className="text-xs font-normal tracking-wide text-neutral-400 hover:text-white transition-colors"
            >
              Home
            </li>
            <li
              onClick={() => {
                setToggleCondition(true);
              }}
              className="text-xs font-normal tracking-wide text-neutral-400 hover:text-white transition-colors"
            >
              Products
            </li>
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Search Toggle */}
          <div className="relative">
            {searchOpen ? (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-[#12131a] border border-white/20 rounded-xl px-3 py-2 w-56 shadow-2xl">
                <Search className="w-3.5 h-3.5 text-neutral-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  className="bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none w-full"
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Cart */}
          <a
            href="#cart"
            className="relative w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
            title="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-[9px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </a>

          {/* Explore CTA */}
          <a
            href="#explore"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-medium tracking-wide transition-all"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
          >
            {isMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
