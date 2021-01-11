import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, Segment } from "semantic-ui-react";
import { ProductDetails } from "../index";
import "./product-details-tab.css";

const ProductDetailsTab = ({ description }) => {
  const [activeItem, setActiveItem] = useState("Ad Details");
  return (
    <div className="ak-pd-tab">
      <Menu attached="top" tabular>
        <Menu.Item
          name="Ad Details"
          color="orange"
          active={activeItem === "Ad Details"}
          onClick={() => setActiveItem("Ad Details")}
        />
        <Menu.Item
          name={"Reviews"}
          color="orange"
          active={activeItem === "Reviews"}
          onClick={() => setActiveItem("Reviews")}
        />
      </Menu>

      <Segment attached="bottom">
        {activeItem === "Ad Details" ? (
          <ProductDetails description={description} />
        ) : (
          <div>Loading Reviews...</div>
        )}
      </Segment>
    </div>
  );
};

ProductDetailsTab.propTypes = {
  description: PropTypes.any.isRequired,
};
export default ProductDetailsTab;
