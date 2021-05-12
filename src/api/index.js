import firebase from "../configs/firebase";

import { socialType, env } from "../constants";

const loginLocal = async user => {
  try {
    const response = await fetch(`${env.url}/auth/login/local`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

const loginSocial = async user => {
  try {
    const response = await fetch(`${env.url}/auth/login/social`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    return data;
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

const signup = async user => {
  try {
    const response = await fetch(`${env.url}/auth/signup`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

const logout = async ({ _id, token }) => {
  try {
    const response = await fetch(`${env.url}/auth/logout/${_id}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": token,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

const uploadMusicCoverPhoto = async ({ file, token }) => {
  try {
    const response = await fetch(`${env.url}/musics/cover-photo`, {
      method: "POST",
      headers: {
        "authorization": token,
      },
      body: file,
    });

    const data = await response.json();

    return data;
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
  uploadMusicCoverPhoto,
};
