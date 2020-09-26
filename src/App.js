import React from "react";
import Root from "./router/route-config";
import { AppHeader, AppFooter } from "./components/index";
import "./App.css";

function App() {
  return (
    <>
      <AppHeader />
      <div className="body">
        <Root />
      </div>
      <AppFooter />
    </>
  );
}

export default App;
