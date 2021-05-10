import {
  takeLatest,
  put,
  all,
  call,
} from "redux-saga/effects";

import history from "../utils/history";
import * as actions from "../reducers/user";
import { message } from "../constants";
import api from "../api";

function* loginLocal({ payload }) {
  try {
    const { profile, result, error } = yield api.loginLocal(payload);

    if (error) {
      yield put(actions.failureLoginLocal(error));
      return;
    }

    if (!result) {
      yield put(actions.failureLoginLocal(message.failLogin));
      return;
    }

    yield put(actions.successLoginLocal({ profile }));

    if (profile.likeGenre.length) {
      history.push("/");
    } else {
      history.push(`/users/choose_genre/${profile._id}`);
    }
  } catch (error) {
    yield put(actions.failureLoginLocal(error.message));
  }
}

function* loginSocial({ payload }) {
  try {
    const user = yield api.loginSocialByType(payload);
    const { profile, result, error } = yield api.loginSocial(user);

    if (error) {
      yield put(actions.failureLoginSocial(error));
      return;
    }

    if (!result) {
      yield put(actions.failureLoginSocial(message.failLogin));
      return;
    }

    yield put(actions.successLoginSocial({ profile }));

    if (profile.likeGenre.length) {
      history.push("/");
    } else {
      history.push(`/users/choose_genre/${profile._id}`);
    }
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
      yield put(actions.failureSignup(message.failSignup));
      return;
    }

    yield put(actions.successSignup());

    history.push("/login");
  } catch (error) {
    yield put(actions.failureSignup(error.message));
  }
}

function* logout({ payload }) {
  try {
    const { result, error } = yield api.logout(payload);

    if (error) {
      yield put(actions.failureLogout(error));
      return;
    }

    if (!result) {
      yield put(actions.failureLogout(message.failLogout));
      return;
    }

    yield put(actions.successLogout());

    history.push("/");
  } catch (error) {
    yield put(actions.failureLogout(error.message));
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

function* watchRequestLogout() {
  yield takeLatest(actions.requestLogout.type, logout);
}

export default function* userSagas() {
  yield all([
    call(watchRequestLoginLocal),
    call(watchRequestLoginSocial),
    call(watchRequestSignup),
    call(watchRequestLogout),
  ]);
}
