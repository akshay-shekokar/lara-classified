import React from "react";
import { ProductDetailsContainer, ProductOwnerDetails } from "../../components/index";
import { productDetails, productOwnerDetails } from "../../dummy-data/productDetails";

const ItemDetailPage = () => {
  return (
    <div className="body-margin">
      <ProductDetailsContainer details={productDetails} />
      <ProductOwnerDetails owner={productOwnerDetails} />
    </div>
  );
};

export default ItemDetailPage;
