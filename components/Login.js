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
  TouchableWithoutFeedback, Keyboard, Alert
} from 'react-native';
import {COLOR_DARK_RED, COLOR_GRAY, COLOR_LIGHT_RED} from './myColor'
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import ListOfCats from "./ListOfCats";
import TabNav from "./TabNav";

const FBLoginButton = require('./FBLoginButton');
let formdata = new FormData();


class Login extends Component{
  static navigationOptions= {
    headerShown: false,
  }
  state= {
    email:'',
    password: '',
    baseUrl: 'http://192.168.1.10'+':5000/api/login/user/',
  }
  handleEmail=(text)=>{
    this.setState({email: text})

  }
  handlePassword=(text)=>{
    this.setState({password: text})

  }
  checkLogin =  () =>{
    formdata.append('email', this.state.email)
    formdata.append('password', this.state.password)

    fetch(this.state.baseUrl, {
      method: 'POST',
      body: formdata
    })  .then((response)=> response.json())
        .then((responseJson)=>{
          var a = responseJson.Status;
          if(a === 'Success'){
            //em nghĩ là phải delete form data ở đây mà em thử dùng thì không được ạ , lỗi ra bảo là delete is not function
            // formdata.delete('email')
            return this.props.navigation.navigate('Profile');
          }else{
            //em nghĩ là phải delete form data ở đây mà em thử dùng thì không được ạ , lỗi ra bảo là delete is not function
            // formdata.delete('email')
            Alert.alert('Tai khoan khong ton tai!');
          }
        })
        .catch((error) =>{
          console.error(error)
        })
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
                    onChangeText={this.handleEmail}
                    // onChangeText={(value)=> this.setState({email: value})}
                />
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
                                  onPress={()=> this.checkLogin()}
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
