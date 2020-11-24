import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Dimensions
} from 'react-native';
import {COLOR_DARK_RED, COLOR_GRAY, COLOR_LIGHT_RED} from './myColor'

import { YellowBox, LogBox } from 'react-native';

// YellowBox.ignoreWarnings([
//     'Animated: `useNativeDriver` was not specified.',
// ]);
LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);


var {height, width} = Dimensions.get('window')
export default class Splash extends Component{
    static navigatiOptions= {
        header: null,
    }
    state= {
        logoOpacity: new Animated.Value(0),
        titleMargintop: new Animated.Value(height/4),
    }

    //    hàm này gọi ngay sau hàm khởi tạo
    async componentDidMount() {
    // add amimation vào đây

        //cho sequence cho phép các hiệu ứng nối tiếp nhau
        //tức là cái nọ nối tiếp cái kia
        Animated.sequence([
            Animated.timing(this.state.logoOpacity,
                {toValue:0.9, duration: 1500}),
            // cho gía trị logoOpacity chạy từ 0-1, trong khoảng thời gian là 2s
            Animated.timing(this.state.titleMargintop,{toValue:1, duration: 1000})
        ]).start(()=>{
            this.props.navigation.navigate("Login")
        })
    }

    render() {
        return <View style={styles.container}>
            <Animated.Image source={require('../images/logocat.png')}  // phần tử thêm animated thì có thể animation được
                style={{...styles.logo,opacity: this.state.logoOpacity}}>

            </Animated.Image>
            <Animated.Text style={{...styles.title,marginTop: this.state.titleMargintop}}>
                WELCOME
            </Animated.Text>
        </View>
    }

}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLOR_DARK_RED
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        // color: 'green',
        // backgroundColor: 'blue'
    },
    title: {
        color: '#79CDCD',
        marginTop: 10,
        textAlign: 'center',
        width: 400,
        fontSize: 40,

    }
})
