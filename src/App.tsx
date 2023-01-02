/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import AppRoute from "./router/AppRoute";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="app" id={theme}>
      <AppRoute />
    </div>
  );
}

export default App;
