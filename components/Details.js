import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import {COLOR_DARK_RED, COLOR_GRAY, COLOR_LIGHT_RED} from './myColor'

export default class Details extends Component{
    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}
