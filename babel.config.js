module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    Plugin: [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src'
        }
      }
    ]
  }
}
