import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "normalize.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <Suspense fallback="loading">
          {/* <BrowserRouter> */}
            <App />
          {/* </BrowserRouter> */}
      </Suspense>
);
