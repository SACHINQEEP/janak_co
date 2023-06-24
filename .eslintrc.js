module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier", "react", "import"],
    env: {
        browser: true,
        jest: true,
        es2021: true,
        node: true
    },
    extends: [
        "airbnb-base",
        "airbnb-typescript",
        "prettier",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended"
    ],
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
        "arrow-body-style": "off",
        "no-plusplus": "off",
        'import/no-duplicates': 'off',
        'import/no-self-import': 'off',
        "react/prop-types": "off",
        "indent": "off",
        "jest/expect-expect": ["error", {
            assertFunctionNames: ["expect", "testSaga", "expectSaga"]
        }],
        "import/no-cycle": "off",
        "import/order": "off",
        "import/newline-after-import": "off",
        "import/no-relative-packages": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "import/default": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "react/function-component-definition": [2, {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function"
        }],
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-param-reassign": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-unused-vars": ["warn", {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_"
        }]
    },
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.json"
    }
};
