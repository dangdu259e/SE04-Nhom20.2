import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View, Image, Alert} from 'react-native';

import Swipeout from 'react-native-swipeout';
import flatListData from '../AllOfCatsDatas'

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null  // luu lai key cua hang muon xoa
        }
    }
    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({activeRowKey: this.props.item.key});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        //Refresh FlatList !
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }},
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'

                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSetting}>
                <View style={{flex: 1, flexDirection: 'column'}} >
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'mediumseagreen'}}>
                        <Image source={{uri: this.props.item.img}} style={{width: 100, height: 100, margin: 5}}/>
                        <View style={{flex: 1, flexDirection:'column', height: 100}}>
                            <Text style={styles.flatListItem}>{this.props.item.key}</Text>
                            {/*<Text style={styles.flatListItem}>{this.props.item.dsc}</Text>*/}
                        </View>
                    </View>
                    <View style={{height:1, backgroundColor:'white'}}/>
                </View>
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

var url = 'http://192.168.1.104:5000/getall'
export default class cart extends Component{
    constructor() {
        super();
        this.state= ({
            data: [],
            deletedRowKey: null,
        });
    }
    refreshFlatList = (deletedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
    }
    componentDidMount() {
        fetch('http://192.168.1.104:5000/getall')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data: json
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <FlatList data={flatListData}
                      renderItem={({ item, index }) => {
                          // <Text>{item.key}</Text>
                          return (
                          <FlatListItem item={item} index={index} parentFlatList={this}/>
                          )
                      }
                      }
            />
        );
    }
}
