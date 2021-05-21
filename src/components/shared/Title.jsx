import React from "react";
import styled from "styled-components";

const Title = styled.h1`
<<<<<<< HEAD
  margin: 3rem;
=======
  margin: 5rem 3rem;
>>>>>>> origin/develop
  font-size: ${({ theme }) => theme.fontSizes.miniTitleSize};
  font-weight: ${({ theme }) => theme.fontWeights.strong};
`;

const HeaderTitle = ({ title }) => {
  return (
    <Title>{title}</Title>
  );
};

export default HeaderTitle;
