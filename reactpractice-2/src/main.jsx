import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { ContextMyStore } from "./context/MyContextStore.jsx";

createRoot(document.getElementById("root")).render(
  <ContextMyStore>
    <App />
  </ContextMyStore>,
);
