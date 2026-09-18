import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "./Components/header";
import { ProductCard } from "./Components/Products";
import { CartPage } from "./Components/CartPage";
import { Footer } from "./Components/Footer";
import { useContext } from "react";
import { MyStore } from "./Context/StoreContext";

export const App = () => {
  const [StoreData, setStoreData] = useState([]);
  const { Page } = useContext(MyStore);

  useEffect(() => {
    let StoreApiData = async () => {
      try {
        let FetchData = await axios.get("https://fakestoreapi.com/products");
        setStoreData(FetchData.data);
      } catch (error) {
        console.log("there is a error", error);
      }
    };

    StoreApiData();
  }, []);

  console.log(StoreData);

  return (
    <>
      <Header />
      <main className="mt-24 max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        {Page ? (
          <CartPage />
        ) : (
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {StoreData.map((elems) => (
              <ProductCard key={elems.id} product={elems} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
