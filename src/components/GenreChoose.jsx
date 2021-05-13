import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import api from "../api";
import * as actions from "../reducers/user";

const GenreChoose = () => {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);
  const inputZeroRef = useRef("");
  const inputOneRef = useRef("");
  const inputTwoRef = useRef("");
  const inputThreeRef = useRef("");
  const inputFourRef = useRef("");
  const inputFiveRef = useRef("");
  const inputSixRef = useRef("");
  const inputSevenRef = useRef("");

  const refs = {
    0: inputZeroRef,
    1: inputOneRef,
    2: inputTwoRef,
    3: inputThreeRef,
    4: inputFourRef,
    5: inputFiveRef,
    6: inputSixRef,
    7: inputSevenRef,
  };

  useEffect(() => {
    const init = async () => {
      const data = await api.getGenre();

      setGenres(data);
    };

    init();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const choose = [];

    for (let i = 0; i < Object.keys(refs).length; i++) {
      if (refs[i].current.checked) choose.push({ genre: refs[i].current.name });
    }

    dispatch(actions.chooseGenreRequest(choose));
  };

  return (
    <>
      <h1>Choose</h1>
      <h1>Your taste</h1>
      <form onSubmit={handleSubmit}>
        {genres.map((genre, idx) => {
          return (
            <label
              key={genre.name}
            >
              <input
                key={genre._id}
                name={genre._id}
                type="checkbox"
                ref={refs[idx]}
              />
              <span>{genre.name}</span>
            </label>
          );
        })}
        <button type="submit" >Done</button>
      </form>
    </>
  );
};

export default GenreChoose;
