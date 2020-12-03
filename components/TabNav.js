import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Button } from 'native-base'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import CustomHeader from './CustomHeader'

class HomeScreen extends React.Component {
    static navigationOptions= {
        headerShown: false,
    }
    onPressButton() {
        this.props.navigate('HomeDetails')
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <CustomHeader/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Home!</Text>
                    <Button style={{marginLeft: 110}} onPress={() => {this.props.navigation.navigate('HomeDetails')}}>
                        <Text>
                            Go to home details
                        </Text>
                    </Button>
                </View>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <CustomHeader/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Setting!</Text>
                    <TouchableOpacity style={{marginLeft: 110}}>
                        <Text>
                            Go to home screen
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class HomeDetails extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <CustomHeader/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Setting!</Text>
                    {/*<Button style={{marginLeft: 110}}>*/}
                    {/*    <Text>*/}
                    {/*        Go to home details*/}
                    {/*    </Text>*/}
                    {/*</Button>*/}
                </View>
            </View>
        );
    }
}

class SettingDetails extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <CustomHeader/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Setting!</Text>
                    <TouchableOpacity style={{marginLeft: 110}}>
                        <Text>
                            Go to setting details
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const navOptionHandler = (navigation) => ({
    header: null
})

const HomeStack = createStackNavigator({
    HomeScreen: {screen: HomeScreen, navigationOptions: navOptionHandler},
    HomeDetails: {screen: HomeDetails, navigationOptions: navOptionHandler}
})

const SettingStack = createStackNavigator({
    SettingScreen: {screen: SettingsScreen, navigationOptions: navOptionHandler},
    SettingDetails: {screen: SettingDetails, navigationOptions: navOptionHandler}
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingStack,
});

export default createAppContainer(TabNavigator);
