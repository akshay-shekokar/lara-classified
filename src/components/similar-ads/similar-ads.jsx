import React from "react";
import { Icon, Card, Image, Rating } from "semantic-ui-react";
import { AkSection } from "../../ak-components/index";
import "./similar-ads.css";
import { premiumAds } from "../../dummy-data/premiumAds";

const SimilarAds = () => {
  return (
    <div className="ak-similar-ads-container">
      <AkSection
        header={
          <React.Fragment>
            <div className="ak-similar-ads-header-label">
              Similar <b>Ads</b>
            </div>
            <div className="ak-similar-ads-header-actions">
              View More <Icon name="list" />
            </div>
          </React.Fragment>
        }
        contents={
          <div className="ak-similar-ads-cards">
            <Card.Group>
              {premiumAds.map(
                ({ id, imageUrl, title, reviews, rating, price }) => (
                  <Card onClick={() => console.log("Premium Ads id:", id)} key={id}>
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

export default SimilarAds;
