import React from "react";
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

const UserPhoto = ({ photo }) => {
  return (
    <Wrapper>
      <img src={photo}></img>
    </Wrapper>
  );
};

export default UserPhoto;
