import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Divider,
  Icon,
  Button,
  Dropdown,
  Input,
  Message,
} from "semantic-ui-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ADS_TYPE } from "../../constants";
import "./create-post-ad-details.css";
import {
  getCategoriesSelector,
  getCitiesSelector,
} from "../../selectors/init.selector";
import { postAdsService } from "../../services/ads.service";

const LocalLabel = ({ name, required }) => {
  return (
    <label className="ak-display-block ak-input-label">
      {name}
      {required !== false && <span className="ak-red">*</span>}
    </label>
  );
};

LocalLabel.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

const CreatePostAdDetails = ({
  adData,
  cities,
  categories,
  goToNext,
  postAdsService,
}) => {
  const [errorList, setErrorList] = useState([]);
  const [editorState, setEditorState] = useState(
    adData.description || EditorState.createEmpty()
  );
  const [category, setCategory] = useState(adData.category);
  const [type, setType] = useState(adData.type);
  const [title, setTitle] = useState(adData.title);
  const [price, setPrice] = useState(adData.price);
  const [city, setCity] = useState(adData.city || []);
  const [tags, setTags] = useState(adData.tags && adData.tags.join(", "));

  const history = useHistory();
  const onSubmit = async () => {
    const errorList = [];
    !category && errorList.push("Please enter valid category");
    !type && errorList.push("Please enter valid type");
    !title && errorList.push("Please enter valid title");
    !price && errorList.push("Please enter valid price");
    !city && errorList.push("Please enter valid city");
    if (errorList.length) {
      setErrorList(errorList);
    } else {
      const data = {
        category,
        type,
        title,
        price,
        tags: tags && tags.split(",").map((tag) => tag.trim()),
        description: convertToRaw(editorState.getCurrentContent()),
      };
      await postAdsService({ adData: data, history });
      goToNext(data);
    }
  };
  return (
    <div>
      <h2>
        <Icon name="file outline" />
        Post Free Ads
      </h2>
      <Divider />
      {errorList.length ? (
        <Message color="pink">
          <Message.Header>
            Oops ! An error has occurred. Please correct below errors
          </Message.Header>
          <Message.List>
            {errorList.map((error, key) => (
              <Message.Item key={key}>{error}</Message.Item>
            ))}
          </Message.List>
        </Message>
      ) : null}
      <div className="ak-input-fields">
        <LocalLabel name="Category" />
        {/* <SelectInputCategory onChange={setCategory} /> */}
        <Dropdown
          onChange={(event, data) => setCategory(data.value)}
          value={category}
          placeholder="Select Category"
          fluid
          multiple
          search
          selection
          scrolling
          options={categories.map(({ id, name }) => ({
            key: id,
            text: name,
            value: id,
          }))}
        />
      </div>
      <div className="ak-input-fields">
        <LocalLabel name="Type" />
        <Dropdown
          onChange={(event, data) => setType(data.value)}
          value={type}
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
      <div className="ak-input-fields">
        <LocalLabel name="Title" />
        <Input
          placeholder="Ad Title"
          fluid
          value={title}
          onChange={(event, data) => setTitle(data.value)}
        />
        <span className="ak-input-fields-info-text">
          This will be displayed on the ad details page to inform other users.
        </span>
      </div>
      <div className="ak-input-fields" style={{ maxWidth: "1000px" }}>
        <LocalLabel name="Description" required={false} />
        <Editor
          editorState={editorState}
          wrapperClassName="editor-wrapper"
          editorClassName="editor-input"
          onEditorStateChange={setEditorState}
        />
        <span className="ak-input-fields-info-text">
          This will be displayed on the ad details page to inform other users.
        </span>
      </div>
      <div className="ak-input-fields">
        <LocalLabel name="Price" />
        <Input
          iconPosition="left"
          placeholder="Amount"
          value={price}
          onChange={(event, data) => setPrice(data.value)}
        >
          <Icon name="rupee" />
          <input />
        </Input>
      </div>
      <div className="ak-input-fields">
        <LocalLabel name="City" />
        <Dropdown
          placeholder="Select City"
          fluid
          search
          selection
          multiple
          options={cities.map(({ id, name }) => ({
            key: id,
            value: id,
            text: name,
          }))}
          value={city}
          onChange={(event, data) => setCity(data.value)}
        />
      </div>
      <div className="ak-input-fields">
        <LocalLabel name="Tags" required={false} />
        <Input
          icon="tags"
          iconPosition="left"
          label={{ tag: true, content: "Add Tag" }}
          labelPosition="right"
          placeholder="Enter tags"
          fluid
          value={tags}
          onChange={(event, data) => setTags(data.value)}
        />
        <span className="ak-input-fields-info-text">
          Enter the tags separated by commas.
        </span>
      </div>
      <Divider />
      <div className="ak-input-action-buttons ak-input-fields">
        <Button primary onClick={() => onSubmit()}>
          Submit
        </Button>
      </div>
    </div>
  );
};

CreatePostAdDetails.propTypes = {
  adData: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.number).isRequired,
    description: PropTypes.any.isRequired,
    city: PropTypes.arrayOf(PropTypes.number).isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  cities: PropTypes.arrayOf(PropTypes.any).isRequired,
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  goToNext: PropTypes.func.isRequired,
  postAdsService: PropTypes.func.isRequired,
};
export default connect(
  (state) => ({
    cities: getCitiesSelector(state),
    categories: getCategoriesSelector(state),
  }),
  { postAdsService }
)(CreatePostAdDetails);
