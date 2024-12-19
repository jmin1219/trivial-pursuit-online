import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // TODO: Uncomment the <StrictMode> component below to enable React Strict Mode.
  // <StrictMode>
  <App />
  // </StrictMode>
);
