import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
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
          component={LoginForm}
        />
        <Route
          path="/signup"
          component={SignupForm}
        />
      </Switch>
    </>
  );
};

export default Landing;
