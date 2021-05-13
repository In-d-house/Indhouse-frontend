import React from "react";
import { useSelector } from "react-redux";

const UserPhoto = () => {
  const { photoUrl } = useSelector(state => state.user.profile);

  return (
    <img src={photoUrl}></img>
  );
};

export default UserPhoto;
