const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: './src/index/client/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BookStore',
      filename: 'index.html', // where to put the file (we start from build folder)
      template: 'template.html' // link to the template
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[name]__[local]',
              }
            }
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  }
});
