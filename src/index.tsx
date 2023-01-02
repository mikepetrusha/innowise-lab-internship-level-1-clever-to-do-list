import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import TodoProvider from "./contexts/TodoContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <AuthProvider>
    <TodoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoProvider>
  </AuthProvider>,
);
