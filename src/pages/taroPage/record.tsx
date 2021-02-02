import React, { Component } from 'react'
import Taro, { getRecorderManager, createInnerAudioContext } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

declare type State = {
    result: string,
    tempFilePath: string
}

export default class Record extends Component {
    state: State = {
        result: '',
        tempFilePath: undefined
    }

    static recordInstance = getRecorderManager()
    audioContext:any


    onStop(res) {
        //console.log("result: ", res)
        this.setState({result: JSON.stringify(res)})
        this.setState({tempFilePath: res.tempFilePath})
    }

    handleRecordStart () {
        console.log('handleRecordStart')
        const self = this
        const recordInstance = Record.recordInstance
        recordInstance.onError((res) => console.log(res))
        recordInstance.onStart((res) => console.log(res))
        recordInstance.onPause((res) => console.log(res))
        recordInstance.onResume((res) => console.log(res))
        recordInstance.onStop((res) => {
            console.log("", res)
            self.onStop(res)
        })
        recordInstance.start()
    }
    
    handleRecordPause () {
        Record.recordInstance.pause()
    }
    
    handleRecordResume () {
        Record.recordInstance.resume()
    }
    
    handleRecordStop () {
        Record.recordInstance.stop()
    }

    handlePlayBack() {
        const url = '/pages/api/audio?path=' + this.tempFilePath
        console.log("url: ", url)
        Taro.navigateTo({url: url})
    }
   
    handleAudioStart() {
        console.log('handleAudioStart')
        if (!this.audioContext) {
            this.audioContext = createInnerAudioContext()
        }
        const innerAudioContext = this.audioContext
        innerAudioContext.onPlay(() => {
            console.log('开始播放')
        })
        innerAudioContext.onError((res) => {
            console.log(res.errMsg)
            console.log(res.errCode)
        })
        innerAudioContext.obeyMuteSwitch = false
        innerAudioContext.loop = true
        innerAudioContext.volume = 0.8
        innerAudioContext.src = this.state.tempFilePath
        innerAudioContext.onTimeUpdate((res) => {
            console.log(res)
        })
        innerAudioContext.play()
    }

    handleAudioPause() {
        console.log('handleAudioPause')
        const innerAudioContext = this.audioContext
        innerAudioContext.pause()
    }

    handleAudioStop() {
        console.log('handleAudioStop')
        const innerAudioContext = this.audioContext
        innerAudioContext.stop()
    }
    
    render() {
        return (<View>
            <Text className='record-api-title' style={{ marginTop: 10 }}>录音</Text>
            <View style={{flexDirection: 'column'}}>
                <Button type='primary' style={{ marginTop: 10 }} onClick={this.handleRecordStart.bind(this)} title='开始' color='#19AD1A'>开始</Button>
                <Button type='primary' style={{ marginTop: 10 }} onClick={this.handleRecordPause.bind(this)} title='暂停' color='#19AD1A'>暂停</Button>
                <Button type='primary' style={{ marginTop: 10 }} onClick={this.handleRecordResume.bind(this)} title='继续' color='#19AD1A'>继续</Button>
                <Button type='warn' style={{ marginTop: 10 }} onClick={this.handleRecordStop.bind(this)} title='停止' color='#19AD1A'>停止</Button>
            </View>
            {
            this.state.tempFilePath &&
            <View style={{flexDirection: 'column'}}>
                <Text className='record-api-title' style={{marginTop: 20}}>录音结果</Text>
                <Text className='record-api-title' style={{marginTop: 10}}>{this.state.result || ""}</Text>
                <Button type='primary' style={{ marginTop: 10 }} onClick={this.handleAudioStart.bind(this)} title='播放' color='#19AD1A'>播放</Button>
                <Button type='primary' style={{ marginTop: 10 }} onClick={this.handleAudioPause.bind(this)} title='暂停' color='#19AD1A'>暂停</Button>
                <Button type='primary' style={{ marginTop: 10 }}  onClick={this.handleAudioStop.bind(this)} title='停止' color='#19AD1A'>停止</Button>
            </View>  
            } 
        </View>)
    }
}