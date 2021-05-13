import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Music from "./Music";
import api from "../api";

const HomeMusicRecommend = () => {
  const { likeGenre } = useSelector(state => state.user.profile);
  const [recommendMusics, setRecommendMusics] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { musics } = await api.getRecommendMusicByGenre(likeGenre);

      setRecommendMusics(musics);
    };

    init();
  }, [likeGenre]);

  return (
    <>
      {recommendMusics.map(music => (
        <Music
          key={music._id}
          info={music}
        />
      ))}
    </>
  );
};

export default HomeMusicRecommend;
