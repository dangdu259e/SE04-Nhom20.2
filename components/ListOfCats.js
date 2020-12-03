
import {View, FlatList, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CatDetails from './CatDetails'
import flatListData from './AllOfCatsDatas'
import TFile from './TFile';

class Cat extends Component {
    static navigationOptions= {
        headerShown: false,
    }
    render() {
        return (
            <View style={{backgroundColor: 'red'}} >
                <FlatList
                    data={flatListData}
                    renderItem={({item}) =>
                        <View style={styles.container}>
                            {/*<Image style={{padding:100}} source={{uri: item.img}}/>*/}
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('CatDetails')}>
                                <Image style={styles.image} source={{uri: item.img}}/>
                                <View style={styles.info}>
                                    <View style={styles.left}>
                                        <Image style={styles.imageLeft} source={{uri: item.img}}/>
                                        <Text style={styles.min_text}>{item.key}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.textTouch}
                                                          onPress={() => this.props.navigation.navigate('Buy')}>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // marginTop: 50,   // khoảng cách so với lề top
        borderWidth: 2,   // độ dày của viền
        borderRadius: 10, // độ tròn của viền
        // padding: 20, // paddingVertical: khoảng cách chữ so với trục ox
        borderColor: 'black',
        backgroundColor: '#009688',
        justifyContent: 'space-between',
        margin: 10,
        marginBottom: 0
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
