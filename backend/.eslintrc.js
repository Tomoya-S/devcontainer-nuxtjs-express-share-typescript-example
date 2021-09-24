module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["prettier"],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-undef": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
