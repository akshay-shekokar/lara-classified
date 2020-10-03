import React from "react";
import { Divider, Icon, Button, Dropdown } from "semantic-ui-react";
import { SelectInputCategory } from "..";
import { ADS_TYPE } from "../../constants";
import "./create-post-ad-details.css";

const LocalLabel = ({ name }) => {
  return (
    <label class="ak-display-block ak-input-label">
      {name}
      <span class="ak-red">*</span>
    </label>
  );
};

const CreatePostAdDetails = () => {
  return (
    <div>
      <h2>
        <Icon name="file outline" />
        Post Free Ads
      </h2>
      <Divider />
      <div class="ak-input-fields">
        <LocalLabel name="Category" />
        <SelectInputCategory />
      </div>
      <div class="ak-input-fields">
        <LocalLabel name="Type" />
        <Dropdown
          placeholder="Select Type"
          fluid
          selection
          options={Object.keys(ADS_TYPE).map((key) => ({
            key,
            text: ADS_TYPE[key],
            value: key,
          }))}
        />
        <span className="ak-input-fields-info-text">
          This will be displayed on the ad details page to inform other users.
        </span>
      </div>
      <div class="ak-input-fields">
        <LocalLabel name="Title" />
      </div>
      <div class="ak-input-fields">
        <LocalLabel name="Description" />
      </div>
      <div class="ak-input-fields">
        <LocalLabel name="Price" />
      </div>
      <div class="ak-input-fields">
        <LocalLabel name="City" />
      </div>
      <Divider />
      <div class="ak-input-action-buttons">
        <Button primary>Submit</Button>
      </div>
    </div>
  );
};

export default CreatePostAdDetails;
