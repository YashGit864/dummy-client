import React from "react";
import ReactDOM from "react-dom/client";
import { AutherrProvider } from "autherr";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AutherrProvider
      clientId="app_36720e07c5bf4f6098151ac52f02d87a"
      baseUrl="https://autherr.onrender.com"
    >
      <App />
    </AutherrProvider>
  </React.StrictMode>
);
