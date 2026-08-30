import coreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "studio1/**"],
  },
  ...coreWebVitals,
  {
    rules: {
      // Apostrophes in prose ("I'm", "Let's") read fine in JSX.
      "react/no-unescaped-entities": "off",
    },
  },
  {
    // Config files are expected to default-export an anonymous object.
    files: ["*.config.{js,mjs}", "eslint.config.mjs"],
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
];
