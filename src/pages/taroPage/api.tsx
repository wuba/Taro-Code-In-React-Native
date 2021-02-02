import React, {useState} from "react";
import {
  scanCode,
} from '@tarojs/taro'

import {
  Button,
  View,
  Text
} from '@tarojs/components'

import { navigateTo } from '../../utils/navigate';
import './api.scss'

function component () {
  const [result, setResult] = useState("initialState")

  return (<View>
    <Text className="title"> Taro API</Text>
    <Button onClick={()=>{
      navigateTo({
        url: '/pages/taroPage/storage',
      })
    }}>storage</Button>
    <Button onClick={()=>{
      navigateTo({
        url: '/pages/taroPage/image',
      })
    }}>image</Button>
    <Button onClick={()=>{
      navigateTo({
        url: '/pages/taroPage/video',
      })
    }}>video</Button>
    <Button onClick={()=>{
      navigateTo({
        url: '/pages/taroPage/camera',
      })
    }}>camera</Button>
    <Button onClick={()=>{
      navigateTo({
        url: '/pages/taroPage/audio',
      })
    }}>audio</Button>
     <Button onClick={()=>{
      navigateTo({
        url: '/pages/taroPage/record',
      })
    }}>record</Button>
    <Button onClick={()=>{
      scanCode({
        success: ({result, scanType}) => {
          setResult(result)
          handleBarCodeScanned(scanType, result)
        }
      }).then(console.log).catch(console.log)
    }}>scanCode</Button>
    <Text>scanCode result: {result}</Text>
  </View>)
}

function handleBarCodeScanned(type, data){
  alert(`Bar code with type ${type} and data ${data} has been scanned!`)
}

export default component
