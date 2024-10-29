module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/ignore": "node_modules",
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "prettier",
    "plugin:prettier/recommended",
    // "plugin:react-hooks/recommended",
  ],
  rules: {
    "no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description", // Allows usage if accompanied by a description
        "ts-ignore": "allow-with-description",
        "ts-nocheck": true,
        "ts-check": false,
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        //   paths: ['@mui/material'],
      },
    ],
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
  },
};
