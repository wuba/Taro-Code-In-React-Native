import Taro from '@tarojs/taro-rn';
import React, { Component } from "react";
import { View, Button, Camera } from '@tarojs/components';
import * as Permissions from 'expo-permissions';
import { Dimensions, StyleSheet } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";

export default class CameraPage extends Component {
  cameraContext

  render() {
    let { width, height } = Dimensions.get("window");
    return(
      <View style={[styles.container, { width: width, height: height }]}>
        <Camera onInitDone={()=>{this.cameraContext = Taro.createCameraContext();console.log('this.cameraContext');}}
          style={{ width: width, height: width / 9 * 16 }} ratio="16:9" devicePosition="back"
        />
        <View style={styles.controller}>
          <Button style={styles.button} onClick={() => this.cameraContext?.startRecord()}>start REC</Button>
          <Button style={styles.button} onClick={() => this.cameraContext?.stopRecord({
            success: (result) => {
              const { tempVideoPath } = result;
              Permissions.askAsync(Permissions.CAMERA_ROLL).then(() => {
                CameraRoll.save(tempVideoPath, { type: 'video' }).then(path => alert(`saveTo:${path}`)).catch(e => alert(`error:${e}`));
              });
            }
          })}
          >stop REC</Button>
          <Button style={styles.button} onClick={() => this.cameraContext?.takePhoto({
            quality: 'high', success: (result) => {
              const { tempImagePath } = result;
              Permissions.askAsync(Permissions.CAMERA_ROLL).then(() => {
                CameraRoll.save(tempImagePath, { type: 'photo' }).then(path => alert(`saveTo:${path}`)).catch(e => alert(`error:${e}`));
              });
            }
          })}
          >take photo</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FFF'
  },
  component: {
    flex: 1,
  },
  controller: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  button: {
    marginRight: 15,
    marginBottom: 10,
    fontSize: 15
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
