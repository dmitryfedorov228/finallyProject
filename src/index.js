import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ThemeProvider from "./contexts/Theme/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import "./config/i18n";
import { ToastContainer } from "react-toastify";
import StoreProvider from "./contexts/StoreProvider/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
        <ToastContainer />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);
