import React from "react";
import {
  HomePageHeader,
  HomePageSearchContainer,
  HomePageRegion,
  HomePagePremiumAds,
  HomePageBrowseCategory,
  HomePageLatestAds
} from "../../components/index";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomePageHeader />
      <HomePageSearchContainer />
      <HomePageRegion />
      <HomePagePremiumAds />
      <HomePageBrowseCategory />
      <HomePageLatestAds />
    </React.Fragment>
  );
};

export default HomePage;
