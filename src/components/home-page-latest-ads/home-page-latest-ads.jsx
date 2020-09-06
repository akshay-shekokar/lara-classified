import React from "react";
import { Icon, Card, Image, Rating, Button } from "semantic-ui-react";
import { AkSection } from "../../ak-components/index";
import "../home-page-premium-ads/home-page-premium-ads.css";
import "./home-page-latest-ads.css";
import { latestAds } from "../../dummy-data/latestAds";

const HomePageLatestAds = () => {
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
          <div className="ak-hp-latest-ads-cards">
            <Card.Group itemsPerRow={5}>
              {latestAds.map(
                ({
                  id,
                  imageUrl,
                  title,
                  reviews,
                  rating,
                  price,
                  duration,
                  category,
                  place,
                }) => (
                  <Card onClick={() => console.log("Latest Ads id:", id)}>
                    <Image src={imageUrl} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{title}</Card.Header>
                      <Card.Description>
                        <div>
                          <span className="ak-hp-latest-ads-duration">
                            <Icon name="time" />
                            {duration}
                          </span>
                          <Icon name="file" />
                          {category.map((cat) => (
                            <span className="ak-hp-latest-ads-link">
                              {cat}{" "}
                            </span>
                          ))}
                          <Icon name="globe" />
                          {place.map((p) => (
                            <span className="ak-hp-latest-ads-link">{p} </span>
                          ))}
                        </div>
                        <div>
                          <Rating
                            icon="star"
                            defaultRating={rating}
                            maxRating={5}
                            disabled
                          />{" "}
                          {reviews} review
                        </div>
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
        footer={
          <Button>
            View More
            <Icon name="arrow alternate circle right" />
          </Button>
        }
      />
    </div>
  );
};

export default HomePageLatestAds;
