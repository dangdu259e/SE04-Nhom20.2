import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { combineReducers } from 'redux';
// import { sessionReducer } from 'redux-react-native-session';
// const reducer = combineReducers(id_login);

var url = '172.19.200.109'  // 192.168.1.103
let baseurl = 'http://172.19.200.109:5000/bill'
export default class thanhtoan extends Component{
    static navigationOptions= {
        headerShown: false,
    }
    constructor(props) {
        super(props);
        this.state= {
            id_user_thanhtoan: this.props.navigation.getParam('id_user_TF'),
            // id_user_thanhtoan: reducer,
            name: '',
            phone: '',
            add: '',
            note: '',
            mess: '',
            id_cat: this.props.navigation.getParam('data').id,
        }

    }
    handleName=(text)=>{
        this.setState({name: text })

    }
    handlePhone=(text)=>{
        this.setState({phone: text })

    }
    handleAdd=(text)=>{
        this.setState({add: text })

    }
    handleNote=(text)=>{
        this.setState({note: text })

    }

    componentDidMount() {
        // const data = this.props.navigation.getParam('data')
        // const id = this.props.navigation.getParam('id')
        this.setState({
            // id_cat: data.id,
            // id_user: id
        })
    }

    payment = () => {

        var formdata = new FormData();
        // form.append('id', this.state.id)
        formdata.append('name', this.state.name)
        formdata.append('phone', this.state.phone)
        formdata.append('add', this.state.add)
        formdata.append('note', this.state.note)
        formdata.append('id_user', this.state.id_user_thanhtoan)
        formdata.append('id_cat', this.state.id_cat)

        fetch(baseurl, {
            method: 'POST',
            body: formdata
        }).then((response) => response.json())
            .then((json) => {
                // return json.movies;
                if (json.status == '200') {
                    this.setState({
                        mess: 'ok',
                    })
                } else if (json.status === 'not full') {
                    Alert.alert("please fill all")
                } else {
                    this.setState({
                        mess: 'not ok'
                    })
                }
                console.log('done!!!!!!!!!!!!!!!!!')
            })
            .catch((error) => {
                console.error(error);
            });
        // console.log(this.state.id_user)
        // console.log(this.state.id_cat)
        console.log(this.state.id_user_thanhtoan)

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
                    <Text style={styles.header}>Thông tin thanh toán{this.state.id_cat}-{this.state.id_user}</Text>
                    <Text>{this.state.id_user_thanhtoan}</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Devider style={styles.devidertop}/>
                </View>
                <View style={styles.body}>
                    <Text>Họ và tên: {this.state.id_cat}</Text>
                    <TextInput
                        placeholder={"Fill here"}
                        onChangeText={this.handleName}
                        value={this.state.name}>
                    </TextInput>
                    <Text>Số điện thoại: </Text>
                    <TextInput
                        keyboardType={'phone-pad'}
                        placeholder={"Fill here"}
                        onChangeText={this.handlePhone}
                        value={this.state.phone}>
                    </TextInput>
                    <Text>Địa chỉ nhận hàng: </Text>
                    <TextInput
                        placeholder={"Fill here"}
                        onChangeText={this.handleAdd}
                        value={this.state.add}>
                    </TextInput>
                    <Text>Ghi chú </Text>
                    <TextInput
                        placeholder={"Fill here"}
                        onChangeText={this.handleNote}
                        value={this.state.note}>
                    </TextInput>
                </View>
                <View style={{alignItems:'center'}}>
                    <Devider style={styles.deviderbot}/>
                </View>
                <TouchableOpacity
                    style={{alignItems:'center', marginTop:50}}
                    // onPress={() => this.payment()}
                    onPress={() => this.payment()}
                >
                    <View style={styles.btnAccept}>
                        <Text>Xác nhận</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center',marginTop:20}} onPress={() => { this.props.navigation.goBack()}}>
                    <View >
                        <Text>Cancel</Text>
                        <Text>{this.state.mess}</Text>
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
