import React from "react";
import { ProductDetails, ProductOwnerDetails } from "../../components/index";

const ItemDetailPage = () => {
  return (
    <div className="body-margin">
      <ProductDetails />
      <ProductOwnerDetails />
    </div>
  );
};

export default ItemDetailPage;
