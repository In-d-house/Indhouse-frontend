import React from "react";
import styled from "styled-components";

import Title from "./shared/Title";
import Music from "./shared/Music";

import useGetLikeMusic from "../hooks/useGetLikeMusic";
import useLike from "../hooks/useLike";
import { title } from "../constants";

const Wrapper = styled.div`
  
`;

const FavoriteMusic = ({ likeMusic }) => {
  const displayMusic = useGetLikeMusic(likeMusic);
  const handleLike = useLike();

  return (
    <Wrapper>
      <Title title={title.favoriteMusic} />
      <div className="grid-box">
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
      </div>
    </Wrapper>
  );
};

export default FavoriteMusic;
