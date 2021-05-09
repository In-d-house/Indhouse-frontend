import {
  takeLatest,
  put,
  all,
  call,
} from "redux-saga/effects";

import * as actions from "../reducers/user";
import api from "../api";

function* loginLocal({ payload }) {
  try {
    const { profile, result, error } = yield api.loginLocal(payload);

    if (error) {
      yield put(actions.failureLoginLocal(error));
      return;
    }

    if (!result) {
      yield put(actions.failureLoginLocal("Fail Login"));
      return;
    }

    yield put(actions.successLoginLocal({ profile }));
  } catch (error) {
    yield put(actions.failureLoginLocal(error.message));
  }
}

function* loginSocial({ payload }) {
  try {
    const { profile, result, error } = yield api.loginGoogle(payload);

    if (error) {
      yield put(actions.failureLoginSocial(error));
      return;
    }

    if (!result) {
      yield put(actions.failureLoginLocal("Fail Login"));
      return;
    }

    yield put(actions.successLoginSocial({ profile }));
  } catch (error) {
    yield put(actions.failureLoginSocial(error.message));
  }
}

function* signup({ payload }) {
  try {
    const { result, error } = yield api.signup(payload);

    if (error) {
      yield put(actions.failureSignup(error));
      return;
    }

    if (!result) {
      yield put(actions.failureSignup("Fail Signup"));
      return;
    }

    yield put(actions.successSignup());
  } catch (error) {
    yield put(actions.failureSignup(error.message));
  }
}

function* watchRequestLoginLocal() {
  yield takeLatest(actions.requestLoginLocal.type, loginLocal);
}

function* watchRequestLoginSocial() {
  yield takeLatest(actions.requestLoginSocial.type, loginSocial);
}

function* watchRequestSignup() {
  yield takeLatest(actions.requestSignup.type, signup);
}

export default function* userSagas() {
  yield all([
    call(watchRequestSignup),
    call(watchRequestLoginLocal),
    call(watchRequestLoginSocial),
  ]);
}
