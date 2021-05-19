import React from "react";

import Title from "./shared/Title";

import useGetArtists from "../hooks/useGetArtists";
import { title } from "../constants";

const FavoriteArtist = ({ likeMusic }) => {
  const { artist } = useGetArtists(likeMusic);

  return (
    <>
      <Title title={title.favoriteArtist} />
    </>
  );
};

export default FavoriteArtist;
