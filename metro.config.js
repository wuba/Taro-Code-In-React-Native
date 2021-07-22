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
// const taroTransformer = supporter.getTransformer()
// const taroResolver = supporter.getResolver()

// const transformer =  Object.assign({},taroTransformer,{
//   getTransformOptions: async () => ({
//     transform: {
//       experimentalImportSupport: false,
//       inlineRequires: true,
//     },
//   }),
// })

const busConfig = {
  resetCache:true,
}

module.exports = mergeConfig(taroMetroConfig,busConfig)

