const form = {
  name: "name",
  email: "email",
  password: "password",
  checkPassword: "checkPassword",
};

const socialType = {
  google: "google",
  facebook: "facebook",
};

const profileType = {
  name: "name",
  photo: "photoUrl",
};

const message = {
  errorName: "이름 형식이 맞지 않습니다.",
  errorEmail: "이메일 형식이 맞지 않습니다.",
  errorPassword: "비밀번호 형식이 맞지 않습니다.",
  errorCheckPassword: "비밀번호가 동일하지 않습니다.",
  failLogin: "Fail login",
  failSignup: "Fail signup",
  failLogout: "Fail logout",
};

const env = {
  url: process.env.REACT_APP_LOCAL_URL,
};

export {
  form,
  socialType,
  profileType,
  message,
  env,
};
