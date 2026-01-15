import React from "react";
import ReactDOM from "react-dom/client";
import { AutherrProvider } from "autherr";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AutherrProvider
      clientId="app_6221d0d0cf6e443c9f73bef3a5e2b795"
      baseUrl="https://autherr.onrender.com"
    >
      <App />
    </AutherrProvider>
  </React.StrictMode>
);
