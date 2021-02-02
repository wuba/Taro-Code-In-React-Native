//import { showToast } from '@tarojs/taro-rn/dist/api/interface/toast'
import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { getCurrentInstance, createInnerAudioContext } from '@tarojs/taro'
import './audio.scss'



const innerAudioContext = createInnerAudioContext()

innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})


function handleAudioPause () {
  console.log('handleAudioPause')
  innerAudioContext.pause()
}

function handleAudioStop () {
  console.log('handleAudioStop')
  innerAudioContext.stop()
}

function handleAudioSeek () {
  console.log('handleAudioSeek')
  innerAudioContext.seek(100)
}

function handleAudioDestory () {
  console.log('handleAudioDestory')
  innerAudioContext.destroy()
}


export default class Audio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 'default'
        }
    }

    componentDidMount () {
      // console.log(getCurrentInstance().router.params)
    }

    handleAudioStart1() {
        console.log('handleAudioStart1')
        innerAudioContext.autoplay = true
        innerAudioContext.startTime = 100
        innerAudioContext.obeyMuteSwitch = false
        innerAudioContext.loop = true
        innerAudioContext.volume = 0.9
        innerAudioContext.src = 'http://other.player.rh05.sycdn.kuwo.cn/ac5dc70a525b569e0b3a9002901beb57/5f991438/resource/n3/60/85/1217187893.mp3'
        innerAudioContext.onTimeUpdate((res) => {
            console.log(res)
            this.setState({
                duration: innerAudioContext.duration,
                currentTime: innerAudioContext.currentTime,
                paused: innerAudioContext.paused,
                buffered: innerAudioContext.buffered
            })
        })
    }

    handleAudioStart() {
        console.log('handleAudioStart')
        innerAudioContext.obeyMuteSwitch = false
        innerAudioContext.loop = true
        innerAudioContext.volume = 0.3
        innerAudioContext.src = 'https://www.runoob.com/try/demo_source/horse.mp3'
        innerAudioContext.onTimeUpdate((res) => {
            console.log(res)
            this.setState({
                duration: innerAudioContext.duration,
                currentTime: innerAudioContext.currentTime,
                paused: innerAudioContext.paused,
                buffered: innerAudioContext.buffered
            })
        })
        innerAudioContext.play()
    }


    render() {
        return (<View>
            {this.state.tab === 'default' &&
            <View>
              <Text className='audio-api-title'>音频</Text>
              <View style={{flexDirection: 'column'}}>
                <Button type='primary' style={{ marginTop: 10 }} onClick={this.handleAudioStart.bind(this)} title='播放' color='#19AD1A'>播放</Button>
                <Button type='primary' style={{ marginTop: 10 }} onClick={handleAudioPause} title='暂停' color='#19AD1A'>暂停</Button>
                <Button type='primary' style={{ marginTop: 10 }}  onClick={handleAudioStop} title='停止' color='#19AD1A'>停止</Button>
                <Button type='primary' style={{ marginTop: 10 }} onClick={handleAudioSeek} title='跳转100' color='#19AD1A'>跳转</Button>
                <Button type='warn' style={{ marginTop: 10 }} onClick={handleAudioDestory} title='销毁' color='#19AD1A'>销毁</Button>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text> 长度：{this.state.duration || ''}</Text>
                <Text> 当前：{this.state.currentTime || ''}</Text>
                <Text> 暂停：{this.state.paused + ''} </Text>
                <Text> 缓存：{this.state.buffered || ''}</Text>
              </View>
            </View>
            }
          </View>
        )
    }

}
