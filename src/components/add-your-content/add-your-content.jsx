import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./add-your-content.css";

const AddYourContent = () => {
  const history = useHistory();
  return (
    <div className="ak-ayc-container">
      <h2>Do have anything to sell or rent?</h2>
      <h4>
        Sell your products and services online FOR FREE. It is easier than you
        think!
      </h4>
      <Button
        size="large"
        color="yellow"
        onClick={() => history.push(`/create-post`)}
      >
        Start Now!
      </Button>
    </div>
  );
};

export default AddYourContent;
