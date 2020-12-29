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
import {createStackNavigator} from 'react-navigation-stack';
import TFile from './TFile';
import {createAppContainer} from 'react-navigation';

// import global from  './global'

let a = []
class CatDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            num:0,
            obj: [],
            arr: {},
            id_catDetails: this.props.navigation.getParam('id_listofcat')

        }
    }
    static navigationOptions= {
        headerShown: false,
    }
    componentDidMount() {
        const data = this.props.navigation.getParam('data');
        a = this.state.obj.concat(data)
        this.setState({
            arr: data,
            obj: a
        })
    }

    // addProductToCart(product) {
    //     this.setState({
    //         cart: this.state.cart.concat(product)
    //     })
    // }
    //
    // addThisProductToCart() {
    //     const product = this.props;
    //     global.addProductToCart(product);
    // }
    //
    // click() {
    //     this.setState({
    //         num:this.state.num+1
    //     })
    // }

    render() {
        // const receivedValue = this.props.navigation.getParam('receivedValue', () => {});
        return (
            <View style={styles.container}>

                <View style={{flex: 1, flexDirection: 'row', paddingTop: '2%'}}>
                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => { this.props.navigation.goBack()}}>
                        <Ionicons name='arrow-undo' style={styles.back}/>
                        {/*<Text style={styles.back}>Back</Text>*/}
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={{flexDirection: 'row'}}>*/}
                    {/*    <Ionicons name="cart-outline" style={styles.cart}/>*/}
                    {/*    <Text style={{color: 'red', fontWeight: 'bold'}}>{this.state.cart.length}</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>

                {/*View of image*/}
                {/*<Slider flatListData={Data}/>*/}
                <Slider flatListData={this.state.obj}/>

                {/*View of info*/}
                <View style={{flex: 7}}>
                    <View style={styles.viewcost}>
                        <Text style={styles.cost}>GIÁ BÁN: {this.state.arr.price} </Text>
                        <Text style={styles.cost}>id: {this.state.arr.id} </Text>
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
                    {/*onPress={this.addThisProductToCart.bind(this)}>*/}
                    <TouchableOpacity style={styles.button}
                                      onPress={() => {this.props.navigation.navigate('Buy', {data: this.state.arr, id_catDetail: this.state.id_catDetails})}}>
                        <Text style={styles.text_butt} >Buy now {this.state.id_catDetails}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default CatDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'ghostwhite'
    },
    cart: {
        fontSize: 45,
        paddingLeft: '70%',
        color: 'orange'
    },
    back: {
        fontSize: 45,
        paddingLeft: '2%',
        color: 'purple',
        // padding: 10,
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
    },

})

// const AppNavigator = createStackNavigator(
//     {
//         Home: CatDetails,
//         Buy: TFile
//     },
//     {
//         initialRouteName: "Home"
//     }
// );
//
// const AppContainer = createAppContainer(AppNavigator);
//
// export default class App extends React.Component {
//     render() {
//         return <AppContainer />;
//     }
// }
