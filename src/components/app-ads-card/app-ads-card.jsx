import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Icon, Card, Image, Rating } from "semantic-ui-react";
import "./app-ads-card.css";

const AppAdsCard = ({ adList }) => {
  const history = useHistory();
  return (
    <div className="ak-ads-cards">
      <Card.Group>
        {adList.map(
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
            <Card onClick={() => history.push(`/item-details/${id}`)} key={id}>
              <Image src={imageUrl} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Description>
                  <div>
                    <span className="ak-ads-duration">
                      <Icon name="time" />
                      {duration}
                    </span>
                    <Icon name="file" />
                    {category.map((cat) => (
                      <span className="ak-ads-link" key={cat}>
                        {cat}{" "}
                      </span>
                    ))}
                    <Icon name="globe" />
                    {place.map((p) => (
                      <span className="ak-ads-link" key={p}>
                        {p}{" "}
                      </span>
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
  );
};

AppAdsCard.propTypes = {
  adList: PropTypes.arrayOf(PropTypes.any),
};

export default AppAdsCard;
