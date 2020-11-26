import Login from './Login'
import Splash from './Splash'
// import { NavigationContainer  } from 'react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator= createStackNavigator({
    //screen
    Splash:{
        screen: Splash
    },
    Login:{
        screen: Login
    }
},{
    //setting
    initialRouteName: 'Splash'
    }
)
export  default createAppContainer (AppNavigator)
