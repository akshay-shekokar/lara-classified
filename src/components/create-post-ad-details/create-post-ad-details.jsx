import React from "react";
import { Divider, Icon, Button } from "semantic-ui-react";
import { SelectInputCategory } from "..";
import "./create-post-ad-details.css";

const CreatePostAdDetails = () => {
  return (
    <div>
      <h2>
        <Icon name="file outline" />
        Post Free Ads
      </h2>
      <Divider />
      <div class="ak-input-fields">
        <label class="ak-display-block ak-input-label">
          Category<span class="ak-red">*</span>
        </label>
        <SelectInputCategory />
      </div>
      <div class="ak-input-fields">
        <label class="ak-display-block ak-input-label">
          Type<span class="ak-red">*</span>
        </label>
      </div>
      <div class="ak-input-title"></div>
      <div class="ak-input-description"></div>
      <div class="ak-input-price"></div>
      <div class="ak-input-city"></div>
      <div class="ak-input-action-buttons">
        <Button primary>Submit</Button>
      </div>
    </div>
  );
};

export default CreatePostAdDetails;
