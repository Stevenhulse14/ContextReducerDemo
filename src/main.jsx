import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PokemonProvider } from "./components";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </StrictMode>
);
