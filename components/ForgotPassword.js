import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLOR_DARK_RED} from './myColor';
import {IPV4} from '../config';

let baseUrl = 'http://'+IPV4+':5000/api/check/account/';

// let baseUrl = 'http://192.168.1.10'+':5000/api/check/account/';

export default class ForgotPassword extends Component{
    static navigationOptions= {
        headerShown: false,
    }
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            phone: '',
            idaccount:''
        }

    }
    handleEmail= (text)=>{
        this.setState({email: text})

    }
    handlePhone=(text)=>{
        this.setState({phone: text})

    }

    checkAccount =  () =>{
        if(this.state.email==''){
            alert('Mời bạn nhập vào email')
        }else if (this.state.phone==''){
            alert('Mời bạn nhập vào số điện thoại')
        }else {
            let formdata = new FormData();
            formdata.append('email', this.state.email);
            formdata.append('phone', this.state.phone);
            console.log(formdata)

            fetch(baseUrl, {
                method: 'POST',
                body: formdata
            }).then((response) => response.json())
                .then((responseJson) => {
                    var a = responseJson.Status;
                    var id_account = responseJson.id;
                    this.setState({idaccount: id_account})
                    console.log('status : ' + a)
                    if (a === 'Success') {
                        return this.props.navigation.navigate('ResetPassword', {id: this.state.idaccount});
                    } else {
                        Alert.alert('Tài khoản hoặc số điện thoại của bạn chưa chính xác!');
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
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
                    <Text style={styles.header}>Quên mật khẩu</Text>
                    <Text style={{fontStyle:'italic'}}>Mời bạn nhập thông tin tài khoản</Text>
                </View>

                <View style={styles.body}>
                    <Text>Email: </Text>
                    <TextInput
                        placeholder={"Fill here"}
                        onChangeText={this.handleEmail}

                    >
                    </TextInput>
                    <Text>Số điện thoại: </Text>
                    <TextInput
                        keyboardType={'phone-pad'}
                        placeholder={"Fill here"}
                        onChangeText={this.handlePhone}/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Devider style={styles.deviderbot}/>
                </View>
                <TouchableOpacity
                    style={{alignItems:'center', marginTop:50}}
                    onPress={()=>{this.checkAccount()}}
                >
                    <View style={styles.btnAccept}>
                        <Text>Xác nhận</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center',marginTop:20}} onPress={() => { this.props.navigation.goBack()}}>
                    <View >
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
