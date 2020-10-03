import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import "./product-row-info.css";

const ProductRowInfo = ({ duration, category, place }) => {
  return (
    <div>
      <span className="ak-ads-duration">
        <Icon name="time" />
        {duration}
      </span>
      <Icon name="file" />
      {category.map((cat) => (
        <span className="ak-ads-link" key={cat}>
          {cat}{" "}
        </span>
      ))}
      <Icon name="globe" />
      {place.map((p) => (
        <span className="ak-ads-link" key={p}>
          {p}{" "}
        </span>
      ))}
    </div>
  );
};

ProductRowInfo.propTypes = {
  duration: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.string),
  place: PropTypes.arrayOf(PropTypes.string),
};
export default ProductRowInfo;
