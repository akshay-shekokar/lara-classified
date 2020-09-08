import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StContainer = styled.div`
  position: fixed;
  z-index: 9999;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.6s ease-in-out;
  ${({ position, top, left, width, height, visible }) =>
    position === "top" &&
    css`
      top: ${top};
      left: ${left};
      width: ${width};
      height: ${height};
    `};
`;

const AkSidebar = ({
  contents,
  visible,
  position,
  top,
  left,
  width,
  height,
}) => {
  return (
    <StContainer
      visible={visible}
      position={position}
      width={width}
      height={height}
      top={top}
      left={left}
    >
      {contents}
    </StContainer>
  );
};

AkSidebar.defaultProps = {
  visible: false,
  position: "top",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "auto",
};

AkSidebar.propTypes = {
  visible: PropTypes.bool.isRequired,
  contents: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["top", "left"]).isRequired,
  top: PropTypes.string,
  left: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default AkSidebar;
