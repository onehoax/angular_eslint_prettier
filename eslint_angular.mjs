// import baseConfig from "./eslint_base.mjs";
import baseConfig from "@onehoax/eslint_base";
import angularlint from "angular-eslint";

const tsFiles = ["src/**/*.ts", "test/**/*.ts"];
const templateFiles = ["src/**/*.html"];

const baseConfigName = "angular";

export default {
  ts: [
    ...baseConfig,
    ...angularlint.configs.tsRecommended.map((config) => {
      return {
        name: `${baseConfigName}/ts`,
        ...config,
        rules: {
          ...config.rules,
          "@angular-eslint/component-selector": [
            "error",
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
  ],
  template: [
    ...angularlint.configs.templateRecommended.map((config) => {
      return {
        name: `${baseConfigName}/template`,
        ...config,
        files: templateFiles,
      };
    }),
  ]
};
