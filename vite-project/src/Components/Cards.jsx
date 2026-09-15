import { ChartBarBig, ChevronsLeftRightIcon, Columns2 } from "lucide-react";
import React from "react";

export const Cards = ({ CartItem }) => {
  console.log(CartItem);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Cart Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-slate-300/60 gap-2">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Shopping Cart
        </h1>
        <span className="text-xs font-semibold text-slate-700 bg-slate-200/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs">
          2 Items in Cart
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Cart Items List */}
        {CartItem.map((item, index) => (
          <div key={index} className="lg:col-span-8 flex flex-col gap-4">
            {/* Cart Item 1 */}
            <div className="group relative bg-slate-200/50 backdrop-blur-2xl border border-white/80 rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all flex flex-col sm:flex-row items-center gap-5">
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>

              <div className="w-28 h-28 bg-white/70 backdrop-blur-md border border-white/90 rounded-xl flex items-center justify-center shrink-0 shadow-xs">
                <img
                  src={item.image}
                  alt="Product"
                  className="max-h-20 object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between w-full z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider bg-slate-900/5 border border-slate-900/10 px-2.5 py-0.5 rounded-full text-slate-700 font-semibold">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1.5">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-lg font-black text-slate-900">
                    ${item.price}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-300/50">
                  <div className="flex items-center border border-white/90 rounded-xl bg-white/60 backdrop-blur-md overflow-hidden shadow-xs">
                    <button className="px-3.5 py-1.5 text-slate-700 hover:bg-white transition-colors font-bold cursor-pointer">
                      -
                    </button>
                    <span className="px-3 text-xs font-bold text-slate-900">
                      1
                    </span>
                    <button className="px-3.5 py-1.5 text-slate-700 hover:bg-white transition-colors font-bold cursor-pointer">
                      +
                    </button>
                  </div>
                  <button className="text-xs font-semibold text-rose-600 hover:text-rose-800 transition-colors cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Right: Order Summary Sidebar */}
        <div className="lg:col-span-4 w-full bg-slate-200/60 backdrop-blur-3xl border border-white/90 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.05)] sticky top-6">
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>

          <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-300/60">
            Order Summary
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between text-slate-600 font-medium">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900">$154.55</span>
            </div>
            <div className="flex justify-between text-slate-600 font-medium">
              <span>Estimated Shipping</span>
              <span className="font-bold text-slate-900">$15.00</span>
            </div>
            <div className="flex justify-between text-slate-600 font-medium">
              <span>Tax (5%)</span>
              <span className="font-bold text-slate-900">$7.73</span>
            </div>
            <div className="flex justify-between text-sm font-black text-slate-900 pt-3 border-t border-slate-300/60">
              <span>Total Amount</span>
              <span className="text-indigo-600">$177.28</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-slate-900 hover:bg-indigo-600 text-white font-bold py-3.5 px-4 rounded-xl text-xs tracking-wide uppercase transition-all shadow-md shadow-slate-900/10 cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
