import React from "react";
import { useSelector } from "react-redux";

import Home from "./Home";
import Landing from "./Landing";

const App = () => {
  const { profile } = useSelector(state => state.user);
  const isInitUser = profile.likeGenre?.length;

  return (
    <>
      {!!isInitUser && <Home />}
      {!isInitUser && <Landing />}
    </>
  );
};

export default App;
