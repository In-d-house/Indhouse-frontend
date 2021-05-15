import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 20rem;
  padding: 1rem;

  span {
    left: 0;
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.strong};
  }

  button {
    right: 0;
  }

  img {
    width: 100%;
    border-radius: 0.2rem;
  }

  .small-title {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const checkTitleLength = string => {
  return string.length > 8 ? "small-title" : "";
};

const Music = ({ info, onClick, order }) => {
  return (
    <Wrapper>
      <img src={info.coverPhotoUrl} />
      <div>
        <span className={checkTitleLength(info.title)}>{info.title}</span>
        <button onClick={() => onClick(order)} >Like</button>
      </div>
    </Wrapper>
  );
};

export default Music;
