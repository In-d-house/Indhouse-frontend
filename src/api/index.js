import firebase from "./firebase";

import { socialType } from "../constants";

const url = process.env.REACT_APP_LOCAL_URL;

const loginLocal = async data => {
  try {
    const response = await fetch(`${url}/auth/login/local`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    return res;
  } catch (error) {
    return error;
  }
};

const loginSocial = async data => {
  try {
    const response = await fetch(`${url}/auth/login/social`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    return res;
  } catch (error) {
    return error;
  }
};

const loginSocialByType = async ({ type }) => {
  let provider = null;

  try {
    if (type === socialType.google) provider = new firebase.auth.GoogleAuthProvider();
    if (type === socialType.facebook) provider = new firebase.auth.FacebookAuthProvider();

    const { user } = await firebase.auth().signInWithPopup(provider);

    const userInfo = { name: user.displayName, email: user.email };

    return userInfo;
  } catch (error) {
    return error;
  }
};

const signup = async data => {
  try {
    const response = await fetch(`${url}/auth/signup`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    return res;
  } catch (error) {
    return error;
  }
};

const logout = async ({ _id, token }) => {
  try {
    const response = await fetch(`${url}/auth/logout/${_id}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": token,
      },
    });

    const res = await response.json();

    return res;
  } catch (error) {
    return error;
  }
};

export default {
  loginLocal,
  loginSocial,
  loginSocialByType,
  signup,
  logout,
};
