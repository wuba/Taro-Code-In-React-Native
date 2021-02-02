/*
 * @Author: iChengbo
 * @Date: 2021-01-11 11:11:36
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-01-11 11:11:37
 * @FilePath: /taroDemo/tarorn-support-demo/src/pages/taroPage/components/components/head/head.js
 */
import React from 'react'
import { View, Text } from '@tarojs/components'
import './head.scss';
export default class Header extends React.Component {
  static options = {
    addGlobalClass: true
  }

  render () {
    return (
      <View className="page-head">
        <Text className="page-head-title">{this.props.title}</Text>
        <View className="page-head-line" />
        {!!this.props.desc ?
          (<Text className="page-head-desc">{this.props.desc}</Text>)
          : null}
      </View>
    )
  }
}
