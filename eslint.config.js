// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
  {
    // Линтуем JS/JSX и TS/TSX
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
  // Добавляем конфигурацию для TypeScript
  ...tseslint.configs.recommended,
];