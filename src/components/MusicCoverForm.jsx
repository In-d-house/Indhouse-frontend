import React, { useState } from "react";
import { useSelector } from "react-redux";

import api from "../api";

const MusicCoverForm = () => {
  const { token } = useSelector(state => state.user.profile);
  const [photo, setPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

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
    setPreviewUrl(null);
  };

  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label htmlFor="file">Edit Music Cover</label>
        <input
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={handleFileOnChange}
          required
        />
        <button type="submit" />
      </form>
      <img src={previewUrl} />
    </>
  );
};

export default MusicCoverForm;
