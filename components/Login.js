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
import { NetworkInfo } from "react-native-network-info";

import {
  StyleSheet,
  View,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback, Keyboard,
  Alert,
} from 'react-native';
import {COLOR_DARK_RED, COLOR_GRAY, COLOR_LIGHT_RED} from './myColor'
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import ListOfCats from "./ListOfCats";
import TabNav from "./TabNav";

const FBLoginButton = require('./FBLoginButton');
// const ipv4Address = await NetworkInfo.getIPV4Address();

class Login extends Component{
  static navigationOptions= {
    headerShown: false,
  }
  state= {
    email : '',
    password : '',
    status: '',
    // baseUrl: ipv4Address + ':5000/api/login/user/'
    baseUrl: '192.168.1.7' + ':5000/api/login/user/'
  }
  handleEmail= (text)=>{
    this.setState({email: text})

  }
  handlePassword= (text)=>{
    this.setState({password: text})

  }
  login = async (email, password) => {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    let res = await fetch(this.state.baseUrl,{
      method: 'POST',
      body: formData,})
        .then((response) => response.json())
        //Then with the data from the response in JSON...
        .then((data) => {
          console.log('Success:', data);
          // this.setState({
          //   status: data.get("Status")
          // })
        })
        //Then with the error genereted...
        .catch((error) => {
          console.error('Error:', error);
        });
    // () => this.props.navigation.navigate('Profile')
    // alert('email: ' + this.state.email + ' password: ' + this.state.password)
    // let responseJson = await res.json();
    // alert("here")
    // if (responseJson.get('Status') == 'Success') {
    //   alert('Successful');
    // }else{
    //   alert("Invalid")
    // }
  }

  render(){
    const Devider = (props) =>{
      return <View {...props}>
        <View style={styles.line}/>
        <Text style={styles.textOr}>OR</Text>
        <View style={styles.line}/>
      </View>
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} headerMode={'none'}>
          <View style={styles.container}>

            <View style={styles.up}>
              <Animated.Image source={require("../images/logocat.png")}
                     style={styles.logo}/>
              <Text style={styles.title}>
                Please Login
              </Text>
            </View>

            <View style={styles.down}>
              <View style={styles.textInputContainer}>
                  <TextInput
                      style={styles.textInput}
                      textContentType={'emailAddress'}
                      keyboardType={'email-address'}
                      placeholder={"Enter your email"}
                      onChangeText={this.handleEmail}>
                  </TextInput>
              </View>

              <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    placeholder={"Enter your password"}
                    onChangeText={this.handlePassword}
                />
              </View>

              <View>
                <TouchableOpacity style={styles.loginButon}
                    title="Login"
                    // onPress={() => this.props.navigation.navigate('Profile')}
                    onPress={
                      // () => this.login(this.state.email, this.state.password)
                      // () =>alert("xin chao "+ this.state.email +"----"+this.state.password)
                      () =>alert(this.state.status)
                      // ()=> this.login(this.state.email, this.state.password)
                    }
                >
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
      Home: {
        screen: Login,
        navigationOptions: { headerShown: false}
      },
      Profile: {
        screen: ListOfCats,
        navigationOptions: { headerShown: false}
      }
    },
    {
      initialRouteName: "Home",
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component{
  render(){
    return <AppContainer/>
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
