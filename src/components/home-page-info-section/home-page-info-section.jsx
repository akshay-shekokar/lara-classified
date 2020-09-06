import React from "react";
import { Icon, Statistic } from "semantic-ui-react";
import "./home-page-info-section.css";

const HomePageInfoSection = () => {
  return (
    <div className="ak-hp-info-container body-margin">
      <div className="ak-hp-info-section">
        <Icon name="file outline" size="huge" />
        <Statistic>
          <Statistic.Value>550</Statistic.Value>
          <Statistic.Label>Free Ads</Statistic.Label>
        </Statistic>
      </div>
      <div className="ak-hp-info-section">
        <Icon name="users" size="huge" />
        <Statistic>
          <Statistic.Value>3,191</Statistic.Value>
          <Statistic.Label>Trusted Sellers</Statistic.Label>
        </Statistic>
      </div>
      <div className="ak-hp-info-section">
        <Icon name="map" size="huge" />
        <Statistic>
          <Statistic.Value>6,922+</Statistic.Value>
          <Statistic.Label>Locations</Statistic.Label>
        </Statistic>
      </div>
    </div>
  );
};

export default HomePageInfoSection;
