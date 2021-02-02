import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Button, Video } from '@tarojs/components';
import { StyleSheet } from 'react-native';

interface State{
  uri:string
}

export default class VideoPage extends Component {

  videoContext

  state:State = {
    uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  }

  render() {
    return(
      <View style={styles.index}>
        <View style={styles.video}>
          <Video
            id = '0'
            src={this.state.uri}
            controls
            autoplay
            poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
            onLoad={()=>{this.videoContext = Taro.createVideoContext('0');console.log(this.videoContext)}}
            initialTime={0}
            loop={false}
            muted={false}/>
          <View style={styles.controller}>
            <Button style={styles.controllerButton} onClick={() => this.videoContext?.play()}>play</Button>
            <Button style={styles.controllerButton} onClick={() => this.videoContext?.pause()}>pause</Button>
            <Button style={styles.controllerButton} onClick={() => this.videoContext?.stop()}>stop</Button>
            <Button style={styles.controllerButton} onClick={() => this.videoContext?.requestFullScreen()}>fullscreen</Button>
            <Button style={styles.controllerButton} onClick={() => this.videoContext?.seek(10)}>seek to 10s</Button>
            <Button style={styles.controllerButton} onClick={() => this.videoContext?.playbackRate(2)}>rate to 2.0x</Button>
            <Button style={styles.controllerButton} onClick={() => this.videoContext?.playbackRate(1)}>rate restore</Button>
            <Button style={styles.controllerButton} onClick={() => this.onChooseVideo()}>choose</Button>
            <Button style={styles.controllerButton} onClick={() => this.saveVideo()}>save</Button>
          </View>
        </View>
      </View>);
  }

  onChooseVideo = () => {
    Taro.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      success: function (res) {
        console.log(res)
        console.log(res.tempFilePaths)
      }
    }).then(res => {
      res.tempFilePaths[0] && this.setState({uri:res.tempFilePaths[0]})
    })
  }

  // 测试保存视频，可以先选择本地视频再进行保存
  saveVideo = () => {
    Taro.saveVideoToPhotosAlbum({
      filePath: this.state.uri,
      success: (res) => {
        console.log('保存完成', res);
      }
    }).catch(err => {
      console.log('失败', err);
    })
  }
}

  const styles = StyleSheet.create({
    index: {
      padding: 20,
      position: "absolute",
      width: '100%',
      height: '100%',
      backgroundColor: '#FFF',
      top: 0,
      left: 0
    },
    title: {
      fontSize: 35,
      marginTop: 10,
      marginBottom: 10,
    },
    video: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    videoPlayer: {
      width: 300,
      height: 200,
      marginTop: 50
    },
    camera: {
      width: '100%',
      height: 500,
    },
    controller: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    controllerButton: {
      marginRight: 15,
      marginBottom: 15,
    },
    closeIcon: {
      position: 'absolute',
      left: 20,
      top: 10
    },
    closeImg: {
      width: 25,
      height: 25,
    },
    closeBtnBg: {
      backgroundColor: '#FFF',
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center"
    },
});
