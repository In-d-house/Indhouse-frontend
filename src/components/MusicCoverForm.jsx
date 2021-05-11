import React, { useState } from "react";
import { useSelector } from "react-redux";

import api from "../api";

const MusicCoverForm = () => {
  const { token } = useSelector(state => state.user.profile);
  const [photo, setPhoto] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const file = new FormData();
    file.append("photo", photo);

    api.uploadMusicCoverPhoto({ file, token });
  };

  const handleFileOnChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    reader.onloadend = () => {
      setPhoto(file);
      setPreviewUrl(imageUrl);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label htmlFor="file">커버 사진 저장</label>
        <input
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={handleFileOnChange}
          required
        />
        <input type="submit" />
      </form>
      {previewUrl && <img src={previewUrl} />}
    </>
  );
};

export default MusicCoverForm;
