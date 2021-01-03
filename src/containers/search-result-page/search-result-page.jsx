import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { AppSearchControls, SearchResultTabs, AddYourContent } from "../../components/index";
import { getQueryParams } from "../../utils";

const StContainer = styled.div`
  margin-top: 7.5rem;
`;

const SearchResultPage = () => {
  const location = useLocation();
  const params = getQueryParams(location.search);
  console.log("Params", params);
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
