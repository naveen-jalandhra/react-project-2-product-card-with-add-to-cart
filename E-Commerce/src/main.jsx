import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
// import { MyStore } from "./Components/Context/StoreContext";
import { ContextStoreDataFnc } from "./Components/Context/StoreContext";

createRoot(document.getElementById("root")).render(
  <ContextStoreDataFnc>
    <App />
  </ContextStoreDataFnc>,
);
