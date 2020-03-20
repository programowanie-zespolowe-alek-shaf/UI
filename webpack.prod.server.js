const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // entry will split our main bundle into chunks
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React application',
      filename: 'index.html',  // where to put the file (we start from build folder)
      template: 'template.html' // link to the template
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name][contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            /// css-loader/locals?modules&localIndentName=[name]__[local]
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
