import React, { useState, useContext } from "react";
import { MyStore } from "./Components/Context/StoreContext";
import { Header } from "./header";
import { HomePage } from "./Components/Home";
import { CartPage } from "./Components/Cart";
import { Products } from "./Components/Products";
import { Footer } from "./Components/footer"; // Apna path theek kar lena

export let App = () => {
  let { ProductData, AddToCart, setAddToCart } = useContext(MyStore);
  const [activePage, setActivePage] = useState("home");

  return (
    // Is div mein flex aur min-h-screen lagaya hai taaki Footer hamesha neeche rahe
    <div className="flex flex-col min-h-screen">
      {/* HEADER: Hamesha Upar */}
      <Header setActivePage={setActivePage} />

      {/* MAIN CONTENT: Beech ka hissa */}
      <main className="flex-grow">
        {activePage === "home" && <HomePage setActivePage={setActivePage} />}

        {activePage === "products" && (
          <div className="bg-gray-50 p-6 sm:p-10">
            <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {ProductData.map((Data, Idx) => (
                <Products
                  key={Idx}
                  ItemData={Data}
                  Index={Idx}
                  setActivePage={setActivePage}
                  setAddToCart={setAddToCart}
                />
              ))}
            </div>
          </div>
        )}

        {activePage === "cart" && (
          <CartPage AddToCart={AddToCart} setAddToCart={setAddToCart} />
        )}
      </main>

      {/* FOOTER: Hamesha Neeche */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
};
