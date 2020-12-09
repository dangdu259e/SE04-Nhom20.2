
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
            <View style={{backgroundColor: 'ghostwhite'}} >
                <View>
                    <Text style={styles.text_header}>
                        The most loved cats
                    </Text>
                </View>
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
