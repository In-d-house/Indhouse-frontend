import React from "react";
import styled from "styled-components";

import Title from "./shared/Title";
import HomeMusicRecommend from "./HomeMusicRecommend";

import { title } from "../constants";

const Wrapper = styled.div`
`;

const HomeMain = ({ name, likeGenre, likeMusic }) => {
  return (
    <Wrapper>
      <Title title={`${title.home}${name}`} />
      <HomeMusicRecommend likeGenre={likeGenre} likeMusic={likeMusic} />
    </Wrapper>
  );
};

export default HomeMain;
