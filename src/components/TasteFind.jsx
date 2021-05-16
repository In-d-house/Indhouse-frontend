import React, { useState, useEffect } from "react";

import Title from "./shared/Title";
import Music from "./shared/Music";

import filterSimilarUsers from "../utils/filterSimilarUsers";
import filterMusicOfSimilarUser from "../utils/filterMusicOfSimilarUser";
import { title } from "../constants";
import api from "../api";

const TasteFind = ({ likeGenre, likeMusic }) => {
  const [displayMusic, setDisplayMusic] = useState([]);

  useEffect(() => {
    const makeRecommendMusic = async () => {
      const { users } = await api.getSampleUser();

      const similarUsers = filterSimilarUsers(likeGenre, users);

      const filterdMusic = filterMusicOfSimilarUser(likeMusic, similarUsers);

      const { musics } = await api.getMusicBySpecificMusic(filterdMusic);

      setDisplayMusic(musics);
    };

    makeRecommendMusic();
  }, []);

  return (
    <>
      <Title title={title.tasteFind} />
      {displayMusic.map((music, idx) => {
        return (
          <Music
            key={music._id}
            info={music}
            order={idx}
          />
        );
      })}
    </>
  );
};

export default TasteFind;
