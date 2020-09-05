import React from "react";
import {
  HomePageHeader,
  HomePageSearchContainer,
  HomePageRegion,
  HomePagePremiumAds,
  HomePageBrowseCategory,
  HomePageLatestAds,
  HomePageInfoSection,
  Footer
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
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
