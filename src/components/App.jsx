import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Home from "./Home";
import Landing from "./Landing";

import * as actions from "../reducers/user";

const App = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);
  const isInitUser = profile ? profile.likeGenre.length : false;

  useEffect(() => {
    if (localStorage.user && profile === null) {
      dispatch(actions.refreshLoginRequest(JSON.parse(localStorage.user)));
    }
  }, []);

  return (
    <>
      {!!isInitUser && <Home />}
      {!isInitUser && <Landing />}
    </>
  );
};

export default App;
