import React from "react";

import Title from "./shared/Title";
import Music from "./shared/Music";

import GridBox from "../styles/shared/gridBox";

import useGetLikeMusic from "../hooks/useGetLikeMusic";
import useLike from "../hooks/useLike";
import { title } from "../constants";

const FavoriteMusic = ({ likeMusic }) => {
  const displayMusic = useGetLikeMusic(likeMusic);
  const handleLike = useLike();

  return (
    <>
      <Title title={title.favoriteMusic} />
      <GridBox>
        {displayMusic.map(music => {
          return (
            <Music
              key={music._id}
              info={music}
              isLike={false}
              onClick={handleLike}
            />
          );
        })}
      </GridBox>
    </>
  );
};

export default FavoriteMusic;
