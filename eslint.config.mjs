import eslint from "@eslint/js";
import tseslint  from "typescript-eslint";
import angularlint from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

const tsFiles = ["src/**/*.ts", "test/**/*.ts"];
const templateFiles = ["src/**/*.html"];

export default [
  {
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
      ...eslintConfigPrettier,
      ...config,
      files: tsFiles,
    };
  }),
  ...tseslint.configs.stylistic.map((config) => {
    return {
      ...eslintConfigPrettier,
      ...config,
      files: tsFiles,
    };
  }),
  ...angularlint.configs.tsRecommended.map((config) => {
    return {
      ...config,
      rules: {
        ...config.rules,
        "@angular-eslint/component-selector": [
          "warn",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
      },
      files: tsFiles,
      processor: angularlint.processInlineTemplates,
    };
  }),
  ...angularlint.configs.templateRecommended.map((config) => {
    return {
      ...config,
      files: templateFiles,
    };
  }),
];
