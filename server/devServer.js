import webpack from 'webpack';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';

const compiler = webpack(config);
const app = express();

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
});

app.use(webpackHotMiddleware(compiler));
app.use(devMiddleware);


app.get('*', (req, res) => {
  // Here is it! Get the index.html from the fileSystem
  devMiddleware.waitUntilValid(() => {
    const htmlBuffer = devMiddleware.fileSystem.readFileSync(`${config.output.path}/index.html`);

    res.send(htmlBuffer.toString());
  });
});

console.info('Running on localhost:3000');
app.listen(3000, 'localhost');

