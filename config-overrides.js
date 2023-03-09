const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config.resolve.fallback = {
    assert: require.resolve('assert'),
    buffer: require.resolve('buffer'),
    child_process: false,
    constants: require.resolve('constants-browserify'),
    crypto: require.resolve('crypto-browserify'),
    fs: false,
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
    path: require.resolve('path-browserify'),
    url: require.resolve('url'),
    util: require.resolve('util/'),
    stream: require.resolve('stream-browserify')
  };
  config.resolve.extensions = [...config.resolve.extensions, '.ts', '.js', '.html'];
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ];
  config.module.rules = [...config.module.rules,
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false
      }
    }
  ];

  return config;
};
