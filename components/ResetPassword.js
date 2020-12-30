import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLOR_DARK_RED} from './myColor';
import {IPV4} from '../config';

var baseUrl = 'http://'+IPV4+':5000/api/reset/password-account';


export default class ForgotPassword extends Component{
    static navigationOptions= {
        headerShown: false,
    }
    constructor(props) {
        super(props);
        this.state= {
            password:'',
            confirmpassword: '',
            idaccount: this.props.navigation.getParam('id')
        }
    }
    handlePassword= (text)=>{
        this.setState({password: text})
    }
    handleConfirmPassword= (text)=>{
        this.setState({confirmpassword: text})
    }
    saveNewPass(){
        if(this.state.password == this.state.confirmpassword ){
            let formdata = new FormData();
            let fone = this.state.phone;
            fone = fone.toString()
            formdata.append('id', this.state.idaccount);
            formdata.append('password', this.state.password);
            Alert.alert(
                "Xác nhận",
                "Xác nhận mật khẩu chính xác",
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
                                    if (a == 'Success') {
                                        return this.props.navigation.navigate('Home');
                                    } else {
                                        Alert.alert('Đã sảy ra lỗi Server, quý khách vui lòng thử lại');
                                    }
                                })
                                .catch((error) => {
                                    console.error(error)
                                })
                    }
                ],
                {cancelable: false}
            );
        }else{
            alert('Password và Confirm Password chưa trùng khớp với nhau')
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
                    <Text style={{fontStyle:'italic'}}>Mời bạn mật khẩu mới</Text>
                </View>

                <View style={styles.body}>
                    <Text>New password: </Text>
                    <TextInput
                        placeholder={"Fill here"}
                        onChangeText={this.handlePassword}

                    />

                    <Text>Confirm new password: </Text>
                    <TextInput
                        placeholder={"Fill here"}
                        onChangeText={this.handleConfirmPassword}

                    />
                </View>
                <View style={{alignItems:'center'}}>
                    <Devider style={styles.deviderbot}/>
                </View>
                <TouchableOpacity
                    style={{alignItems:'center', marginTop:50}}
                    onPress={()=>{this.saveNewPass()}}
                >
                    <View style={styles.btnAccept}>
                        <Text style={{fontSize:17}}>Xác nhận</Text>
                        <Text>{this.state.idaccount}</Text>
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
