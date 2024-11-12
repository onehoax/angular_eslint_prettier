import angularConfigs from "@onehoax/eslint_prettier/eslint/angular";

export default [
  ...angularConfigs.ts.map((config) => {
    return {
      ...config,
      rules: {
        ...config.rules,
        "unused-imports/no-unused-imports": "warn",
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "anotherprefix",
            style: "kebab-case",
          },
        ],
      },
    };
  }),
  ...angularConfigs.template,
];
