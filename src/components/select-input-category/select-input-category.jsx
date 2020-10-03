import React, { useState } from "react";
import { AkLink } from "../../ak-components";
import "./select-input-category.css";

const SelectInputCategory = () => {
  const [category, setCategory] = useState();
  return (
    <div className="ak-select-input-category">
      {!category ? (
        <>
          Category - Some Sub Cat [
          <AkLink color="#369" hover="#fa7722" visited="#fa7722">
            Edit
          </AkLink>
          ]
        </>
      ) : (
        <AkLink color="#369" hover="#fa7722">
          Select a category
        </AkLink>
      )}
    </div>
  );
};

export default SelectInputCategory;
