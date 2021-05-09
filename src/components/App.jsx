import React from "react";
import { useDispatch } from "react-redux";

import Signup from "./Signup";
import Login from "./Login";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
};

export default App;
