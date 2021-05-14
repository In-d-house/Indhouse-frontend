import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import * as actions from "../../reducers/user";
import { profileType } from "../../constants";

const Wrapper = styled.div`
  .img-container {
    display: flex;
    justify-content: space-between;
    width: 25rem;
    margin-top: 5rem;
  }

  .img-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 15rem;

    span {
      width: 100%;
      text-align: center;
    }
  }

  img {
    width: 10rem;
    border-radius: 50%;
  }
`;

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
    <Wrapper>
      <div className="img-container" >
        <div className="img-box" >
          <img src={photoUrl} />
          <span>현재 이미지</span>
        </div>
        <div className="img-box" >
          <img src={previewUrl} />
          <span>변경할 이미지</span>
        </div>
      </div>
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
    </Wrapper>
  );
};

export default UserPhotoEditForm;
