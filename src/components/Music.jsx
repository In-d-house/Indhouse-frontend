import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../reducers/user";
import api from "../api";

const Music = ({ info }) => {
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(info.isLike);

  const handleClick = () => {
    setIsLike(prev => !prev);
    api.updateLikeUser({ isLike, musicId: info._id });
  };

  return (
    <div>
      <img src={info.coverPhotoUrl} />
      <span>{info.title}</span>
      <button onClick={handleClick} >Like</button>
    </div>
  );
};

export default Music;
