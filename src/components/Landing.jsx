import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import LandingNav from "./LandingNav";
import LandingMain from "./LandingMain";
import GenreChoose from "./GenreChoose";

const Landing = () => {
  return (
    <>
      <h1>Landing Page</h1>
      <LandingNav />

      <Switch>
        <Route
          exact
          path="/"
          component={LandingMain}
        />
        <Route
          path="/users/choose_genre/:user_id"
          component={GenreChoose}
        />
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/signup"
          component={Signup}
        />
      </Switch>
    </>
  );
};

export default Landing;
