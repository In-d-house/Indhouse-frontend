const url = process.env.REACT_APP_LOCAL_URL;

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
  signup,
};
