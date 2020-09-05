import React from "react";
import {
  HomePageHeader,
  HomePageSearchContainer,
  HomePageRegion,
  HomePagePremiumAds,
  HomePageBrowseCategory
} from "../../components/index";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomePageHeader />
      <HomePageSearchContainer />
      <HomePageRegion />
      <HomePagePremiumAds />
      <HomePageBrowseCategory />
    </React.Fragment>
  );
};

export default HomePage;
