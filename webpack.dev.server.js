const merge = require('webpack-merge');
const prodServer = require('./webpack.prod.server.js');

module.exports = merge(prodServer, {
  mode: 'development',
});
