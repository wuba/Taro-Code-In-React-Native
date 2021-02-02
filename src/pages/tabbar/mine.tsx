import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import {
    getSystemInfo,
    getSystemInfoSync,
} from '@tarojs/taro'


const Mines = () => {
    const [info, setInfo] = useState({});
    useEffect(() => {
        const res = getSystemInfoSync();
        setInfo(res);
        // getSystemInfo({
        //     success: res => setInfo(info),
        // }).then(res => {
        //     setInfo(res);
        // }).catch(err => {
        //     console.log('出错啦', err);
        // })
    }, []);
    return (
        <View>
            <Text style={styles.titleText}> 系统信息列表： </Text>
            {Object.keys(info).map((key, idx) => {
                return (
                    <Text key={key} style={styles.itemText}>{`${key}: ${info[key]}`}</Text>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        color: 'red',
    },
    itemText: {
        fontSize: 18,
        marginVertical: 3,
    }
})

export default Mines