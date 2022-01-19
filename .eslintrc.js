module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:mocha/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:cypress/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": ["off"],
    "react/prop-types": "off",
    "cypress/no-unnecessary-waiting": "off",
    "mocha/no-mocha-arrows": "off",
    "mocha/no-exclusive-tests": "error",
    "mocha/no-setup-in-describe": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "testing-library/render-result-naming-convention": "off",
  },
};
