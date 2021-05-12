import React from "react";
import { useSelector } from "react-redux";

import UserNameEditForm from "./UserNameEditForm";
import UserPhotoEditForm from "./UserPhotoEditForm";

const Profile = () => {
  const { _id, name: currentName, photoUrl } = useSelector(state => state.user.profile);

  return (
    <>
      <UserPhotoEditForm
        _id={_id}
        photoUrl={photoUrl}
      />
      <UserNameEditForm
        _id={_id}
        currentName={currentName}
      />
    </>
  );
};

export default Profile;
