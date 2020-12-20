// import React from 'react'
// import Swipeable from 'react-native-gesture-handler/Swipeable'
//
// import {
//     SafeAreaView,
//     StyleSheet,
//     View,
//     Text,
//     StatusBar,
//     FlatList,
//     Animated
// } from 'react-native'
//
// const mockDataList = [
//     { id: '1', text: 'Swipe me left!' },
//     { id: '2', text: 'Swipe me right!' },
//     { id: '3', text: 'Try swiping in both directions' }
// ]
//
// const ListItem = ({ text }) => (
//     // renderLeftActions={LeftActions}
//     <Swipeable renderRightActions={RightActions}>
//         {/*... Rest of the code remains same*/}
//         <View style={{ paddingVertical: 20 }}>
//                 <Text style={{ fontSize: 24, paddingHorizontal: 10 }}>{text}</Text>
//         </View>
//     </Swipeable>
// )
//
// const LeftActions = () => {
//     return (
//         <View
//             style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
//             <Text
//                 style={{
//                     color: 'white',
//                     paddingHorizontal: 10,
//                     fontWeight: '600'
//                 }}>
//                 Left Action
//             </Text>
//         </View>
//     )
// }
//
// const RightActions = (progress, dragX) => {
//     const scale = dragX.interpolate({
//         inputRange: [-100, 0],
//         outputRange: [0.7, 0]
//     })
//     return (
//         <>
//             <View style={{ backgroundColor: 'red', justifyContent: 'center' }}>
//                 <Animated.Text
//                     style={{
//                         color: 'white',
//                         paddingHorizontal: 10,
//                         fontWeight: '600',
//                         transform: [{ scale }]
//                     }}>
//                     Delete
//                 </Animated.Text>
//             </View>
//             <View style={{ backgroundColor: 'green', justifyContent: 'center' }}>
//                 <Animated.Text
//                     style={{
//                         color: 'white',
//                         paddingHorizontal: 10,
//                         fontWeight: '600',
//                         transform: [{ scale }]
//                     }}>
//                     Archive
//                 </Animated.Text>
//             </View>
//         </>
//     )
// }
//
// const Separator = () => <View style={styles.itemSeparator} />
//
//
// // const ListItem = ({ text }) => (
// //     <View style={{ paddingVertical: 20 }}>
// //         <Text style={{ fontSize: 24 }}>{text}</Text>
// //     </View>
// // )
//
// const App = () => {
//     return (
//         <>
//             <StatusBar barStyle='dark-content' />
//             <SafeAreaView style={styles.container}>
//                 <FlatList
//                     data={mockDataList}
//                     keyExtractor={item => item.id}
//                     renderItem={({ item }) => <ListItem {...item} />}
//                     ItemSeparatorComponent={() => <Separator />}
//                 />
//             </SafeAreaView>
//         </>
//     )
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     itemSeparator: {
//         flex: 1,
//         height: 1,
//         backgroundColor: '#444'
//     }
// })
//
// export default App


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

export default class cart extends Component{
    constructor() {
        super();
        this.state= ({
            data: [],
            deletedRowKey: null,
        });
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
    refreshFlatList = (deletedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
    }
    // componentDidMount() {
    //     fetch('http://192.168.1.104:5000/getall')
    //         .then((response) => response.json())
    //         .then((json) => {
    //             this.setState({
    //                 data: json
    //             })
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    render() {
        return (
            <FlatList data={this.state.data}
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
