/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import AntProvider from '@ant-design/react-native/lib/provider';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createPageConfig } from '@tarojs/runtime-rn'
import {navigationRef,isReadyRef} from './src/utils/rootNavigate'

import Home from './src/pages/tabbar/home'
import Mine from './src/pages/tabbar/mine'
import News from './src/pages/tabbar/news'
// Taro 组件展示入口
import PagesTaroPageComponent from './src/pages/taroPage/components/index'

import AppIndex from './src/pages/app/index'

//taro页面需处理导入config  组件命名安装规则，可便于封装跳转路由
import PagesTaroPageIndex from './src/pages/taroPage/index'
import PagesTaroPageConfig from './src/pages/taroPage/index.config'

import PagesTaroPageApi from './src/pages/taroPage/api'
import PagesTaroPageApiConfig from './src/pages/taroPage/api.config'


import PagesTaroPageAudio from './src/pages/taroPage/audio'
import PagesTaroPageCamera from './src/pages/taroPage/camera'
import PagesTaroPageImage from './src/pages/taroPage/image'
import PagesTaroPageRecord from './src/pages/taroPage/record'
import PagesTaroPageVideo from './src/pages/taroPage/video'
import PagesTaroPageStorage from './src/pages/taroPage/storage'

// taro 组件展示页
import PagesTaroView from './src/pages/taroPage/components/pages/view/view'
import PagesTaroScrollView from './src/pages/taroPage/components/pages/scroll-view/scroll-view'
import PagesTaroIcon from './src/pages/taroPage/components/pages/icon/icon'
import PagesTaroProgress from './src/pages/taroPage/components/pages/progress/progress'
import PagesTaroImage from './src/pages/taroPage/components/pages/image/image'
// import PagesTaroAudio from './src/pages/taroPage/components/pages/audio/audio'
import PagesTaroVideo from './src/pages/taroPage/components/pages/video/video'
import PagesTaroSwiper from './src/pages/taroPage/components/pages/swiper/swiper'
import PagesTaroForm from './src/pages/taroPage/components/pages/form/form'
import PagesTaroInput from './src/pages/taroPage/components/pages/input/input'
import PagesTaroCheckbox from './src/pages/taroPage/components/pages/checkbox/index'
import PagesTaroRadio from './src/pages/taroPage/components/pages/radio/radio'
import PagesTaroButton from './src/pages/taroPage/components/pages/button/button'
import PagesTaroText from './src/pages/taroPage/components/pages/text/text'
import PagesTaroLabel from './src/pages/taroPage/components/pages/label/label'
import PagesTaroPicker from './src/pages/taroPage/components/pages/picker/picker'
import PagesTaroPickerView from './src/pages/taroPage/components/pages/picker-view/picker-view'
import PagesTaroRichText from './src/pages/taroPage/components/pages/rich-text/rich-text'
import PagesTaroSlider from './src/pages/taroPage/components/pages/slider/slider'
import PagesTaroSwitch from './src/pages/taroPage/components/pages/switch/switch'
import PagesTaroTextarea from './src/pages/taroPage/components/pages/textarea/textarea'
import PagesTaroCanvas from './src/pages/taroPage/components/pages/canvas/canvas'
import PagesTaroMap from './src/pages/taroPage/components/pages/map/map'
import PagesTaroVirtualList from './src/pages/taroPage/components/pages/virtual-list/virtual-list'
import PagesTaroMovableView from './src/pages/taroPage/components/pages/movable-view/movable-view'
import PagesTaroCamera from './src/pages/taroPage/components/pages/camera/camera'

const TaroPages = {
  PagesTaroView: {
    page: PagesTaroView,
    pagePath: 'pages/taroPage/components/pages/view/view',
  },
  PagesTaroScrollView: {
    page: PagesTaroScrollView,
    pagePath: 'pages/scroll-view/scroll-view',
  },
  PagesTaroIcon: {
    page: PagesTaroIcon,
    pagePath: 'pages/icon/icon',
  },
  PagesTaroProgress: {
    page: PagesTaroProgress,
    pagePath: 'pages/progress/progress',
  },
  PagesTaroImage: {
    page: PagesTaroImage,
    pagePath: 'pages/image/image',
  },
  // PagesTaroAudio: {
  //   page: PagesTaroAudio,
  //   pagePath: 'pages/audio/audio',
  // },
  PagesTaroVideo: {
    page: PagesTaroVideo,
    pagePath: 'pages/video/video',
  },
  PagesTaroSwiper: {
    page: PagesTaroSwiper,
    pagePath: 'pages/swiper/swiper',
  },
  PagesTaroForm: {
    page: PagesTaroForm,
    pagePath: 'pages/form/form',
  },
  PagesTaroInput: {
    page: PagesTaroInput,
    pagePath: 'pages/input/input',
  },
  PagesTaroCheckbox: {
    page: PagesTaroCheckbox,
    pagePath: 'pages/checkbox/index',
  },
  PagesTaroRadio: {
    page: PagesTaroRadio,
    pagePath: 'pages/radio/radio',
  },
  PagesTaroButton: {
    page: PagesTaroButton,
    pagePath: 'pages/button/button',
  },
  PagesTaroText: {
    page: PagesTaroText,
    pagePath: 'pages/text/text',
  },
  PagesTaroLabel: {
    page: PagesTaroLabel,
    pagePath: 'pages/label/label',
  },
  PagesTaroPicker: {
    page: PagesTaroPicker,
    pagePath: 'pages/picker/picker',
  },
  PagesTaroPickerView: {
    page: PagesTaroPickerView,
    pagePath: 'pages/picker-view/picker-view',
  },
  PagesTaroRichText: {
    page: PagesTaroRichText,
    pagePath: 'pages/rich-text/index',
  },
  PagesTaroSlider: {
    page: PagesTaroSlider,
    pagePath: 'pages/slider/slider',
  },
  PagesTaroSwitch: {
    page: PagesTaroSwitch,
    pagePath: 'pages/switch/switch',
  },
  PagesTaroTextarea: {
    page: PagesTaroTextarea,
    pagePath: 'pages/textarea/textarea',
  },
  PagesTaroCanvas: {
    page: PagesTaroCanvas,
    pagePath: 'pages/canvas/canvas',
  },
  PagesTaroMap: {
    page: PagesTaroMap,
    pagePath: 'pages/map/map',
  },
  PagesTaroVirtualList: {
    page: PagesTaroVirtualList,
    pagePath: 'pages/virtual-list/virtual-list',
  },
  PagesTaroMovableView: {
    page: PagesTaroMovableView,
    pagePath: 'pages/movable-view/movable-view',
  },
  PagesTaroCamera: {
    page: PagesTaroCamera,
    pagePath: 'pages/camera/camera',
  },
  PagesTaroPageAudio:{
    page: PagesTaroPageAudio,
    pagePath: '/pages/taroPage/audio',
  },
  PagesTaroPageCamera:{
    page:PagesTaroPageCamera,
    pagePath:'/pages/taroPage/camera'
  },
  PagesTaroPageImage:{
    page:PagesTaroPageImage,
    pagePath:'/pages/taroPage/image'
  },
  PagesTaroPageRecord:{
    page:PagesTaroPageRecord,
    pagePath:'/pages/taroPage/record'
  },
  PagesTaroPageVideo:{
    page:PagesTaroPageVideo,
    pagePath:'/pages/taroPage/video'
  },
  PagesTaroPageStorage:{
    page:PagesTaroPageStorage,
    pagePath:'/pages/taroPage/storage'
  }
}

const Tab = createBottomTabNavigator();
const PageStack = createStackNavigator()

function HomeTabs () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: '首页' }} />
      <Tab.Screen
        name="Mine"
        options={{ tabBarLabel: '我的' }}
        component={Mine} />
      <Tab.Screen name="TaroAPI"
        options={{ tabBarLabel: 'TaroAPI' }}
        component={PagesTaroPageApi} />
      <Tab.Screen
        name="taroComponent"
        options={{ tabBarLabel: 'TaroComponent' }}
        component={PagesTaroPageComponent} />
    </Tab.Navigator>
  )
}

const App: () => Node = () =>{

  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);

  return (
    <AntProvider>
    <NavigationContainer 
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <PageStack.Navigator>
        <PageStack.Screen name="Tab页标题" component={HomeTabs} />
        <PageStack.Screen name="app" component={AppIndex} />
        <PageStack.Screen
          name="PagesTaroPageIndex"
          component={createPageConfig(PagesTaroPageIndex, { pagePath: '/pages/taroPage/index'})} />
          {
            Object.keys(TaroPages).map((key) => {
              return (
                <PageStack.Screen
                  key={key}
                  name={key}
                  component={createPageConfig(TaroPages[key].page, { pagePath: TaroPages[key].pagePath})}
                />
              )
            })
          }
      </PageStack.Navigator>
    </NavigationContainer>
    </AntProvider>
  );
};

export default App;
