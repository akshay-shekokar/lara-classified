import React from "react";
import { Icon } from "semantic-ui-react";
import { AkSection } from "../../ak-components/index";
import "./home-page-browse-category.css";
import { categories } from "../../dummy-data/categories";

const HomePageBrowseCategory = () => {
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
            {categories.map(({ icon, name }) => (
              <div className="ak-hp-category-card" key={name}>
                <div className="ak-hp-category-card-icon"><Icon name={icon} size="huge" color="blue" /></div>
                <div className="ak-hp-category-card-title">{name}</div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default HomePageBrowseCategory;
