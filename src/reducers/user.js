import { createSlice } from "@reduxjs/toolkit";

const REQUEST_LOGIN_LOCAL = "REQUEST_LOGIN_LOCAL";
const SUCCESS_LOGIN_LOCAL = "SUCCESS_LOGIN_LOCAL";
const FAILURE_LOGIN_LOCAL = "FAILURE_LOGIN_LOCAL";
const REQUEST_LOGIN_SOCIAL = "REQUEST_LOGIN_SOCIAL";
const SUCCESS_LOGIN_SOCIAL = "SUCCESS_LOGIN_SOCIAL";
const FAILURE_LOGIN_SOCIAL = "FAILURE_LOGIN_SOCIAL";
const REQUEST_SIGNUP = "REQUEST_SIGNUP";
const SUCCESS_SIGNUP = "SUCCESS_SIGNUP";
const FAILURE_SIGNUP = "FAILURE_SIGNUP";
const LOGOUT_USER = "LOGOUT_USER";

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

const reducers = {
  [REQUEST_LOGIN_LOCAL]: {
    reducer: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  },
  [SUCCESS_LOGIN_LOCAL]: {
    reducer: (state, action) => ({
      ...state,
      profile: action.payload.profile,
      isLoading: false,
      error: null,
    }),
    prepare: ({ profile }) => ({ payload: { profile } }),
  },
  [FAILURE_LOGIN_LOCAL]: {
    reducer: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),
    prepare: error => ({ payload: { error } }),
  },
  [REQUEST_LOGIN_SOCIAL]: {
    reducer: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  },
  [SUCCESS_LOGIN_SOCIAL]: {
    reducer: (state, action) => ({
      ...state,
      profile: action.payload.profile,
      isLoading: false,
      error: null,
    }),
    prepare: ({ profile }) => ({ payload: { profile } }),
  },
  [FAILURE_LOGIN_SOCIAL]: {
    reducer: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),
    prepare: error => ({ payload: { error } }),
  },
  [REQUEST_SIGNUP]: {
    reducer: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  },
  [SUCCESS_SIGNUP]: {
    reducer: state => ({
      ...state,
      isLoading: false,
      error: null,
    }),
  },
  [FAILURE_SIGNUP]: {
    reducer: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),
    prepare: error => ({ payload: { error } }),
  },
  [LOGOUT_USER]: {
    reducer: state => ({
      ...state,
      profile: null,
      isLoading: false,
      error: null,
    }),
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const requestLoginLocal = userSlice.actions[REQUEST_LOGIN_LOCAL];
export const successLoginLocal = userSlice.actions[SUCCESS_LOGIN_LOCAL];
export const failureLoginLocal = userSlice.actions[FAILURE_LOGIN_LOCAL];
export const requestLoginSocial = userSlice.actions[REQUEST_LOGIN_SOCIAL];
export const successLoginSocial = userSlice.actions[SUCCESS_LOGIN_SOCIAL];
export const failureLoginSocial = userSlice.actions[FAILURE_LOGIN_SOCIAL];
export const requestSignup = userSlice.actions[REQUEST_SIGNUP];
export const successSignup = userSlice.actions[SUCCESS_SIGNUP];
export const failureSignup = userSlice.actions[FAILURE_SIGNUP];
export const logoutUser = userSlice.actions[LOGOUT_USER];

export default userSlice.reducer;
