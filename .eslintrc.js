module.exports = {
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "sourceType": "module",
    "requireConfigFile": false,
    'ecmaVersion': 6,
  },
  "plugins": [
    'import'
  ],
  "rules": {
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}]
  },
}