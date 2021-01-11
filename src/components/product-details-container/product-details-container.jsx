import React from "react";
import PropTypes from "prop-types";
import { Divider, Label, Rating, Button, Icon } from "semantic-ui-react";
import { AkLink } from "../../ak-components/index";
import { ProductRowInfo, ProductDetailsTab } from "../index";
import "./product-details-container.css";
import { useHistory } from "react-router-dom";
import { ADS_TYPE } from "../../constants";

const ProductDetails = ({ details }) => {
  const history = useHistory();
  const {
    id,
    title,
    type,
    postedDate,
    category,
    city,
    rating,
    // imageUrls,
    reviews,
    // price,
    description,
  } = details;
  return (
    <div className="ak-pd-container">
      <div className="ak-pd-header">
        <AkLink
          color="#369"
          hover="#fa7722"
          onClick={() => history.replace(`/item-details/${id}`)}
        >
          {title}
        </AkLink>
        <Label color="grey" className="ak-pd-header-type">
          {ADS_TYPE[type]}
        </Label>
      </div>
      <Divider />
      <div className="ak-pd-info-row">
        <ProductRowInfo
          postedDate={postedDate}
          categoryIds={category}
          cityIds={city}
        />
      </div>
      <div>Image Carousel will be here</div>
      <div>
        <Rating icon="star" defaultRating={rating} maxRating={5} disabled />{" "}
        {reviews} review
      </div>
      <ProductDetailsTab description={description} />
      <div className="ak-pd-send-message-container">
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
