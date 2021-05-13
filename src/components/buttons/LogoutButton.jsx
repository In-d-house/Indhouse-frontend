import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../reducers/user";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(actions.logoutRequest(profile));
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
