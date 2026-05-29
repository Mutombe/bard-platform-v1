import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Self-hosted typography. The brand manual nominates Copperplate (display)
// and Avenir (body). Copperplate isn't web-licensed; Fraunces is the closest
// modern editorial serif that holds the same wedged-serif gravity. Avenir
// isn't free either; Inter is the canonical humanist Avenir substitute.
import "@fontsource-variable/fraunces/index.css";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

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
