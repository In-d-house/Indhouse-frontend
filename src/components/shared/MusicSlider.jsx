import React from "react";
import styled from "styled-components";

import Music from "./Music";

import useLike from "../../hooks/useLike";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color:${({ theme }) => theme.colors.blue};
<<<<<<< HEAD
    border-radius: 50px;
=======
    border-radius: 1rem;
>>>>>>> origin/develop
  }
`;

const MusicSlider = ({ musics, isLike }) => {
  const handleLike = useLike();

  return (
    <Wrapper>
      {musics.map(music => (
        <Music
          key={music._id}
          info={music}
          isLike={isLike}
          onClick={handleLike}
        />
      ))}
    </Wrapper>
  );
};

export default MusicSlider;
