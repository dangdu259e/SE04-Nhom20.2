/**
 *
 *  THIS FILE IS FOR CHECK THE ONPRESS() IF IT WORKS
 * @format
 * @flow strict-local
 */
import React from 'react'
import {View, Text} from 'react-native';
import CustomHeader from "./CustomHeader";

export default class TFile extends React.Component{
    static navigationOptions= {
        headerShown: false,
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.75}}>
                    <CustomHeader/>
                </View>
                <View style={{flex: 10}}>
                    <Text>Hello</Text>
                </View>
            </View>
        );
    }
}
