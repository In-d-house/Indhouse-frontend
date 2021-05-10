import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { profile } = useSelector(state => state.user);

  return (
    <>
      <img src={profile.photoUrl} ></img>
      <button>Edit Image</button>
      <button>Edit Name</button>
      <button>Done</button>
    </>
  );
};

export default Profile;
