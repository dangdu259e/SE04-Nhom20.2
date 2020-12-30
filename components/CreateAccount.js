import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLOR_DARK_RED} from './myColor';
import {IPV4} from '../config';
// let baseUrl = ipv4+':5000/api/create/user';
// let baseUrl = 'http://192.168.1.10:5000/api/create/user/';
var baseUrl = 'http://'+IPV4+':5000/api/create/user/';

export default class ForgotPassword extends Component{
    static navigationOptions= {
        headerShown: false,
    }
    constructor(props) {
        super(props);
        this.state= {
            email:'',
            password: '',
            name: '',
            phone: '',
        }
    }

    handleEmail=(text)=>{
        this.setState({email: text})
    }
    handlePassword=(text)=>{
        this.setState({password: text})
    }
    handleName=(text)=>{
        this.setState({name: text})
    }
    handlePhone=(text)=>{
        this.setState({phone: text})
    }
    createAccount =  () => {
        if(this.state.email==''){
            alert('Bạn cần phải nhập email');
        }else if(this.state.password==''){
            alert('Bạn cần phải nhập password');
        }else if(this.state.name == ''){
            alert('Bạn cần phải nhập tên');
        }else if(this.state.phone==''){
            alert('Bạn cần phải nhập số điện thoại');
        }else {
            let formdata = new FormData();
            let fone = this.state.phone;
            fone = fone.toString()
            formdata.append('email', this.state.email);
            formdata.append('password', this.state.password);
            formdata.append('name', this.state.name);
            formdata.append('phone', fone);
            Alert.alert(
                "Xác nhận",
                "Xác nhận thông tin tài khoản",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "OK", onPress: () =>
                            fetch(baseUrl, {
                                method: 'POST',
                                body: formdata,
                            }).then((response) => response.json())
                                .then((responseJson) => {
                                    var a = responseJson.Status;
                                    console.log('status : ' + a)
                                    if (a === 'Success') {
                                        return this.props.navigation.navigate('Home');
                                    } else {
                                        Alert.alert('Tài khoản hoặc số điện thoại của bạn chưa chính xác!');
                                    }
                                })
                                .catch((error) => {
                                    console.error(error)
                                })
                    }
                ],
                {cancelable: false}
            );
        }
    }

    render() {
        const Devider = (props) =>{
            return <View {...props}>
                <View style={styles.line}/>
            </View>
        }
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.header}>Tạo Tài Khoản</Text>
                    <Text style={{fontStyle:'italic'}}>Mời bạn nhập thông tin</Text>
                </View>

                <View style={styles.body}>
                    <Text>Username: </Text>
                    <TextInput
                        placeholder={"Fill here"}
                        onChangeText={this.handleEmail}
                        value={this.state.email}
                    >
                    </TextInput>

                    <Text>Password: </Text>
                    <TextInput
                        placeholder={"Fill here"}
                        onChangeText={this.handlePassword}
                        value={this.state.password}

                    />

                    <Text>Họ và tên: </Text>
                    <TextInput
                        placeholder={"Fill here"}
                        onChangeText={this.handleName}
                        value={this.state.name}

                    />

                    <Text>Số điện thoại: </Text>
                    <TextInput
                        keyboardType={'phone-pad'}
                        placeholder={"Fill here"}
                        onChangeText={this.handlePhone}
                        value={this.state.phone}

                    />
                </View>

                <View style={{alignItems:'center'}}>
                    <Devider style={styles.deviderbot}></Devider>
                </View>

                <TouchableOpacity
                    style={{alignItems:'center', marginTop:50}}
                    onPress={()=>this.createAccount()}>

                    <View style={styles.btnAccept}>
                        <Text style={{fontSize:17}}> Xác nhận </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{alignItems:'center',marginTop:20}}
                    onPress={() => { this.props.navigation.goBack()}}>
                    <View>
                        <Text>Cancel</Text>
                    </View>

                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    header:{
        fontSize: 28,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:20,
    },

    body: {
        marginTop: 40,
        marginLeft: 20
    },
    btnAccept:{
        backgroundColor: 'green',
        padding: 20,
        fontSize: 18,
        width: '90%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    line:{
        height: 2,
        flex: 2,
        backgroundColor: 'black'
    },
    devidertop:{
        flexDirection: 'row',
        // height:0,
        marginBottom:40,
        width:298,
        alignItems: 'center',
    },
    deviderbot:{
        flexDirection: 'row',
        height:0,
        width:298,
        marginTop:60,
        alignItems: 'center',
    },
});
