import React from "react";

import Taro, {
  setStorage,
  getStorage,
  getStorageInfo,
  removeStorage,
  clearStorage,
  useDidShow
} from '@tarojs/taro'

import {
  Button,
  View
} from '@tarojs/components'
import './index.scss'

export default () => {

  useDidShow(() => {
    console.log('componentDidShow', 1111)
    // alert('componentDidShow')
  })

  return (
    <View>
      <Button className="btn" onClick={async () => {
        setStorage({
          key: 'aaa',
          data: new Date()
        })
      }}>setStorage</Button>
      <Button className="btn" onClick={async () => {
        const a = await getStorage({
          key: 'aaa'
        })
        console.log(a)
      }}>getStorage</Button>
      <Button className="btn" onClick={async () => {
        const a = await getStorageInfo()
        console.log(a)
      }}>getStorageInfo</Button>
      <Button className="btn" onClick={() => {
        removeStorage({
          key: 'aaa'
        })
      }}>removeStorage</Button>
      <Button className="btn" onClick={() => {
        clearStorage()
      }}>clearStorage</Button>
    </View>
  )
}
