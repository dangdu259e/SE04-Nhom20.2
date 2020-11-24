/**
 * Sample React Native Login
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// npx react-native init AwesomeProject
// npx react-native start
//  npx react-native run-android

//https://vntalking.com/react-native-phan-biet-props-va-state-don-gian-de-hieu.html
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Animated,
  Text,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback, Keyboard, AppRegistry,

} from 'react-native';
import {LoginButton} from 'react-native-fbsdk'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {COLOR_DARK_RED, COLOR_GRAY, COLOR_LIGHT_RED} from './myColor'
import {Button, Image} from 'react-native-elements';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { NavigationContainer } from 'react-navigation';
import Details from './Details';
import TestDrawer from './TestDrawer';

const FBLoginButton = require('./FBLoginButton');

class Login extends Component{
  static navigatiOptions= {
    header: null,
  }
  render(){
    const Devider = (props) =>{
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOr}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} headerMode={'none'}>
          <View style={styles.container}>

            <View style={styles.up}>
              <Animated.Image source={require("../images/logocat.png")}
                     style={styles.logo}/>
              <Text style={styles.title}>
                Đăng nhập
              </Text>
            </View>

            <View style={styles.down}>
              <View style={styles.textInputContainer}>
                  <TextInput
                      style={styles.textInput}
                      textContentType={'emailAddress'}
                      keyboardType={'email-address'}
                      placeholder={"Enter your email"}>
                  </TextInput>
              </View>

              <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    placeholder={"Enter your password"}
                />
              </View>

              <View>
                <TouchableOpacity style={styles.loginButon}
                    title="Login"
                    onPress={() => this.props.navigation.navigate('DetailsPage')}>
                  <Text style={styles.loginButtonTitle}>Login</Text>
                </TouchableOpacity>
              </View>

              <Devider style={styles.devider}>
              </Devider>
              <View>
                <FBLoginButton />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

    )
}}
const AppNavigator= createStackNavigator(
    {
      LoginPage: Login,
      DetailsPage: TestDrawer,
    },
    {
      initialRouteName: "LoginPage",
      headerMode:'none',
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component{
  render(){
    return <AppContainer></AppContainer>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLOR_DARK_RED,

  },
  up:{
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: "red",
    alignItems: 'center'
  },
  down:{
    flex:6,
    flexDirection: 'column',
    // backgroundColor: "green",
    justifyContent:'flex-start',
    alignItems:'center',
    color:'green'
  },
  title:{
    color: 'white',
    textAlign: 'center',
    width: 400,
    fontSize: 28,
  },
  textInputContainer:{
    paddingHorizontal:10,
    backgroundColor: COLOR_GRAY,
    marginBottom: 5,
    borderRadius:6,
  },
  textInput:{
    width: 280,
    height:45,
  },
  loginButon:{
    width:300,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_LIGHT_RED,
  },
  loginButtonTitle:{
    fontSize: 18,
    color: 'white'
  },
  facebookButton:{
    width: 300,
    height: 45,
    borderRadius:6,
    justifyContent: 'center'

  },
  line:{
    height: 2,
    flex: 2,
    backgroundColor: 'black'
  },
  textOr:{
    flex:1,
    textAlign:'center',
  },
  devider:{
    flexDirection: 'row',
    height:40,
    width:298,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 120/2,
    // color: 'green',
    // backgroundColor: 'blue'
  },
  loginfb:{
    width: 100,
    height: 100,
    fontSize: 20,
  },

});
// AppRegistry.registerComponent('Login', () => Login)
