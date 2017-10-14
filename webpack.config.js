const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = [
  'babel-polyfill',
  './app/index.js',
];

if (!PRODUCTION) {
  entry.splice(1, 0, 'webpack-hot-middleware/client');
}

module.exports = {
  entry,

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  devtool: PRODUCTION ? 'eval-source-map' : 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        use: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|)$/,
        use: ['url-loader?limit=10000'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      pkg,
      template: 'index.html',
      hash: PRODUCTION,
    }),
  ],

  resolve: {
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
    extensions: ['.js', '.json', '.scss', '.css'],
    alias: {
      notif: path.join(__dirname, '/node_modules/react-notifications/lib/styles.css'),
    },
  },

  devServer: {
    inline: true,
  },
};

