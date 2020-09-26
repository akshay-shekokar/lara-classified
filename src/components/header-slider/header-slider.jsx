import React from "react";
import { Icon, Button } from "semantic-ui-react";
import "./header-slider.css";

const HeaderSlider = () => {
  return (
    <div className="ak-header-slider-container">
      <div className="ak-header-slider-ctrl">
        <Icon name="user" /> LogIn
      </div>
      <div className="ak-header-slider-ctrl">
        <Icon name="user plus" /> Register
      </div>
      <div className="ak-header-slider-ctrl">
        <Icon name="tags" /> Pricing
      </div>
      <div className="ak-header-slider-ctrl">
        <Button size="large" color="yellow" fluid>
          <Icon name="plus circle" /> Add Listing
        </Button>
      </div>
    </div>
  );
};

export default HeaderSlider;