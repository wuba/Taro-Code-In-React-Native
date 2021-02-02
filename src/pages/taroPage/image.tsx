import React, { useState } from "react";
import Taro from '@tarojs/taro'

import {
    Button,
    View,
    Image,
    Text
} from '@tarojs/components'

// import * as ImagePicker from 'expo-image-picker';

export default () => {

    const [image, setImage] = useState('')

    return (
        <View>
            <Button
                type="primary"
                onClick={async () => {
                    // Taro.showModal({
                    //     title: '提示',
                    //     content: '这是一个模态弹窗',
                    //     success: function (res) {
                    //         if (res.confirm) {
                    //             console.log('用户点击确定')
                    //         } else if (res.cancel) {
                    //             console.log('用户点击取消')
                    //         }
                    //     }
                    // })

                    Taro.chooseImage({
                        count: 1,
                        sizeType: ['original', 'compressed'],
                        sourceType: ['camera'],
                        success: (res) => {
                            console.log(res);
                            setImage(res.tempFilePaths[0])
                            Taro.saveImageToPhotosAlbum({
                                filePath: res.tempFilePaths[0]
                            }).catch((err) => {
                                console.log('保存图片失败', err);
                            });
                            setTimeout(() => {

                                Taro.compressImage({
                                    src: res.tempFilePaths[0],
                                    quality: 10,
                                    success: (cmpRes) => {
                                        console.log('试试', cmpRes);
                                        // setImage(res.tempFilePaths[0])
                                        setImage(cmpRes.tempFilePath)
                                        
                                    },
                                    fail: () => {
    
                                    },
                                    complete: () => {
    
                                    }
                                })
                            }, 3000);
                        }
                    })
                }}>chooseImage</Button>
            {
                !!image &&
                <Image
                    src={image}
                    style={{ height: 300, width: 300 }}
                ></Image>
            }
            <View onClick={() => {
                Taro.previewImage({
                    current: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg',
                    urls: [
                        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg',
                        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3487425695,1136323395&fm=26&gp=0.jpg',
                        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3021078330,3633431892&fm=26&gp=0.jpg',
                    ],
                    success: () => {
                        console.log('success');
                    },
                    fail: () => {
                        console.log('fail');
                    },
                    complete: () => {
                        console.log('complete');
                    }
                })
            }}>
                <Image
                    style={{ height: 200, width: 200 }}
                    src={`https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg`}
                ></Image>
            </View>
        </View>
    )
}
