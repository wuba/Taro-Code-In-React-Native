import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
} from 'react-native';

export default class App extends Component {

    onPressBtn() {
        this.props.navigation.push('PagesTaroPageApi', { test: 1 })
    }

    render() {
        return (
            <ScrollView>
                <Text> hello react native page</Text>
                {Array(5).fill({title: '123'}).map((item, index) => {
                    return (
                        <Button
                            key={String(index)}
                            onPress={() => this.onPressBtn()}
                            title="跳转至Taro页API页"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    )
                })}
            </ScrollView>
        )
    }
}