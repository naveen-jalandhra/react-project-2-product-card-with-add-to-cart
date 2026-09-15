import { createContext, useState } from "react";

export let MyStore = createContext();

export function ContextStoreFnc({ Children }) {
  let Message = "hello world welcome to school";
  const [Cartitems, setCartitems] = useState([]);

  return (
    <MyStore.Provider value={{ Message, setCartitems, Cartitems }}>
      {Children}
    </MyStore.Provider>
  );
}
