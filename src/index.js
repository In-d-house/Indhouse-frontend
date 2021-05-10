import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import history from "./utils/history";
import store from "./store";
import App from "./components/App";

ReactDOM.render(
  <Router history={history} >
    <Provider store={store} >
      <App />
    </Provider>
  </Router>,
  document.getElementById("root"),
);
