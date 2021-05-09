import { all, call } from "redux-saga/effects";

import userSagas from "./user.saga";

export default function* saga() {
  yield all([
    call(userSagas),
  ]);
}
