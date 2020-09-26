import React from "react";
import { AppSearchControls } from "../index";
import "./home-page-search-container.css";

const HomePageSearchContainer = () => {
  return (
    <div className="ak-hm-search-container">
      <div className="ak-hm-search-field-area">
        <h1 className="ak-hm-search-header">Sell and buy near you</h1>
        <p className="ak-hm-search-subheader">Simple, fast and efficient</p>
        <AppSearchControls />
      </div>
    </div>
  );
};

export default HomePageSearchContainer;
