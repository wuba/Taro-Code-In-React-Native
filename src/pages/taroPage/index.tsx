import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components';
import { Events, Current, pxTransform } from '@tarojs/taro'
import { testText } from '@/utils/constant'
import './index.scss'

const events = new Events()

let tabBarBadge = 1;

export default class Index extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount () {
    // const router = Current.router
    // console.log(router, 2344)
  }

  onHandleEvent (e) {
    console.log(111, e)
  }

  handleGlobalEvent () {
    // alert('globalEvent')
  }

  onPageScroll ({ scrollTop }) {
    // console.log('taroPage', scrollTop)
  }


  onPullDownRefresh () {
    // console.log(22222);
  }

  componentWillUnmount () {
    // events.off('clickJump', (e) => this.onHandleEvent(e))
    // Taro.eventCenter.off('globalEvent', () => this.handleGlobalEvent())

  }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    return (
      <View className='index test' style={{ flex: 1, height: '100%', flexDirection: 'column' }}>
        {/*测试环境配置*/}
        <Text className="page-text">全局常量：<Text className="page-text color-red">{__TEST__}</Text> </Text>
        {/* <Text className="page-text">别名<Text className="page-text color-red">{testText}</Text></Text> */}
        {/* <View style={{ height: 20, width: 200, backgroundColor: 'red' }}></View> */}
        <Text style={{ fontSize: 30 / (1.81 / 2) }}>文字大小: 30 / (1.81 / 2)</Text>
        <Button 
          type="default" 
          className="gap-large" 
          onClick={() => {
            this.props.navigation.push('app',{test:1})
        }}>
          跳转到原生rn页
          </Button>
        <Button 
          type="default" 
          className="gap-large" 
          onClick={() => {
            this.props.navigation.push('PagesTaroPageApi',{test:1})
        }}>
          跳转到TaroAPI页
        </Button>
        <Button 
          type="default" 
          className="gap-large" 
          onClick={() => {
            this.props.navigation.navigate('taroComponent',{test:1})
        }}>
          跳转到Taro页组件
           </Button>
      </View >
    )
  }
}
