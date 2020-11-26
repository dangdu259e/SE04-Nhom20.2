/**
 * THE VIEW OF A CAT'S DETAILS: NAME, KIND, ...
 *
 * @format
 * @flow strict-local
 */
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import flatListData from './AllOfCatsDatas'
import Slider from './Slider';
import Data from './InfoOfCatDatas'

class Cat extends React.Component{
    render() {
        return (
            <View style={styles.container}>

                <View style={{flex: 1}}>
                    <Text>title</Text>
                </View>

                {/*View of image*/}
                <Slider flatListData={Data}/>

                {/*View of info*/}
                <View style={{flex: 7}}>
                    <View style={styles.viewcost}>
                        <Text style={styles.cost}>GIÁ BÁN:  </Text>
                    </View>

                    {/*view for details: name, kind of cat*/}
                    <View style={styles.textBox}>
                        <Text style={styles.textInBox}>Tên:</Text>
                        <Text style={styles.textInBox}>Giống:</Text>
                        <Text style={styles.textInBox}>Nguồn gốc:</Text>
                        <Text style={styles.textInBox}>Đặc điểm:</Text>
                        <Text style={styles.textInBox}>Hướng dẫn nuôi:</Text>
                    </View>
                </View>
                {/*view for button buy*/}
                <View style={styles.viewofbutton}>
                    <TouchableOpacity style={styles.button}><Text>Buy</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Cat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'column'
    },
    viewcost: {
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10
    },
    cost: {
        fontWeight: 'bold',
    },
    textBox: {
        // flex: 2,
        // borderWidth:2
    },
    textInBox: {
        margin: 20
    },
    viewofbutton: {
        flex: 1,
        alignItems: 'flex-end',
        // backgroundColor: 'green',
        marginRight: 10,
    },
    button: {
        borderWidth: 2,
        // margin: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 10,
        fontWeight: 'bold'
        // backgroundColor: 'yellow'
    }
})
