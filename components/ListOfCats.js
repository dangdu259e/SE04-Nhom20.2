
import {View, FlatList, Text, Image, TouchableOpacity, StyleSheet, RefreshControl, Alert} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CatDetails from './CatDetails'
import TFile from './TFile';

let mang = []
class Cat extends Component {
    constructor() {
        super();
        this.state={
            data: [],
            refreshing: false,  // pull refresh
            trang: 0,
        }
    }

    static navigationOptions= {
        headerShown: false,
    }

    // load more
    _onEndReached() {
        fetch('http://192.168.1.102:5000/all-cat?trang='+(this.state.trang+1))
            .then((response) => response.json())
            .then((json) => {
                if (json.length !==0 ){
                    mang = mang.concat(json);
                    this.setState({
                        data: mang,
                        trang: this.state.trang + 1
                    })
                }
                // else {
                //     Alert.alert(
                //         "THONG BAO",
                //         "DATA OVER",
                //         [
                //             { text: "OK", onPress: () => console.log("OK Pressed") }
                //         ],
                //     );
                // }

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{backgroundColor: 'ghostwhite'}} >
                <View>
                    <Text style={styles.text_header}>
                        The most loved cats
                    </Text>
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
                            <TouchableOpacity  onPress={() => {this.props.navigation.navigate('CatDetails', {data: item});}}>
                                <Image style={styles.image} source={{uri: item.img}}/>
                                <View style={styles.info}>
                                    <View style={styles.left}>
                                        <Image style={styles.imageLeft} source={{uri: item.img}}/>
                                        <Text style={styles.min_text}>{item.id}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.textTouch}
                                                          onPress={() => {this.props.navigation.navigate('Buy', {data: item});}}>
                                            <Text style={styles.min_text}>Buy</Text>
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

    componentDidMount() {
        // 192.168.1.105
        fetch('http://192.168.1.102:5000/all-cat?trang='+this.state.trang)
            .then((response) => response.json())
            .then((json) => {
                mang = json
                this.setState({
                    data: mang
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 7,
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
    }

})

const AppNavigator = createStackNavigator(
    {
        Home: Cat,
        CatDetails: CatDetails,
        Buy: TFile
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
