/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/AppStackNavigator'
// import App from './components/Login'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
