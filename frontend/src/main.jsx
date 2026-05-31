import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// One typeface, varying only by size, weight and case — the Lloyds /
// Investec / AfrAsia institutional canon. Onest is the canonical
// face for v2: a free, web-licensed variable typeface designed in
// the same humanist-modern family as the bespoke Lloyds Modern /
// Hellix style. Inter stays imported as a deep fallback. Gellix
// kept registered via @font-face in index.css as a swap-in option.
import "@fontsource-variable/onest";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// Hero-only display serif — Fraunces (variable). Carries three
// variable axes: weight (100–900), SOFT (0–100 — sharp ↔ rounded
// serifs), and Optical Size (9–144, auto-tuned at display sizes).
// Used by Vercel, Linear-adjacent, and tech-editorial publications.
// Applied exclusively to the home carousel headline; the rest of
// the site keeps Onest.
import "@fontsource-variable/fraunces";

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
