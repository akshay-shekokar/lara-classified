import React from "react";
import { Icon, Card, Image, Rating } from "semantic-ui-react";
import { AkSection } from "../../ak-components/index";
import "./home-page-premium-ads.css";
import { premiumAds } from "../../dummy-data/premiumAds";

const HomePagePremiumAds = () => {
  return (
    <div className="ak-hp-premium-ads-container body-margin">
      <AkSection
        header={
          <React.Fragment>
            <div className="ak-hp-premium-ads-header-label">
              Premium <b>Ads</b>
            </div>
            <div className="ak-hp-premium-ads-header-actions">
              View More <Icon name="list" />
            </div>
          </React.Fragment>
        }
        contents={
          <div className="ak-hp-premium-ads-cards">
            <Card.Group>
              {premiumAds.map(
                ({ id, imageUrl, title, reviews, rating, price }) => (
                  <Card onClick={() => console.log("Premium Ads id:", id)}>
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
                        {reviews} review
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

export default HomePagePremiumAds;
