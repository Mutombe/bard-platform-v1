import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// One typeface, varying only by size, weight and case — the Lloyds /
// Investec / AfrAsia institutional canon. Gellix is the canonical
// face (self-hosted via @font-face in index.css, sourced from the
// CACZ project archive). Gellix ships only Light + Regular; Inter
// stays imported as a fallback so weight calls of 500/600/700
// resolve cleanly even when Gellix lacks the corresponding face.
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
