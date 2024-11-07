import eslint from "@eslint/js";
import tseslint  from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

const tsFiles = ["src/**/*.ts", "test/**/*.ts"];

const configName = "ndg/base";

export default [
  {
    name: configName,
    ...eslint.configs.recommended,
    ...eslintConfigPrettier,
    files: tsFiles,
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
    },
  },
  ...tseslint.configs.recommended.map((config) => {
    return {
      name: configName,
      ...eslintConfigPrettier,
      ...config,
      files: tsFiles,
    };
  }),
  ...tseslint.configs.stylistic.map((config) => {
    return {
      name: configName,
      ...eslintConfigPrettier,
      ...config,
      files: tsFiles,
    };
  }),
];
