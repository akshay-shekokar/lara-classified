import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import "./product-row-info.css";
import { getPassedTime } from "../../utils";
import {
  getCategoriesSelector,
  getCitiesSelector,
} from "../../selectors/init.selector";
import { keyBy, get } from "lodash";
import { useHistory } from "react-router-dom";

const ProductRowInfo = ({
  postedDate,
  categoryIds,
  cityIds,
  cities,
  categories,
}) => {
  const history = useHistory();
  return (
    <div>
      <span className="ak-ads-duration">
        <Icon name="time" />
        {getPassedTime(postedDate)}
      </span>
      <Icon name="file" />
      {categoryIds.map((id) => (
        <span
          className="ak-ads-link"
          key={id}
          onClick={() => history.push(`/search-results?category=${id}`)}
        >
          {get(categories, `${id}.name`, "")}
        </span>
      ))}
      <Icon name="globe" />
      {cityIds.map((id) => (
        <span
          className="ak-ads-link"
          key={id}
          onClick={() => history.push(`/search-results?city=${id}`)}
        >
          {get(cities, `${id}.name`, "")}
        </span>
      ))}
    </div>
  );
};

ProductRowInfo.propTypes = {
  postedDate: PropTypes.string.isRequired,
  categoryIds: PropTypes.arrayOf(PropTypes.numbers),
  cityIds: PropTypes.arrayOf(PropTypes.numbers),
  cities: PropTypes.arrayOf(PropTypes.any).isRequired,
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect((state) => ({
  cities: keyBy(getCitiesSelector(state), "id"),
  categories: keyBy(getCategoriesSelector(state), "id"),
}))(ProductRowInfo);
