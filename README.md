
# Taro-Code-In-React-Native

Taro3 与 原生 React Native 应用结合的 Demo

## 基本介绍

为了支持在 React Native 项目中引入 Taro3 代码，Taro提供了一种两者结合方案.

**基本思路: 支持导出 Taro 默认的 Metro 配置，提供支持Taro写法的运行时方法，包含编译配置，页面配置函数等相关内容，实现在 React Native项目中用 Taro3 的代码。**

新增包`@tarojs/taro-rn-supporter`, 该包的主要功能：

0. 支持样式处理方案.
1. 支持`Taro`编译配置.
2. 支持`Taro`运行时配置.
2. 支持`Taro`跨平台开发方案.
3. 导出供`metro.config.js`使用的类.


## 与`@tarojs/rn-runner`的区别

0. 去除 bundler server
2. 去除入口文件处理
2. 不处理导航
3. 需自行集成到原RN项目中

## 业务需要处理

0. 导航相关，自行处理路由
1. 对 Taro 页面需要使用 `@tarojs/runtime-rn` 提供的 `createPageConfig` 进行包装.


## 快速开始

1. 安装 Taro 对应相关包，参考 Demo 的 package.json 
2. Metro 配置，可参考 Demo 与自己业务的合并
3. Babel配置 , 需按照 Taro 写法，依赖 `babel-preset-taro`
4. 增加 Taro 项目的 `config` 编译配置，与 Taro 项目写法一致
5. 配置路由，支持配置，页面函数等需要`createPageConfig`方法包装，参考 Demo


### 注意事项：

- 导航相关不再处理，因此路由，导航栏, Tabbar相关API不可用
- 页面需要配置，页面函数，比如onPageScroll等，需要用`@tarojs/runtime-rn`里的方法    `createPageConfig`包装，参考如下：

```
import { createPageConfig } from '@tarojs/runtime-rn'
import PagesTaroPageApi from './src/pages/taroPage/api'
import PagesTaroPageApiConfig from './src/pages/taroPage/api.config'

<Stack.Screen
    name="PagesTaroPageApi"
    component={createPageConfig(PagesTaroPageApi, { pagePath: '/pages/taroPage/api',...PagesTaroPageApiConfig})} />
```

- 原生依赖安装，因为 部分Taro 组件和 API 依赖原生，如果引用了需要原生组件或 API 的部分,需集成 `react-native-unimodules`并安装依赖，目前依赖原生部分组件和API是按需加载的，可根据需要来安装，当前 Demo 已经包含了所有 Taro 组件和 API 的依赖，推荐安装 Demo 中的所有依赖

集成`react-native-unimodules`，请参考 [react-native-unimodules](https://github.com/unimodules/react-native-unimodules) Readme。

- pxTransform 该方法，目前默认是 designWidth 是750，如果要设置其他的尺寸，需将全局配置挂载到global中

```
global.__taroAppConfig.appConfig = {
   designWidth: 750,
   deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  }, 
}
```

- 目前 Taro的Picker组件是封装的ant-design，因此，如果使用 Picker，需要在根节点注入and-design 的 Provider

```
    return <AntProvider>
      <NavigationContainer>
      .....
      </NavigationContainer>
    </AntProvider>
```

- 如果React Native应用使用的导航是`react-native-navigation`, 那么页面组件`compoentDidShow/Hide`, `Current`对象等将不可用
