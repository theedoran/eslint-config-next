module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "unused-imports", "prettier"],
  rules: {
  	"arrow-body-style": "off",
    "no-constant-condition": "off",
    "vars-on-top": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "no-alert": "off",
    "no-await-in-loop": "off",
    radix: "off",
    "consistent-return": "off",
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    camelcase: "off",
    "no-console": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/naming-convention": "off",
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        printWidth: 120,
        singleQuote: false,
        useTabs: true,
        quoteProps: "consistent",
        bracketSameLine: true,
        trailingComma: "es5",
        arrowParens: "always",
        semi: true,
      },
    ],
    "import/first": "error",
    "import/exports-last": "off",
    "import/newline-after-import": "error",
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "index",
          "sibling",
          "parent",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "jsx-a11y/anchor-is-valid": "off",
    "react/self-closing-comp": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": [
      "error",
      {
        ignoreFunctionalComponents: true,
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "@next/next/no-img-element": "error",
    "@next/next/no-typos": "error",
    "@next/next/no-css-tags": "error",
    "@next/next/no-html-link-for-pages": "error",
    "@next/next/link-passhref": "error",
    "@next/next/next-script-for-ga": "error",
  },
};
