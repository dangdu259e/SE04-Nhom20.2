/**
 * THE VIEW OF A CAT'S DETAILS: NAME, KIND, ...
 *
 * @format
 * @flow strict-local
 */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from './Slider';

let a = []
class Cat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            num:0,
            obj: [],
            arr: {}
        }
    }
    // static navigationOptions= {
    //     headerShown: false,
    // }
    componentDidMount() {
        const data = this.props.navigation.getParam('data');
        a = this.state.obj.concat(data)
        this.setState({
            arr: data,
            obj: a
        })
    }

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
                {/*<Slider flatListData={Data}/>*/}
                <Slider flatListData={this.state.obj}/>

                {/*View of info*/}
                <View style={{flex: 7}}>
                    <View style={styles.viewcost}>
                        <Text style={styles.cost}>GIÁ BÁN: {this.state.arr.price} </Text>
                    </View>

                    {/*view for details: name, kind of cat*/}
                    <View style={styles.textBox}>
                        <Text style={styles.textInBox}>Tên: {this.state.arr.name}</Text>
                        <Text style={styles.textInBox}>Giống: {this.state.arr.gender}</Text>
                        <Text style={styles.textInBox}>Nguồn gốc: {this.state.arr.origin}</Text>
                        <Text style={styles.textInBox}>Đặc điểm: {this.state.arr.features}</Text>
                        <Text style={styles.textInBox}>Hướng dẫn nuôi: {this.state.arr.guide}</Text>
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
