import {
  takeLatest,
  put,
  all,
  call,
} from "redux-saga/effects";

import * as actions from "../reducers/user";
import api from "../api";

function* signup({ payload }) {
  try {
    const { error } = yield api.signup(payload);

    if (error) {
      yield put(actions.failureSignup(error));
      return;
    }

    yield put(actions.successSignup());
  } catch (error) {
    yield put(actions.failureSignup(error));
  }
}

function* watchRequestSignup() {
  yield takeLatest(actions.requestSignup.type, signup);
}

export default function* userSagas() {
  yield all([
    call(watchRequestSignup),
  ]);
}
