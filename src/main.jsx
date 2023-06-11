import React from "react";
import ReactDOM from "react-dom/client";
import CotizadorApp from "./CotizadorApp";
import { CotizadorProvider } from "./cotizador/context/CotizadorProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CotizadorProvider>
      <CotizadorApp />
    </CotizadorProvider>
  </React.StrictMode>
);
