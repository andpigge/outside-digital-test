const path = require('path');

// const postcssMixins = require('postcss-mixins');
// const postcssNested = require('postcss-nested');

module.exports = {
  plugins: [
    [
      'postcss-mixins',
      {
        mixinsDir: path.join(__dirname, 'src/shared/styles/mixins'),
      }
    ],
    'postcss-nested',
  ],
}
