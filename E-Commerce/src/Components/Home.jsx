import React from "react";

export const HomePage = ({ setActivePage }) => {
  return (
    <div className=" bg-neutral-50 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="py-20 lg:py-32 lg:w-1/2 lg:pr-12">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
              New Collection 2026
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-900">
                Lifestyle.
              </span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              Discover our curated selection of premium essentials. Impeccable
              design meets everyday functionality.
            </p>
            {/* YE BUTTON PRODUCTS PAGE PAR LE JAYEGA */}
            <button
              onClick={() => setActivePage("products")}
              className="bg-gray-900 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors rounded-none"
            >
              Explore Collection
            </button>
          </div>

          <div className="w-full lg:w-1/2 py-10 lg:py-0">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Luxury Minimalist Store"
              className="w-full h-[400px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
