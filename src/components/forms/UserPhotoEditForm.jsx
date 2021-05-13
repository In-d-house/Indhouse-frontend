import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import * as actions from "../../reducers/user";
import { profileType } from "../../constants";

const UserPhotoEditForm = ({ _id, photoUrl }) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const photoInputRef = useRef(null);

  const resetProfilePhoto = () => {
    setPhoto(null);
    setPreviewUrl(null);
    photoInputRef.current.value = null;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (photo) {
      const file = new FormData();
      file.append("photo", photo);

      dispatch(actions.editProfileRequest({ type: profileType.photo, file, _id }));
    }

    resetProfilePhoto();
  };

  const handleFileOnChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      reader.onloadend = () => {
        setPhoto(file);
        setPreviewUrl(imageUrl);
      };

      reader.readAsDataURL(file);

      return;
    }

    setPhoto(null);
    setPreviewUrl(photoUrl);
  };

  return (
    <>
      <img src={photoUrl} />
      <img src={previewUrl} />
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          name="file"
          id="file"
          accept="image/*"
          ref={photoInputRef}
          onChange={handleFileOnChange}
        />
        <button type="submit" >Edit Photo</button>
      </form>
    </>
  );
};

export default UserPhotoEditForm;
