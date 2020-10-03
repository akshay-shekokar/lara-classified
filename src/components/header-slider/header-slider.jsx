import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import "./header-slider.css";

const HeaderSlider = () => {
  const history = useHistory();
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
        <Button
          size="large"
          color="yellow"
          fluid
          onClick={() => history.push(`/create-post`)}
        >
          <Icon name="plus circle" /> Add Listing
        </Button>
      </div>
    </div>
  );
};

export default HeaderSlider;
