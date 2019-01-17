module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint-config-umi'],
  rules: {
    'no-debugger':[2],
    'react/jsx-filename-extension': [1, { extensions: ['.js','.jsx','.ts','tsx'] }],
    'import/no-unresolved':[2, { ignore: ['^@/', 'umi']}],
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies:true,
      },
    ],
    // 'react/jsx-wrap-multilines': 0,
    // 'react/prop-types': 0,
    // 'react/forbid-prop-types': 0,
    // 'react/jsx-one-expression-per-line': 0,
    // 'jsx-a11y/no-noninteractive-element-interactions': 0,
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'jsx-a11y/no-static-element-interactions': 0,
    // 'jsx-a11y/anchor-is-valid': 0,
    // 'linebreak-style': 0,
  }
};



// module.exports = {
//   // parser: 'babel-eslint',
//   extends: ['eslint-config-umi'], // 'airbnb', 'prettier', 'plugin:compat/recommended'
//   // env: {
//   //   browser: true,
//   //   node: true,
//   //   es6: true,
//   //   mocha: true,
//   //   jest: true,
//   //   jasmine: true,
//   // },
//   // globals: {
//   //   APP_TYPE: true,
//   //   page: true,
//   // },
//   // rules: {
//   //   // 'react/jsx-filename-extension': [1, { extensions: ['.js','.jsx','.ts','.tsx'] }],
//   //   // 'import/no-unresolved':0,// [2, { ignore: ['^@/', '^umi/']}],
//   //   // 'react/jsx-wrap-multilines': 0,
//   //   // 'react/prop-types': 0,
//   //   // 'react/forbid-prop-types': 0,
//   //   // 'react/jsx-one-expression-per-line': 0,
//   //   // 'import/no-extraneous-dependencies': [
//   //   //   2,
//   //   //   {
//   //   //     optionalDependencies: true,
//   //   //     devDependencies: ['**/tests/**.js', '/mock/**.js', '**/**.test.js'],
//   //   //   },
//   //   // ],
//   //   // 'jsx-a11y/no-noninteractive-element-interactions': 0,
//   //   // 'jsx-a11y/click-events-have-key-events': 0,
//   //   // 'jsx-a11y/no-static-element-interactions': 0,
//   //   // 'jsx-a11y/anchor-is-valid': 0,
//   //   // 'linebreak-style': 0,
//   // },
//   // settings: {
//   //   polyfills: ['fetch', 'promises', 'url']
//   // },
// };
