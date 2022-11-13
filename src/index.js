import React from "react";
import ReactDOM from "react-dom/client";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
