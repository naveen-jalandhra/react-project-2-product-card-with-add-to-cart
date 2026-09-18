import React from "react";

export const CartPage = ({ AddToCart, setAddToCart }) => {
  // 1. BILL CALCULATION
  let Calculation = AddToCart.reduce((Total, item) => {
    return Total + Number(item.price) * (item.quantity || 1);
  }, 0);

  let TotalAmount = Calculation.toFixed(2);

  // 2. REMOVE FUNCTION
  let ClearFnc = (removeIndex) => {
    let ClearItem = AddToCart.filter((item, idx) => idx !== removeIndex);
    setAddToCart(ClearItem);
  };

  let IncrementFnc = (ItemIndex) => {
    let IncrementData = AddToCart.map((item, index) => {
      if (index === ItemIndex) {
        let DestructuredItem = { ...item };
        let IncrementValue = DestructuredItem.quantity || 1;
        DestructuredItem.quantity = IncrementValue + 1;
        return DestructuredItem;
      } else {
        return item;
      }
    });
    setAddToCart(IncrementData);
  };

  let DecrementFnc = (ItemIndex) => {
    let DecrementData = AddToCart.map((item, index) => {
      if (index === ItemIndex) {
        let DestructuredItem = { ...item };
        let currentQty = DestructuredItem.quantity || 1;

        if (currentQty > 1) {
          DestructuredItem.quantity = currentQty - 1;
        } else {
          DestructuredItem.quantity = 1;
        }
        return DestructuredItem;
      } else {
        return item;
      }
    });
    setAddToCart(DecrementData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {AddToCart.map((item, index) => {
              // Har item ki current quantity nikal li (UI ke liye)
              let itemQty = item.quantity || 1;

              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  {/* Image & Title */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="h-24 w-24 flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase text-gray-400">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                        {item.title}
                      </h3>
                      <span className="text-lg font-black text-gray-900">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
                    {/* Quantity Box */}
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() => DecrementFnc(index)}
                        // React ka tarika: Agar quantity 1 hai toh Lal rang ka - button dikhao
                        className={`px-3 py-1 hover:bg-gray-100 rounded-l-lg text-lg font-bold ${
                          itemQty === 1 ? "text-red-500" : "text-gray-800"
                        }`}
                      >
                        -
                      </button>

                      <span className="px-4 font-semibold text-gray-800">
                        {itemQty}
                      </span>

                      <button
                        onClick={() => IncrementFnc(index)}
                        className="px-3 py-1 hover:bg-gray-100 rounded-r-lg text-lg font-bold text-gray-800"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => ClearFnc(index)}
                      className="text-red-500 hover:text-red-700 font-semibold text-sm bg-red-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">
                ${TotalAmount}
              </span>
            </div>

            <div className="flex justify-between mb-4 text-gray-600">
              <span>Shipping Tax</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex justify-between mb-6 text-xl font-black text-gray-900">
              <span>Total</span>
              <span>${TotalAmount}</span>
            </div>

            <button className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
