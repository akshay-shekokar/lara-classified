import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Icon, Button } from "semantic-ui-react";
import { AkSection } from "../../ak-components/index";
import { AppAdsCard } from "../index";
import "../home-page-premium-ads/home-page-premium-ads.css";
import { getLatestAdsService } from "../../services/ads.service";
import { getLatestAdsSelector } from "../../selectors/ads.selector";

const HomePageLatestAds = ({ adsList, getLatestAdsService }) => {
  const history = useHistory();

  useEffect(() => {
    getLatestAdsService();
  }, []);

  return (
    <div className="ak-hp-premium-ads-container body-margin">
      <AkSection
        header={
          <React.Fragment>
            <div className="ak-hp-premium-ads-header-label">
              Latest <b>Ads</b>
            </div>
            <div
              className="ak-hp-premium-ads-header-actions"
              onClick={() =>
                history.push(`/search-results?sort=postedDate&order=desc`)
              }
            >
              View More <Icon name="list" />
            </div>
          </React.Fragment>
        }
        contents={<AppAdsCard adList={adsList} />}
        footer={
          <Button
            onClick={() =>
              history.push(`/search-results?sort=postedDate&order=desc`)
            }
          >
            View More
            <Icon name="arrow alternate circle right" />
          </Button>
        }
      />
    </div>
  );
};

HomePageLatestAds.propTypes = {
  adsList: PropTypes.arrayOf(PropTypes.any).isRequired,
  getLatestAdsService: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    adsList: getLatestAdsSelector(state),
  }),
  {
    getLatestAdsService,
  }
)(HomePageLatestAds);
