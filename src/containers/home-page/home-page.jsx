import React from "react";
import {
  HomePageHeader,
  HomePageSearchContainer,
  HomePageRegion,
  HomePagePremiumAds,
  HomePageBrowseCategory,
  HomePageLatestAds,
  HomePageInfoSection,
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
      <HomePageInfoSection />
    </React.Fragment>
  );
};

export default HomePage;
