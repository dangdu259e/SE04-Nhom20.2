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
    constructor(props) {
        super(props);
        this.state={
            dt: ''
        }
    }
    componentDidMount() {
        const data = this.props.navigation.getParam('data');
        this.setState({
            dt: data.id
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.75}}>
                    <CustomHeader/>
                </View>
                <View style={{flex: 10}}>
                    <Text>{this.state.dt}</Text>
                </View>
            </View>
        );
    }
}
