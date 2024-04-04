const webpack = require('webpack');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const smp = new SpeedMeasurePlugin();

const fs = require('fs'); // Adjusted to CommonJS

// for local sdk linking
let path = '';
let ModuleScopePlugin = '';

// to read and modify webpack config based on local sdk linking or production
let localSDKLinking = false;
const envpath = `./.localsdk.env`;

if (fs.existsSync(envpath)) {
  const { parse } = require('envfile'); // Adjusted to CommonJS

  const envData = fs.readFileSync(envpath, 'utf8');
  const envObject = parse(envData);

  if (envObject['ENFORCE_WEBPACK_LOCAL'] === 'TRUE') {
    localSDKLinking = true;
  }
}

if (localSDKLinking) {
  path = require('path');
  ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
}

module.exports = {
  webpack: (config, env) => {
    // DEV LOCAL SDK MODE STUFF
    if (localSDKLinking) {
      config.resolve.plugins = config.resolve.plugins.filter((plugin) => !(plugin instanceof ModuleScopePlugin));
      config.resolve.alias = {
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
      };
    }

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
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
    };
    config.resolve.extensions = [...config.resolve.extensions, '.ts', '.js'];

    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    ];
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ];
    config.optimization.minimizer = [
      new TerserPlugin({
        exclude: /node_modules/,
        parallel: true,
        extractComments: true,
      }),
    ];

    return config;
  },
};
