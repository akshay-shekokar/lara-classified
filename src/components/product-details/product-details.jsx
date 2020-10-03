import React from "react";
import PropTypes from "prop-types";
import { Divider, Label, Icon } from "semantic-ui-react";
import { AkLink } from "../../ak-components/index";
import { ProductRowInfo } from "../index";
import "./product-details.css";

const ProductDetails = ({ productName }) => {
  return (
    <div className="ak-pd-container">
      <div className="ak-pd-header">
        <AkLink color="#369" hover="#fa7722" onClick={() => alert("asd")}>
          {"Product Name"}
        </AkLink>
        <Label color="grey" className="ak-pd-header-type">
          {"Individual"}
        </Label>
      </div>
      <Divider />
      <div className="ak-pd-info-row">
        <ProductRowInfo
          duration="2 years ago"
          category={["cat 1"]}
          place={["place"]}
        />
      </div>
      <div>Image Carousel will be here</div>
      
    </div>
  );
};

ProductDetails.propTypes = {
  productName: PropTypes.string.isRequired,
};

export default ProductDetails;
