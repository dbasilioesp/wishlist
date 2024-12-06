const jest = require("eslint-plugin-jest");
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  {
    files: ["tests/**"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      // "jest/prefer-expect-assertions": "off",
    },
  },
  // you can also configure jest rules in other objects, so long as some of the `files` match
  pluginJs.configs.recommended,
];
