import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.indigo};
<<<<<<< HEAD
  min-width: 15rem;
=======
  min-width: 16rem;
>>>>>>> origin/develop
  width: 20vw;
  max-width: 20rem;

  .sticky-box {
<<<<<<< HEAD
    position: sticky;
    top: 0;
    left: 0;
=======
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 50vh;
    padding: 3rem 2rem;
  }

  .nav-header {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.strong};
  }

  .nav-content {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSizes.medium};

    a {
      padding: 0.2rem;
      transition: 0.2s ease-out;

      &:hover {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }

    span {
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.red};
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }

  .find-taste {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    padding: 1rem 0.5rem;
    border: 4px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.strong};
    transition: 0.2s ease-out;

    &:hover {
      border: 4px solid ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.yellow};
    }
>>>>>>> origin/develop
  }
`;

const HomeNav = ({ userId }) => {
  return (
    <Nav>
      <div className="sticky-box">
<<<<<<< HEAD
        <Link to="/" >In-d house</Link>
        <div>
          <Link to="/" >HOME</Link>
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
=======
        <Link className="nav-header" to="/" >In-d house</Link>
        <div className="nav-content">
          <Link to="/" >HOME</Link>
          <Link to={`/users/setting/${userId}`} >SETTING</Link>
          <Link to="/create_music" >CREATE MUSIC</Link>
        </div>
        <div className="nav-content">
          <span>YOUR LIBRARY</span>
          <Link to={`/users/taste_music/${userId}`} >MUSIC TASTE</Link>
          <Link to={`/users/favorite_music/${userId}`} >LIKE MUSIC</Link>
          <Link to={`/users/favorite_artist/${userId}`} >LIKE ARTIST</Link>
        </div>
        <Link className="find-taste" to={`/users/find_taste/${userId}` }>+ FIND TASTE</Link>
>>>>>>> origin/develop
      </div>
    </Nav>
  );
};

export default HomeNav;
