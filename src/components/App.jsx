import React from "react";
import { Switch, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Login />
      <Signup />
      <Logout />
    </div>
  );
};

export default App;
