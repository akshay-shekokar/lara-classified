import React from "react";
import { Input, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import "./home-page-search-container.css";

const StyledFindButton = styled(Button)`
  &&&& {
    margin-left: 1rem;
  }
`;

const StyledInput = styled(Input)`
  &&&& {
    min-width: 40%;
    input {
      border-radius: 0;
      border: none;
    }
  }
`;

const HomePageSearchContainer = () => {
  return (
    <div className="ak-hm-search-container">
      <div className="ak-hm-search-field-area">
        <h1 className="ak-hm-search-header">Sell and buy near you</h1>
        <p className="ak-hm-search-subheader">Simple, fast and efficient</p>
        <div className="body-margin">
          <div className="ak-hm-search-controls body-margin">
            <StyledInput
              icon="file audio outline"
              size="large"
              iconPosition="left"
              placeholder="What ?"
              fluid
            />
            <StyledInput
              icon="globe"
              size="large"
              iconPosition="left"
              placeholder="Where ?"
              fluid
            />
            <StyledFindButton color="blue" fluid>
              <Icon name="search" />
              Search
            </StyledFindButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSearchContainer;
