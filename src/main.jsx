import { createRoot } from "react-dom/client";
import "./index.css";

import "react-international-phone/style.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ThemeProvider } from "./context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>

        <ToastContainer position="top-right" />
      </QueryClientProvider>
    </LanguageProvider>
  </BrowserRouter>
);
//https://embozi-backend.onrender.com
