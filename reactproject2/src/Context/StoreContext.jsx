import React, { useState, useEffect, createContext } from "react";

export let MyStore = createContext();

export let ContextStoreFnc = ({ children }) => {
  const [Page, setPage] = useState(false);
  const [CartItem, setCartItem] = useState([]);


  return (
    <MyStore.Provider value={{ Page, setPage, CartItem, setCartItem }}>
      {children}
    </MyStore.Provider>
  );
};
