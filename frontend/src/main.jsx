import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Roboto — the Bard Santner Group typeface (bardsantner.com), adopted here so
// the Microfinance Bank site reads as part of the same family. One face across
// body and display, governed by weight, size and case: 300 for large display,
// 400 body, 500 nav/labels, 700 emphasis.
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Italics — used for editorial taglines and emphasis, so the one family reads
// as typography (slim / regular / bold / italic in context), not a flat face.
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400-italic.css";

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
