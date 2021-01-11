import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  HomePage,
  SearchResultPage,
  ItemDetailsPage,
  CreatePostPage,
} from "../containers/index";

const Root = () => {
  return (
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/search-results">
        <SearchResultPage />
      </Route>
      <Route path="/item-details/:id">
        <ItemDetailsPage />
      </Route>
      <Route path="/create-post">
        <CreatePostPage />
      </Route>
      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default Root;
