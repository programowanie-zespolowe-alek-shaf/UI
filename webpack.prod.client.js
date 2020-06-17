/** For production with client side rendering */
const merge = require('webpack-merge');
const prod = require('./webpack.prod.server.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(prod, {
  entry: {
    main: './src/index/client/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BookStore',
      filename: 'index.html', // where to put the file (we start from build folder)
      template: 'template.html' // link to the template
    }),
  ],
});

