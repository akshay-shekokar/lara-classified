import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import "./app-search-controls.css";

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

const AppSearchControls = () => {
  const history = useHistory();
  return (
    <div className="body-margin">
      <div className="ak-search-controls body-margin">
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
        <StyledFindButton
          color="blue"
          fluid
          onClick={() => history.push("/search-results")}
        >
          <Icon name="search" />
          Search
        </StyledFindButton>
      </div>
    </div>
  );
};

export default AppSearchControls;
