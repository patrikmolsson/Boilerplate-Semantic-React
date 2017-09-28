const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('../webpack.config.development');

const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
});
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

const app = express();

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.info(' ✅  🌎  Listening at http://localhost:3000/');
});
