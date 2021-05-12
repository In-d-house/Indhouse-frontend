import React from "react";
import { useSelector } from "react-redux";

import UserNameEditForm from "./UserNameEditForm";
import UserPhotoEditForm from "./UserPhotoEditForm";

const Profile = () => {
  const { _id, name: currentName, photoUrl } = useSelector(state => state.user.profile);
  const { token } = useSelector(state => state.user.profile);

  return (
    <>
      <UserPhotoEditForm
        _id={_id}
        photoUrl={photoUrl}
        token={token}
      />
      <UserNameEditForm
        _id={_id}
        currentName={currentName}
        token={token}
      />
    </>
  );
};

export default Profile;
