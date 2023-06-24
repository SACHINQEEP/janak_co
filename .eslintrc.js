module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "react", "import"],
  env: {
    browser: true,
    jest: true,
    es2021: true,
    node: true
  },
  extends: ["airbnb-base", "airbnb-typescript", "prettier", "plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:import/typescript", "plugin:@typescript-eslint/recommended", "plugin:jest/recommended"],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
      fragment: "Fragment"
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".tsx", ".ts", ".js", ".json"]
      },
      alias: [["src", "./src"]]
    }
  },
  rules: {
    "arrow-body-style": ["off"],
    "no-plusplus": ["off"],
    "react/prop-types": 0,
    'indent': 'off',
    "jest/expect-expect": ["error", {
      assertFunctionNames: ["expect", "testSaga", "expectSaga"]
    }],
    "import/no-cycle": ["off"],
    "import/order": ["warn", {
      groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true
      },
      warnOnUnassignedImports: true
    }],
    "import/newline-after-import": "off",
    "import/default": "off",
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "react/function-component-definition": [2, {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function"
    }],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-param-reassign": 0,
    "@typescript-eslint/indent": false,
    "@typescript-eslint/no-unused-vars": ["warn", {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_"
    }]
  },
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  }
};