import React from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { AppSearchControls, SearchResultTabs, AddYourContent } from "../../components/index";

const StContainer = styled.div`
  margin-top: 7.5rem;
`;

const SearchResultPage = () => {
  return (
    <StContainer>
      <AppSearchControls />
      <div className="body-margin">
        <Divider />
        <SearchResultTabs />
        <AddYourContent />
      </div>
    </StContainer>
  );
};

export default SearchResultPage;
