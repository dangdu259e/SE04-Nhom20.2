/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Login from './components/Login';
// import Splash from './components/Splash';
// import AppStackNavigator from './components/AppStackNavigator';
// import AppStackNavigator from './components/AppStackNavigator'
import App from './components/Login'
// import YourApp from './components/yourapp';
import {name as appName} from './app.json';


// AppRegistry.registerComponent(appName, () => AppStackNavigator);
AppRegistry.registerComponent(appName, () => App);
