import React, { useEffect, useState } from 'react';
import { pxTransform } from '@tarojs/taro';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';
import { testText } from '@/utils/constant';
import './index.scss'

const Home = props => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <View style={{ alignItems: 'center'}}>
            {/* <Text className='testColor font30'
                style={{
                    // color: 'blue'
                }}
            > Hello  Home Page</Text> */}
            {/* <Text style={{ fontSize: 30 }}>{testText}</Text> */}
            <TouchableHighlight
                style={{ height: 60, width: '100%', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center',borderRadius:4 ,marginVertical: 40}}
                onPress={() => {
                    props.navigation.push('PagesTaroPageApi')
                }}
                underlayColor={'white'}
            >
                <Text style={{ fontSize: 24, color: '#666666' }}>跳转到Taro API页</Text>
            </TouchableHighlight>
            {/* <Text className='font30'>文字大小 : 60px</Text> */}
            {/* <Text style={{fontSize: pxTransform(60)}}>计数：{count}</Text> */}
            <Image
                source={{uri: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg'}}
                style={{ height: 300, width: 300, backgroundColor: '#999' }}
                // resizeMode='contain'
            ></Image>
        </View>
    )
}

export default Home;
