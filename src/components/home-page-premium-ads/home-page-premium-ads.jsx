import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Icon, Card, Image, Rating } from "semantic-ui-react";
import { AkSection } from "../../ak-components/index";
import "./home-page-premium-ads.css";
import { getPremiumAdsService } from "../../services/ads.service";
import { getPremiumAdsSelector } from "../../selectors/ads.selector";

const HomePagePremiumAds = ({ adsList, getPremiumAdsService }) => {
  const history = useHistory();

  useEffect(() => {
    getPremiumAdsService();
  }, []);

  return (
    <div className="ak-hp-premium-ads-container body-margin">
      <AkSection
        header={
          <React.Fragment>
            <div className="ak-hp-premium-ads-header-label">
              Premium <b>Ads</b>
            </div>
            <div className="ak-hp-premium-ads-header-actions" onClick={() => history.push(`/search-results?isPremium=true`)}>
              View More <Icon name="list" />
            </div>
          </React.Fragment>
        }
        contents={
          <div className="ak-hp-premium-ads-cards">
            <Card.Group>
              {adsList.slice(0, 5).map(
                ({ id, imageUrl, title, reviews, rating, price }) => (
                  <Card
                    onClick={() => history.push(`/item-details/${id}`)}
                    key={id}
                  >
                    <Image src={imageUrl} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{title}</Card.Header>
                      <Card.Description>
                        <Rating
                          icon="star"
                          defaultRating={rating}
                          maxRating={5}
                          disabled
                        />{" "}
                        <div>{reviews} review</div>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="rupee sign" />
                        {price}
                      </a>
                    </Card.Content>
                  </Card>
                )
              )}
            </Card.Group>
          </div>
        }
      />
    </div>
  );
};

HomePagePremiumAds.propTypes = {
  adsList: PropTypes.arrayOf(PropTypes.any).isRequired,
  getPremiumAdsService: PropTypes.func.isRequired
};

export default connect(
  (state) => ({
    adsList: getPremiumAdsSelector(state),
  }),
  {
    getPremiumAdsService,
  }
)(HomePagePremiumAds);
