const calcRem = size => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(20),
  medium: calcRem(25),
  lg: calcRem(35),
  xl: calcRem(40),
  authFormSize: calcRem(50),
  miniTitleSize: calcRem(60),
  titleSize: calcRem(150),
};

const fontWeights = {
  weak: 300,
  medium: 600,
  strong: 800,
};

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  gray: "#BEBFC2",
  red: "#FF006E",
  blue: "#509BF5",
  yellow: "#F7E32D",
  indigo: "#121A2C",
  lightIndigo: "#1F273A",
};

const themes = {
  fontSizes,
  fontWeights,
  colors,
};

export default themes;
