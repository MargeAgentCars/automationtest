module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base'
    ],
    globals: {
        Atomics:'readonly',
      SharedArrayBuffer:'readonly'
    },
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: 'off' 
    //linebreak-style: 'off',
    //no-alert: 'off'
  }
}
