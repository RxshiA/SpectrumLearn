const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: ['module:@react-native/babel-preset', '@babel/preset-typescript'],
});