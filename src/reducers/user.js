import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

const reducers = {
  localLoginRequest: state => {
    state.isLoading = true;
  },
  socialLoginRequest: state => {
    state.isLoading = true;
  },
  refreshLoginRequest: state => {
    state.isLoading = true;
  },
  loginSuccess: (state, action) => {
    state.profile = action.payload;
    state.isLoading = false;
  },
  loginFailure: (state, action) => {
    state.profile = null;
    state.isLoading = false;
    state.error = action.payload;
  },
  signupRequest: state => {
    state.isLoading = true;
  },
  signupSuccess: state => {
    state.isLoading = false;
  },
  signupFailure: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  logoutRequest: state => {
    state.isLoading = true;
  },
  logoutSuccess: state => {
    state.profile = null;
    state.isLoading = false;
  },
  logoutFailure: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  editProfileRequest: state => {
    state.isLoading = true;
  },
  editProfileSuccess: (state, action) => {
    state.profile[action.payload.type] = action.payload.data;
    state.isLoading = false;
  },
  editProfileFailure: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const {
  localLoginRequest,
  socialLoginRequest,
  refreshLoginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
  editProfileRequest,
  editProfileSuccess,
  editProfileFailure,
} = userSlice.actions;

export default userSlice.reducer;
