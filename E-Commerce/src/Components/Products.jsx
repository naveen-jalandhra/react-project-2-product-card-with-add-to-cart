import React from "react";

// YAHAN FIX KIYA HAI: setToggle ki jagah setActivePage receive kiya
export const Products = ({ ItemData, Index, setActivePage, setAddToCart }) => {
  return (
    <div
      key={Index}
      className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
    >
      {/* Image */}
      <div className="h-56 p-4 flex items-center justify-center bg-white">
        <img
          src={ItemData.image}
          alt={ItemData.title} // 'Backpack' ki jagah actual title laga diya hai
          className="h-full w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 border-t border-gray-100">
        <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
          {ItemData.category}
        </span>

        <h3 className="mb-2 text-lg font-bold text-gray-800 line-clamp-2">
          {ItemData.title}
        </h3>

        <p className="mb-4 flex-1 text-sm text-gray-500 line-clamp-3">
          {ItemData.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center">
          <span className="mr-1 text-yellow-500 font-bold">
            ★ {ItemData.rating.rate}
          </span>
          <span className="text-sm text-gray-400">
            ({ItemData.rating.count})
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-black text-gray-900">
            ${ItemData.price}
          </span>
          <button
            onClick={() => {
              // Ab ye bilkul perfect chalega!
              setActivePage("cart");
              setAddToCart((prev) => [...prev, ItemData]);
            }}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
