module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": "plugin:react/recommended",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2021, // Update to correct ECMA version
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "jsx-a11y"
  ],
  "rules": {
      // Basic rules to allow your code to run without errors
      "react/react-in-jsx-scope": "off", // To allow JSX without importing React (for React 17+)
      "react/prop-types": "off", // To disable prop-types validation (optional)
      // Add more rules here as needed
      "react/no-unescaped-entities": "off",
      "react/jsx-key": "off",
      "jsx-a11y/img-redundant-alt": "off",
  }
};
