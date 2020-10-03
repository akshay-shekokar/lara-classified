import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { doNothing } from "..";

const StyledLink = styled.a`
  ${({ color, active, hover, visited }) => css`
    color: ${color};
    cursor: pointer;
    transition: color 0.2s linear;
    
    :hover {
      color: ${hover};
    }
    :active {
      color: ${active};
    }
    :visited {
      color: ${visited};
    }
  `}
`;

const AkLink = ({
  href,
  onClick = doNothing,
  color,
  active,
  visited,
  hover,
  children,
}) => {
  return (
    <StyledLink
      href={href}
      onClick={onClick}
      color={color}
      active={active}
      visited={visited}
      hover={hover}
    >
      {children}
    </StyledLink>
  );
};

AkLink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  active: PropTypes.string,
  visited: PropTypes.string,
  hover: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AkLink;
