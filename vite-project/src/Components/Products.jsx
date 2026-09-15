import React, { useState } from "react";
import { ShoppingBag, Heart, Star, ArrowUpRight, Sparkles } from "lucide-react";

export function ProductCard({ item, index, setCartItem }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback theme if category doesn't match

  return (
    <div
      key={index}
      className="relative group w-full max-w-sm rounded-[2rem] p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        fontFamily: "var(--font-primary)",
        color: "var(--card-text)",
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="px-3.5 py-1 text-[10px] font-mono tracking-widest uppercase rounded-full border border-white/10 bg-white/5">
          {item.category}
        </span>
      </div>

      <div className="relative w-full h-56 flex items-center justify-center my-3 bg-white/[0.02] rounded-2xl border border-white/[0.04] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-3 mt-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-sm font-medium tracking-tight line-clamp-1 pr-2">
            {item.title}
          </h3>
          <span className="text-xl font-bold tracking-tight shrink-0">
            ${item.price}
          </span>
        </div>

        <p
          className="text-xs font-light line-clamp-2 leading-relaxed"
          style={{ color: "var(--card-muted)" }}
        >
          {item.description}
        </p>

        <div className="flex items-center gap-1.5 pt-1 text-xs">
          <span className="text-amber-400">★</span>
          <span className="font-medium">{item.rating?.rate}</span>
          <span className="text-zinc-500">({item.rating?.count} reviews)</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2.5">
        <button
          onClick={() => {
            setCartItem((prev) => [...prev, item]);
          }}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-300 active:scale-[0.98] cursor-pointer"
          style={{
            backgroundColor: "var(--btn-bg)",
            color: "var(--btn-text)",
          }}
        >
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
}
