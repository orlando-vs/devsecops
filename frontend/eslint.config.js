import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly"
      }
    },
    plugins: {
      react
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off"
    }
  },
  {
    files: ["**/__tests__/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly"
      }
    }
  },
  {
    files: ["cypress.config.js"],
    rules: {
      "no-unused-vars": "off"
    }
  },
  {
    ignores: ["eslint.config.js"]
  }
];
