import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Root from "./router/route-config";
import { AppHeader, AppFooter } from "./components/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="*">
          <AppHeader />
          <div className="body">
            <Root />
          </div>
          <AppFooter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
