import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Root from "./router/route-config";
import { getCityService } from "./services/init.service";
import { AppHeader, AppFooter } from "./components/index";
import "./App.css";

const App = ({ getCityService }) => {
  useEffect(() => {
    getCityService();
  }, []);

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

App.propTypes = {
  getCityService: PropTypes.func.isRequired
};

export default connect(null, { getCityService })(App);
