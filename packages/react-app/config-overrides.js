module.exports = function override (config, env) {
  console.log('override')
  let loaders = config.resolve
  loaders.fallback = {
      "assert": require.resolve('assert'),
      "child_process": false,
      "constants": require.resolve("constants-browserify"),
      "fs": false,
      "tls": false,
      "net": false,
      "http": require.resolve("stream-http"),
      "https": false,
      "url": require.resolve('url'),
      "util": require.resolve("util/"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "os": false,
      "path": false
  }
  
  return config
}