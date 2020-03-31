module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  extends: ["react-app", "plugin:prettier/recommended"],
  env: {
    jest: true,
  },
  globals: {
    window: true,
    document: true,
  },
  rules: {
    "react/prop-types": "error",
  },
};
