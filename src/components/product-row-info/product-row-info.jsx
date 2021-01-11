import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import "./product-row-info.css";
import { getPassedTime } from "../../utils";

const ProductRowInfo = ({ postedDate /* categoryIds, cityIds */ }) => {
  return (
    <div>
      <span className="ak-ads-duration">
        <Icon name="time" />
        {getPassedTime(postedDate)}
      </span>
      <Icon name="file" />
      {/* {categoryIds.map((cat) => (
        <span className="ak-ads-link" key={cat}>
          {cat}{" "}
        </span>
      ))}
      <Icon name="globe" />
      {cityIds.map((p) => (
        <span className="ak-ads-link" key={p}>
          {p}{" "}
        </span>
      ))} */}
    </div>
  );
};

ProductRowInfo.propTypes = {
  postedDate: PropTypes.string.isRequired,
  categoryIds: PropTypes.arrayOf(PropTypes.numbers),
  cityIds: PropTypes.arrayOf(PropTypes.numbers),
};
export default ProductRowInfo;
