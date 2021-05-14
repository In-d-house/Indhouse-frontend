import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  position: absolute;
  top: 2rem;
  right: 2rem;

  img {
    border-radius: 50px;
    width: 4rem;
  }
`;

const UserPhoto = () => {
  const { photoUrl } = useSelector(state => state.user.profile);

  return (
    <Wrapper>
      <img src={photoUrl}></img>
    </Wrapper>
  );
};

export default UserPhoto;
