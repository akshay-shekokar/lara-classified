import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  ProductDetailsContainer,
  ProductOwnerDetails,
  // SimilarAds,
} from "../../components/index";
import { productOwnerDetails } from "../../dummy-data/productDetails";
import "./item-details-page.css";
import { getAdDetailsService } from "../../services/ads.service";
import { getAdDetailsSelector } from "../../selectors/ads.selector";
import { useParams } from "react-router-dom";

const ItemDetailPage = ({ adDetails, getAdDetailsService }) => {
  const params = useParams();

  useEffect(() => {
    getAdDetailsService({ id: params.id });
  }, [params.id]);

  return adDetails ? (
    <div className="body-margin">
      <div className="ak-item-and-owner-detail">
        <ProductDetailsContainer details={adDetails} />
        <ProductOwnerDetails owner={productOwnerDetails} />
      </div>
      {/* <SimilarAds /> */}
    </div>
  ) : null;
};

ItemDetailPage.propTypes = {
  adDetails: PropTypes.any,
  getAdDetailsService: PropTypes.func.isRequired,
};
export default connect(
  (state) => ({
    adDetails: getAdDetailsSelector(state),
  }),
  {
    getAdDetailsService,
  }
)(ItemDetailPage);
