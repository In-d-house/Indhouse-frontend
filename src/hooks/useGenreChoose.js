import { useRef } from "react";
import { useDispatch } from "react-redux";

import { genre } from "../constants";
import * as actions from "../reducers/user";

const useGenreChoose = () => {
  const dispatch = useDispatch();
  const inputZeroRef = useRef("");
  const inputOneRef = useRef("");
  const inputTwoRef = useRef("");
  const inputThreeRef = useRef("");
  const inputFourRef = useRef("");
  const inputFiveRef = useRef("");
  const inputSixRef = useRef("");
  const inputSevenRef = useRef("");
  const inputEightRef = useRef("");

  const refs = {
    0: inputZeroRef,
    1: inputOneRef,
    2: inputTwoRef,
    3: inputThreeRef,
    4: inputFourRef,
    5: inputFiveRef,
    6: inputSixRef,
    7: inputSevenRef,
    8: inputEightRef,
  };

  const handleSubmit = e => {
    e.preventDefault();

    const choose = [];

    for (let i = 0; i < Object.keys(refs).length; i++) {
      if (refs[i].current.checked) choose.push({ genreId: refs[i].current.name });
    }

    dispatch(actions.chooseGenreRequest(choose));
  };

  return {
    refs,
    genre,
    handleSubmit,
  };
};

export default useGenreChoose;
