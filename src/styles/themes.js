const calcRem = size => `${size / 16}rem`;

const fontSizes = {
  xsmall: calcRem(13),
  small: calcRem(16),
  medium: calcRem(20),
  base: calcRem(25),
  lg: calcRem(30),
  xl: calcRem(40),
  xxl: calcRem(50),
  xxxl: calcRem(60),
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
