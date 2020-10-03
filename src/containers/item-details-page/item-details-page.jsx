import React from "react";
import { ProductDetailsContainer, ProductOwnerDetails } from "../../components/index";
import { productDetails } from "../../dummy-data/productDetails";

const ItemDetailPage = () => {
  return (
    <div className="body-margin">
      <ProductDetailsContainer details={productDetails} />
      <ProductOwnerDetails />
    </div>
  );
};

export default ItemDetailPage;
