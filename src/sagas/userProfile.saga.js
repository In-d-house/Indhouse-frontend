import {
  takeLatest,
  put,
  all,
  call,
} from "redux-saga/effects";

import history from "../utils/history";
import * as actions from "../reducers/user";
import { profileType } from "../constants";
import api from "../api";

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

function* chooseGenre({ payload }) {
  try {
    const response = yield call(api.editUserLikeGenre, payload);

    if (!response.result) {
      yield put(actions.chooseGenreFailure("error"));

      return;
    }

    yield put(actions.chooseGenreSuccess(response.genres));
    history.push("/");
  } catch (error) {
    yield put(actions.chooseGenreFailure(error));
  }
}

function* watchEditProfile() {
  yield takeLatest(actions.editProfileRequest.type, editProfile);
}

function* watchChooseGenre() {
  yield takeLatest(actions.chooseGenreRequest.type, chooseGenre);
}

export default function* userProfileSagas() {
  yield all([
    call(watchEditProfile),
    call(watchChooseGenre),
  ]);
}
