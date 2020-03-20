/** For production with client side rendering */
const merge = require('webpack-merge');
const prod = require('./webpack.prod.server.js');
module.exports = merge(prod, {
  entry: {
    main: './src/index/client/index.js',
  },
});

