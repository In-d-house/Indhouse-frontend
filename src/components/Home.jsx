import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Search from "./Search";
import Setting from "./Setting";
import HomeNav from "./HomeNav";
import HomeMain from "./HomeMain";
import UserPhoto from "./UserPhoto";
import TasteFind from "./TasteFind";
import TasteMusic from "./TasteMusic";
import FavoriteMusic from "./FavoriteMusic";
import FavoriteArtist from "./FavoriteArtist";

const Page = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightIndigo};
  min-height: 100vh;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  .contents {
    position: absolute;
    top: 0;
    margin-left: 20rem;
    padding: 5rem;
    width: 80%;
  }
`;

const Home = () => {
  return (
    <Page>
      <HomeNav />
      <UserPhoto />

      <div className="contents">
        <Switch>
          <Route
            exact
            path="/"
            component={HomeMain}
          />
          <Route
            path="/search/:user_id"
            component={Search}
          />
          <Route
            path="/users/setting/:user_id"
            component={Setting}
          />
          <Route
            path="/users/taste_music/:user_id"
            component={TasteMusic}
          />
          <Route
            path="/users/favorite_music/:user_id"
            component={FavoriteMusic}
          />
          <Route
            path="/users/favorite_artist/:user_id"
            component={FavoriteArtist}
          />
          <Route
            path="/users/find_taste/:user_id"
            component={TasteFind}
          />
        </Switch>
      </div>
    </Page>
  );
};

export default Home;
