import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Icon, Button, Dropdown } from "semantic-ui-react";
import "./home-page-region.css";
import { getCitiesSelector } from "../../selectors/init.selector";

const HomePageRegion = ({ cities }) => {
  const history = useHistory();

  const onSelectCity = ({ id }) => {
    history.push(`/search-results?city=${id}`);
  };

  return (
    <div className="ak-hp-region-container body-margin">
      <h3>
        <Icon name="globe" />
        Choose a city or region
      </h3>
      <div className="ak-hp-region-list-map">
        <div className="ak-hp-region-list-ctrls">
          <div className="ak-hp-region-list">
            {cities.slice(0, 14).map(({ id, name }) => (
              <div className="ak-hp-region-name" key={id} onClick={() => onSelectCity({ id })}>
                <a>{name}</a>
              </div>
            ))}
            <div className="ak-hp-region-name">
              <Dropdown text='More cities »'>
                <Dropdown.Menu>
                  {cities.map(({ id, name }) => (
                    <Dropdown.Item text={name} key={id} onClick={() => onSelectCity({ id })} />
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <Button
            size="large"
            color="yellow"
            onClick={() => history.push(`/create-post`)}
          >
            <Icon name="plus circle" /> Add Listing
          </Button>
        </div>
        <div className="ak-hp-region-map"></div>
      </div>
    </div>
  );
};

HomePageRegion.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(
  state => ({
    cities: getCitiesSelector(state)
  })
)(HomePageRegion);
