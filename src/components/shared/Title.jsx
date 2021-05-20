import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 3rem;
  font-size: ${({ theme }) => theme.fontSizes.miniTitleSize};
  font-weight: ${({ theme }) => theme.fontWeights.strong};
`;

const HeaderTitle = ({ title }) => {
  return (
    <Title>{title}</Title>
  );
};

export default HeaderTitle;
