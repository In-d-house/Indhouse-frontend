import React from "react";
import { useSelector } from "react-redux";
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

const HomeNav = () => {
  const { _id } = useSelector(state => state.user.profile);

  return (
    <Nav>
      <Link to="/" >In-d house</Link>
      <div>
        <Link to="/" >HOME</Link>
        <Link to={`/search/${_id}`} >SEARCH</Link>
        <Link to={`/users/setting/${_id}`} >SETTING</Link>
      </div>
      <div>
        <span>YOUR LIBRARY</span>
        <Link to={`/users/taste_music/${_id}`} >MUSIC TASTE</Link>
        <Link to={`/users/favorite_music/${_id}`} >FAVORITE MUSIC</Link>
        <Link to={`/users/favorite_artist/${_id}`} >FAVORITE ARTIST</Link>
      </div>
      <Link to={`/users/find_taste/${_id}` }>+ FIND TASTE</Link>
    </Nav>
  );
};

export default HomeNav;
