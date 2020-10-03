import React from "react";
import PropTypes from "prop-types";
import { Button, Image, Icon, Rating } from "semantic-ui-react";
import { AkLink } from "../../ak-components";
import "./product-owner-details.css";

const ProductOwnerDetails = ({ owner }) => {
  const { name, rating, location, joined, contactDetails } = owner;
  return (
    <div className="ak-pod-container">
      <div className="ak-pod-details-container">
        <div className="ak-pod-avatar">
          <Image
            src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            size="tiny"
          />
        </div>
        <div className="ak-pod-details">
          <div className="ak-pod-posted-by">Posted By</div>
          <div className="ak-pod-name">
            <AkLink color="#369" hover="#fa7722">
              {name}
            </AkLink>
          </div>
          <div className="ak-pod-ratings">
            <Rating icon="star" defaultRating={rating} maxRating={5} disabled />{" "}
            {rating} Rating
          </div>
        </div>
      </div>
      <div className="ak-pod-more-info">
        <div className="ak-pod-more-info-fields">
          <div>
            <Icon name="globe" />
            Location
          </div>
          <div>
            <AkLink color="#369" hover="#fa7722">
              {location}
            </AkLink>
          </div>
        </div>
        <div className="ak-pod-more-info-fields">
          <div>
            <Icon name="user" />
            Joined
          </div>
          <div>{joined}</div>
        </div>
      </div>
      <div class="ak-pd-send-message-container">
        <Button basic>
          <Icon name="mail" />
          Send a message
        </Button>
      </div>
    </div>
  );
};

ProductOwnerDetails.propTypes = {
  owner: PropTypes.any.isRequired,
};

export default ProductOwnerDetails;
