import {View, FlatList, Text, Image, TouchableOpacity, StyleSheet, RefreshControl, Alert} from 'react-native';
import React, {Component} from 'react';
import {url_getall} from '../URL-config'
import CatDetails from './CatDetails'


let mang = []
class Cat extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: [],
            refreshing: false,  // pull refresh
            page: 0,
            id_listofcat: this.props.navigation.getParam('id_login'),
            // cart: [],
            // receivedValue: []
        }
        // global.addProductToCart = this.addProductToCart.bind(this)
    }

    static navigationOptions= {
        headerShown: false,
    }

    // receivedValue = (cart) => {
    //     this.setState({cart})
    // }

    componentDidMount() {
        fetch(url_getall+this.state.page)
            .then((response) => response.json())
            .then((json) => {
                mang = json
                this.setState({
                    data: mang,
                })

            })
            .catch((error) => {
                console.error(error);
            });
    }

    // addProductToCart(product) {
    //     this.setState({
    //         cart: this.state.cart.concat(product)
    //     })
    // }

    // load more
    _onEndReached() {
        fetch(url_getall+(this.state.page+1))
            .then((response) => response.json())
            .then((json) => {
                if (json.length !==0 ){
                    mang = mang.concat(json);
                    this.setState({
                        data: mang,
                        page: this.state.page + 1
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // addThisProductToCart() {
    //     const product = this.props;
    //     global.addProductToCart(product);
    // }

    render() {
        return (
                <View style={{backgroundColor: 'ghostwhite'}} >
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text_header}>
                            Được yêu thích nhất
                        </Text>

                        {/*<TouchableOpacity style={{flexDirection: 'row',}} >*/}
                        {/*    <Ionicons name="cart-outline" style={styles.cart}/>*/}
                        {/*    <Text style={{color: 'red', fontWeight: 'bold'}}>{this.state.cart.length}</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                    <FlatList
                        // load more
                        onEndReached={this._onEndReached.bind(this)}
                        onEndReachedThreshold={0.25}


                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>
                            <View style={styles.container}>
                                {/*<Image style={{padding:100}} source={{uri: item.img}}/>*/}
                                <TouchableOpacity  onPress={() => {this.props.navigation.navigate('CatDetail', {data: item, id_listofcat: this.state.id_listofcat })}}>
                                                                    {/*// receivedValue: this.receivedValue});}}>*/}
                                    <Image style={styles.image} source={{uri: item.img}}/>
                                    <View style={styles.info}>
                                        <View style={styles.left}>
                                            <Image style={styles.imageLeft} source={{uri: item.img}}/>
                                            <Text style={styles.min_text}>{item.name}</Text>
                                        </View>
                                        <View>
                                            {/*onPress={this.addThisProductToCart.bind(this)}>*/}
                                            <TouchableOpacity style={styles.textTouch} onPress={() => {this.props.navigation.navigate('Buy', {data: item, id_listofcat: this.state.id_listofcat});}}>
                                                              {/* onPress={() => {this.props.navigation.navigate('Buy', {data: item});}}>*/}
                                                <Text style={styles.min_text}>Mua</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        borderWidth: 2,   // độ dày của viền
        borderRadius: 10, // độ tròn của viền
        // paddingVertical: khoảng cách chữ so với trục ox
        borderColor: 'black',
        backgroundColor: 'lavender',
        justifyContent: 'space-between',
        margin: 10,
        marginBottom: 0
    },
    text_header: {
        paddingLeft: 20,
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        color: 'lightcoral'
    },
    image: {
        padding: 150,
        justifyContent: 'center',
        // flex: 7,
        borderRadius: 10,
    },
    info: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 30,
    },
    left: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageLeft: {
        padding: 30,
        justifyContent: 'center',
        borderRadius: 10,
    },
    min_text: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#009688"
    },
    textTouch: {
        padding:10,
        borderWidth: 2,
        borderRadius: 10,
    },
    cart: {
        fontSize: 45,
        paddingLeft: '5%',
        color: 'orange'
    },

})

// const AppNavigator = createStackNavigator(
//     {
//         Home: Cat,
//         CatDetails: CatDetails,
//         Buy: TFile,
//         Thanhtoan: thanhtoan
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

export default Cat;
