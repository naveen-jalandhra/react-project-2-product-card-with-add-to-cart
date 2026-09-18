import React from "react";
import { useState } from "react";
import { MyStore } from "../Context/StoreContext";
import { useContext } from "react";

export const ProductCard = ({ product }) => {
  // max-w-[260px] makes it compact, antialiased makes font crisp

  const { setCartItem, setPage, CartItem } = useContext(MyStore);

  let CartCheckFnc = CartItem.find((item) => item.id === product.id);
  //   let cartQuantityFnc = setCartItem((prev) => [...Item, quantity: product.quantity || 1])

  let IncreaseFnc = (Id) => {
    setCartItem((prev) =>
      prev.map((Item) => {
        if (Item.id === Id) {
          return { ...Item, quantity: (Item.quantity || 1) + 1 };
        }
        return Item;
      }),
    );
  };

  let RemoveCart = (Id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== Id));
  };

  let DecreaseFnc = (Id) => {
    setCartItem((prev) =>
      prev.map((Item) => {
        if (Item.id === Id) {
          return {
            ...Item,
            quantity: Item.quantity > 1 ? Item.quantity - 1 : RemoveCart(Id),
          };
        }
        return Item;
      }),
    );
  };

  return (
    <article
      key={product.id}
      className="font-poppins antialiased group relative flex w-full max-w-[260px] flex-col overflow-hidden rounded-[20px] bg-white transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] border border-gray-100/60"
    >
      <figure className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#F5F5F7] p-5">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 text-[10px] font-medium text-black backdrop-blur-md border border-white/50">
          <svg
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {product.rating.rate}
        </div>
      </figure>

      <div className="flex flex-col p-4">
        <span className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-400">
          {product.category}
        </span>

        <h3
          className="mb-1.5 text-[14px] font-medium leading-snug tracking-tight text-gray-900 line-clamp-1"
          title={product.title}
        >
          {product.title}
        </h3>

        <p className="mb-4 text-[11.5px] leading-relaxed text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-[17px] font-semibold tracking-tight text-black">
            ${product.price}
          </span>
          {CartCheckFnc ? (
            <div className="flex items-center rounded-full border border-gray-200/80 bg-gray-50/80 px-3 py-1.5 shadow-sm">
              {/* Minus Button (No logic/onclick) */}
              <button
                onClick={() => {
                  DecreaseFnc(product.id);
                }}
                type="button"
                className="flex h-5 w-5 items-center justify-center text-gray-400 hover:text-black transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 12H4"
                  />
                </svg>
              </button>

              {/* Quantity Display Number (Dummy static number '1') */}
              <span className="w-8 text-center text-[12px] font-semibold text-gray-900">
                {CartCheckFnc.quantity || 1}
              </span>

              {/* Plus Button (No logic/onclick) */}
              <button
                onClick={() => {
                  IncreaseFnc(product.id);
                }}
                type="button"
                className="flex h-5 w-5 items-center justify-center text-gray-400 hover:text-black transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                setCartItem((prev) => [...prev, product]);
                // setPage(true);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 active:scale-95"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
