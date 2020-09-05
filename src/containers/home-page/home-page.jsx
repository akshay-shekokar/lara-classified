import React from "react";
import {
  HomePageHeader,
  HomePageSearchContainer,
  HomePageRegion,
  HomePagePremiumAds
} from "../../components/index";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomePageHeader />
      <HomePageSearchContainer />
      <HomePageRegion />
      <HomePagePremiumAds />
    </React.Fragment>
  );
};

export default HomePage;
