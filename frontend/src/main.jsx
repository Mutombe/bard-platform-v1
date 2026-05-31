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

// Experiment — Instrument Serif on the home hero only. Contemporary
// display serif used by editorial publications and modern banks that
// want a literary voice (Pictet, Morgan Stanley). Hack on the
// otherwise-all-Onest type system to see if the bank can wear it.
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";

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
