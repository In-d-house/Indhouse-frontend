import React from "react";
import { useSelector } from "react-redux";
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
import MusicCreateForm from "./forms/MusicCreateForm";

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
  const {
    _id,
    name,
    photoUrl,
    likeMusic,
    likeGenre,
    createdAt,
  } = useSelector(state => state.user.profile);

  return (
    <Page>
      <HomeNav userId={_id} />
      <UserPhoto photo={photoUrl} />

      <div className="contents">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomeMain name={name} likeGenre={likeGenre} likeMusic={likeMusic} />}
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
            render={() => <TasteMusic createdAt={createdAt} likeMusic={likeMusic} />}
          />
          <Route
            path="/users/favorite_music/:user_id"
            render={() => <FavoriteMusic likeMusic={likeMusic} />}
          />
          <Route
            path="/users/favorite_artist/:user_id"
            component={FavoriteArtist}
          />
          <Route
            path="/users/find_taste/:user_id"
            render={() => <TasteFind likeGenre={likeGenre} likeMusic={likeMusic} />}
          />
          <Route
            path="/create_music"
            component={MusicCreateForm}
          />
        </Switch>
      </div>
    </Page>
  );
};

export default Home;
