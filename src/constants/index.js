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

const photoLikeType = {
  like: "like",
  disLike: "dislike",
};

const message = {
  errorName: "이름 형식이 맞지 않습니다.",
  errorEmail: "이메일 형식이 맞지 않습니다.",
  errorPassword: "비밀번호 형식이 맞지 않습니다.",
  errorCheckPassword: "비밀번호가 동일하지 않습니다.",
  failLogin: "로그인 실패",
  failSignup: "회원가입 실패",
  failLogout: "로그아웃 실패",
};

const env = {
  url: process.env.REACT_APP_LOCAL_URL,
};

const title = {
  home: "Hi, ",
  tasteMusic: "YOUR MUSIC TASTE!",
  tasteFind: "HOW ABOUT THIS MUSIC?",
  search: "SEARCH",
  setting: "SETTING",
  favoriteMusic: "FAVORITE MUSIC",
  favoriteArtist: "FAVORITE ARTIST",
};

export {
  form,
  socialType,
  profileType,
  photoLikeType,
  message,
  env,
  title,
};
