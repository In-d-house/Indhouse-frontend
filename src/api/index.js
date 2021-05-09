import firebase from "./firebase";

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

const loginGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const { user } = await firebase.auth().signInWithPopup(provider);

  const userInfo = { name: user.displayName, email: user.email };

  const result = await loginSocial(userInfo);

  return result;
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

export default {
  loginLocal,
  loginSocial,
  loginGoogle,
  signup,
};
