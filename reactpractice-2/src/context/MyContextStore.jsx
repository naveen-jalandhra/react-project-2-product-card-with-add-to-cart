import { Children, createContext, useState } from "react";

export let MyStore = createContext();

export let ContextMyStore = ({ children }) => {
  const [Users, setUsers] = useState(["naveen", "bajrangbali", "veerhanuman"]);
  return (
    <MyStore.Provider value={{ Users, setUsers }}>{children}</MyStore.Provider>
  );
};
