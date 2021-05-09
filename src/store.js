import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
