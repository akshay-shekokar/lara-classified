import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";
import { AkSidebar } from "../../ak-components";
import { HeaderSlider } from "../index";
import "./home-page-header.css";

const HomePageHeader = () => {
  const [slider, showSlider] = useState(false);
  return (
    <div className="ak-header">
      <nav className="ak-navbar body-padding">
        <div className="ak-navbar-icon">
          <img
            src="https://laraclassified.bedigit.com/storage/app/default/logo.png?v=1"
            alt="laraclassified"
            className="ak-main-logo"
            title=""
            data-placement="bottom"
            data-toggle="tooltip"
            data-original-title="LaraClassified United States"
          />
        </div>
        <div className="ak-navbar-sidebar">
          <Button icon onClick={() => showSlider(!slider)}>
            <Icon name="list" />
          </Button>
          <AkSidebar contents={<HeaderSlider />} visible={slider} top="6rem" />
        </div>
        <div className="ak-navbar-collapsible">
          <Button size="large">
            <Icon name="user" /> LogIn
          </Button>
          <Button size="large">
            <Icon name="user plus" /> Register
          </Button>
          <Button size="large">
            <Icon name="tags" /> Pricing
          </Button>
          <Button size="large" color="yellow">
            <Icon name="plus circle" /> Add Listing
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default HomePageHeader;
