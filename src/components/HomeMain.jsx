import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Title from "./shared/Title";
import HomeMusicRecommend from "./HomeMusicRecommend";

import { title } from "../constants";

const Wrapper = styled.div`
`;

const HomeMain = () => {
  const { name } = useSelector(state => state.user.profile);

  return (
    <Wrapper>
      <Title title={`${title.home}${name}`} />
      <HomeMusicRecommend />
    </Wrapper>
  );
};

export default HomeMain;
