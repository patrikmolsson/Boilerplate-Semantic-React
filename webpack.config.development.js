const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    // Requirement from webpack-dev-server. Gives us lots of stuff for free.
    'webpack-hot-middleware/client',

    // Starting point of the app. Bundler starts its process here
    './app/index.js',
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [{
      test: /\.js$/,
      include: path.join(__dirname, 'app'),
      use: ['react-hot-loader', 'babel-loader'],
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
    {
      test: /\.(png|jpg|)$/,
      use: ['url-loader?limit=10000'],
    }],
  },

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

