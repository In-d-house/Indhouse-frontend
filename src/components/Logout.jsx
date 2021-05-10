import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../reducers/user";

const Logout = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(actions.requestLogout(profile));
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
