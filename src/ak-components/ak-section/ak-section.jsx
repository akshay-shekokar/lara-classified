import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 0.25rem;
`;

const StHeader = styled.div`
  border-bottom: 0 solid #fafafa;
  background-color: #fafafa;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 700;
`;

const StContents = styled.div`
  padding: 1rem 1.5rem;
`;

const AkSection = ({ header, contents }) => {
  return (
    <StContainer>
      <StHeader>{header}</StHeader>
      <StContents>{contents}</StContents>
    </StContainer>
  );
};

AkSection.propTypes = {
  header: PropTypes.node.isRequired,
  contents: PropTypes.node.isRequired,
};

export default AkSection;
