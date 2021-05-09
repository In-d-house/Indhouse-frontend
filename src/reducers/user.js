import { createSlice } from "@reduxjs/toolkit";

const REQUEST_LOGIN = "REQUEST_LOGIN";
const SUCCESS_LOGIN = "SUCCESS_LOGIN";
const FAILURE_LOGIN = "FAILURE_LOGIN";
const LOGOUT_USER = "LOGOUT_USER";
const REQUEST_SIGNUP = "REQUEST_SIGNUP";
const SUCCESS_SIGNUP = "SUCCESS_SIGNUP";
const FAILURE_SIGNUP = "FAILURE_SIGNUP";

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

const reducers = {
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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const requestSignup = userSlice.actions[REQUEST_SIGNUP];
export const successSignup = userSlice.actions[SUCCESS_SIGNUP];
export const failureSignup = userSlice.actions[FAILURE_SIGNUP];

export default userSlice.reducer;
