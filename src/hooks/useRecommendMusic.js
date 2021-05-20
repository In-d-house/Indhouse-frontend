import { useState, useEffect } from "react";

import filterSameMusicOfUserToMusic from "../utils/filterSameMusicOfUserToMusic";
import api from "../api";

const useRecommendMusic = (likeGenre, likeMusic) => {
  const [recommendMusic, setRecommendMusic] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { musics } = await api.getMusicByLikeGenre(likeGenre);

      const filterdMusics = filterSameMusicOfUserToMusic(likeMusic, musics);

      setRecommendMusic(filterdMusics);
    };

    init();
  }, [likeGenre, likeMusic]);

  return recommendMusic;
};

export default useRecommendMusic;
