import React, { useEffect, useState } from 'react';
import { pxTransform } from '@tarojs/taro';
import { connect } from 'react-redux'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { testText } from '@/utils/constant';
import './index.less'

import { countAdd, countSub } from '../../actions/counterAction'

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
            <Text className='testColor font30'
                style={{
                    // color: 'blue'
                }}
            > Hello  Home Page</Text>
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
            <TouchableOpacity
                    style={{borderWidth:1,width:50,height:50,justifyContent:'center',alignItems: 'center',margin:5}}
                    onPress={()=>{
                        //在进行加减操作时不修改数值对应的state 而是通过dispatch传递action给reducer
                        props.dispatch(countAdd(2))
                    }}>
                    <Text>+</Text>
                </TouchableOpacity>
                <Text style={{margin:5}}>数值：{props.count}</Text>
                <Text style={{margin:5}}>state：{props.des}</Text>
                <TouchableOpacity
                    style={{borderWidth:1,width:50,height:50,justifyContent:'center',alignItems: 'center',margin:5}}
                    onPress={()=>{
                        props.dispatch(countSub(-2))
                    }}>
                    <Text>-</Text>
            </TouchableOpacity>
            <Image
                source={{uri: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg'}}
                style={{ height: 300, width: 300, backgroundColor: '#999' }}
                // resizeMode='contain'
            ></Image>
        </View>
    )
}

export default connect(
    (state:any) => ({
        des:state.counter.des,
        count:state.counter.count,
    })
)(Home);
