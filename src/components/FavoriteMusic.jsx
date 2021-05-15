import React, { useState, useEffect } from "react";

import Title from "./shared/Title";
import Music from "./shared/Music";

import { title } from "../constants";
import api from "../api";

const FavoriteMusic = ({ likeMusic }) => {
  const [musics, setMusic] = useState([]);

  useEffect(() => {
    const init = async () => {
      const res = await api.getMusicByLikeMusic(likeMusic);

      setMusic(res.musics);
    };

    init();
  }, [likeMusic]);

  return (
    <>
      <Title title={title.favoriteMusic} />
      <div>
        {musics.map((music, idx) => {
          return (
            <Music
              key={music._id}
              info={music}
              order={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default FavoriteMusic;
