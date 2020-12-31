import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, } from "native-base";
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';

// const dataArray = [
//     { title: "First Element", content: "Lorem ipsum dolor sit amet" },
//     { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
//     { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
// ];

export default class AccordionCustomHeaderContent extends Component {
    static navigationOptions= {
        headerShown: false,
    }
    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
            total: 0,
            number: 0,
        }
    }
    componentDidMount() {
        const data = this.props.navigation.getParam('data')
        const total = this.props.navigation.getParam('total')
        const number = this.props.navigation.getParam('number')
        this.setState({
            dataArray: this.state.dataArray.concat(data),
            total: total,
            number: number
        })
    }

    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: 'space-evenly',
                alignItems: "center",
                backgroundColor: "lavender",
                }}>
                <Text style={{ fontWeight: "bold", fontSize: 20, maxWidth: '45%'  }}>
                    Mã mặt hàng:{" "}{item.id}
                </Text>
                <Image style={{padding: 45,
                    borderRadius: 10,}} source={{uri: item.img}}/>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <View>
            <Text style={styles.box}>
                Tên: {item.name}
            </Text>
            <Text style={styles.box}>
                Giống: {item.gender}
            </Text>
            <Text style={styles.box}>
                Xuất xứ: {item.origin}
            </Text>
            <Text style={styles.box}>
                Giá: {item.price}
            </Text>
            </View>
        );
    }
    render() {
        return (
            <Container>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('Profile')}}>
                        <Ionicons name='arrow-undo' style={styles.back}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Lịch sử mua</Text>
                </View>
                {/*<Header />*/}
                <Content padder style={{ backgroundColor: "ghostwhite" }}>
                    <Accordion
                        dataArray={this.state.dataArray}
                        animation={true}
                        expanded={true}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                    <Text style={styles.detail}>
                        Mã đơn thanh toán: {this.props.navigation.getParam('id_bill')}
                    </Text>
                    <Text style={styles.detail}>
                        Số lượng: {this.state.number}
                    </Text>
                    <Text style={styles.detail}>
                        Tổng tiền: {this.state.total}
                    </Text >
                    {/*<Text>  {Moment().format('DD-MM-Y hh:mm:ss')}</Text>*/}
                    {/*<Text style={styles.detail}> Thời gian thanh toán: {Moment().format('DD-MM-Y hh:mm:ss')}</Text>*/}
                    <Text style={styles.detail}>Thời gian thanh toán: {this.props.navigation.getParam('date')}</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        fontSize: 30,
        paddingLeft: '2%',
        color: 'purple',
        paddingTop: 10,
    },
    text: {
        fontSize: 30,
        paddingLeft: '20%',
        color: 'purple',
        paddingTop: 10,
    },
    detail: {
        backgroundColor: "ghostwhite",
        padding: 10,
        fontStyle: "italic",
        fontSize: 17,
    },
    box: {
        backgroundColor: "ghostwhite",
        padding: 10,
        fontStyle: "italic",
        fontWeight: 'bold',
    }
})
