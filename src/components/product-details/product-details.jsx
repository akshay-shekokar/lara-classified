import React from "react";
import PropTypes from "prop-types";
import { Icon, Popup } from "semantic-ui-react";
import { AkLink } from "../../ak-components";
import "./product-details.css";

const ProductDetails = ({ description }) => {
  return (
    <div>
      <div className="ak-pd-description-text">{JSON.stringify(description)}</div>
      <div className="ak-pd-details-line-action">
        <AkLink color="#369" hover="#fa7722">
          <Popup
            content="Send a message"
            trigger={<Icon name="mail" size="big" />}
            size="mini"
          />
        </AkLink>
        <AkLink color="#369" hover="#fa7722">
          <Popup
            content="Save Ad"
            trigger={<Icon name="heart outline" size="big" />}
            size="mini"
          />
        </AkLink>
        <AkLink color="#369" hover="#fa7722">
          <Popup
            content="Report Abuse"
            trigger={<Icon name="info circle" size="big" />}
            size="mini"
          />
        </AkLink>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  description: PropTypes.any.isRequired,
};

export default ProductDetails;
