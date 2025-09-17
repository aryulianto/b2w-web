import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Hide loading fallback
const loadingFallback = document.getElementById('loading-fallback');
if (loadingFallback) {
  loadingFallback.style.display = 'none';
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
