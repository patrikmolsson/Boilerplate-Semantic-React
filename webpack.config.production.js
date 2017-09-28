const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'app'),
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(css|scss)$/,
        include: path.join(__dirname, 'app'),
        use: [
          'style-loader?sourceMap',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap',
        ],
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
    }),
  ],
};
