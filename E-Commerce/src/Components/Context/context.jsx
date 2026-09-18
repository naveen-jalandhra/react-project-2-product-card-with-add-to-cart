import { createContext } from "react";

export let MyStore = createContext();

export let ContextProdvite = ({children}) => {



<MyStore.Provider>{children}</MyStore.Provider>
};
