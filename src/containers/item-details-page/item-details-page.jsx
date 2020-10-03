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

const ItemDetailPage = () => {
  return (
    <div className="body-margin">
      <ProductDetailsContainer details={productDetails} />
      <ProductOwnerDetails owner={productOwnerDetails} />
      <SimilarAds />
    </div>
  );
};

export default ItemDetailPage;
