import React from "react";
import { Icon, Button } from "semantic-ui-react";
import { AkSection } from "../../ak-components/index";
import { AppAdsCard } from "../index";
import "../home-page-premium-ads/home-page-premium-ads.css";
import { latestAds } from "../../dummy-data/latestAds";

const HomePageLatestAds = () => {
  return (
    <div className="ak-hp-premium-ads-container body-margin">
      <AkSection
        header={
          <React.Fragment>
            <div className="ak-hp-premium-ads-header-label">
              Latest <b>Ads</b>
            </div>
            <div className="ak-hp-premium-ads-header-actions">
              View More <Icon name="list" />
            </div>
          </React.Fragment>
        }
        contents={
          <AppAdsCard adList={latestAds}/>
        }
        footer={
          <Button>
            View More
            <Icon name="arrow alternate circle right" />
          </Button>
        }
      />
    </div>
  );
};

export default HomePageLatestAds;
