import React from "react";
import ReactDOM from "react-dom/client";

import App from "./routing/App";

import "./styles/index.css";

// Import contexts to use in the app
import { ThemeProvider } from "./assets/utils/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
