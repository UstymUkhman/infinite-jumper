const path = require('path');
const webpack = require('webpack');

const build = require('yargs').argv.env === 'build';
process.env.NODE_ENV = build ? 'production' : 'development';
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  devtool: build ? false : 'inline-source-map',
  entry: path.resolve('./src/index.ts'),
  mode: process.env.NODE_ENV,
  name: 'Infinite Jumper',

  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },

  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.ts', '.tsx', '.js', '.json'],

    alias: {
      '@Game': path.resolve(__dirname, './src/game')
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
      PRODUCTION: JSON.stringify(build)
    }),

    new InjectManifest({
      maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
      swDest: path.resolve('./public/worker.js'),
      swSrc: path.resolve('./src/worker.ts')
    })
  ],

  output: {
    library: build ? 'infinite-jumper' : '',
    libraryTarget: build ? 'umd' : 'var',
    chunkFilename: 'scripts/[name].js',

    path: path.resolve('./public'),
    publicPath: build ? './' : '/',
    libraryExport: 'default',

    umdNamedDefine: true,
    filename: 'index.js',
    globalObject: 'this'
  },

  optimization: {
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    removeEmptyChunks: true,
    namedModules: true,
    namedChunks: true,
    minimize: build
  },

  devServer: {
    contentBase: path.join(__dirname, './public'),
    headers: { 'Content-Encoding': 'none' },
    host: process.env.HOST || 'localhost',
    port: +process.env.PORT || 8080,

    watchOptions: { poll: false },
    clientLogLevel: 'warning',
    watchContentBase: true,
    writeToDisk: false,
    publicPath: '/',

    compress: true,
    overlay: true,
    quiet: false,
    open: false,
    hot: true
  },

  node: {
    child_process: 'empty',
    setImmediate: false,
    dgram: 'empty',
    net: 'empty',
    tls: 'empty',
    fs: 'empty'
  }
};
