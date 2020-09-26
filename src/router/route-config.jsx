import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomePage, SearchResultPage, ItemDetailsPage } from "../containers/index";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/search-results">
          <SearchResultPage />
        </Route>
        <Route path="/item-details">
          <ItemDetailsPage />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
