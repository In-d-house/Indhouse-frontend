import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Home from "./Home";
import Landing from "./Landing";

import * as actions from "../reducers/user";

const Page = styled.div`
  position: relative;
`;

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
    <Page>
      {!!isInitUser && <Home />}
      {!isInitUser && <Landing />}
    </Page>
  );
};

export default App;
