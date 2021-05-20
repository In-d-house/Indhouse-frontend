import React from "react";
import styled from "styled-components";

import MusicSlider from "./shared/MusicSlider";

import useRecommendMusic from "../hooks/useRecommendMusic";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sub-title {
    margin: 10vh;
    color: ${({ theme }) => theme.colors.yellow};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.strong};
  }
`;

const HomeMusicRecommend = ({ likeGenre, likeMusic }) => {
  const recommendMusic = useRecommendMusic(likeGenre, likeMusic);

  return (
    <Wrapper>
      <MusicSlider musics={recommendMusic} isLike={true} />
      <span className="sub-title">These are the musics we recommend.</span>
    </Wrapper>
  );
};

export default HomeMusicRecommend;
