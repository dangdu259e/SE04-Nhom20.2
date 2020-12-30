/**
 *
 *  THIS FILE IS FOR CHECK THE ONPRESS() IF IT WORKS
 * @format
 * @flow strict-local
 */
import React from 'react'
import {View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput, Alert} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';


let a = []
let total_ = {'total': 0, 'number': 0}
export default class TFile extends React.Component{
    static navigationOptions= {
        headerShown: false,
    }
    constructor(props) {
        super(props);
        this.state= {
            data: [],
            number: 1,
            amount: 1,
            total: 0,
            id_user_TF: this.props.navigation.getParam('id_catDetail'),
        }

    }


    addNumber (){
        this.setState({
            number: this.state.number + 1,
            total: (this.state.number+1) * this.state.amount
        });
    }


    removeNumber (){

        if(this.state.number > 1){
            this.setState({
                number: this.state.number - 1,
                total: (this.state.number-1) * this.state.amount,
            });
            total_.total = this.state.total;
            total_.number = this.state.number;
        }else{
            Alert.alert(
                "Warning !!!",
                "Go back to cancel",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => { this.props.navigation.goBack()}}
                ],
                { cancelable: false }
            );
        }
    }

    thanhtoan() {
        Alert.alert(
            "",
            "Xác nhận thanh toán?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () =>
                        this.props.navigation.navigate('Thanhtoan',
                            {data: this.props.navigation.getParam('data'),
                                id_user_TF: this.state.id_user_TF, total: this.state.total, number: this.state.number,})}
            ],
            { cancelable: false }
        );
    }

    componentDidMount() {
        const data = this.props.navigation.getParam('data');
        a = this.state.data.concat(data)
        this.setState({
            data: a,
            amount : data.price,
            total: data.price,

        })
    }

    render() {
        return (

            <View style={{backgroundColor: 'ghostwhite', flex: 1}} >
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => { this.props.navigation.goBack()}}>
                    <Ionicons name='arrow-undo' style={styles.back}/>
                    {/*<Text style={styles.back}>Back</Text>*/}
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text_header}>
                        ...Thanh toán...
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>
                            <View style={styles.container}>
                                <View>
                                    {/*// receivedValue: this.receivedValue});}}>*/}
                                    <Image style={styles.image} source={{uri: item.img}}/>
                                    <View style={styles.info}>
                                        <View style={styles.left}>
                                            <Image style={styles.imageLeft} source={{uri: item.img}}/>
                                            <View  style={{flexDirection: 'column'}}>
                                                <Text style={styles.min_text}>Tên: {item.name}</Text>
                                                <Text style={styles.min_text}>Mã: {item.id}</Text>
                                                <Text style={styles.min_text}>Nguồn gốc: {item.origin}</Text>
                                                <Text style={styles.min_text}>Giống: {item.gender}</Text>
                                                <Text style={styles.min_text}>Giá: {item.price}</Text>
                                            </View>
                                        </View>
                                        {/*<View>*/}
                                        {/*    /!*onPress={this.addThisProductToCart.bind(this)}>*!/*/}
                                        {/*    /!*<TouchableOpacity style={styles.textTouch}>*!/*/}
                                        {/*    /!*    /!* onPress={() => {this.props.navigation.navigate('Buy', {data: item});}}>*!/*!/*/}
                                        {/*    /!*    <Text style={styles.min_text}>Buy</Text>*!/*/}
                                        {/*    /!*</TouchableOpacity>*!/*/}
                                        {/*</View>*/}
                                    </View>
                                </View>
                            </View>
                        }
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                    <TouchableOpacity style={{ marginRight: 10}} onPress={()=>this.addNumber()}>
                        <Ionicons name="add-circle-sharp" style={styles.cart1}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', padding: 10,}}>
                    <Text placeholder={"Number"} style={styles.number}>{this.state.number}</Text>
                    </View>
                    <TouchableOpacity style={{ marginLeft:10}} onPress={()=> this.removeNumber()}>
                        <Ionicons name="remove-circle-sharp" style={styles.cart2}/>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 17,}}>
                    <Text style={{fontSize:18}}>SỐ LƯỢNG: {this.state.number}</Text>
                    <Text style={{fontSize:18}}>TỔNG TIỀN: {this.state.total} </Text>
                </View>
                <TouchableOpacity style={{alignItems:'center', minHeight:50}} onPress={() => this.thanhtoan()}>
                    <Text style={styles.xacnhan}>XÁC NHẬN THANH TOÁN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        borderWidth: 2,   // độ dày của viền
        borderRadius: 10, // độ tròn của viền
        // paddingVertical: khoảng cách chữ so với trục ox
        borderColor: 'black',
        backgroundColor: 'lavender',
        justifyContent: 'center',
        margin: 10,
        // marginBottom: 0,
    },
    text_header: {
        // paddingLeft: 95,
        marginLeft: 95,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        color: 'lightcoral',
    },
    image: {
        padding: 100,
        justifyContent: 'center',
        // flex: 7,
        borderRadius: 10,
    },
    info: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
    },
    left: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageLeft: {
        padding: 30,
        justifyContent: 'center',
        borderRadius: 10,
    },
    min_text: {
        padding: 5,
        fontSize: 20,
        fontWeight: "bold",
        color: "#009688"
    },
    textTouch: {
        padding:10,
        borderWidth: 2,
        borderRadius: 10,
    },
    cart1: {
        fontSize: 45,
        // paddingLeft: '20%',
        // paddingRight: '5%',
        color: '#009688'
    },
    cart2: {
        fontSize: 45,
        // paddingRight: '20%',
        // paddingLeft: '5%',
        color: '#009688'
    },
    back: {
        fontSize: 30,
        paddingLeft: '2%',
        paddingTop: 10,
        color: 'purple',
        // padding: 10,
    },
    number: {
        borderWidth: 1,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        fontSize:23
    },
    xacnhan: {
        backgroundColor: '#FF6699',
        width:'90%',
        textAlign:'center',
        justifyContent:'center',
        fontSize:18,
        borderRadius: 8,
        padding:10}
})
