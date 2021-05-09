module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
  },
  "plugins": [
    "react",
    "react-hooks",
  ],
  "extends": ["eslint:recommended", "airbnb-base"],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "codeFrame": true,
  },
  "rules": {
    "eqeqeq": ["error", "always"],
    "quotes": ["warn", "double", { "allowTemplateLiterals": true }],
    "quote-props": ["error", "consistent"],
    "arrow-parens": ["warn", "as-needed"],
    "no-unused-vars": ["off"],
    "no-console": ["warn"],
    "import/prefer-default-export": ["off"],
    "react-hooks/exhaustive-deps": ["warn"],
    "react/jsx-filename-extension": [1, { "extensions": ["js", "jsx"] }],
    "react/jsx-props-no-spreading": ["off"],
    "react/prop-types": ["off"],
    "no-underscore-dangle": ["off"],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
