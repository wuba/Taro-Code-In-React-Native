import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import Taro, {
    showToast,
} from '@tarojs/taro'

const News = () => {
    return (
        <View>
            {/* <Text> Hello news </Text> */}
            <Button
                onPress={() => showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000
                })}
                title="showToast"
            ></Button>
            <Button
                title="showModal"
                onPress={() => {
                    Taro.showModal({
                        title: '提示',
                        content: '这是一个模态弹窗',
                        success: function (res) {
                            if (res.confirm) {
                                console.log('用户点击确定')
                            } else if (res.cancel) {
                                console.log('用户点击取消')
                            }
                        }
                    })
                }}
            ></Button>
            <Button
                title="showLoading"
                onPress={() => {
                    Taro.showLoading({
                        title: '加载中',
                    })
                    setTimeout(function () {
                        Taro.hideLoading()
                    }, 2000)
                }}
            ></Button>
            <Button
                title="showActionSheet"
                onPress={() => {
                    Taro.showActionSheet({
                        itemList: ['A', 'B', 'C'],
                        success: function (res) {
                            console.log(res.tapIndex)
                        },
                        fail: function (res) {
                            console.log(res.errMsg)
                        }
                    }).catch(err => {
                        console.log('出错拉', err);
                    });
                }}
            ></Button>
            <Button
                title="hideToast"
                onPress={() => {
                    Taro.hideToast()
                }}
            ></Button>
            <Button
                title="hideLoading"
                onPress={() => {
                    Taro.hideLoading()
                }}
            ></Button>
        </View>
    )
}

export default News;
