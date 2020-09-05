import React from "react";
import {
  HomePageHeader,
  HomePageSearchContainer,
  HomePageRegion
} from "../../components/index";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomePageHeader />
      <HomePageSearchContainer />
      <HomePageRegion />
    </React.Fragment>
  );
};

export default HomePage;
