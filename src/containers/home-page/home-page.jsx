import React from "react";
import {
  HomePageSearchContainer,
  HomePageRegion,
  HomePagePremiumAds,
  HomePageBrowseCategory,
  HomePageLatestAds,
  HomePageInfoSection
} from "../../components/index";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomePageSearchContainer />
      <HomePageRegion />
      <HomePagePremiumAds />
      <HomePageBrowseCategory />
      <HomePageLatestAds />
      <HomePageInfoSection />
    </React.Fragment>
  );
};

export default HomePage;
