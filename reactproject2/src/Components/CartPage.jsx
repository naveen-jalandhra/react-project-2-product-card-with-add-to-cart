import React from "react";
import { useContext } from "react";
import { MyStore } from "../Context/StoreContext";

export const CartPage = () => {
  // Dummy data strictly for layout purposes

  const { setCartItem, CartItem } = useContext(MyStore);
  let TotalAmount = () => {
    let AmountCalculation = CartItem.reduce((Amount, Product) => {
      let CalulatedData =
        Amount + Product.price * (Product.quantity || 1) * 100;
      return CalulatedData;
    }, 0);
    return (AmountCalculation / 100).toFixed(2);
  };

  let RemoveCart = (Id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== Id));
  };

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

  let DecreaseFnc = (Id) => {
    setCartItem((prev) =>
      prev.map((Item) => {
        if (Item.id === Id) {
          return {
            ...Item,
            quantity: Item.quantity > 1 ? Item.quantity - 1 : 1,
          };
        }
        return Item;
      }),
    );
  };

  return (
    <main className="font-poppins antialiased mt-24 max-w-5xl mx-auto px-4 sm:px-6 pb-24">
      {/* Sleeker, Smaller Page Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-[24px] font-semibold tracking-tight text-gray-900">
          Shopping Bag
        </h1>
        <p className="mt-1.5 text-[12.5px] text-gray-500 tracking-wide">
          Free delivery and free returns on all orders.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Left Section: Cart Items List */}
        <div className="flex-1 flex flex-col gap-4">
          {CartItem.map((item) => (
            /* GLOSSY CARD EFFECT: bg-white/60, backdrop-blur, subtle shadow */
            <div
              key={item.id}
              className="group flex flex-row items-center gap-5 p-4 rounded-[20px] bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-white/80"
            >
              {/* Scaled down Product Image (w-24 h-24 instead of 40) */}
              <figure className="relative shrink-0 w-24 h-24 flex items-center justify-center overflow-hidden rounded-[16px] bg-[#F5F5F7] p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
              </figure>

              {/* Product Details - Matching ProductCard Typography */}
              <div className="flex flex-1 flex-col justify-center">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                      {item.category}
                    </span>
                    <h3
                      className="text-[14px] font-medium leading-snug tracking-tight text-gray-900 line-clamp-1 max-w-[200px]"
                      title={item.title}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Remove Button - Now a tiny elegant icon */}
                  <button
                    onClick={() => {
                      RemoveCart(item.id);
                    }}
                    className="text-gray-300 hover:text-red-500 transition-colors p-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Bottom Row: Price & Quantity */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[16px] font-semibold tracking-tight text-black">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>

                  {/* Miniature Quantity Selector */}
                  <div className="flex items-center rounded-full border border-gray-200/80 bg-white/50 px-2 py-1">
                    <button
                      onClick={() => {
                        DecreaseFnc(item.id);
                      }}
                      className="flex h-5 w-5 items-center justify-center text-gray-500 hover:text-black transition-colors"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M20 12H4"
                        />
                      </svg>
                    </button>
                    <span className="w-6 text-center text-[12px] font-medium text-gray-900">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => {
                        IncreaseFnc(item.id);
                      }}
                      className="flex h-5 w-5 items-center justify-center text-gray-500 hover:text-black transition-colors"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Order Summary (Glossy Glass Panel) */}
        <div className="w-full lg:w-[320px] flex-shrink-0">
          <div className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white p-7 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)]">
            <h2 className="text-[15px] font-semibold tracking-tight text-gray-900 mb-5">
              Order Summary
            </h2>

            <div className="space-y-3.5 text-[12.5px] text-gray-500 border-b border-gray-100 pb-5 mb-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">
                  {TotalAmount()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="font-medium text-gray-900">0%</span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-7">
              <span className="text-[14px] font-medium text-gray-900">
                Total
              </span>
              <span className="text-[22px] font-semibold tracking-tight text-black">
                {TotalAmount()}
              </span>
            </div>

            <button className="w-full h-11 rounded-full bg-black text-[13.5px] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800 hover:shadow-lg active:scale-95">
              Checkout
            </button>

            {/* Micro-text for secure checkout */}
            <div className="mt-5 flex justify-center items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Secure SSL Checkout
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
