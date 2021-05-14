import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Music from "./Music";
import api from "../api";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .music-container {
    display: flex;
  }

  .switch {
    width: 3rem;
    height: 3rem;
  }
`;

const VIEW_LENGTH = 3;

const HomeMusicRecommend = () => {
  const { likeGenre } = useSelector(state => state.user.profile);
  const [recommendMusics, setRecommendMusics] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const init = async () => {
      const { musics } = await api.getRecommendMusicByGenre(likeGenre);

      setRecommendMusics(musics);
    };

    init();
  }, []);

  const prevSlide = () => {
    const index = currentIndex === 0 ? recommendMusics.length - 1 : currentIndex - 1;

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === recommendMusics.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  const activeMusics = recommendMusics.slice(currentIndex, currentIndex + VIEW_LENGTH);

  const musicToDisplay = activeMusics.length < VIEW_LENGTH
    ? [...activeMusics, ...recommendMusics.slice(0, VIEW_LENGTH - activeMusics.length)]
    : activeMusics;

  return (
    <Wrapper>
      <button className="switch" onClick={prevSlide} >{`<`}</button>
      <div className="music-container" >
        {musicToDisplay.map(music => (
          <Music
            key={music._id}
            info={music}
          />
        ))}
      </div>
      <button className="switch" onClick={nextSlide} >{`>`}</button>
    </Wrapper>
  );
};

export default HomeMusicRecommend;
