import React from "react";
import {
  ProductDetailsContainer,
  ProductOwnerDetails,
  SimilarAds,
} from "../../components/index";
import {
  productDetails,
  productOwnerDetails,
} from "../../dummy-data/productDetails";
import "./item-details-page.css";

const ItemDetailPage = () => {
  return (
    <div className="body-margin">
      <div className="ak-item-and-owner-detail">
        <ProductDetailsContainer details={productDetails} />
        <ProductOwnerDetails owner={productOwnerDetails} />
      </div>
      <SimilarAds />
    </div>
  );
};

export default ItemDetailPage;
