const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  name: 'innovecs',
  mode: 'development',
  devtool: 'inline-source-map',

  entry: {
    app: './src/index.ts',
    vendors: ['phaser']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            enforce: 'pre'
          }
        }, {
          loader: 'url-loader',
          options: {
            name: 'assets/[name].[ext]',
            limit: 8192
          }
        }]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],

    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@Game': path.resolve(__dirname, './src/game')
    }
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    writeToDisk: true,
    open: true
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html' },
        { from: 'src/index.css' }
      ]
    }),

    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors.game',
          chunks: 'all'
        }
      }
    }
  }
};
