import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { AkSection } from "../../ak-components/index";
import { getCategoriesSelector } from "../../selectors/init.selector";
import "./home-page-browse-category.css";

const HomePageBrowseCategory = ({ categories }) => {
  const history = useHistory();
  return (
    <div className="ak-hp-browse-category-container body-margin">
      <AkSection
        header={
          <React.Fragment>
            <div className="ak-hp-browse-category-header-label">
              Browse by <b>Category</b>
            </div>
            <div className="ak-hp-browse-category-header-actions">
              View More <Icon name="list" />
            </div>
          </React.Fragment>
        }
        contents={
          <div className="ak-hp-browse-category-cards">
            {categories.map(({ icon, name, id }) => (
              <div className="ak-hp-category-card" key={id} onClick={() => history.push(`/search-results?category=${id}`)}>
                <div className="ak-hp-category-card-icon">
                  <Icon name={icon} size="huge" color="blue" />
                </div>
                <div className="ak-hp-category-card-title">{name}</div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

HomePageBrowseCategory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect((state) => ({
  categories: getCategoriesSelector(state)
}))(HomePageBrowseCategory);
