module.exports = {
  "parserOptions": {
    "sourceType": "module",
    'ecmaVersion': 6,
  },
  "plugins": [
    'import'
  ],
  "rules": {
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}]
  },
}