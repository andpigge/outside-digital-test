const path = require('path');

module.exports = {
  plugins: [
    [
      'postcss-mixins',
      {
        mixinsDir: path.join(__dirname, './src/shared/styles/mixins'),
      }
    ],
    'postcss-nested',
  ],
}
