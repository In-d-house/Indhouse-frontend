import React from "react";
import { useSelector } from "react-redux";

import Title from "./Title";
import HomeMusicRecommend from "./HomeMusicRecommend";

import { title } from "../constants";

const HomeMain = () => {
  const { name } = useSelector(state => state.user.profile);

  return (
    <>
      <Title title={`${title.home}${name}`} />
      <HomeMusicRecommend />
    </>
  );
};

export default HomeMain;
