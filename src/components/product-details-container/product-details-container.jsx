import React from "react";
import PropTypes from "prop-types";
import { Divider, Label, Rating, Button, Icon } from "semantic-ui-react";
import { AkLink } from "../../ak-components/index";
import { ProductRowInfo, ProductDetailsTab } from "../index";
import "./product-details-container.css";

const ProductDetails = ({ details }) => {
  const {
    name,
    type,
    postedTime,
    categories,
    locations,
    rating,
    // imageUrls,
    reviews,
    // price,
    description,
  } = details;
  return (
    <div className="ak-pd-container">
      <div className="ak-pd-header">
        <AkLink color="#369" hover="#fa7722" onClick={() => alert("asd")}>
          {name}
        </AkLink>
        <Label color="grey" className="ak-pd-header-type">
          {type}
        </Label>
      </div>
      <Divider />
      <div className="ak-pd-info-row">
        <ProductRowInfo
          duration={postedTime}
          category={categories}
          place={locations}
        />
      </div>
      <div>Image Carousel will be here</div>
      <div>
        <Rating icon="star" defaultRating={rating} maxRating={5} disabled />{" "}
        {reviews} review
      </div>
      <ProductDetailsTab description={description} />
      <div class="ak-pd-send-message-container">
        <Button basic>
          <Icon name="mail" />
          Send a message
        </Button>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  details: PropTypes.any.isRequired,
};

export default ProductDetails;
