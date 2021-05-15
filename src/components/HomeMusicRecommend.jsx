import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Music from "./shared/Music";

import filterSameMusic from "../utils/filterSameMusic";
import * as actions from "../reducers/user";
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

const HomeMusicRecommend = ({ likeGenre, likeMusic }) => {
  const dispatch = useDispatch();
  const [recommendMusics, setRecommendMusics] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const init = async () => {
      const { musics } = await api.getMusicByLikeGenre(likeGenre);

      const filterdMusics = filterSameMusic(likeMusic, musics);

      setRecommendMusics(filterdMusics);
    };

    init();
  }, [likeGenre, likeMusic]);

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

  const handleClick = async idx => {
    const music = recommendMusics[currentIndex + idx];

    dispatch(actions.musicLikeRequest({ isLike: music.like, musicId: music._id }));
  };

  return (
    <Wrapper>
      <button className="switch" onClick={prevSlide} >{`<`}</button>
      <div className="music-container" >
        {musicToDisplay.map((music, idx) => (
          <Music
            key={music._id}
            info={music}
            onClick={handleClick}
            order={idx}
          />
        ))}
      </div>
      <button className="switch" onClick={nextSlide} >{`>`}</button>
    </Wrapper>
  );
};

export default HomeMusicRecommend;
