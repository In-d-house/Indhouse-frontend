import React from "react";
import { useDispatch } from "react-redux";

import Signup from "./Signup";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Signup />
    </div>
  );
};

export default App;
