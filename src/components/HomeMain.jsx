import React from "react";

import Title from "./shared/Title";
import HomeMusicRecommend from "./HomeMusicRecommend";

import { title } from "../constants";

const HomeMain = ({ name, likeGenre, likeMusic }) => {
  return (
    <>
      <Title title={`${title.home}${name}`} />
      <HomeMusicRecommend likeGenre={likeGenre} likeMusic={likeMusic} />
    </>
  );
};

export default HomeMain;
