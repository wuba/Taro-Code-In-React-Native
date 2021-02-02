/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { mergeConfig } = require("metro-config");
const Supporter = require('@tarojs/rn-supporter')

const supporter = new Supporter()
const taroMetroConfig = supporter.getMetroConfig()

const busConfig = {
  resetCache:true,
}
module.exports = mergeConfig(busConfig,taroMetroConfig)
