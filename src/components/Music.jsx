import React, { useState } from "react";
import styled from "styled-components";

import api from "../api";

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

const Music = ({ info }) => {
  const [isLike, setIsLike] = useState(info.isLike);

  const handleClick = () => {
    setIsLike(prev => !prev);
    api.updateLikeUser({ isLike, musicId: info._id });
  };

  const checkTitleLength = () => {
    return info.title.length > 8;
  };

  return (
    <Wrapper>
      <img src={info.coverPhotoUrl} />
      <div>
        <span className={checkTitleLength() && "small-title"}>{info.title}</span>
        <button onClick={handleClick} >Like</button>
      </div>
    </Wrapper>
  );
};

export default Music;
