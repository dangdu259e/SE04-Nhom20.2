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
import {COLOR_DARK_RED, COLOR_GRAY, COLOR_LIGHT_RED, backco} from './myColor'
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


import Cat from './ListOfCats';
import CatDetails from './CatDetails';
import TFile from './TFile';
import thanhtoan from './thanhtoan';
import hoadon from './hoadon';
import ListOfCats from "./ListOfCats";
import ForgotPassword from "./ForgotPassword";
import CreateAccount from "./CreateAccount";
import ResetPassword from "./ResetPassword";
import {url_login} from "../URL-config";

import TabNav from "./TabNav";

const FBLoginButton = require('./FBLoginButton');

class Login extends Component{
  static navigationOptions= {
    headerShown: false,
  }
  constructor(props) {
    super(props);
    this.state= {
      stt: ['abc'],
      id_login: '',
      email : '',
      password : '',
      status: '',
      kq: 'KET QUA',
    }
  }
  handleEmail=(text)=>{
    this.setState({email: text})
  }
  handlePassword=(text)=>{
    this.setState({password: text})
  }

  checkLogin = () =>{
    if(this.state.email == '' && this.state.email==''){
      alert('Mời bạn nhập đầy đủ Email và Password')
    }else {
      let formdata = new FormData();
      formdata.append('email', this.state.email);
      formdata.append('password', this.state.password);
      console.log(formdata)

      fetch(url_login, {
        method: 'POST',
        body: formdata
      }).then((response) => response.json())
          .then((responseJson) => {
            var a = responseJson.Status;
            console.log('status: ' + a)
            if (a === 'Success') {
              const b = responseJson.id;
              this.setState({id_login: b});
              console.log('Login thành công: ' + 'email: ' + this.state.email + "/" + "password: " + this.state.password);
              return this.props.navigation.navigate('Profile', {id_login: this.state.id_login});
            } else {
              console.log('Login khong thanh cong: ' + 'email: ' + this.state.email + "/" + "password: " + this.state.password);
              Alert.alert('Tài khoản hoặc mật khẩu của bạn chưa chính xác');
            }
          })
          .catch((error) => {
            console.error(error)
          })
    }
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
                    value={this.state.email}
                />
              </View>

              <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    placeholder={"Enter your password"}
                    onChangeText={this.handlePassword}
                    value={this.state.password}
                />
              </View>

              <View>
                <TouchableOpacity style={styles.loginButon}
                    title="Login"
                    onPress={() => {this.checkLogin()}}
                >
                  <Text style={styles.loginButtonTitle}>Login </Text>
                </TouchableOpacity>
              </View>

              <Devider style={styles.devider}>
              </Devider>
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <FBLoginButton />
              </View>
              <View style={{flex: 1, flexDirection:'row', marginTop:20}}>
                <TouchableOpacity
                    style={styles.btnforgotPassword}
                    onPress={()=> this.props.navigation.navigate('ForgotPassword')}
                >
                    <Text>Forgot password </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btncreateAccount}
                    onPress={()=> this.props.navigation.navigate('CreateAccount')}

                >
                    <Text>Create Account </Text>
                </TouchableOpacity>
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
        screen: Cat,
        navigationOptions: { headerShown: false}
      },
      CatDetail : CatDetails,
      Buy: TFile,
      Thanhtoan: thanhtoan,
      Hoadon: hoadon,
      ForgotPassword:{
        screen: ForgotPassword,
        navigationOptions: {headerShown: false}
      },
      ResetPassword:{
        screen: ResetPassword,
        navigationOptions: {headerShown: false}
      },
      CreateAccount:{
        screen: CreateAccount,
        navigationOptions: {headerShown: false}
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
    backgroundColor: backco,

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
    marginTop:15,
    color: 'black',
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
    textAlign: 'center',
    backgroundColor: COLOR_LIGHT_RED,
  },
  loginButtonTitle:{
    fontSize: 18,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent:'center',
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
  btnforgotPassword:{
    marginRight: 34,
    padding: 1,
  },
  btncreateAccount:{
    marginLeft: 34,
    padding: 1,

  }
});
// AppRegistry.registerComponent('Login', () => Login)
