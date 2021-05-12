import {
  takeLatest,
  put,
  all,
  call,
} from "redux-saga/effects";

import history from "../utils/history";
import * as actions from "../reducers/user";
import { message, profileType } from "../constants";
import api from "../api";

function* loginLocal({ payload }) {
  try {
    const { profile, result, error } = yield call(api.loginLocal, payload);

    if (error) {
      yield put(actions.loginFailure(error));
      return;
    }

    if (!result) {
      yield put(actions.loginFailure(message.failLogin));
      return;
    }

    yield put(actions.loginSuccess(profile));

    localStorage.setItem("user", JSON.stringify(profile));

    if (profile.likeGenre.length) {
      history.push("/");
    } else {
      history.push(`/users/choose_genre/${profile._id}`);
    }
  } catch (error) {
    yield put(actions.loginFailure(error.message));
  }
}

function* loginSocial({ payload }) {
  try {
    const user = yield call(api.loginSocialByType, payload);
    const { profile, result, error } = yield call(api.loginSocial, user);

    if (error) {
      yield put(actions.loginFailure(error));
      return;
    }

    if (!result) {
      yield put(actions.loginFailure(message.failLogin));
      return;
    }

    localStorage.setItem("user", JSON.stringify(profile));

    yield put(actions.loginSuccess(profile));

    if (profile.likeGenre.length) {
      history.push("/");
    } else {
      history.push(`/users/choose_genre/${profile._id}`);
    }
  } catch (error) {
    yield put(actions.loginFailure(error.message));
  }
}

function* loginRefresh({ payload }) {
  try {
    yield put(actions.loginSuccess(payload));

    if (payload.likeGenre.length) {
      history.push("/");
    } else {
      history.push(`/users/choose_genre/${payload._id}`);
    }
  } catch (error) {
    yield put(actions.loginFailure(error));

    localStorage.removeItem("user");
  }
}

function* signup({ payload }) {
  try {
    const { result, error } = yield call(api.signup, payload);

    if (error) {
      yield put(actions.signupFailure(error));
      return;
    }

    if (!result) {
      yield put(actions.signupFailure(message.failSignup));
      return;
    }

    yield put(actions.signupSuccess());

    history.push("/login");
  } catch (error) {
    yield put(actions.signupFailure(error.message));
  }
}

function* logout({ payload }) {
  try {
    const { result, error } = yield api.logout(payload);

    if (error) {
      yield put(actions.logoutFailure(error));
      return;
    }

    if (!result) {
      yield put(actions.logoutFailure(message.failLogout));
      return;
    }

    yield put(actions.logoutSuccess());

    localStorage.removeItem("user");

    history.push("/");
  } catch (error) {
    yield put(actions.logoutFailure(error.message));
  }
}

function* editProfile({ payload }) {
  const {
    type,
    name,
    file,
    _id,
  } = payload;
  let response;
  let data;

  try {
    if (type === profileType.name) {
      response = yield call(api.editUserProfileName, { name, _id });
    }

    if (type === profileType.photo) {
      response = yield call(api.uploadUserProflePhoto, { file, _id });
    }

    data = {
      type,
      data: response.payload,
    };

    yield put(actions.editProfileSuccess(data));
  } catch (error) {
    yield put(actions.editProfileFailure(error));
  }
}

function* watchRefreshLogin() {
  yield takeLatest(actions.refreshLoginRequest.type, loginRefresh);
}

function* watchLocalLogin() {
  yield takeLatest(actions.localLoginRequest.type, loginLocal);
}

function* watchSocialLogin() {
  yield takeLatest(actions.socialLoginRequest.type, loginSocial);
}

function* watchSignup() {
  yield takeLatest(actions.signupRequest.type, signup);
}

function* watchLogout() {
  yield takeLatest(actions.logoutRequest.type, logout);
}

function* watchEditProfile() {
  yield takeLatest(actions.editProfileRequest.type, editProfile);
}

export default function* userSagas() {
  yield all([
    call(watchRefreshLogin),
    call(watchLocalLogin),
    call(watchSocialLogin),
    call(watchSignup),
    call(watchLogout),
    call(watchEditProfile),
  ]);
}
