import React from "react";
import { Icon, Button } from "semantic-ui-react";
import "./home-page-region.css";
import { city } from "../../dummy-data/city";

const HomePageRegion = () => {
  return (
    <div className="ak-hp-region-container body-margin">
      <h3>
        <Icon name="globe" />
        Choose a city or region
      </h3>
      <div className="ak-hp-region-list-map">
        <div className="ak-hp-region-list-ctrls">
          <div className="ak-hp-region-list">
            {city.slice(0, 14).map((c) => (
              <div className="ak-hp-region-name">
                <a>{c}</a>
              </div>
            ))}
            <div className="ak-hp-region-name">
              <a>More cities »</a>
            </div>
          </div>
          <Button size="large" color="yellow">
            <Icon name="plus circle" /> Add Listing
          </Button>
        </div>
        <div className="ak-hp-region-map"></div>
      </div>
    </div>
  );
};

export default HomePageRegion;
