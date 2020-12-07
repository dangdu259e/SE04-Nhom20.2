/**
 * THE VIEW OF A CAT'S DETAILS: NAME, KIND, ...
 *
 * @format
 * @flow strict-local
 */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import flatListData from './AllOfCatsDatas'
import Slider from './Slider';
import Data from './InfoOfCatDatas'

class Cat extends React.Component{
    constructor() {
        super();
        this.state = {
            num:0
        }
    }
    // static navigationOptions= {
    //     headerShown: false,
    // }

    click() {
        this.setState({
            num:this.state.num+1
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flex: 1}}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Ionicons name="cart-outline" style={styles.cart}/>
                        <Text style={{color: 'red', fontWeight: 'bold'}}>{this.state.num}</Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity style={styles.button} onPress={ () => {this.click()} }>
                        <Text style={styles.text_butt}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Cat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'ghostwhite'
    },
    cart: {
        fontSize: 45,
        paddingLeft: '80%',
        color: 'orange'
    },
    viewcost: {
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        // backgroundColor: 'red',
        padding: 10
    },
    cost: {
        fontWeight: 'bold',
    },
    textBox: {
        backgroundColor: 'lavender'
    },
    textInBox: {
        margin: 20,
    },
    viewofbutton: {
        flex: 1.25,
        alignItems: 'flex-end',
        marginRight: 10,
        backgroundColor: 'ghostwhite'
    },
    button: {
        borderWidth: 2,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 10,
    },
    text_butt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#009688"
    }
})
