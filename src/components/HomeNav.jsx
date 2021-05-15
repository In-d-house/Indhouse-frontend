import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.colors.indigo};
  position: sticky;
  top: 0;
  left: 0;
  width: 20rem;
  min-height: 100vh;
`;

const HomeNav = ({ userId }) => {
  return (
    <Nav>
      <Link to="/" >In-d house</Link>
      <div>
        <Link to="/" >HOME</Link>
        <Link to={`/search/${userId}`} >SEARCH</Link>
        <Link to={`/users/setting/${userId}`} >SETTING</Link>
      </div>
      <div>
        <span>YOUR LIBRARY</span>
        <Link to={`/users/taste_music/${userId}`} >MUSIC TASTE</Link>
        <Link to={`/users/favorite_music/${userId}`} >FAVORITE MUSIC</Link>
        <Link to={`/users/favorite_artist/${userId}`} >FAVORITE ARTIST</Link>
      </div>
      <Link to="/create_music" >CREATE MUSIC</Link>
      <Link to={`/users/find_taste/${userId}` }>+ FIND TASTE</Link>
    </Nav>
  );
};

export default HomeNav;
